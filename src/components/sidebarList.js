import React from 'react';
import {Link} from "@reach/router";
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: theme.spacing.unit * 6,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  }
});


function SidebarList(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <Link to="/invoices/inbox">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox"/>
        </ListItem>
      </Link>
      <Link to="/invoices/draft">
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon/>
          </ListItemIcon>
          <ListItemText primary="Draft"/>
        </ListItem>
      </Link>
      <Link to="/invoices/sent">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon/>
          </ListItemIcon>
          <ListItemText primary="Sent"/>
        </ListItem>
      </Link>
    </div>
  )
};

SidebarList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidebarList);
