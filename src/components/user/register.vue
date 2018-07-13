<template>
  <transition :name="transitionName">
    <div class="register child-view-search">
    	<div @click="goBack" class="return"><i class="icon-circle-left"></i></div>
        <div>
            <h3>用户注册界面</h3>
        </div>
        <div class="form">
	          <div>
	          	<label for="username">账&#x3000;号：</label>
				        <input v-model="user.username" v-validate="'required|alpha_num|min:2|max:10'" name="username" placeholder="请输入账号" type="text">
								<p>{{ errors.first('username') }}</p>
				    </div>
	          <div>
	              <label for="sex">性&#x3000;别：</label>
	              <input v-model="user.sex" type="radio" name="sex" id="sex1" value="true">&nbsp;先生
	              <input v-model="user.sex" type="radio" name="sex" id="sex2" value="false">&nbsp;女士
	          </div>
	          <div>
	              <label for="email">邮&#x3000;箱：</label>
								<input v-model="user.email" v-validate="'required|email'" name="email" type="text" placeholder="请输入邮箱">
								<p>{{ errors.first('email') }}</p>
	          </div>
	          <div>
	          	<label for="password">密&#x3000;码：</label>
	              <input v-model="user.password" v-validate="'required|alpha_num|min:6|max:16'" name="password" type="password" placeholder="请输入密码">
								<p>{{ errors.first('password') }}</p>
	          </div>
	          <div class="submit">
	              <button @click="submit">注册</button>
	          </div>
        </div>
    </div>
  </transition>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import qs from 'qs'
  export default {
    data () {
      return {
        transitionName: 'slide-left',
        user:{
          username:'',
          sex:true,
          email:'',
          password:''
        }
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
        let obj = {
          username:this.user.username,
          sex:this.user.sex,
          email:this.user.email,
          password:this.user.password
        }
        let usernameReg = /^[0-9A-Za-z]{2,10}$/;
        let emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let pswReg = /^[0-9A-Za-z]{6,16}$/;
        // console.log(obj)
        console.log(usernameReg.test(obj.username))
        if(usernameReg.test(obj.username)){
          if (emailReg.test(obj.email)) {
            if (pswReg.test(obj.password)) {
              this.$axios.post('/api/add',qs.stringify(obj)).then(res=>{
                if(res.data.status === 1){
                  // console.log(res.data.msg)
                  alert(res.data.msg);
                  this.$router.push('/login')
                }
                if(res.data.status === 0){
                  console.log(res.data.msg)
                  alert(res.data.msg)
                }
              }).catch(err=>{
                alert(err)
              })
            } else {
              alert('密码格式有误！')
            }
          } else {
            alert('邮箱格式有误！')
          }
        }else{
          alert('帐号格式有误！')
        }
      }
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

  .register {
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
    	}
    	.submit button{
    		border: none;
    		padding: 5px 0;
    		width: 100px;
    	}
    }
  }
</style>
