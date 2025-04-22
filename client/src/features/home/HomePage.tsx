import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <Paper
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage:'linear-gradient(135deg, #1B5E20 0%, #388E3C 50%, #A5D6A7 100%)'
      }}
    >
      <Box sx={{
        display: 'flex', alignItems: 'center', alignContent: 'center',
        color: 'white', gap: 3}}
      >
        <Group sx={{height: 110, width: 110}} /> 
        <Typography variant="h1">
          VibeLog
        </Typography>
      </Box>
      <Typography variant="h2">
        Welcome to VibeLog
        {/*A diary that not only remembers 🌱 but helps you grow every day. */}
      </Typography>
      <Button
        component={Link}
        to='/activities'
        size="large"
        variant="contained"
        sx={{Height: 80, BorderRight: 4, fontSize: '1.5rem'}}
      >
        Take me to the diary
      </Button>
    </Paper>
  )
}