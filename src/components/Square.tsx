import * as React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

export interface SquareProps {
  length: number;
  x: number;
  y: number;
  grids: Array<Array<React.MutableRefObject<number | null>>>;
  turn: -1 | 0 | 1 | 2;
}

const useStyles = makeStyles((theme) => ({
  square: {
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '0.2px',
    margin: ({ length }: SquareProps) => window.innerHeight / (length * 20),
    width: ({ length }: SquareProps) => window.innerHeight / (length * 1.3),
    height: ({ length }: SquareProps) => window.innerHeight / (length * 1.3),
    '&:hover': {
      backgroundColor: ({
        x,
        y,
        grids,
        turn,
      }: SquareProps) => {
        if (grids[x][y].current === null) {
          if (turn === 0) return theme.palette.secondary.main;
          if (turn === 1) return theme.palette.primary.main;
          return theme.palette.common.black;
        }
        if (grids[x][y].current === 0) return theme.palette.secondary.main;
        if (grids[x][y].current === 1) return theme.palette.primary.main;
        return theme.palette.common.black;
      },
    },
  },
  cur: {
    backgroundColor: theme.palette.secondary.main,
  },
  tar: {
    backgroundColor: theme.palette.primary.main,
  },
  obs: {
    backgroundColor: theme.palette.common.black,
  },
}));

const Square: React.FC<SquareProps> = ({
  length,
  x,
  y,
  grids,
  turn,
}: SquareProps) => {
  const classes = useStyles({
    length,
    x,
    y,
    grids,
    turn,
  });
  const [colorClass, setColorClass] = React.useState<string>('');

  const onClickSquare = () => {
    if (grids[x][y].current === null) {
      if (turn === 0) {
        grids[x][y].current = 0;
        setColorClass(classes.cur);
      } else if (turn === 1) {
        grids[x][y].current = 1;
        setColorClass(classes.tar);
      } else {
        grids[x][y].current = 2;
        setColorClass(classes.obs);
      }
    }
  };

  return (
    <Paper
      elevation={0}
      className={`${classes.square} ${colorClass}`}
      onClick={onClickSquare}
    />
  );
};

export default Square;
