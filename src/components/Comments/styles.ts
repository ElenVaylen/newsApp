import styled from 'styled-components'

export default styled.div`
  .comments-item {
    position: relative;
    padding: ${(props) => props.theme.typography.pxToRem(10)};
    border: 4px solid #eee;
    margin-bottom: ${(props) => props.theme.typography.pxToRem(10)};
    ${(props) => props.theme.breakpoints.up('sm')} {
      padding: ${(props) => props.theme.typography.pxToRem(20)};
      margin-bottom: ${(props) => props.theme.typography.pxToRem(20)};
    }
    &__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${(props) => props.theme.typography.pxToRem(12)};
      ${(props) => props.theme.breakpoints.down('xs')} {
        flex-direction: column;
        align-items: flex-start;
      }
    }
    &__author {
      flex: 0 0 auto;
      padding: 0;
    }
    &__date {
      flex: 0 0 auto;
       ${(props) => props.theme.breakpoints.down('xs')} {
        font-size: 12px;
      }
    }
    &__description {
      p {
        margin: 0 0 ${(props) => props.theme.typography.pxToRem(10)} 0;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &__children {
      margin-top: ${(props) => props.theme.typography.pxToRem(16)};
    }
  }
`
