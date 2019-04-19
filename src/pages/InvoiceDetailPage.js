import React from 'react';
import Paper from '@material-ui/core/Paper';

import Api from '../Api';
import {Location} from '@reach/router';
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing.unit * 2
  }
}));

function InvoiceDetailPage() {
  const classes = useStyles();
  // Declare a new state variable, which we'll call "count"   const [count,
  // setCount] = useState(0);

  return (
    <Paper className={classes.paper}>
      <Location>
        {({location}) => {
          const invoiceId = location
            .pathname
            .split('/')[2] - 1;

          const invoice = Api.getByIndex(invoiceId)
          return (
            <div>
              <h2>{invoice.subject}</h2>
              <h4>From: {invoice.recipient}</h4>
              <Divider/>
              <p>{invoice.content}</p>
            </div>
          )
        }}
      </Location>
    </Paper>
  );
}

export default InvoiceDetailPage;
