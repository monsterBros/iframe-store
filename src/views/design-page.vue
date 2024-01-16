<template>
    <div>
        <div>设计器</div>
        <br />
        <Componentcode :item="item" />
    </div>
</template>
<script>
import Componentcode from './component/code.vue'
import { mapState } from 'vuex';
export default{
    components:{
        Componentcode
    },
    computed:{
        ...mapState({
            item: "item"
        })
    }
}
</script>