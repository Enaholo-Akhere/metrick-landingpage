import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from './navItems';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

const DrawerAppBar = (props: Props) =>{
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, textDecoration: 'none', color: 'inherit' }} component={'a'}
          href='/comingsoon'>
        Metricks
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component="a" href={item.path}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: 'transparent', width: {xl: '90%', lg: '90%', md: '90%', sm: '100%', xs: '100%'}, marginX: 'auto', my: 3}} elevation="none">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column',  fontFamily: 'Roboto, sans-serif', fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h6"
            component={'a'}
          href='/comingsoon'
            sx={{ width: 'fit-content', fontFamily: 'Roboto, sans-serif', fontWeight: 800, textDecoration: 'none', color: 'inherit' }}
          >
            Metricks
          </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
            {navItems.map((item) => (
              <Button key={item.title} sx={{ color: '#fff', py: 1.5, px: 4, m: 2, fontFamily: 'Roboto, sans-serif', fontWeight: 600, backgroundColor: item.title.toLowerCase() === 'contact us' ? '#271AC1' : null, borderRadius: 10 }} component="a" href={item.path}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3,  }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;