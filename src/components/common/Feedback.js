import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0: 'Not yet reviewed',
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 'fit-content',
  },
});

export default function Feedback({
  readOnly = true,
  value,
  updateValue = null,
}) {
  const [hover, setHover] = useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="half-rating-read"
        defaultValue={4.5}
        precision={0.5}
        value={value}
        onChange={(e, newValue) => {
          updateValue(newValue);
        }}
        onChangeActive={(e, newHover) => {
          setHover(newHover);
        }}
        readOnly={readOnly}
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
}
