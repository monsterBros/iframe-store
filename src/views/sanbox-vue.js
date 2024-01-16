// import Vue from 'vue'
Function.prototype.$$clone = function () {
	let that = this
	function SandboxVue(){
		return that.apply(this, arguments)
	};

	SandboxVue.prototype = Object.create(this.prototype)
	SandboxVue.prototype.constructor = SandboxVue;

	for(var key in this){
		if(Object.prototype.hasOwnProperty.call(this, key)){
			if(key == 'options'){
				SandboxVue[key] = {
					...this[key],
					components: Object.create(this.options.components),
					destroyed: [],
					mounted: [],
					filters: Object.create(this.options.filters),
					directives: Object.create(this.options.directives),
					_base: SandboxVue
				}
			}else{
				SandboxVue[key] = this[key]
			}
		}
	}
	return SandboxVue
}

export default function sanboxVue(){
	return Vue.$$clone()
}