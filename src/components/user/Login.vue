<template>
  <transition :name="transitionName">
    <div class="login child-view-search">
    	<div @click="goBack" class="return"><i class="icon-circle-left"></i></div>
        <div>
            <h3>用户登录界面</h3>
        </div>
        <div class="form">
        	<div>
	            <label for="username">用户名：</label>
	            <input v-model="username" v-validate="'required'" name="username" placeholder="请输入账号" type="text">
							<p>{{ errors.first('username') }}</p>
	        </div>
	        <div>
	            <label for="password">密&#x3000;码：</label>
	            <input v-model="password" v-validate="'required'" name="password" placeholder="请输入密码" type="password">
              <p>{{ errors.first('password') }}</p>
	        </div>
	        <div class="submit">
	            <button @click="submit">登录</button>
              <router-link to="/register">没有账号？去注册</router-link>
	        </div>
        </div>
        
    </div>
  </transition>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import bus from '../../assets/js/bus.js'
  import qs from 'qs'
  export default {
    data () {
      return {
        transitionName: 'slide-left',
        username:'',
        password:'',
        isLogin:true
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    },
    methods: {
      goBack () {
        this.$router.goBack()
      },
      submit(){
        let username = this.username;
        let password = this.password;
        let obj = {
          username,password
        }
        this.$axios.post('/api/login',qs.stringify(obj)).then(res=>{
          // console.log(res.data)
          if(res.data.status === 1){
            alert(res.data.msg)
            this.$router.push('/mine')
          }
          if(res.data.status === 0){
            alert(res.data.msg)
            this.$router.push('/login')
          }
          if(res.data.status === 2){
            alert(res.data.msg)
            this.$router.push('/login')
          }
        })
      }
    },
    destroyed(){
      bus.$emit("login",this.isLogin)
    }
  }
</script>

<style lang="less" scoped>
  .child-view-search {
    position: absolute;
    width: 100%;
    transition: all .8s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .login {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fb7299;
    z-index: 50;
    text-align: center;
    padding: 0 5px;
    .return {
      position: absolute;
      top: 12px;
      font-size: 20px;
      margin: 8px 0 0 12px;
      color: white;
    }
    h3{
      color: white;
      margin-top: 20px;
    	margin-bottom: 50px;
    }
    .form{
    	background-color: white;
    	border-radius: 10px;
    	padding: 20px 15px;
    	div{
    		margin: 10px 0;
    	}
    	input{
    		border: 1px solid rgba(0,0,0,35%);
    		padding: 5px;
    		outline: none;
    	}
    	.submit{
    		margin-top: 50px;
    		a{
    			float: right;
    			margin-top: 10px;
    			text-decoration: none;
    		}
    	}
    	.submit button{
        border: none;
    		padding: 5px 0;
    		width: 100px;
    	}
    }
  }
</style>
