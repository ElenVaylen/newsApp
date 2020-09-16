import styled from 'styled-components'

export default styled.button`
  margin-bottom: ${(props) => props.theme.typography.pxToRem(18)};
  display: inline-flex;
  background: transparent;
  border: none;
  align-items: center;
  padding: 0;
  font-family: inherit;
  font-size: ${(props) => props.theme.typography.pxToRem(14)};
  cursor: pointer;
  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-bottom: ${(props) => props.theme.typography.pxToRem(30)};
    font-size: ${(props) => props.theme.typography.pxToRem(16)};
  }
  .back__icon {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: ${(props) => props.theme.typography.pxToRem(16)};
      height: ${(props) => props.theme.typography.pxToRem(16)};
    }
  }
  &:hover {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`
