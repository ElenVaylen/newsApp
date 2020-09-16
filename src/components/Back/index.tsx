import React from 'react'
import { useHistory } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import Styled from './styles'

const Back: React.FC = () => {
  const history = useHistory()
  return (
    <Styled className='back' onClick={history.goBack}>
      <ArrowBackIosIcon className='back__icon' />
      <span className='back__text'>Back</span>
    </Styled>
  )
}

export default Back
