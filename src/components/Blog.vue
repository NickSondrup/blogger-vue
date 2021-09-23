<template>
  <div class="card col-5 my-2 selectable">
    <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == blog.creatorId">
      <i class="mdi mdi-close text-danger f-20 selectable" @click="deleteBlog()"></i>
    </div>
    <div class="card-header d-flex flex-column text-center">
      <div class="row">
        {{ blog.title }}
      </div>
      <div class="row">
        By: {{ blog.creator.name }}
      </div>
    </div>
    <img :src="blog.imgUrl" alt="">
    <div class="card-body text-center scrollable-y">
      {{ blog.body }}
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      account: computed(() => AppState.account),
      deleteBlog() {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollable-y{
  height: 40vh;
}
.img{
  height: 500px;
}
</style>
