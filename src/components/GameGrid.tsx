import * as React from 'react';
import { makeStyles } from '@material-ui/core';

import Square from './Square';

export interface GridProps {
  length: number;
  turn: -1 | 0 | 1 | 2 ;
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
  const grids = Array.from({ length }, () => Array.from({ length }, () => React.useRef(null)));

  return (
    <div className={classes.root}>
      {grids.map((row, i: number) => (
        <div className={classes.row}>
          {row.map((entry, j: number) => (
            <Square
              length={length}
              x={i}
              y={j}
              grids={grids}
              turn={turn}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
