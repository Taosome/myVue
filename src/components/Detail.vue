<template>
	<div id="detail">
		<div class="top">
			<img :src="picUrl"/>
			<!--顶部回退按钮-->
			<div class="topOp">
				<button class="back" @click="backTo"><i class="iconfont icon-jiantou2"></i></button>
				<button class="gwc"><i class="iconfont icon-tubiaolunkuo-"></i></button>
				<button class="caidan"><i class="iconfont icon-shixincaidan"></i></button>
			</div>
		</div>
		<div class="title">
			<h4>{{title}}</h4>
		</div>
		<div class="price">
			<p><span>{{price}}</span><i class="iconfont icon-shoucang"></i></p>
		</div>
		<div class="info">
			<p><span>{{address}}</span><span>{{way}}</span><span>销量{{sale}}</span></p>
		</div>
		<div class="fahuo">
			<p><span>72小时发货</span><span>包损</span></p>
		</div>
		<div style="height: 2.5rem;width: 100%;"></div>
		<div class="detailFoot">
			<dl>
				<dt><i class="iconfont icon-kefu"></i></dt>
				<dd>客服</dd>
			</dl>
			<dl>
				<dt><i class="iconfont icon-xiangqingyeshangpu"></i></dt>
				<dd>进店</dd>
			</dl>
			<button @click="addCart">加入购物车</button>
			<button @click="addCart">立即购买</button>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		name:"detail",
		data(){
			return{
				id:"",
				picUrl:"",
				title:"",
				price:"",
				address:"",
				way:"",
				sale:"",
				shop:"",
				des:"",
				amount:1
			}
		},
		methods:{
			
			filters(){
				var goodID=this.$route.params.id;
				//console.log(goodID);
				axios({
			  		method:"get",
			  		responseType: 'json',
			  		url:"static/mock/goods.json"
			  }).then((data)=>{
			  		var good=data.data.data1
			  		good.forEach((datas,index,good)=>{
			  			if(goodID==datas.id){
			  				this.id=datas.id;
			  				this.picUrl=datas.imgUrl;
			  				this.title=datas.title;
			  				this.price=datas.price;
			  				this.address=datas.address;
			  				this.way=datas.way;
			  				this.sale=datas.sale;
			  				this.shop=datas.shop;
			  				this.des=datas.des;
			  			}
			  		})
			  	})
			},
			backTo(){
				window.history.back();
			},
			addCart(){
				var product={
					id:this.id,
					title:this.title,
					picUrl:this.picUrl,
					price:this.price,
					amount:this.amount,
					shop:this.shop,
					des:this.des
				}
				console.log(product);
				var _products=JSON.parse(localStorage.getItem("goods")) || [];
				function exist(id,products){
					for (var i = 0; i < products.length; i++) {
						if (products[i].id == id)
							return i;
					}
					return -1;
				}
				var index=exist(product.id,_products);
				if(index!==-1){
					_products[index].amount++;
				}else{
					_products.push(product);
				}
				console.log(_products);
				var products=JSON.stringify(_products)
				localStorage.setItem("goods",products)
				console.log(localStorage.getItem("goods"))
			}
			
		},
		mounted(){
			this.filters();
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#detail{
		height: 100%;
		background: white;
	}
	.top{
		width: 100%;
		height: 19.52rem;
		img{
			width: 100%;
			height: 100%;
		}
		.topOp{
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			height: 2.25rem;
			display: flex;
			align-items: center;
			button{
				width: 1.8rem;
				height: 1.8rem;
				border: none;
				background: #808279;
				opacity: 0.7;
				border-radius: 100%;
				i{
					color: white;
				}
			}
			.back{
				margin-left: 0.72rem;
			}
			.gwc{
				margin-left: 11.47rem;
				margin-right: 0.6rem;
			}
		}
	}
	.title{
		height: 3.25rem;
		color: #313131;
		font-size: 0.8rem;
		display: flex;
		align-items: center;
		padding: 0 0.7rem;
		line-height: 1rem;
	}
	.price{
		height: 2.15rem;
		padding-left: 0.95rem;
		padding-right: 0.75rem;
		border-bottom: 1px solid #f5f5f8;
		p{
			display: flex;
			align-items: center;
			justify-content: space-between;
			span{
				color: #ea3c4f;
				font-size: 0.75rem;
			}
			i{
				font-size: 0.87rem;
			}
		}
	}
	.info{
		height: 3.12rem;
		display: flex;
		align-items: center;
		p{
			font-size: 0.7rem;
			color: #2c2c2c;
			span{
				&:first-child{
					margin-left: 0.7rem;
					margin-right: 1.12rem;
				}
				&:last-child{
					margin-left: 8.9rem;
				}
			}
		}
	}
	.fahuo{
		height: 1.55rem;
		display: flex;
		align-items: center;
		p{
			font-size: 0.7rem;
			color: #2c2c2c;
			margin-left: 0.7rem;
			span{
				&:first-child{
					margin-right: 0.7rem;
				}
			}
			
		}
	}
	/*底部*/
	.detailFoot{
		position: fixed;
		bottom: 0;
		height: 2.5rem;
		border-top: 1px solid #f5f5f8;
		width: 100%;
		display: flex;
		align-items: center;
		dl{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			font-size: 0.52rem;
			color: #7f7f7f;
			&:first-of-type{
				margin-left: 1.6rem;
				margin-right: 1.65rem;
			}
			dt{
				i{
					font-size: 0.97rem !important;				}
			}
		}
		button{
			border: none;
			background: none;
			border: 1px solid #e72339;
			border-radius: 0.75rem;
			font-size: 0.7rem;
			width: 5.25rem;
			height: 1.55rem;
			&:first-of-type{
				color: #e72339;
				margin-left: 1.07rem;
				margin-right: 0.7rem;
			}
			&:last-of-type{
				color: white;
				background: #ea3e51;
			}
		}
	}
</style>