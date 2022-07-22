import React, { Component } from 'react'
import Box from '@mui/material/Box'
import AppBar  from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from  '@mui/material/Typography'

export class Header extends Component {
  render() {
    return (
      <Box>
        <AppBar position='static'>
          <Toolbar variant='dense' >
          <Typography variant="h3" color="inherit" component="div" > 
            Movie Catalog
          </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

export default Header