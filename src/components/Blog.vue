<template>
  <div class="card">
    <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == project.creatorId">
      <i class="mdi mdi-close text-danger f-20 selectable" @click="deleteBlog()"></i>
    </div>
    <div class="card-header">
    </div>
    <div class="card-body">
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

</style>
