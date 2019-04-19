import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import AppLayout from './AppLayout';
import {AppContext, AppContextProvider} from './AppContext';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    minHeight: '100%',
    display: 'flex',
	  flexDirection: 'column'
  }
});

const App = (props) => {

  const {classes} = props;

  return (
    <div className={classes.root}>
      <AppContextProvider>
        <AppLayout/>
      </AppContextProvider>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);