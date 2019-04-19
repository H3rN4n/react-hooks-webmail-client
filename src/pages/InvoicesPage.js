import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/styles';
import InvoicesList from './../components/InvoiceList'
import FloatingActionButtons from './../components/FloatingActionButtons';

import {Location, Link} from "@reach/router";


import AppTheme from '../AppTheme';
import SidebarHeader from '../components/SidebarHeader';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [
      theme
        .breakpoints
        .up('sm')
    ]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    [
      theme
        .breakpoints
        .up('sm')
    ]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [
      theme
        .breakpoints
        .up('sm')
    ]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
}));

function InvoicesPage(props) {
  const {container} = props;
  const classes = useStyles();
  const theme = useTheme(AppTheme);
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <SidebarHeader/>
      <Divider/>
      <List>
        {['Inbox', 'Draft', 'Sent',].map((text, index) => (
          <Link key={index} to={"/invoices/" + text.toLocaleLowerCase()}>
            <ListItem button >
              <ListItemIcon>{index % 2 === 0
                  ? <InboxIcon/>
                  : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Location>
      {({ location }) => {
        const locationName = location.pathname.split('/')[2];

        return (
          <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}>
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Invoices > {locationName}
                </Typography>
              </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Hidden smUp implementation="css">
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl'
                  ? 'right'
                  : 'left'}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                  paper: classes.drawerPaper
                }}
                  ModalProps={{
                  keepMounted: true, // Better open performance on mobile. }}>
                  drawer: drawer }}>
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Drawer
                  classes={{
                  paper: classes.drawerPaper
                }}
                  variant="permanent"
                  open>
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>
            <main className={classes.content}>
              <div className={classes.toolbar}/>
              {props.children}
              <FloatingActionButtons/>
            </main>
          </div>
        )
      }}
  </Location>
  )
};

InvoicesPage.propTypes = {
  container : PropTypes.object
};

// export default InvoicesPage;
export default InvoicesPage;