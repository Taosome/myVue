<template>
	<div id="message">
		<mt-header :title="msg">
		  
		</mt-header>
		<footer>
			<ul>
				<router-link to="/"><i class="iconfont icon-weibiaoti1"></i><span>首页</span></router-link>
				<router-link to="/cart"><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link>
				<router-link to="/quan"><i class="iconfont icon-linedesign-13"></i><span>圈子</span></router-link>
				<router-link to="/message" class="currLi"><i class="iconfont icon-xiaoxi"></i><span>消息</span></router-link>
				<router-link to="/mine"><i class="iconfont icon-wode"></i><span>我的</span></router-link>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default{
		name:"Message",
		data(){
			return {
				msg:"消息"
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	/*头部*/
	#message{
		height: 100%;
		background: #f2f2f2;
	}
	.mint-header{
		width: 100%;
		height: 2.62rem;
		background: white;
		color: #252525;
		position: fixed;
		top: 0;
		font-size: 0.9rem;
	}
</style>