import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      {/* <StyledButton disableHoverEffect={true} variant="outlined">
        Sign In
      </StyledButton> */}
       <a href="https://forms.gle/NEBqi12GtVbc7HZp6" target="_blank" rel="noopener noreferrer">
      <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
      </a>
    </Box>
  )
}

export default AuthNavigation
