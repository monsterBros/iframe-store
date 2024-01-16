<template>
		<div>我是props
			<el-input type="text" v-model="item.text"></el-input>
		</div>
    
</template>
<script>
export default{
  props: ["item"]
}
</script>