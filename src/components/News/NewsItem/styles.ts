import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export default styled(Grid)`
  position: relative;
  .news-item {
    &__link {
      text-decoration: none;
      color: ${(props) => props.theme.palette.text.primary};
      display: flex;
      flex-direction: row;
      ${(props) => props.theme.breakpoints.up('sm')} {
        flex-direction: column;
      }
    }
    &__img {
      flex: 0 0 ${(props) => props.theme.typography.pxToRem(60)};
      position: relative;
      display: block;
      ${(props) => props.theme.breakpoints.up('sm')} {
        height: ${(props) => props.theme.typography.pxToRem(190)};
        width: 100%;
        flex: 1 0 auto;
      }
      ${(props) => props.theme.breakpoints.up('md')} {
        height: ${(props) => props.theme.typography.pxToRem(260)};
      }
    }
    &__content {
      padding: ${(props) => props.theme.typography.pxToRem(12)};
      display: flex;
      align-items: center;
      flex: 1 0 0;
      ${(props) => props.theme.breakpoints.up('sm')} {
        padding: ${(props) => props.theme.typography.pxToRem(16)} ${(props) => props.theme.typography.pxToRem(18)};
      }
    }
    &__title {
      flex: 1 0 0;
      padding-right: ${(props) => props.theme.typography.pxToRem(20)};
    }
    &__date {
      flex: 0 0 auto;
    }
  }
`
