<template>
  <div id="app">
    <wrapper>
      <styled-title>:)</styled-title>
      <styled-button>Click me</styled-button>
    </wrapper>
  </div>
</template>

<script>
import { Wrapper, StyledTitle } from './components/styled'
import StyledButton from './components/styled/StyledButton'

export default {
  name: 'App',
  components: {
    Wrapper,
    StyledTitle,
    StyledButton
  }
}
</script>
