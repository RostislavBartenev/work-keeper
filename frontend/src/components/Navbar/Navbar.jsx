import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockIcon from '@material-ui/icons/Lock';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideocamIcon from '@material-ui/icons/Videocam';
import ChatIcon from '@material-ui/icons/Chat';

import './navbar.css'
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as ACTION_TASKS from "../../redux/actions/regAndLog";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer({children}) {

  const aboutMe = useSelector(state => state.aboutMe)
  const { userID, name, surname } = useSelector(state => state.user)
  const dispatch = useDispatch()


  const handleQuit = () => {
    dispatch(ACTION_TASKS.LOGOUT())
    dispatch(ACTION_TASKS.IS_NOT_ME())
    localStorage.clear()
  }

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar

        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to={'/'} className="nav-link">
            <ListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>
                Главная
              </ListItemText>
            </ListItem>
          </Link>
          {aboutMe.isMe ?
            <>
              <Link to="/videochat" className="nav-link">
                <ListItem button>
                  <ListItemIcon><VideocamIcon /></ListItemIcon>
                  <ListItemText>
                    Видео
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/global-chat" className="nav-link">
                <ListItem button>
                  <ListItemIcon><ChatIcon /></ListItemIcon>
                  <ListItemText>
                    Чат
                  </ListItemText>
                </ListItem>
              </Link>
            </>
            : ''}

        </List>
        <Divider />
        <List>
          {aboutMe.isMe ?
            <>
              <Link to={`/profile/${userID}`} className="nav-link">
                <ListItem button>
                  <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                  <ListItemText>
                    Личный кабинет
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/user/registration" className="nav-link" onClick={handleQuit}>
                <ListItem button>
                  <ListItemIcon><MeetingRoomIcon /></ListItemIcon>
                  <ListItemText>
                    Выйти
                  </ListItemText>
                </ListItem>
              </Link>
            </> :
            <>
            <Link className="nav-link" to="/user/registration">
              <ListItem button>
                <ListItemIcon>< VpnKeyIcon /></ListItemIcon>
                <ListItemText>
                  Регистрация
                </ListItemText>
              </ListItem>
            </Link>
            <Link className="nav-link" to="/user/login">
            <ListItem button>
            <ListItemIcon><LockIcon /></ListItemIcon>
            <ListItemText>
            Войти
            </ListItemText>
            </ListItem>
            </Link>
            </>
          }


        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
