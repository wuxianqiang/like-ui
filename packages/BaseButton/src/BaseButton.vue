
<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
  export default {
    name: 'BaseButton',
    data () {
      return {
        msg: 'hello world'
      }
    }
  }
</script>

<style lang="less" scoped>
  .title {
    color: red;
  }
</style>
