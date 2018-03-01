<template>
	<div id="cart">
		<mt-header :title="msg">
		  
		</mt-header>
		<div style="height: 2.62rem;"></div>
		<main>
			<div v-if="isTrue">
				<div class="empty">
					<i class="iconfont icon-gouwuche"></i>
					<p>购物车还是空的哦，快快行动吧~</p>
					<button class="btn1">去逛逛</button>
					<button class="btn2">我的收藏</button>
				</div>
			</div>
			<div v-else>
				<div v-for="(data,index) in goodsList">
					<div class="exist">
						<div class="existTop">
							<input type="checkbox" />
							<i class="iconfont icon-xiangqingyeshangpu"></i>
							<span>{{data.shop}}</span>
							<i class="iconfont icon-jiantou"></i>
						</div>
						<div class="existCon">
							<input type="checkbox" />
							<img :src="data.picUrl"/>
							<div class="existConM">
								<h2>{{data.title}}</h2>
								<h4>{{data.des}}</h4>
								<div class="shuju">
									<p>{{data.price}}</p>
									<div class="shujuR">
										<button @click="minus(index)">-</button>
										<input type="text" v-model="data.amount" />
										<button @click="add(index)">+</button>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>
				<div class="jiesuan">
					<div class="jiesuanL">
						<input type="checkbox" id="quanxuan"/>
						<label for="quanxuan">全选</label>
					</div>
					<div class="jiesuanM">
						<h4>合计：￥{{total}}</h4>
						<p>不含运费</p>
					</div>
					<button>去结算({{heji}})</button>
				</div>
			</div>
		</main>
		<div style="height: 5.2rem;"></div>
		<footer>
			<ul>
				<router-link to="/"><i class="iconfont icon-weibiaoti1"></i><span>首页</span></router-link>
				<router-link to="/cart" class="currLi"><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link>
				<router-link to="/quan"><i class="iconfont icon-linedesign-13"></i><span>圈子</span></router-link>
				<router-link to="/message"><i class="iconfont icon-xiaoxi"></i><span>消息</span></router-link>
				<router-link to="/mine"><i class="iconfont icon-wode"></i><span>我的</span></router-link>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default {
		name:"Cart",
		data(){
			return{
				msg:"购物车",
				isTrue:true,
				goodsList:[],
				mount:1,
				total:0.00,
				amounts:0
			}
		},
		methods:{
			minus(index){
				this.mount=this.goodsList[index].amount
				if(this.mount<=1){
					this.mount=1
					this.goodsList[index].amount=this.mount
				}else{
					this.mount-=1
					this.goodsList[index].amount=this.mount
				}
				var products=JSON.stringify(this.goodsList)
				localStorage.setItem("goods",products)
			},
			add(index){
				this.mount=this.goodsList[index].amount
				this.mount+=1
				this.goodsList[index].amount=this.mount
				var products=JSON.stringify(this.goodsList)
				localStorage.setItem("goods",products)			
			}
		},
		computed:{
			heji(){
				
			}
		},
		beforeMount(){
			var _products=JSON.parse(localStorage.getItem("goods")) || [];
			
			if(_products.length>0){
				this.isTrue=false
			}else{
				this.isTrue=true
			}
			this.goodsList=_products
			console.log(this.goodsList)
		}
	}
</script>

<style scoped lang="scss">
	/*头部*/
	#cart{
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
	main{
		width: 100%;
		/*无商品时的样式*/
		.empty{
			width: 100%;
			text-align:center;
			i{
				display: inline-block;
				font-size: 2.35rem !important;
				padding: 1.4rem;
				border: 1px solid #d8d8d8;
				border-radius: 100%;
				background: white;
				color: #d8d8d8;
				margin-top: 5.75rem;
				margin-bottom: 2.2rem;
			}
			p{
				font-size: 0.7rem;
				color: #666;
				margin-bottom: 1.7rem;
			}
			button{
				width: 5.25rem;
				height: 1.57rem;
				background: none;
				border: 1px solid #ea3e51;
				border-radius: 0.77rem;
				font-size: 0.75rem;
			}
			.btn1{
				color: white;
				background: #ea3e51;
			}
			.btn2{
				color: #ea3e51;
				background: white;
			}
		}
		/*有商品时的样式*/
		.exist{
			width: 100%;
			height: 9rem;
			border-top: 1px solid #d7d7d7;
			margin-bottom: 0.57rem;
			background-color: #fafafa;
			.existTop{
				width: 100%;
				height: 2.2rem;
				background-color: white;
				display: flex;
				align-items: center;
				input{
					margin-left: 1.2rem;
					width: 1rem;
					height: 1rem;
				}
				i{
					margin-left: 0.5rem;
					font-size: 0.8rem !important;
					color: #737373;
				}
				span{
					font-size: 0.65rem;
					color: #181818;
					margin-left: 0.6rem;
				}
			}
			.existCon{
				width: 100%;
				height: 6.75rem;
				display: flex;
				align-items: center;
				input{
					margin-left: 1.2rem;
					margin-right: 0.57rem;
					width: 1rem;
					height: 1rem;
				}
				img{
					display: block;
					width: 4.7rem;
					height: 4.7rem;
					margin-right: 0.8rem;
				}
				.existConM{
					width: 9.9rem;
					height: 4.7rem;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					h2{
						font-size: 0.7rem;
						color: #3b3b3b;
					}
					h4{
						font-size: 0.57rem;
						color: #bcbcbc;
					}
					.shuju{
						width: 100%;
						height: 1.25rem;
						display: flex;
						align-items: center;
						justify-content: space-between;
						p{
							color: #e93045;
							font-size: 0.5rem;
						}
						.shujuR{
							display: flex;
						}
						button{
							width: 1.35rem;
							height: 1.25rem;
							background: none;
							border: 1px solid #979797;
							color: #b0b0b0;
							font-size: 1.2rem;
						}
						input{
							width: 1.85rem;
							height: 1.25rem;
							background: none;
							border: 1px solid #979797;
							font-size: 0.45rem;
							text-align: center;
							margin: 0;
						}
					}
				}
			}
		}
		.jiesuan{
			width: 100%;
			height: 2.6rem;
			background: white;
			position: fixed;
			bottom: 2.6rem;
			left: 0;
			display: flex;
			align-items: center;
			.jiesuanL{
				margin-left: 1.17rem;
				input{
					width: 1rem;
					height: 1rem;
				}
				label{
					font-size: 0.65rem;
					color: #7c7c7c;
				}
			}
			.jiesuanM{
				margin-left: 1.7rem;
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				h4{
					font-size: 0.75rem;
					color: #323232;
				}
				p{
					color: #b6b6b6;
					font-size: 0.5rem;
				}
			}
			button{
				border: none;
				background: #ea3e51;
				color: white;
				font-size: 0.75rem;
				width: 5.2rem;
				height: 1.55rem;
				border-radius: 0.75rem;
				margin-right: 0.75rem;
			}
		}
	}
</style>