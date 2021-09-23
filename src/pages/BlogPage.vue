<template>
  <div class="card" v-if="blog">
    {{ blog }}
  </div>
  <div v-else>
    ......loading.....
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { blogsService } from '../services/BlogsService.js'
export default {

  setup() {
    const route = useRoute()
    onMounted(() => {
      blogsService.getBlogbyId(route.params.blogId)
    })
    return {
      blog: computed(() => AppState.blog)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
