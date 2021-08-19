import * as React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';

import ColorCard from './Card';
import { SquareType } from './GameGrid';
import { Algorithms } from '../pages/FindPath';

export interface MenuProps {
  card: SquareType;
  setCard: React.Dispatch<React.SetStateAction<SquareType>>;
  setAlgo: React.Dispatch<React.SetStateAction<Algorithms>>;
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
  selectAlgo: {
    marginBottom: '1rem',
    // width: '100%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
}));

const Menu: React.FC<MenuProps> = ({ card, setCard, setAlgo }: MenuProps) => {
  const classes = useStyles();

  const [pendingAlgo, setPendingAlgo] = React.useState<String | null>(null);

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

        <Grid item xs={12}>
          <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'>
                Algorithm
              </InputLabel>
              <Select
                // native
                value={pendingAlgo}
                onChange={(e) => setPendingAlgo(e.target.value as string)}
                variant='filled'
                className={classes.selectAlgo}
              >
                <MenuItem value='BFS'>
                  Breath First Sort
                </MenuItem>
                <MenuItem value='DFS'>
                  Deep First Sort
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <Button
              className={classes.btn}
              variant='contained'
              onClick={() => setAlgo(pendingAlgo as Algorithms)} // This will run the program
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
