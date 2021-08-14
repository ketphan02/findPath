import * as React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

import ColorCard from './Card';

export interface MenuProps {
  card: 0 | 1 | 2 ;
  setCard: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
}

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    height: '100%',
    flexGrow: 1,
  },
  title: {
    marginTop: '1rem',
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
      </Grid>
    </Grid>
  );
};

export default Menu;
