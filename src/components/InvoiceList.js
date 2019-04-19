import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import InvoiceListItem from './InvoiceListItem';
import {TextField, Paper} from '@material-ui/core';
import Api from '../Api';
// const styles = theme => ({
const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
    flexGrow: 1,
    marginTop: 0
  },
  root: {
    marginTop: 0,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 0
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
}));
// });

const List = () => {
  return (Api.invoicesList.map((invoice, i) => {
    return <InvoiceListItem key={invoice.id} invoice={invoice}/>
  }))
}

function InvoiceList() {
  const classes = useStyles();
  const [values,
    setValues] = React.useState({search: ''});

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  return (
    <div className={classes.root}>

      <TextField
        id="search"
        label="Search Email"
        className={classes.textField}
        value={values.search}
        onChange={handleChange('search')}
        margin="normal"/>

      <br/>
      <Paper>
        <List/>
      </Paper>
    </div>
  );
}

export default InvoiceList;