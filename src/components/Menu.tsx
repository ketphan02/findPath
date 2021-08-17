import * as React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

import ColorCard from './Card';
import { SquareType } from './GameGrid';

export interface MenuProps {
  card: SquareType;
  setCard: React.Dispatch<React.SetStateAction<SquareType>>;
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100%',
    flexGrow: 1,
  },
  title: {
    marginTop: '1rem',
  },
  btn: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
    '&:hover': {
      // color: theme.palette.common.black,
      backgroundColor: theme.palette.warning.dark,
    },
  },
}));

const Menu: React.FC<MenuProps> = ({ card, setCard }: MenuProps) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.wrapper}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Typography
            variant='h3'
            color='textPrimary'
            align='center'
            className={classes.title}
          >
            MENU
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ColorCard
            colorName='Current position'
            color='red'
            isChoosed={card === 0}
            onClick={() => setCard(0)}
          />
          <ColorCard
            colorName='Target'
            color='blue'
            isChoosed={card === 1}
            onClick={() => setCard(1)}
          />
          <ColorCard
            colorName='Obstacles'
            color='black'
            isChoosed={card === 2}
            onClick={() => setCard(2)}
          />
        </Grid>
        {/* Create a button in the middle of the grid */}
        <Grid item xs={12}>
          <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
          >
            <Button
              className={classes.btn}
              variant='contained'
              onClick={() => setCard(-1)} // This will run the program
            >
              RUN ALGO
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Menu;
