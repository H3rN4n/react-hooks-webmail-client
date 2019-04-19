import React, {useState} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import {Link} from "@reach/router";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function InvoiceListItem(props) {
  // Declare a new state variable, which we'll call "count"
  const [count,
    setCount] = useState(0);

  return (
    <div>
      <Link to={`/invoices/${props.invoice.id}`}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary={props.invoice.subject}/>
        </ListItem>
      </Link>
    </div>
  );
}

InvoiceListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  invoice: PropTypes.object.isRequired
};

export default withStyles(styles)(InvoiceListItem);
