import * as React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import Square, { IOState } from './Square';

export type SquareType = null | -1 | 0 | 1 | 2;

export interface GridProps {
  length: number;
  turn: SquareType;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

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
    if (grid[i][inSq[1]] === null) {
      gridChange[i][inSq[1]](-1);
    }
    if (inSq[0] < outSq[0]) ++i;
    else --i;
    await timeout(0.15);
  }
  let j = inSq[1];
  while (j !== outSq[1]) {
    if (grid[outSq[0]][j] === null) {
      gridChange[outSq[0]][j](-1);
    }
    if (inSq[1] < outSq[1]) ++j;
    else --j;
    await timeout(0.15);
  }
  return true;
};

const GameGrid = ({ length, turn }: GridProps) => {
  const classes = useStyles();

  // Starting points
  const inSq: IOState = { loc: React.useRef(null), color: React.useRef(null) };
  const outSq: IOState = { loc: React.useRef(null), color: React.useRef(null) };

  // Grid
  const grid = Array.from({ length }, () => Array.from({ length }, () => React.useState<SquareType>(null)));
  const gridValues = grid.map((row) => row.map((val) => val[0]));
  const gridChanges = grid.map((row) => row.map((val) => val[1]));

  // Snackbar
  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      <div className={classes.root}>
        {grid.map((row, i: number) => (
          <div className={classes.row}>
            {row.map((_, j: number) => (
              <Square
                length={length}
                sq={gridValues[i][j]}
                changeSq={gridChanges[i][j]}
                turn={turn}
                loc={[i, j]}
                inSq={inSq}
                outSq={outSq}
              />
            ))}
          </div>
        ))}
      </div>
      <div>
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            if (!naive(inSq.loc.current, outSq.loc.current, gridValues, gridChanges)) {
              enqueueSnackbar('No input or output found');
            }
          }}
        >
          RUN
        </Button>
      </div>
    </>
  );
};

export default GameGrid;
