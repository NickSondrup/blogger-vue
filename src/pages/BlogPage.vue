<template>
  <div class="card" v-if="blog">
    {{ blog }}
    <div class="card-header row">
      <div class="col-6 d-flex flex-column">
        {{ blog.title }}
        <br>
        {{ blog.creator.name }}
      </div>
      <div class="col-6">
        <img :src="blog.imgUrl" alt="" class="img-fluid">
      </div>
    </div>
    <div class="card-body row text-center">
      {{ blog.body }}
    </div>
    <div class="card-footer">
      <div v-if="currentComments">
        <Comments v-for="c in currentComments" :key="c.id" :currentcomments="c" />
      </div>
      <div v-else>
        .......Loading Comments...
      </div>
    </div>
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
import Comments from '../components/Comments.vue'
export default {
  components: { Comments },

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
