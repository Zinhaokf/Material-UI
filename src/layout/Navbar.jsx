import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Button,
  InputBase,
  Badge
} from '@mui/material';
import {
  Search as SearchIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Notifications as NotificationsIcon,
  Bolt as BoltIcon // ✅ Fix import này
} from '@mui/icons-material';

const Navbar = () => {
  const [active, setActive] = useState('home');

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: '#0d1117',
        paddingY: 1,
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <BoltIcon sx={{ color: '#6ec207', mr: 1 }} />
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            SocialX
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            startIcon={<HomeIcon />}
            variant={active === 'home' ? 'contained' : 'text'}
            onClick={() => setActive('home')}
            sx={{
              color: active === 'home' ? '#000' : '#fff',
              bgcolor: active === 'home' ? '#6ec207' : 'transparent',
              '&:hover': { bgcolor: '#6ec207', color: '#000' }
            }}
          >
            Home
          </Button>
          <Button
            startIcon={<PersonIcon />}
            variant={active === 'profile' ? 'contained' : 'text'}
            onClick={() => setActive('profile')}
            sx={{
              color: active === 'profile' ? '#000' : '#fff',
              bgcolor: active === 'profile' ? '#6ec207' : 'transparent',
              '&:hover': { bgcolor: '#6ec207', color: '#000' }
            }}
          >
            Profile
          </Button>
          <IconButton sx={{ color: '#fff' }}>
            <Badge color="error" variant="dot">
              <EmailIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <Badge color="error" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>

        {/* Search + Avatar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar alt="User Avatar" src="/avatar.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
