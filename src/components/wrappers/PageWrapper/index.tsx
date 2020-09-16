import React from 'react'
import { Container } from '@material-ui/core'
import Back from 'components/Back'
import GeneralWrapper from 'components/wrappers/GeneralWrapper'
import Typography from '@material-ui/core/Typography'

interface Props {
  title?: string | null
}

const PageWrapper: React.FC<Props> = ({ children, title }) => (
  <GeneralWrapper>
    <Container>
      <Back />
      {title
      && (
      <Typography variant='h1' component='h1' className='section-title' gutterBottom>
        {title}
      </Typography>
      )}
      {children}
    </Container>
  </GeneralWrapper>
)

export default PageWrapper
