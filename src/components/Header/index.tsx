import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'
import Styled from './styles'

const Header: React.FC = () => (
  <Styled className='header'>
    <AppBar position='static'>
      <Container>
        <Toolbar disableGutters>
          <a href='/' className='header__logo'>
            <Typography className='header__logo_text' variant='h2'>News App</Typography>
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  </Styled>
)

export default Header
