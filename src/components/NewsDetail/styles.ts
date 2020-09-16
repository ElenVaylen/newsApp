import styled from 'styled-components'

export default styled.div`
  position: relative;
  .news-detail {
    &__img {
      width: 100%;
      height: ${(props) => props.theme.typography.pxToRem(300)};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      ${(props) => props.theme.breakpoints.up('sm')} {
        width: ${(props) => props.theme.typography.pxToRem(200)};
        height: ${(props) => props.theme.typography.pxToRem(200)};
      }
      ${(props) => props.theme.breakpoints.up('md')} {
        width: ${(props) => props.theme.typography.pxToRem(300)};
        height: ${(props) => props.theme.typography.pxToRem(300)};
      }
    }
  }
`
