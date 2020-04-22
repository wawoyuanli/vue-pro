<template>
    <div class="prize">
       <h3>九宫格抽奖</h3>
<van-grid :column-num="3">
  <van-grid-item v-for="value in 9" :key="value" text="文字" />
</van-grid>


<van-grid :gutter="20">
  <van-grid-item v-for="value in 9" :key="value" icon="photo-o" text="间子格子"/>
</van-grid>
</div>
</template>
<script>
import { Col, Row } from 'vant'
import { Grid, GridItem } from 'vant';
export default {
    name:'prize',
    components:{
   [Col.name]:Col,
    [Row.name]:Row,
    [Grid.name]:Grid,
    [GridItem.name]:GridItem
    },
    data(){
        return{
            show:true
        }
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    background: rgb(198, 191, 206);  
    }
    .prize .box{
        width: 100%;
        background: red;
    }
</style>