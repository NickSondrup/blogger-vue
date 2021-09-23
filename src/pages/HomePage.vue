<template>
  <div class="home container-fluid">
    <div class="row d-flex justify-content-around pt-2 bg-primary">
      <Blog v-for="b in blogs" :key="b.id" :blog="b" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js'
import { blogsService } from '../services/BlogsService.js'
import { AppState } from '../AppState.js'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }

}
</script>

<style scoped lang="scss">

</style>
