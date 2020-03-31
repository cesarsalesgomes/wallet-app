/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios, { AxiosRequestConfig } from 'axios';
import Grid from '@material-ui/core/Grid';
import { Typography, CircularProgress, Divider } from '@material-ui/core';

import { ApplicationState } from '../../store';
import { loadRequest, loadSuccess, loadFailure } from '../../store/stocks/actions';
import { Stock } from '../../store/stocks/types';
import Constants from '../../constants';
import dashboardStyles from './dashboard.styles';
import StockCard from '../../components/stock-card/stock-card.component';

const Dashboard: React.FC = () => {
  const classes = dashboardStyles();
  const dispatch = useDispatch();
  const { login, stocks } = useSelector((state: ApplicationState) => state);


  useEffect(() => {
    dispatch(loadRequest());

    const fetchData = async () => {
      try {
        const config: AxiosRequestConfig = {
          headers: {
            Authorization: `Bearer ${login.data?.token}`
          }
        };

        const data = (await axios.get<Stock[]>(`${process.env.REACT_APP_WALLET_API}${Constants.USER_STOCKS_API_ROUTE}`, config))?.data;

        dispatch(loadSuccess(data));
      } catch (error) {
        dispatch(loadFailure());
      }
    };

    fetchData();
  }, [dispatch, login.data]);

  return (
    <Grid container className={classes.root}>
      {stocks.loading ? (
        <Grid container justify="center">
          <CircularProgress />
        </Grid>
      ) : (
          <Grid item>
            {stocks.data && stocks.data.length > 0 ? (
              <div>
                <Typography variant="h4" component="h2" color="textPrimary">
                  B3
                </Typography>
                <Divider className={classes.divider} />
                <Grid container justify="flex-start" spacing={3}>
                  {stocks.data?.map((value, index) => (
                    <Grid key={index} item>
                      <StockCard {...value} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ) : (
                <Grid container justify="center">
                  <Typography variant="h6">
                    NENHUMA AÇÃO CADASTRADA
                  </Typography>
                </Grid>
              )}
          </Grid>
        )}
    </Grid>
  );
};

export default Dashboard;
