<template>
	<div id="register">
		<mt-header :title="msg">
		  <router-link to="/login" slot="left" v-if="isTrue">
		  	<mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div style="height: 2.62rem;"></div>
		<p class="user"><span>+86</span><input type="text" v-model="num" placeholder="请输入11位手机号"/></p>
		<p class="psw"><span>密码</span><input type="password" v-model="psw" placeholder="密码6~16位数字或字母，区分大小写"/></p>
		<button class="regist" @click="regist">注册并登录</button>
		
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		name:"Register",
		data(){
			return {
				msg:"注册",
				isTrue:true,
				num:"",
				psw:""
			}
		},
		methods:{
			regist(){
				var user=this.num;
				var psw=this.psw;
				console.log(user)
				console.log(psw)
			axios.get("http://datainfo.duapp.com/shopdata/userinfo.php",{params:{status:"register", userID:user, password:psw }} ).then((data)=>{
					console.log(data);
					console.log(typeof data);
					this.$router.push("/login")
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#register{
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
	.user{
		margin: 0 auto;
		margin-top: 2.22rem;
		width: 17.5rem;
		height: 1.6rem;
		span{
			font-size: 0.55rem;
			color: #2e2e2e;
			float: left;
			line-height: 1.6rem;
		}
		input{
			width: 14.9rem;
			height: 1.6rem;
			background: none;
			border: none;
			border-bottom: 1px solid #e8e7e5;
			font-size: 0.7rem;
			float: right;
		}
	}
	.psw{
		@extend .user;
		margin-top: 1.37rem;
	}
	.regist{
		display: block;
		background: #ea3e51;
		width: 12.55rem;
		height: 2.25rem;
		font-size: 0.7rem;
		border: none;
		border-radius: 1.12rem;
		color: white;
		margin: 0 auto;
		margin-top: 1.57rem;
		box-shadow: 0px 3px 8px #333333;
	}
</style>
