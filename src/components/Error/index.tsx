import React from 'react'
import Typography from '@material-ui/core/Typography'

interface Props {
  message: string
}

const Error: React.FC<Props> = ({ message }) => (
  <Typography variant='h6' component='p' color='error'>{message}</Typography>
)

export default Error
