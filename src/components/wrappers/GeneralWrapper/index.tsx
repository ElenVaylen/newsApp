import React from 'react'

import Header from 'components/Header'

import Styled from './styles'

const GeneralWrapper: React.FC = ({ children }) => (
  <Styled className='general-wrapper'>
    <Header />
    <main className='general-wrapper__content'>{children}</main>
  </Styled>
)

export default GeneralWrapper
