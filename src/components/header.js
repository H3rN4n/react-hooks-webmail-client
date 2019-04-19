import React, {useState} from 'react';
import EmailIcon from '@material-ui/icons/Email';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/styles';
import AppTheme from '../AppTheme';
import {Link} from '@reach/router';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none'
  }
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme(AppTheme);
console.log(theme)
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Link to="/" className={classes.link}>
          <EmailIcon className={classes.icon}/>
        </Link>
        <Link to="/" className={classes.link}>
          <Typography variant="h6" color="inherit" noWrap>
            Simple React Webmail
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
