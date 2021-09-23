<template>
  <div class="home container-fluid">
    <div class="row">
      <Blog v-for="b in blogs" :key="b.id" :blog="b" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">

</style>
