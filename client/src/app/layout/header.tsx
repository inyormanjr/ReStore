import { AppBar, Toolbar, IconButton, Typography,  Switch } from '@mui/material';

interface Props {
    darkmode: boolean;
    setDarkMode: () => void;

}

export default function Header({darkmode, setDarkMode}: Props) {
    return (
         <AppBar position="static" sx={{mb: 4}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" >
            RE-STORE
          </Typography>
                <Switch
            value={darkmode}
            checked={darkmode}
            onChange={() => setDarkMode()}
           inputProps={{ "aria-label": '' }}
         />
        </Toolbar>
      </AppBar>
    );
}