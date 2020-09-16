import styled from 'styled-components'

export default styled.div`
  .general-wrapper__content {
    padding: ${(props) => props.theme.typography.pxToRem(24)} 0;
    ${(props) => props.theme.breakpoints.up('sm')} {
      padding: ${(props) => props.theme.typography.pxToRem(40)} 0;
    }
  }
`
