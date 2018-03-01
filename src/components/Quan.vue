<template>
	<div id="quanzi">
		
			<mt-swipe :auto="3000" style="height: 7.95rem;">
			  <mt-swipe-item><img src="static/img/banner1.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="static/img/banner2.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="static/img/banner3.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="static/img/banner4.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="static/img/banner5.jpg"/></mt-swipe-item>
			</mt-swipe>
			<div class="choose">
				<swiper :options="swiperOption">
					 <swiper-slide><button>知识库</button></swiper-slide>
					 <swiper-slide><button>肉盆秀秀</button></swiper-slide>
					 <swiper-slide><button>经验分享</button></swiper-slide>
					 <swiper-slide><button>比丑搞笑</button></swiper-slide>
					 <swiper-slide><button>成长日记</button></swiper-slide>
					 <swiper-slide><button>动手DIY</button></swiper-slide>
					 <swiper-slide><button>秀美图</button></swiper-slide>
					 <swiper-slide><button>你问我答</button></swiper-slide>
				</swiper>
			</div>
			<p class="hotQ">热门圈子</p>
			<div class="hotQB">
				<button>经验分享</button>
				<button>动手DIY</button>
				<button>秀美图</button>
				<button>你问我答</button>
			</div>
			<p class="hotQ">热门文章</p>
			<div class="content">
				<div class="cBox" v-for="(info,index) in datalist">
					<div class="cBoxL">
						<h4>{{info.shop}}</h4>
						<p>{{info.title}}</p>
						<button>{{info.show}}</button>
						<span>阅读<b>{{info.read}}</b>评论<b>{{info.pl}}</b>喜欢<b>{{info.like}}</b></span>
					</div>
					<div class="cBoxR">
						<img :src="info.imgUrl"/>
					</div>
				</div>
			</div>
	
		<div style="height: 2.6rem;"></div>
		<footer>
			<ul>
				<router-link to="/"><i class="iconfont icon-weibiaoti1"></i><span>首页</span></router-link>
				<router-link to="/cart"><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link>
				<router-link to="/quan" class="currLi"><i class="iconfont icon-linedesign-13"></i><span>圈子</span></router-link>
				<router-link to="/message"><i class="iconfont icon-xiaoxi"></i><span>消息</span></router-link>
				<router-link to="/mine"><i class="iconfont icon-wode"></i><span>我的</span></router-link>
			</ul>
		</footer>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	import axios from 'axios'
	export default {
		name:"Quan",
		components:{swiper,swiperSlide},
		data(){
			return {
				swiperOption: {
		          slidesPerView: 4,
		          spaceBetween: 30,
		          freeMode: true,
		        },
		        datalist:[],

			}
		},
		mounted(){
			axios({
		  		method:"get",
		  		responseType: 'json',
		  		url:"static/mock/goods.json"
		  	}).then((data)=>{
		  		this.datalist=data.data.data2;
		  	})
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#quanzi{
		height: 100%;
		width: 18.75rem;
	}
	.mint-swipe-item img{
		height: 100%;
	}
	.choose{
		height: 2.75rem;
		width: 100%;
	}
	.swiper-slide{
		button{
			width: 4.75rem;
			height: 1.7rem;
			border: none;
			border-radius: 0.2rem;
			color: white;
			font-size: 0.7rem;
			margin-top: 0.45rem;
			
		}
		&:nth-child(1) button{
			background: #c79efe;
		}
		&:nth-child(2) button{
			background: #febb50;
		}
		&:nth-child(3) button{
			background: #f69581;
		}
		&:nth-child(4) button{
			background: #c1e4de;
		}
		&:nth-child(5) button{
			background: #b7d6ec;
		}
		&:nth-child(6) button{
			background: #c79efe;
		}
		&:nth-child(7) button{
			background: #febb50;
		}
		&:nth-child(8) button{
			background: #f69581;
		}
	}
	.hotQ{
		width: 96%;
		height: 0.87rem;
		margin-left: 0.72rem;
		margin-top: 0.45rem;
		font-size: 0.7rem;
		color: #929292;
		padding-left: 0.35rem;
		border-left: 0.1rem solid #e87665;
		line-height: 0.87rem;
	}
	.hotQB{
		margin-top: 1.05rem;
		margin-left: 0.72rem;
		height: 1.62rem;
		margin-bottom: 0.8rem;
		button{
			box-sizing: content-box;
			height: 100%;
			padding: 0 0.42rem;
			background: none;
			border: 1px solid #E87665;
			color: #E87665;
			font-size: 0.7rem;
			margin-right: 0.37rem;
			border-radius: 0.3rem;
		}
	}
	.cBox{
		width: 18.75rem;
		height: 6.25rem;
		border-bottom: 1px solid #eeeeee;
		display: flex;
		align-items: center;
		justify-content: center;
		.cBoxL{
			width:12.25rem;
			h4{
				font-size: 0.7rem;
				font-weight: normal;
				color: #262926;
				margin-bottom: 0.65rem;
			}
			p{
				font-size: 0.8rem;
				color: #262926;
				margin-bottom: 1rem;
			}
			button{
				box-sizing: content-box;
				background: none;
				border: 1px solid #E87665;
				color: #E87665;
				font-size: 0.65rem;
				padding: 0 0.25rem;
				height: 1.2rem;
				border-radius: 0.2rem;
			}
			span{
				font-size: 0.62rem;
				color:#939293;
			}
		}
		.cBoxR{
			width: 4.65rem;
			height: 4.65rem;
			img{
				width: 100%;
			}
		}
	}
</style>