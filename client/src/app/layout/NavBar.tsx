import { Group } from "@mui/icons-material";
import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material";

type Props = {
  openForm: () => void;
}

export default function NavBar({openForm}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 50%, #A5D6A7 100%)'
      }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
              <MenuItem sx={{display: 'flex', gap: 2, color: '#E3DAC9'}}>
                <Group fontSize="large" />
                <Typography variant="h4" fontWeight='bold'>
                  VibeLog
                </Typography>
              </MenuItem>
            </Box>

            <Box sx={{display: 'flex'}}>
              <MenuItem sx={{
                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold', color: '#E3DAC9' 
              }}>
                Content
              </MenuItem>
              <MenuItem sx={{
                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold', color: '#E3DAC9' 
              }}>
                About
              </MenuItem>
              <MenuItem sx={{
                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold', color: '#E3DAC9' 
              }}>
                Contact
              </MenuItem>
            </Box>
            <Button 
              size="large" 
              variant="contained" 
              color="warning" 
              sx={{color: '#E3DAC9'}}
              onClick={openForm}
            >
              Write Now
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
