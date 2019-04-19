import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import {AppContext} from "../AppContext";
import { makeStyles, useTheme } from '@material-ui/styles';
import AppTheme from '../AppTheme';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
}));

function LoginForm(props) {
  const classes = useStyles();
  const theme = useTheme(AppTheme);

  const [values,
    setValues] = React.useState({email: '', password: ''});

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  let {state, dispatch} = useContext(AppContext);

  function submitForm(e) {
    e.preventDefault();
    dispatch({
      type: "login",
      action: {
        parameters: values
      }
    });
  }

  return (
    <form onSubmit={submitForm} className={classes.form}>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input
          id="email"
          value={values.email}
          onChange={handleChange('email')}
          name="email"
          autoComplete="email"
          autoFocus/>
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange('password')}
          autoComplete="current-password"/>
      </FormControl>
      <FormControlLabel
        control={< Checkbox value = "remember" color = "primary" />}
        label="Remember me"/>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}>
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
