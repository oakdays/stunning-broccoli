import styled from 'vue-styled-components'
import { shadow, borderRadius } from './variables'

export const CharsContainer = styled('div', { right: Boolean })`
  border: 1px gray solid;
  display: ${ props => props.right ? 'block' : 'inline-block' };
  float: ${ props => props.right ? 'right' : '' };
  border-radius: ${borderRadius}px;
  box-shadow: 0 ${shadow.vOffset}px ${shadow.blur}px 0 ${shadow.color};
  text-align: center;
  padding: .5rem;
  h4 {
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
`