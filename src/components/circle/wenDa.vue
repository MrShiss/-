<template>
<transition name="slide">
    <div class="all">
        <button class="ask-btn" @click="changeShow">点击提问</button>
        <!-- 提问框 -->
        <div v-show="isShow" class="fixed">
            <div @click="changeShow" class="fixed-0">
            </div>
            <div class="fixed-1">
                <div class="title-con">
                    <label for="title">标题</label>
                    <input v-model="title" type="text">
                </div>
                <div class="text-con">
                    <textarea v-model="question" name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div class="btn">
                    <button @click="changeShow">取消</button>
                    <button class="submit" @click="addQuestion">提交</button>
                </div>
            </div>
        </div>
        <div v-for="(v,i) in questions" :key="i" v-show="questions.length != 0">
            <div class="content">
                <div class="img">
                    <img width="50px" src="../../common/img/bilibili.jpg" alt="">
                    <p>作者：{{v.username}}</p>
                </div>
                <div class="detail">
                    <p>标题：{{v.title}}</p>
                    <p>内容：{{v.question}}</p>
                    <p>{{v.date}}</p>
                </div>
                <button class="submit" @click="showAnswer(i)">回复</button>
            </div>
            <div v-for="(Av,Ai) in answers" :key="Ai" v-if="Av.q_id === v._id" class="answer-content">
                <div class="a-con">
                    {{Av.answer}}
                </div>
                <div class="a-img">
                    <img src="../../common/img/bilibili.jpg" alt="">
                    <p>{{Av.username}}</p>
                </div>
            </div>
            <div class="answer-btn" v-if="arr.includes(i)">
                <div class="textarea">
                    <textarea ref="answer" v-model="answer"  name="" id="" cols="30" rows="1"></textarea>
                    <button class="submit" @click="addAnswer(v._id)">提交</button>
                </div>
            </div>
        </div>
        <div style="height:50px"></div>
    </div>
</transition>
</template>
<script>
import qs from 'qs'
    export default{
        data(){
            return{
                isShow:false,
                answerShow:false,
                title:'',
                question:'',
                questions:[],
                answer:'',
                answers:[],
                arr:[]
            }
        },
        methods:{
            changeShow(){
                let username = document.cookie.split("=")[1];
                if(username){
                    this.isShow = !this.isShow
                }else{
                    this.$router.push('/login')
                }
            },
            addQuestion(){
                // console.log(this.title)
                let username = document.cookie.split("=")[1]
                let obj = {
                    title:this.title,
                    question:this.question,
                    username
                }
                if (obj.title != '' && obj.question != '') {
                    this.$axios.post('/api/addQuestion',qs.stringify(obj)).then(res=>{
                        // console.log(res.data)
                        if(res.data.status === 1){
                            this.$router.push('/empty1')
                        }
                    })
                } else {
                  alert('您的输入有空！')   
                }
            },
            showAnswer(i){
                if(this.arr.length === 0){
                    this.arr.push(i)
                    console.log(this.arr)
                }else{
                    this.arr = []
                }
            },
            addAnswer(e){
                let username = document.cookie.split("=")[1];
                let answer = this.answer;
                // console.log(answer)
                let obj = {
                    username,
                    id:e,
                    answer 
                }
                if(username){
                    if (obj.answer != '') {
                        this.$axios.post('/api/addAnswer',qs.stringify(obj)).then(res=>{
                            // console.log(res.data)
                            this.getData();
                            this.answer="";
                        })
                    }else{
                        alert('答案不能为空！')
                    }
                }else{
                    this.$router.push('/login')
                }
            },
            getData(){
                // 获取问题
            this.$axios.get('/api/getQuestions').then(res=>{
                this.questions = res.data;
                // console.log(this.questions.length)
            })
             // 获取答案
            this.$axios.get('/api/getAnswers').then(res=>{
                this.answers = res.data;
                // console.log(this.answers)
            })
            }
        },
        mounted(){
            this.getData();
        }
    }
</script>
<style lang="less" scoped>
.slide-enter,.slide-leave-to{
    opacity: 0;
    transform: scale(0,0)
  }
.slide-enter-active,.slide-enter-active{
transition: all .4s ease;
}
    .all{
        padding-top: 50px;
        .ask-btn{
            background-color: #fb7299;
            border: none;
            outline: none;
            padding: 5px 10px;
            color: white;
            top: 100px;
            position: fixed;
            margin-left: 75%;
        }
        .fixed-0{
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 555;
            background-color: rgba(0, 0, 0, 35%)
        }
        .fixed-1{
            z-index: 666;
            background-color: white;
            position: absolute;
            width: 90%;
            height: 250px;
            top: 50%;
            margin-top: -175px;
            margin-left: 5%;
            padding: 10px;
            .title-con{
                border: 1px solid rgba(0, 0, 0, 15%);
                padding: 10px;
                input{
                    outline: none;
                    padding-left: 20px;
                    border: none;
                }
            }
            .text-con{
                border: 1px solid rgba(0, 0, 0, 15%);
                border-top: none;
                textarea{
                    width: 100%;
                    border: none;
                    outline: none;
                }
            }
            .btn{
                margin-top: 10px;
                position: absolute;
                right: 0;
                button{
                    font-size: 16px;
                    border: none;
                    padding: 5px 15px;
                    outline: none;
                }
                .submit{
                    background-color: lightblue;
                }
            }
        }
        .content{
            margin: 50px 5px 0 5px;
            padding: 10px;
            background-color: rgba(0, 0, 0, 5%);
            border-radius: 10px;
            margin-bottom: 5px;
            display: flex;
            height: 100px;
            .img{
                flex-basis: 20%;
                img{
                    border-radius: 50%;
                }
            }
            .detail{
                flex-basis: 80%;
                overflow: hidden;
                zoom: 1;
                p:nth-child(2){
                    margin-bottom: 10px;
                    height: 35px;
                }
                p:nth-child(3){
                    float: right;
                    margin-right: 10px;
                }
            }
        }
        .answer-content{
             margin: 10px 5px 0 5px;
            padding: 10px;
            background-color: rgba(0, 0, 0, 5%);
            border-radius: 10px;
            display: flex;
            .a-con{
                flex-basis: 80%;
                padding: 10px;
            }
            .a-img{
                flex-basis: 20%;
                text-align: center;
                img{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                }
            }
        }
        .textarea{
            position: relative;
            padding-left: 10px;
            width: 100%;
            textarea{
                margin-top: 5px;
                border: 1px solid rgba(0, 0, 0, 15%);
                outline: none;
                width: 80%;
            }
            .submit{
                position: absolute;
                right: 5px;
                top: 5px;
            }
        }
    }
</style>

