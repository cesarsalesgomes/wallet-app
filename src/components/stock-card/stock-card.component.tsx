import React from 'react';
import {
  Typography, Card, CardContent, Grid, CardActions
} from '@material-ui/core';
import stockCardStyles from './stock-card.style';
import { Stock } from '../../store/stocks/types';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const StockCard: React.FC<Stock> = ({ symbol, name, value, quantity }) => {
  const classes = stockCardStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="space-between" spacing={1}>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            {name}
          </Typography>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            <NumberFormat value={value.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'R$'} />
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="space-between">
          <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
            {symbol}
          </Typography>
          <Typography className={classes.subTitle} color="textSecondary" gutterBottom>
            {quantity}
          </Typography>
        </Grid>
      </CardActions>
    </Card>
  );
};

StockCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default StockCard;
