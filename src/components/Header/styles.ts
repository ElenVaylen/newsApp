import styled from 'styled-components'

export default styled.header`
  .header {
    &__logo {
      text-decoration: none;
      color: #fff;
      &_text {
        font-size: 1.3rem;
        ${(props) => props.theme.breakpoints.up('sm')} {
          font-size: 2rem;
        }
      }
    }
  }
`
