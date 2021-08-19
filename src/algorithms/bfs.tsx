// eslint-disable-next-line max-classes-per-file
import React from 'react';
import { SquareType } from '../components/GameGrid';

class Node<T> {
  val: T;

  next: Node<T> | null;

  constructor(val: T, next: Node<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

export class Queue<T> {
  head: Node<T> | null;

  tail: Node<T> | null;

  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getHead(): Node<T> | null {
    return this.head;
  }

  getLength(): number | null {
    return this.length;
  }

  add(item: T): void {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      if (this.tail) this.tail.next = node;
      this.tail = node;
    }
    ++this.length;
  }

  peak(): T | null {
    if (this.head === null) {
      return null;
    }
    const node = this.head;
    this.head = this.head.next;

    --this.length;
    return node.val;
  }

  isEmpty(): Boolean {
    return this.head === null;
  }
}

const r = [1, 0, 0, -1];
const c = [0, 1, -1, 0];

const timeout = (delay: number) => new Promise((res) => setTimeout(res, delay));

const dfs = async (
  inSq: [number, number] | null,
  outSq: [number, number] | null,
  grid: Array<Array<SquareType>>,
  gridChange: Array<Array<React.Dispatch<React.SetStateAction<SquareType>>>>,
) => {
  if (inSq === null || outSq === null) {
    return false;
  }
  const visited = Array.from({ length: grid.length }).map(() => Array.from({ length: grid.length }).map(() => false));

  const visit: Queue<[number, number]> = new Queue();
  visit.add(inSq);

  while (!(visit.isEmpty())) {
    const peak = visit.peak();
    if (peak === null) return false;
    const [x, y] = peak;
    if (x === outSq[0] && y === outSq[1]) {
      alert('Found');
      return true;
    }
    if (grid[x][y] === null) gridChange[x][y](-1);

    for (let i = 0; i < 4; ++i) {
      const u = x + r[i];
      const v = y + c[i];
      if (u >= 0 && u < grid.length && v >= 0 && v < grid[0].length) {
        if (!visited[u][v] && grid[u][v] !== 2) {
          visit.add([u, v]);
          visited[u][v] = true;
        }
      }
    }
    if (grid[x][y] === -1) gridChange[x][y](null);
    if (visited[x][y]) await timeout(0.00001);
    visited[x][y] = false;
  }

  return true;
};

export default dfs;
