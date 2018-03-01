<template>
	<div id="login">
		<mt-header :title="msg">
		  <router-link to="/" slot="left" v-if="isTrue">
		  	<mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div style="height: 2.62rem;"></div>
		<img src="static/img/lo1.png" class="avatar"/>
		<p class="user"><input type="text" v-model="num" placeholder="手机号"/></p>
		<p class="psw"><input type="password" v-model="psw" placeholder="密码"/></p>
		<a href="#" class="forget">忘记密码？</a>
		<button class="login" @click="login">登录</button>
		<button class="regist" @click="toRegist">注册</button>
		<p class="dsf">—————使用第三方账户登录—————</p>
		<div class="wqw">
			<img src="static/img/wx.png"/>
			<img src="static/img/qq.png"/>
			<img src="static/img/wb.png"/>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:"Login",
		data(){
			return {
				msg:"登录",
				isTrue:true,
				num:"",
				psw:""
			}
		},
		methods:{
			login(){
				var user=this.num;
				var psw=this.psw;
				axios.get("http://datainfo.duapp.com/shopdata/userinfo.php",{ params:{status:"login", userID:user, password:psw } }).then((data)=>{
					localStorage.setItem("user",data.data[1])
					this.$router.push("/")
				})
			},
			toRegist(){
				this.$router.push("/register")
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#login{
		height: 100%;
		background: white;
	}
	.mint-header{
		width: 100%;
		height: 2.62rem;
		background: #f2f3ee;
		color: #252525;
		position: fixed;
		top: 0;
		font-size: 0.9rem;
	}
	.avatar{
		display: block;
		margin: 0 auto;
		margin-top: 1.62rem;
		width: 3.55rem;
	}
	.user{
		margin: 0 auto;
		margin-top: 2.22rem;
		width: 13.62rem;
		height: 2.35rem;
		input{
			width: 100%;
			height: 100%;
			background: none;
			border: none;
			border-bottom: 1px solid #e8e7e5;
			font-size: 0.7rem;
			&::-webkit-input-placeholder{
			    color: #b9bab6;
			}
		}
	}
	.psw{
		@extend .user;
		margin-top: 0.95rem;
	}
	.forget{
		float: right;
		margin-top: 0.7rem;
		margin-right: 3rem;
		font-size: 0.7rem;
		color: #e93549;
	}
	.login{
		display: block;
		background: #ea3e51;
		width: 12.55rem;
		height: 2.25rem;
		font-size: 0.7rem;
		border: none;
		border-radius: 1.12rem;
		color: white;
		margin: 0 auto;
		margin-top: 2.6rem;
		box-shadow: 0px 3px 8px #333333;
	}
	.regist{
		@extend .login;
		background: white;
		color: #262626;
		border: 1px solid #e0dfdd;
		margin-top: 0.5rem;
	}
	.dsf{
		margin: 0 auto;
		margin-top: 2.05rem;
		font-size: 0.7rem;
		color: #989898;
		text-align: center;
	}
	.wqw{
		width: 12.55rem;
		height: 2.55rem;
		margin: 0 auto;
		margin-top: 1.65rem;
		display: flex;
		justify-content: space-around;
		img{
			height: 100%;
		}
	}
</style>