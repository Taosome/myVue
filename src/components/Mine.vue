<template>
	<div id="mine">
		<!--顶部-->
		<div class="top">
			<!--顶部第一部分-->
			<div class="topO">
				<div class="topOL">
					<img src="static/img/wo1.png"/>
				</div>
				<div class="topOR">
					<h3>{{userName}}</h3>
					<p><button>余额·积分</button><span>0.00</span></p>
				</div>
			</div>
			<!--顶部第二部分-->
			<ul class="topT">
				<li><i class="iconfont icon-tongzhi"></i><span>通知</span></li>
				<li @click="quit"><i class="iconfont icon-shezhi"></i><span>设置</span></li>
			</ul>
		</div>
		<!--商铺部分-->
		<div class="shop">
			<ul class="shopL">
				<li><i class="iconfont icon-wujiaoxing"></i><span>商品收藏</span></li>
				<li><i class="iconfont icon-xiangqingyeshangpu"></i><span>店铺收藏</span></li>
			</ul>
			<div class="shopR">
				<i class="iconfont icon-huihuaban"></i>
				<span>我的圈子</span>
			</div>
		</div>
		<!--我的订单-->
		<div class="myList">
			<p>我的订单</p>
			<span>查看全部订单<i class="iconfont icon-jiantou"></i></span>
		</div>
		<!--swiper-->
		<div class="func">
			<swiper :options="swiperOption">
				 <swiper-slide><p><i class="iconfont icon-tuangou"></i><span>待成团</span></p></swiper-slide>
				 <swiper-slide><p><i class="iconfont icon-daifukuan"></i><span>待付款</span></p></swiper-slide>
				 <swiper-slide><p><i class="iconfont icon-daifahuo"></i><span>待发货</span></p></swiper-slide>
				 <swiper-slide><p><i class="iconfont icon-daishouhuo"></i><span>待收货</span></p></swiper-slide>
				 <swiper-slide><p><i class="iconfont icon-daipingjia"></i><span>待评价</span></p></swiper-slide>
				 <swiper-slide><p><i class="iconfont icon-tuikuan"></i><span>退款/售后</span></p></swiper-slide>
			</swiper>
		</div>
		<div style="height: 0.5rem;background: #f4f4f4;"></div>
		<div class="tool">
			常用工具
		</div>
		<ul class="tools">
			<li><i class="iconfont icon-kaidianicon"></i><span>申请开店</span></li>
			<li><i class="iconfont icon-publish"></i><span>发布商品</span></li>
			<li><i class="iconfont icon-shuben"></i><span>卖家宝典</span></li>
			<li><i class="iconfont icon-anquan"></i><span>账号安全</span></li>
			<li><i class="iconfont icon-dizhi-01"></i><span>收货地址</span></li>
			<li><i class="iconfont icon-wodebangzhuzhongxin"></i><span>帮助中心</span></li>
			<li><i class="iconfont icon-icon"></i><span>问题反馈</span></li>
			<li><i class="iconfont icon-guanyuwomen"></i><span>关于我们</span></li>
		</ul>
		<div style="height: 2.6rem;"></div>
		<footer>
			<ul>
				<router-link to="/"><i class="iconfont icon-weibiaoti1"></i><span>首页</span></router-link>
				<router-link to="/cart"><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link>
				<router-link to="/quan"><i class="iconfont icon-linedesign-13"></i><span>圈子</span></router-link>
				<router-link to="/message"><i class="iconfont icon-xiaoxi"></i><span>消息</span></router-link>
				<router-link to="/mine" class="currLi"><i class="iconfont icon-wode"></i><span>我的</span></router-link>
			</ul>
		</footer>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	export default{
		name:"Mine",
		components:{swiper,swiperSlide},
		data(){
			return {
				userName:"请登录",
				swiperOption: {
		          slidesPerView: 5,
		          spaceBetween: 20,
		          freeMode: true,
		       }
			}
		},
		methods:{
			showOrPush(){
				if(localStorage.getItem("user")){
					this.userName=localStorage.getItem("user");
				}else{
					this.$router.push("/login");
				}
			},
			quit(){
				localStorage.clear();
				window.location.reload();
			}
		},
		created(){
			this.showOrPush()
		}
	}
	
</script>

<style scoped="scoped" lang="scss">
	#mine{
		height: 100%;
		.top{
			width: 100%;
			height: 8.3rem;
			background-color: #277dfe;
			.topO{
				width: 100%;
				height: 5.62rem;
				border-bottom: 1px solid #33a4fc;
				display: flex;
				justify-content: flex-start;
				.topOL{
					width: 3.7rem;
					height: 3.7rem;
					margin-left: 1.07rem;
					margin-top:1.37rem ;
					img{
						width: 100%;
					}
				}
				.topOR{
					height: 2.62rem;
					margin-top: 1.9rem;
					margin-left: 0.75rem;
					h3{
						font-size: 0.9rem;
						color: white;
					}
					p{
						margin-top: 0.65rem;
						button{
							box-sizing: content-box;
							background: none;
							border: 1px solid white;
							height: 1.07rem;
							padding: 0 0.55rem;
							border-radius: 0.55rem;
							font-size: 0.5rem;
							color: white;
							
						}
						span{
							font-size: 0.45rem;
							color: white;
							margin-left: 2.17rem;
						}
					}
				}
			}
			.topT{
				width: 100%;
				display: flex;
				height: 2.65rem;
				li{
					width: 50%;
					display: flex;
					padding: 0 2.62rem;
					align-items: center;
					justify-content: center;
					color: white;
					font-size: 0.6rem;
					i{
						margin-right: 0.85rem;
						font-size: 0.9rem !important;
					}
				}
			}
		}
		.shop{
			width: 100%;
			height: 3.45rem;
			display: flex;
			.shopL{
				width: 10.65rem;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: space-around;
				padding-right: 1.87rem;
				li{
					height: 100%;
					width: 50%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					font-size: 0.6rem;
					color: #5b5b5b;
					i{
						font-size: 1rem;
						margin-bottom: 0.6rem;
					}
				}
			}
			.shopR{
				width: 6rem;
				height: 2.3rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 0.72rem;
				padding: 0 0.57rem;
				border-left: 1px solid #929292;
				color: #666666;
				font-size: 0.7rem;
				i{
					font-size: 1.57rem;
				}
			}
		}
		.myList{
			height: 2.25rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 0 0.7rem;
			font-size: 0.7rem;
			border-bottom: 1px solid #f9f9f9;
			border-top: 1px solid #f9f9f9;
			p{
				color: #484848;
			}
			span{
				color: #b4b4b4;
				i{
					margin-left: 0.42rem;
				}
			}
		}
		.func{
			width: 100%;
			height: 3.45rem;
			.swiper-container{
				height: 100%;
			}
			p{
				height: 100%;
				padding: 0.5rem 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				font-size: 0.6rem;
				color: #5d5d5d;
				i{
					font-size: 0.85rem;
					color: #acacac;
				}
			}
		}
		.tool{
			height: 2.55rem;
			border-bottom: 1px solid #f1f1f7;
			line-height: 2.55rem;
			font-size: 0.75rem;
			color: #242424;
			padding-left: 0.75rem;
		}
		.tools{
			width: 100%;
			height: 8.87rem;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			li{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 25%;
				height: 50%;
				font-size: 0.6rem;
				color: #4b4b4b;
				i{
					font-size: 1.3rem;
					margin: 0.4rem;
				}
				&:nth-child(1) i{
					color: #0089d5;
				}
				&:nth-child(2) i{
					color: #fc005f;
				}
				&:nth-child(3) i{
					color: #8f2287;
				}
				&:nth-child(4) i{
					color: #75dcff;
				}
				&:nth-child(5) i{
					color: #f95d11;
				}
				&:nth-child(6) i{
					color: #14247a;
				}
				&:nth-child(7) i{
					color: #006fcd;
				}
				&:nth-child(8) i{
					color: #d61000;
				}
			}
		}
	}
</style>