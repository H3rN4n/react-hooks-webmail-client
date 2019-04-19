import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import {Link, Location} from "@reach/router";

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    right: theme.spacing.unit * 2,
    bottom: theme.spacing.unit * 2
  },
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
}));

function FloatingActionButtons() {
  const classes = useStyles();

  const isComposing = (location) => {
    console.log(location)
    const locationName = location
      .pathname
      .split('/')[2]
    if (locationName === 'new') {
      return true;
    }
    return false;
  }

  return (
    <div className={classes.root}>
      <Location>
        {({location}) => {
          if (isComposing(location)) {
            return (
              <Fab color="primary" aria-label="Send" className={classes.fab}>
                <SendIcon/>
              </Fab>
            )
          } else {
            return (
              <Link to="/invoices/new">
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                  <AddIcon/>
                </Fab>
              </Link>

            )
          }
        }}
      </Location>
    </div>
  )
}

export default FloatingActionButtons;