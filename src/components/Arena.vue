<template>
  <base-container>
    <chars-container right>
      <h4>James</h4>
      <div
        v-for="n in 3"
        :key="n"
      >
        <base-button>
          Click me
        </base-button>
      </div>
    </chars-container>

    <chars-container>
      <h4>Cutler</h4>
      <div
        v-for="n in 3"
        :key="n"
      >
        <base-button>
          Click me
        </base-button>
      </div>
    </chars-container>
  </base-container>
</template>

<script>
import { BaseButton, BaseContainer } from './styled/Base'
import { CharsContainer } from './styled/Arena'

export default {
  components: {
    BaseButton,
    BaseContainer,
    CharsContainer
  }
}
</script>