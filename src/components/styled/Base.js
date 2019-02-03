import styled from 'vue-styled-components'
import { shadow, borderRadius } from './variables'

export const BaseContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
`
export const BaseButton = styled.button`
  outline: 0;
  padding: .5rem;
  margin: .5rem;
  cursor: pointer;
  border: .5px gray solid;
  border-radius: ${borderRadius}px;
  background: white;
  box-shadow: 0 ${shadow.vOffset / 2}px ${shadow.blur / 2}px 0 ${shadow.color};
  transition: all 0.1s ease;

  &:active {
    box-shadow: 0 ${shadow.vOffset / 4}px ${shadow.blur / 4}px 0 ${shadow.color};
    transform: translateY(2px)
  }
`