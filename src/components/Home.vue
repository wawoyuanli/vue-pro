<template>
    <div class="home">
       <div class="box">
           <p msg="父组件给子组件传值的第一种类型"></p>
           <van-button type="primary" @click="onClick">点击我跳转到子页面</van-button>
       </div>
    </div>
</template>
<script>
import { Button } from 'vant';
export default {
    name:'Home',
    components:{
       [Button.name]:Button
    }
    
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 500px;
    background: rgb(165, 151, 179);
}

</style>