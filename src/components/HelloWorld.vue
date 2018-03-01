<template>
	<div id="hello">
		<!--头部搜索栏-->
		<div class="search" style="height: 2.3rem;">
			<p><i class="iconfont icon-fenlei"></i><span>分类</span></p>
			<input type="text" id="searchThing" v-model="value" placeholder="请输入商品、店铺名称"/><i class="iconfont icon-sousuo"></i>
			<p><i class="iconfont icon-tongzhi"></i><span>通知</span></p>
		</div>
		<div style="height: 2.3rem;"></div>
		<mt-loadmore :top-method="loadTop"
　　　　:bottom-method="loadBottom"
　　　　:bottom-all-loaded="allLoaded"
　　　　ref="loadmore">
			<main>
				<!--轮播图-->
				<mt-swipe :auto="3000" style="height: 7.85rem;">
				  <mt-swipe-item><img src="static/img/banner1.jpg"/></mt-swipe-item>
				  <mt-swipe-item><img src="static/img/banner2.jpg"/></mt-swipe-item>
				  <mt-swipe-item><img src="static/img/banner3.jpg"/></mt-swipe-item>
				  <mt-swipe-item><img src="static/img/banner4.jpg"/></mt-swipe-item>
				  <mt-swipe-item><img src="static/img/banner5.jpg"/></mt-swipe-item>
				</mt-swipe>
				<!--分类-->
				<ul class="fenlei">
					<li><i class="iconfont icon-icon-test"></i><span>多肉</span></li>
					<li><i class="iconfont icon-penzai"></i><span>透气盆</span></li>
					<li><i class="iconfont icon-zan"></i><span>团购</span></li>
					<li><i class="iconfont icon-shuinixingye"></i><span>专用土</span></li>
				</ul>
				<!--yiwu-->
				<div class="yiwu">
					<img src="static/img/index/pageone_02.jpg"/>
				</div>
				<div class="ad">
					<div class="adLeft">
						<img src="static/img/index/pageone_03.jpg"/>
					</div>
					<div class="adRight">
						<img src="static/img/index/pageone_06.jpg"/>
						<img src="static/img/index/pageone_08.jpg"/>
					</div>
				</div>
				<div class="shier">
					<img src="static/img/index/pageone_11.jpg"/>
				</div>
				<a href="#" class="aImg">
					<img src="static/img/index/pageone_12.jpg"/>
				</a>
				<p class="super">
					<img src="static/img/index/super.png"/>特别推荐
				</p>
				<!--商品部分-->
				<ul class="goodsBox" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
  infinite-scroll-distance="5">
					<li v-for="(info,index) in datalists" @click="goto_detail(info.id)">
						<img :src="info.imgUrl"/>
						<span>{{info.title}}</span>
					</li>
				</ul>
			</main>
		</mt-loadmore>
		<div style="height: 2.6rem;"></div>
		<footer>
			<ul>
				<router-link to="/" class="currLi"><i class="iconfont icon-weibiaoti1"></i><span>首页</span></router-link>
				<router-link to="/cart"><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link>
				<router-link to="/quan"><i class="iconfont icon-linedesign-13"></i><span>圈子</span></router-link>
				<router-link to="/message"><i class="iconfont icon-xiaoxi"></i><span>消息</span></router-link>
				<router-link to="/mine"><i class="iconfont icon-wode"></i><span>我的</span></router-link>
			</ul>
		</footer>
	</div>
</template>

<script>
	import axios from 'axios'
export default {
  name: 'HelloWorld',
  data(){
  	return{
  		value:"",
  		datalist:[],
  		datalists:[],
  		allLoaded:false,
  		num:0
  	}
  },
  methods:{
  	goto_detail(word){
  		this.$router.push({name:'Detail',params:{id:word}})
  		console.log(1)
  	},
  	loadTop(){
  		console.log(2)
  		this.num=0;
		this.getList();
  		this.$refs.loadmore.onTopLoaded();
  	},
  	loadBottom(){
		this.$refs.loadmore.onBottomLoaded();
  	},
  	getList(){
  		axios({
	  		method:"get",
	  		responseType: 'json',
	  		url:"static/mock/goods.json"
	  	}).then((data)=>{
	  		this.datalist=data.data.data1;
//	  		this.datalists=this.datalist;
			let len = this.datalist.length;
			for(let i=0;i<len;i++){
				this.datalists.push(this.datalist[i])
			}
	  	})
  	},
  	loadMore(){
  		this.loading = true;
  		setTimeout(() => {
	  		let len = this.datalist.length;
			for(let i=0;i<len;i++){
				this.datalists.push(this.datalist[i])
			}
		    this.loading = false;
		}, 2000);
  	}
  },
  mounted(){
  	this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#hello{
		width: 100%;

	}
	/*头部搜索*/
	.search{
		background: white;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 0.7rem;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.search p{
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content:center;
		align-items: center;
	}
	.search p span{
		font-size: 0.5rem;
	}
	.search p i{
		font-size: 0.67rem !important;
		margin-bottom: 0.3rem;
	}
	.search input{
		width: 14.37rem;
		height: 1.75rem;
		border: none;
		padding-left: 2rem;
		background:#f5f5f5;
		border-radius: 0.25rem;
	}
	.search .icon-sousuo{
		position: absolute;
		left: 2.8rem;
		top: 0.7rem;
	}

	/*轮播图*/
	.mint-swipe-item img{
		height: 100%;
	}
	/*分类*/
	.fenlei{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 4.2rem;
		width: 100%;
	}
	.fenlei li{
		width: 25%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		font-size: 0.65rem;
		color: #262626;
	}
	.fenlei li i{
		font-size: 0.82rem;
		padding: 0.45rem;
		border: 1px solid #262626;
		border-radius: 100%;
		margin-bottom: 0.5rem;
	}
	/*一物一拍*/
	.yiwu{
		width: 100%;
		height: 6.55rem;
	}
	.yiwu img{
		height: 100%;
	}
	/*广告栏*/
	.ad{
		width: 100%;
		height: 10.95rem;
		display: flex;
		.adLeft{
			width: 50%;
			img{
				width: 100%;
			}
		}
		.adRight{
			width: 50%;
			display: flex;
			flex-direction: column;
			img{
				width: 100%;
			}
		}
	}
	/*十二卷*/
	.shier{
		height: 6.32rem;
		width: 100%;
		img{
			height: 100%;
		}
	}
	.aImg{
		display: block;
		width: 100%;
		height: 11.5rem;
		img{
			height: 100%;
		}
	}
	/*特别推荐*/
	.super{
		display: flex;
		justify-content: center;
		width: 100%;
		height: 1rem;
		font-size: 0.7rem;
		line-height: 1rem;
		color: #ff102f;
		img{
			height: 100%;
			margin-right: 0.3rem;
		}
	}
	/*商品信息*/
	.goodsBox{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		li{
			display: flex;
			height: 11.35rem;
			flex-direction: column;
			align-items: center;
			font-size: 0.65rem;
			color: #161416;
			width: 50%;
			img{
				width: 9.37rem;
				height: 9.45rem;
			}
			span{
				display: block;
				width: 7.9rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				line-height: 1.9rem;
			}
		}
	}
	
</style>
