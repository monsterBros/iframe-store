<template>
    <div>
        <div>配置面板</div>
        <br />
        <Componentprop :item="item" />
    </div>
</template>
<script>
import Componentprop from './component/prop.vue'
import { mapState } from 'vuex';

export default{
    components:{
        Componentprop
    },
    computed:{
        ...mapState({
            item: "item"
        })
    },
		mounted(){
			console.log('config mounted')
		}
}

</script>