<template>
  <div id="app">
    <!--固定传值   动态传值-->
    <HelloWorld msg="组件内置值" :message="info"/>
    <router-link to="/home">home</router-link>|
     <router-link to="/about">about</router-link>
  <!--路由对应组件的显示-->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      info:'绑定属性传值',
      msg:'组件内置值'
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
