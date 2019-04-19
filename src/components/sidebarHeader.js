import React, {useContext} from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {
  Popper,
  Button,
  Grow,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Paper,
  Avatar
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {AppContext} from '../AppContext';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    flexGrow: 1,
    paddingLeft: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    minHeight: theme.spacing.unit * 4,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    maxHeight: '150px',
    position: 'relative'
  },
  avatar: {
    margin: 0,
    marginTop: theme.spacing.unit,
    width: 80,
    height: 80
  },
  popper: {
    zIndex: 99,
    width: "100%"
  },
  sidebarDropmenu: {
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute'
  },
  sidebarDropmenuButton: {
    width: '100%',
    alignItems: 'start',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing.unit * 2
  },
  sidebarDropmenuButtonArrow: {
    position: 'absolute',
    right: theme.spacing.unit
  }
}));

function SidebarHeader(props) {

  const classes = useStyles();
  let {state, dispatch} = useContext(AppContext);
  const [open,
    setOpen] = React.useState(false);
  const anchorEl = React.useRef(null);

  function handleToggle() {
    setOpen(!open);
  }

  function handleClose(event) {
    if (anchorEl.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  function handleLogout(event) {
    dispatch({type: "logout"});
    handleClose(event);
  }

  return (
    <div className={classes.root}>
      <Avatar
        alt="Hernan De Souza"
        src="https://api.adorable.io/avatars/100/v@adorable.io.png"
        className={classes.avatar}/>
      <div className={classes.sidebarDropmenu}>
        <Button
          className={classes.sidebarDropmenuButton}
          buttonRef={anchorEl}
          aria-owns={open
          ? 'menu-list-grow'
          : undefined}
          aria-haspopup="true"
          onClick={handleToggle}>
          Hernan De Souza
          <ArrowDropDownIcon className={classes.sidebarDropmenuButtonArrow}/>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorEl.current}
          transition
          disablePortal
          className={classes.popper}>
          {({TransitionProps, placement}) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
              transformOrigin: placement === 'bottom'
                ? 'center top'
                : 'center bottom'
            }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
};

export default SidebarHeader;
