import * as React from 'react';
import { SquareType } from '../components/GameGrid';

const timeout = (delay: number) => new Promise((res) => setTimeout(res, delay));

const naive = async (
  inSq: null | [number, number],
  outSq: null | [number, number],
  grid: Array<Array<SquareType>>,
  gridChange: Array<Array<React.Dispatch<React.SetStateAction<SquareType>>>>,
) => {
  if (!(inSq && outSq && grid && gridChange)) {
    return false;
  }
  let i = inSq[0];
  while (i !== outSq[0]) {
    if (grid[i][inSq[1]] === null || grid[i][inSq[1]] === -1) {
      gridChange[i][inSq[1]](-1);
    }
    if (inSq[0] < outSq[0]) ++i;
    else --i;
    await timeout(0.15);
  }
  let j = inSq[1];
  while (j !== outSq[1]) {
    if (grid[outSq[0]][j] === null || grid[outSq[0]][j] === -1) {
      gridChange[outSq[0]][j](-1);
    }
    if (inSq[1] < outSq[1]) ++j;
    else --j;
    await timeout(0.15);
  }
  return true;
};

export default naive;
