import React from 'react';
import Grid from '@material-ui/core/Grid';

import Header from './components/header';
import Sidebar from './components/sidebar';
import AppRouter from './AppRouter';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function AppLayout() {
  return (
    <div className={styles.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          Header
        </Grid>
        <Grid item xs={2}>
          <Sidebar/>
        </Grid>
        <Grid item xs={10}>
          <AppRouter></AppRouter>
        </Grid>
      </Grid>
    </div>
  )
}

export default AppLayout;