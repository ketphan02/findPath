import * as React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

import { SquareType } from './GameGrid';

export interface SquareProps {
  length: number;
  sq: SquareType;
  changeSq: React.Dispatch<React.SetStateAction<SquareType>>;
  turn: SquareType;
}

const useStyles = makeStyles((theme) => ({
  square: {
    backgroundColor: ({ sq }: SquareProps) => {
      if (sq === null) return theme.palette.background.default;
      if (sq === 0) return theme.palette.secondary.main;
      if (sq === 1) return theme.palette.primary.main;
      if (sq === 2) return theme.palette.common.black;
      return theme.palette.warning.light;
    },
    borderRadius: theme.shape.borderRadius,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '0.2px',
    margin: ({ length }: SquareProps) => window.innerHeight / (length * 20),
    width: ({ length }: SquareProps) => window.innerHeight / (length * 1.3),
    height: ({ length }: SquareProps) => window.innerHeight / (length * 1.3),
    '&:hover': {
      backgroundColor: ({ turn }: SquareProps) => {
        if (turn === 0) return theme.palette.secondary.main;
        if (turn === 1) return theme.palette.primary.main;
        return theme.palette.common.black;
      },
    },
  },
}));

const Square: React.FC<SquareProps> = ({
  length,
  sq,
  changeSq,
  turn,
}: SquareProps) => {
  const classes = useStyles({
    length,
    sq,
    changeSq,
    turn,
  });

  const onClickSquare = () => {
    if (sq === null || sq !== turn) {
      changeSq(turn);
    } else {
      changeSq(null);
    }
  };

  return (
    <Paper elevation={0} className={classes.square} onClick={onClickSquare} />
  );
};

export default Square;
