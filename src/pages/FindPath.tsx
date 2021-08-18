import * as React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import GameGrid, { SquareType } from '../components/GameGrid';
import Menu from '../components/Menu';

const useStyles = makeStyles((theme) => ({
  gamepad: {
    // backgroundColor: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    padding: theme.spacing(1),
  },
  menu: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
  },
}));

const FindPath = () => {
  const classes = useStyles();
  const [card, setCard] = React.useState<SquareType>(0);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3} className={classes.menu}>
        <Menu card={card} setCard={setCard} />
      </Grid>
      <Grid item xs={9} className={classes.gamepad}>
        <GameGrid length={20} turn={card} />
      </Grid>
    </Grid>
  );
};

export default FindPath;
