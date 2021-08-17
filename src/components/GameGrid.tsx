import * as React from 'react';
import { makeStyles } from '@material-ui/core';

import Square from './Square';

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
  const grid = Array.from({ length }, () => Array.from({ length }, () => React.useState<SquareType>(null)));
  const gridValues = grid.map((row) => row.map((val) => val[0]));
  const gridChanges = grid.map((row) => row.map((val) => val[1]));
  // const input = React.useRef(null);

  return (
    <div className={classes.root}>
      {grid.map((row, i: number) => (
        <div className={classes.row}>
          {row.map((_, j: number) => (
            <Square
              length={length}
              sq={gridValues[i][j]}
              changeSq={gridChanges[i][j]}
              turn={turn}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
