<template>
    <div class="son">
        <h3>{{msg}}</h3>
    </div>
</template>
<script>

export default {
    name:'Home-son',
    components:{
        
    },
    props:{
        msg:{
            type:String,
            default:''
        }
    }
    
}
</script>