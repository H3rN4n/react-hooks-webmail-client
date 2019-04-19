import React from 'react';

import {createHistory, LocationProvider} from "@reach/router"

import AppRouter from './AppRouter';
import {ThemeProvider} from '@material-ui/styles';

import AppTheme from './AppTheme';
import Header from './components/header';

let history = createHistory(window)

function AppLayout(props) {

  return (
    <ThemeProvider theme={AppTheme}>
      <Header/>
      <LocationProvider history={history}>
        <AppRouter></AppRouter>
      </LocationProvider>
    </ThemeProvider>
  )
}

export default AppLayout;