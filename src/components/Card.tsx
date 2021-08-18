import * as React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  makeStyles,
} from '@material-ui/core';

export interface CardProps {
  colorName: string;
  color: string;
  isChoosed?: boolean;
  onClick: () => void;
}

interface CardStyle {
  color: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    '&:hover': {
      backgroundColor: theme.palette.grey.A200,
    },
  },
  focusedPaper: {
    padding: theme.spacing(2),
    margin: 'auto',
    backgroundColor: theme.palette.grey.A200,
  },
  image: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    backgroundColor: ({ color }: CardStyle) => {
      if (color === 'red') return theme.palette.secondary.main;
      if (color === 'blue') return theme.palette.primary.main;
      return theme.palette.common.black;
    },
  },
  classes: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Card: React.FC<CardProps> = ({
  colorName,
  color,
  isChoosed,
  onClick,
}: CardProps) => {
  const classes = useStyles({ color });

  return (
    <div className={classes.root}>
      <Paper
        className={isChoosed ? classes.focusedPaper : classes.paper}
        onClick={onClick}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box className={classes.image} />
          </Grid>
          <Grid item xs={8} sm>
            <Typography
              variant='body1'
              align='center'
              style={{ margin: 'auto' }}
            >
              {colorName}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Card;
