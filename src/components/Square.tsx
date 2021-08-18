import * as React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

import { SquareType } from './GameGrid';

export type IOState = {
  loc: React.MutableRefObject<null | [number, number]>;
  color: React.MutableRefObject<null | React.Dispatch<
    React.SetStateAction<SquareType>
  >>;
};

export interface SquareProps {
  length: number;
  sq: SquareType;
  changeSq: React.Dispatch<React.SetStateAction<SquareType>>;
  turn: SquareType;
  loc: [number, number];
  inSq: IOState;
  outSq: IOState;
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
  loc,
  inSq,
  outSq,
}: SquareProps) => {
  // const [x, y] = loc;
  // console.log(x, y);
  const classes = useStyles({
    length,
    sq,
    changeSq,
    turn,
    loc,
    inSq,
    outSq,
  });

  const onClickSquare = () => {
    if (sq === null || sq !== turn) {
      if (turn === 0) {
        if (inSq.color.current !== null) inSq.color.current(null);
        inSq.color.current = changeSq;
        inSq.loc.current = loc;
      } else if (turn === 1) {
        if (outSq.color.current !== null) outSq.color.current(null);
        outSq.color.current = changeSq;
        outSq.loc.current = loc;
      }
      changeSq(turn);
    } else {
      if (turn === 0 || turn === 1) {
        inSq.loc.current = null;
        inSq.color.current = null;
      }
      changeSq(null);
    }
  };

  return (
    <Paper elevation={0} className={classes.square} onClick={onClickSquare} />
  );
};

export default Square;
