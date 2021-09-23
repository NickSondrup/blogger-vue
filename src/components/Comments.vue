<template>
  <div>
    {{ comments.body }}
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    comment: {
      type: Object,
      required: false
    }
  },
  setup() {
    return {
      comments: computed(() => AppState.currentComments)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
