import React from 'react';
import { SquareType } from '../components/GameGrid';

const timeout = (delay: number) => new Promise((res) => setTimeout(res, delay));

interface bestRouteProp {
  val: Array<[number, number]>;
}

const r = [1, 0, 0, -1];
const c = [0, 1, -1, 0];

const dfs = async (
  inSq: null | [number, number],
  outSq: null | [number, number],
  grid: Array<Array<SquareType>>,
  gridChange: Array<Array<React.Dispatch<React.SetStateAction<SquareType>>>>,
  route: Array<[number, number]> = [],
  bestRoute: bestRouteProp = { val: [] },
  visited: null | Array<Array<Boolean>> = null,
) => {
  if (!(inSq && outSq && grid && gridChange)) {
    return false;
  }
  if (bestRoute.val.length !== 0 && bestRoute.val.length < route.length) return null;

  const { length } = grid;
  if (!visited) {
    visited = Array.from({ length }).map(() => Array.from({ length }).map(() => false));
  }

  if (outSq[0] === inSq[0] && outSq[1] === inSq[1]) {
    if (bestRoute.val.length < route.length) {
      bestRoute.val = route;
      alert(route);
      // TO DO: highlight the route
    }
    return true;
  }
  const [x, y] = inSq;

  if (grid[x][y] === null) gridChange[x][y](-1);
  await timeout(0.1);

  for (let i = 0; i < 4; ++i) {
    const u = x + r[i];
    const v = y + c[i];
    if (u >= 0 && v >= 0 && u < grid.length && v < grid[0].length) {
      if (grid[u][v] !== -1 && grid[u][v] !== 2 && visited[u][v] === false) {
        const newVisit = [...route];
        newVisit.push([u, v]);
        visited[u][v] = true;
        await dfs([u, v], outSq, grid, gridChange, newVisit, bestRoute, visited);
        visited[u][v] = false;
      }
    }
  }
  if (grid[x][y] === -1) gridChange[x][y](null);
  await timeout(0.1);
  return true;
};

export default dfs;
