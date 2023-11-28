import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Switch, List, ListItem, IconButton, Badge, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
];


const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
];



interface Props {
    darkmode: boolean;
    setDarkMode: () => void;

}

const navStyle = { color: 'inherit', textDecoration: 'none', typography: 'h6',  '&:hover': {color: 'grey.500'} , '&.active': {color: 'text.secondary'}}

export default function Header({darkmode, setDarkMode}: Props) {
    return (
         <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', aligntItems: 'center' }}>
         <Box display='flex' alignItems='center'>
                         <Typography variant="h6"   component={NavLink} to='/' sx={navStyle}>
            RE-STORE
          </Typography>
                <Switch
            value={darkmode}
            checked={darkmode}
            onChange={() => setDarkMode()}
           inputProps={{ "aria-label": '' }}
                />
         </Box>
     
                
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({title, path}) => (
                        <ListItem component={NavLink} to={path} key={path}
                            sx={navStyle}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                            <IconButton size='large' edge='start' color='inherit' sx={{mr: 2}}>
                    <Badge badgeContent='4' color='secondary'>
                        <ShoppingCart/>
                        </Badge>
                </IconButton>
                 
                <List sx={{ display: 'flex' }}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem component={NavLink} to={path}  key={path} sx={navStyle}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Box>
                
            
        </Toolbar>
      </AppBar>
    );
}