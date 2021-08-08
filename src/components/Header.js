import Image from 'next/image'

import { styled, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import Avatar from '@material-ui/core/Avatar';

import { useTheme } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import CustromDrawer from './CustromDrawer'
import avater from '../assets/icons/avater.png'
import BellIcon from '../assets/icons/BellIcon'
import Arroecross from '../assets/icons/Arroecross'
import SearchIcon from '../assets/icons/SearchIcon'
import MenuIcon from '../assets/icons/MenuIcon'

const drawerWidth = 120;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '503px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyleBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    height: '14px',
    fontSize: '0.50rem',
    padding: '0 3px',
    top: '-6px',
    right: '-2px',
    minHeight: '15px',
    minWidth: '15px'
  }
}));

function Header({ children }) {

  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        color="secondary"
        style={{ background: 'transparent', boxShadow: 'none' }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            hover='none'
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton aria-label="show 4 new mails" >
              <Arroecross />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 3 new notifications"
              color="inherit"
            >
              <StyleBadge badgeContent={3} color="primary" size='small'>
                <BellIcon />
              </StyleBadge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 3 new notifications"
              color="inherit"
            >
              <Avatar variant="rounded" size="large" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Image
                  src={avater}
                  alt=""
                />
              </Avatar>
            </IconButton>

          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth, background: `${theme.palette.primary.main}` },
          }}
        >
          <CustromDrawer />
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}


export default Header;