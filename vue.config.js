const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	pages: {
		home:{
			entry: 'src/pages/home/index.js',
			template: 'public/index.html',
			filename: 'index.html'
		},
		editor:{
			entry: 'src/pages/editor/index.js',
			template: 'public/editor.html',
			filename: 'editor.html'
		},
		prop:{
			entry: 'src/pages/prop/index.js',
			template: 'public/prop.html',
			filename: 'prop.html'
		}
	},
	configureWebpack: {
		resolve: {
		  alias: {
			'vue$': path.resolve(__dirname, 'src/views/alias/vue.js') // 这里将 src 作为别名，@ 表示该路径
		  }
		}
	}
})
