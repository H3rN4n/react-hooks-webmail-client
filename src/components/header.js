import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';

import AppContext from '../AppContext';

function Header() {

  return (
    <AppContext.Consumer>
      {value => (
        <Grid container spacing={24}>
          <Grid item xs={3}>
            {value.name}
          </Grid>
          <Grid item xs={9}></Grid>
        </Grid>
      )}
    </AppContext.Consumer>
  );
}

export default Header;
