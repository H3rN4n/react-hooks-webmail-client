import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import SidebarList from './sidebarList';
import SidebarHeader from './sidebarHeader';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
    // marginRight: theme.spacing.unit
  }
});

function Sidebar(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <SidebarHeader></SidebarHeader>
      <SidebarList></SidebarList>
    </div>
  )
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
