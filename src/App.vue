<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
	import HelloWorld from "@/components/HelloWorld"
	
export default {
  name: 'App',
  components:{ HelloWorld }
}
</script>

<style lang="scss">
	#app{
		height: 100%;
	}
	/*尾部*/
	footer{
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 999;
		background: #fafafa;
	}
	footer ul{
		width: 100%;
		height: 2.6rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		a{
			display: flex;
			font-size: 0.7rem;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			color: #666;
			i{
				margin-bottom: 0.25rem;
				font-size: 0.95rem !important;
			}
		}
		.currLi{
			color: #ea3e51;
		}
	}
</style>
