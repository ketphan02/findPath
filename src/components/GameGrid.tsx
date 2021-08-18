import * as React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import Square, { IOState } from './Square';

// import naiveApproach from '../algorithms/test';
import dfsApproach from '../algorithms/dfs';

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

const GameGrid = ({ length, turn }: GridProps) => {
  const classes = useStyles();

  // Starting points
  const inSq: IOState = { loc: React.useRef(null), color: React.useRef(null) };
  const outSq: IOState = { loc: React.useRef(null), color: React.useRef(null) };

  // Grid
  const grid = Array.from({ length }, () => Array.from({ length }, () => React.useState<SquareType>(null)));
  const gridValues = grid.map((row) => row.map((val) => val[0]));
  const gridChanges = grid.map((row) => row.map((val) => val[1]));

  const resetGrid = async () => {
    gridChanges.forEach((row, i) => row.forEach((val, j) => {
      if (gridValues[i][j] === -1) {
        val(null);
      }
    }));
  };

  React.useEffect(() => {
    resetGrid();
  }, [inSq.loc.current, outSq.loc.current]);

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
          onClick={async () => {
            await resetGrid();
            if (!(await dfsApproach(inSq.loc.current, outSq.loc.current, gridValues, gridChanges))) {
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
