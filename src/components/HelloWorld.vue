<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <h3>{{message}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg:{
      type:String,
      default:'组件属性内置值'
    },
    message:{
      type:String,
      default:''

    }
  }
}
</script>

<style scoped>

</style>
