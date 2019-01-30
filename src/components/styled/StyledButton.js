import styled from 'vue-styled-components'

// Create a <StyledButton> Vue component that
// renders a <button> with custom style
export default styled.button`
  outline: 0;
  padding: .5rem;
  color: tomato;
  background: white;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(161, 164, 185, 1);
  transition: all 0.1s ease;
  position: relative;
  bottom: 2px;

  &:active {
    bottom: 0;
    box-shadow: 0 2px 4px 0 rgba(161, 164, 185, 1);
  }
`