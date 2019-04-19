import React from 'react';

import {createHistory, LocationProvider} from "@reach/router"

import AppRouter from './AppRouter';
import {ThemeProvider} from '@material-ui/styles';

import AppTheme from './AppTheme';

let history = createHistory(window)

// <Grid item xs={12}>   <Header/> </Grid>

function AppLayout(props) {

  return (
    <ThemeProvider theme={AppTheme}>
      <LocationProvider history={history}>
        <AppRouter></AppRouter>
      </LocationProvider>
    </ThemeProvider>
  )
}

export default AppLayout;