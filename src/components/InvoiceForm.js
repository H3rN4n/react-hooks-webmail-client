import React, {useState} from 'react';
import {Paper, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing.unit * 2
  }
}));

function InvoiceForm() {
  const classes = useStyles();

  const [values,
    setValues] = React.useState({to: '', subject: '', content: ''});

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  function handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="to"
          label="To"
          className={classes.textField}
          value={values.to}
          onChange={handleChange('to')}
          fullWidth
          margin="normal"
          InputLabelProps={{
          shrink: true
        }}/>

        <TextField
          id="subject"
          label="Subject"
          className={classes.textField}
          value={values.subject}
          onChange={handleChange('subject')}
          fullWidth
          margin="normal"
          InputLabelProps={{
          shrink: true
        }}/>

        <TextField
          id="content"
          label="Content"
          className={classes.textField}
          value={values.content}
          onChange={handleChange('content')}
          fullWidth
          multiline="true"
          rows="10"
          margin="normal"
          InputLabelProps={{
          shrink: true
        }}/>
      </form>
    </Paper>
  );
}

export default InvoiceForm;
