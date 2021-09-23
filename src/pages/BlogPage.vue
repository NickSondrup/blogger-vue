<template>
  <div class="card ">
    <Blog :blog="blog" />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import Blog from '../components/Blog.vue'
import { AppState } from '../AppState'
export default {
  components: { Blog },
  setup() {
    return {
      blog: computed(() => AppState.blog)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
