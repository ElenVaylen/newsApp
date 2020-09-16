import React from 'react'

import Styled from './styles'

interface Props {
  onClick(): void
  disabled: boolean
}

const ShowMore: React.FC<Props> = ({ onClick, disabled }) => (
  <Styled
    className='show-more'
    onClick={onClick}
    variant='contained'
    color='secondary'
    disabled={disabled}
  >
    Show more
  </Styled>
)

export default ShowMore
