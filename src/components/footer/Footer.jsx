import React, { Component } from 'react'
import Box from '@mui/material/Box'
import AppBar  from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from  '@mui/material/Typography'

export class Footer extends Component {
  render() {
    return (
      <Box>
        <AppBar position='static'>
          <Toolbar variant='dense' >
          <Typography variant="h5" color="inherit" component="div" > 
            
          </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

export default Footer