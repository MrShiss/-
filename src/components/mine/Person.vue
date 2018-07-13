<template>
    <transition :name="transitionName">
        <div class="register child-view-search">
            <div @click="goBack" class="return"><i class="icon-circle-left"></i></div>
            <div>
                <h3>个人资料</h3>
            </div>
            <div class="form">
                <div>
                    <label for="username">账&#x3000;&#x3000;号：</label>
                    <input disabled v-model="user.username" v-validate="'required|alpha_num|min:2|max:10'" name="username" placeholder="账号" type="text">
                </div>
                <div>
                    <label for="sex">性&#x3000;&#x3000;别：</label>
                    <input disabled v-model="user.sex" type="radio" name="sex" id="sex1" value="true">&nbsp;先生
                    <input disabled v-model="user.sex" type="radio" name="sex" id="sex2" value="false">&nbsp;女士
                </div>
                <div>
                    <label for="email">邮&#x3000;&#x3000;箱：</label>
                    <input disabled v-model="user.email" v-validate="'required|email'" name="email" type="text" placeholder="邮箱">
                </div>
                <div>
                    <div>
                        <label for="username">注册日期：</label>
                        <input disabled v-model="user.date" v-validate="'required|alpha_num|min:2|max:10'" name="username" placeholder="日期" type="text">
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default{
        data(){
            return{
                transitionName: 'slide-left',
                user:{
                    username:'',
                    sex:true,
                    email:'',
                    date:''
                }
            }
        },
        methods:{
            goBack () {
            this.$router.goBack()
        },
        },
        mounted(){
            let username = document.cookie.split('=')[1]
            if(username){
                this.$axios.get('/api/getUser',{
                    params:{username}
                }).then(res=>{
                    // console.log(res.data)
                    this.user.username = res.data.username;
                    this.user.sex = res.data.sex === '男士' ? true : false;
                    this.user.email = res.data.email;
                    this.user.date = res.data.date;
                })
            }else{
                alert('您还没有登录！')
                this.$router.push('/mine')
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

