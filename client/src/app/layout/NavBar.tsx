import { Group } from "@mui/icons-material";
import { AppBar, Box, Container, LinearProgress, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

export default function NavBar() {
  const {uiStore} = useStore();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" 
        sx={{
          backgroundImage: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 50%, #A5D6A7 100%)',
          position: 'relative'
      }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2, color: '#E3DAC9' }}>
                <Group fontSize="large" />
                <Typography variant="h4" fontWeight='bold'>VibeLog</Typography>
              </MenuItem>
            </Box>
            
            <Box sx={{ display: 'flex' }}>
              <MenuItemLink to='/activities'>     
                Activities
              </MenuItemLink>
              <MenuItemLink to='/createActivity'>
                Write Now
              </MenuItemLink>
              <MenuItemLink to='/counter'>
                Counter
              </MenuItemLink>
              <MenuItemLink to='/errors'>
                Errors
              </MenuItemLink>
            </Box>
            <MenuItem 
              sx={{ 
                backgroundColor: '#FFE082',
                color: '#1B5E20',
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: '#FFB300'
                }
              }}
            >
              User menu
            </MenuItem>
          </Toolbar>
        </Container>
        
        <Observer>
          {() => uiStore.isLoading ? (
            <LinearProgress
              color="secondary"
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 4
              }}
            />
          ) : null}
        </Observer>

      </AppBar>
    </Box>
  )
}

// Common styling is coded in MenuItemLink.tsx