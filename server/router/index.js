const express = require('express');
const User = require('../model/user.js');
const Tv = require('../model/tv.js');
const Mtv = require('../model/mtv.js');
const Answer = require('../model/answer.js');
const Question = require('../model/questions.js');
const router = express.Router();
const crypto = require('crypto');

// 注册
router.post('/add',(req,res)=>{
    // console.log(req.body.sex)
    let username = req.body.username;
    let sex = req.body.sex === 'true' ? '男士': '女士';
    let email = req.body.email;
    let password = req.body.password;
    let date = new Date().toLocaleString();
    let md5 = crypto.createHash("md5");
    let newPsw = md5.update(password).digest("hex");
    let obj = {
        username,sex,email,newPsw,date
    }
    console.log(obj)
    let newUser = new User(obj)
    User.findOne({username}).then(user=>{
        if(user){
            return res.json({
                status:0,
                msg:'账号已经存在！'
            })
        }
        console.log(1)
        newUser.save().then(data=>{
            return res.json({
                status:1,
                msg:'恭喜，注册成功！'
            })
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        console.log(err)
    })
})

// 登录
// 设置登录session
router.post('/login',(req,res)=>{
    // console.log(req.body)
    let username = req.body.username;
    let password = req.body.password;
    let md5 = crypto.createHash("md5");
    let newPsw = md5.update(password).digest("hex");
    User.findOne({username}).then(user=>{
        if(user){
            if(newPsw === user.newPsw){
                res.cookie('username',username,{
                    maxAge: 7*24*3600*1000
                })
                return res.status(200).json({
                    status: 1,
                    msg: "登录成功"
                });
            }else{
                return res.json({
                    status:2,
                    msg:'您的密码有误！'
                })
            }
        }else{
            return res.json({
                status:0,
                msg:'您的账号有误！'
            })
        }
    })
})

// 退出登录
router.post('/logout',(req,res)=>{
    // 清除cookie
    res.clearCookie("username");
    return res.json({
        code: 1,
		msg: "退出登录成功!"
    })
})

// 添加关注
router.post('/addtv',(req,res)=>{
    // console.log(req.body.arr.cid)
    let username = req.body.username
    let cid = req.body.arr.cid
    let newTv = new Tv(req.body);
    Tv.find({username}).then(tv=>{
        var arr=false;
        if (tv.length != 0) {
              tv.map((v,i,array)=>{
                  if (v.arr.cid === cid) {
                       arr = true;
                  }
              })
              if(arr){
                  res.send({code:0,msg:"您已经关注该电视剧"});
              }else{
                newTv.save().then(result=>{
                    return res.json({
                        status:1,
                        msg:'关注成功！'
                    })
                })
              }
        }else{
            newTv.save().then(result=>{
                return res.json({
                    status:1,
                    msg:'关注成功！'
                })
            })
        }
    }).catch(err=>{
        console.log(err)
    })
})

// 观看记录
router.post('/recordTv',(req,res)=>{
    console.log(req.body.arr.cid)
    let username = req.body.username;
    let arr = req.body.arr;
    let date = new Date();
    let obj = {
        username,arr,
        date:date.toLocaleString()
    }
    let newMtv = new Mtv(obj);
    newMtv.save().then(data=>{
        return res.json({
            status:1,
            msg:'恭喜，添加成功！'
        })
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/deleteAll',(req,res)=>{
    Mtv.remove().then(data=>{
        return res.json({
            status:1,
            msg:'删除成功!'
        })
    }).catch(err=>{
        console.log(err)
    })
})

// 显示用户关注的电视剧
router.post('/list',(req,res)=>{
    // console.log(req.body)
    Tv.find(req.body).then(data=>{
        return res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

// 显示观看历史
router.post('/mlist',(req,res)=>{
    // console.log(req.body)
    Mtv.find(req.body).sort({date:-1}).then(data=>{
        return res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
// 删除用户关注的电视剧
router.post('/delete',(req,res)=>{
    // console.log(req.body)
    let username = req.body.username;
    let cid = req.body.id;
    Tv.remove({'arr.cid':cid}).then(data=>{
        return res.json({
            status:1,
            msg:'删除成功!'
        })
    }).catch(err=>{
        console.log(err)
    })
})

// 问答系统
router.post('/addQuestion',(req,res)=>{
    // console.log(req.body)
    let date = new Date();
    // console.log(date.toLocaleString())
    let obj = {
        username:req.body.username,
        title:req.body.title,
        question:req.body.question,
        date:date.toLocaleString()
    }
    let newQuetion = new Question(obj);
    newQuetion.save().then(data=>{
        return res.json({
            status:1,
            msg:'提问成功！'
        })
    }).catch(err=>{
        console.log(err)
    })
})

// 获取问题
router.get('/getQuestions',(req,res)=>{
    Question.find().sort({date:-1}).then(data=>{
        // console.log(data)
        res.send(data)
    })
})

// 添加答案
router.post('/addAnswer',(req,res)=>{
    let date = new Date();
    let obj = {
        username:req.body.username,
        q_id:req.body.id,
        answer:req.body.answer,
        date:date.toLocaleString()
    }
    let newAnswer = new Answer(obj);
    newAnswer.save().then(data=>{
        return res.json({
            status:1,
            msg:'回答成功'
        })
    }).catch(err=>{
        console.log(err)
    })
})

// 获取答案
router.get('/getAnswers',(req,res)=>{
    Answer.find().sort({date:-1}).then(data=>{
        // console.log(data)
        return res.send(data)
    })
})


// 获取个人信息
router.get('/getUser',(req,res)=>{
    // console.log(req.query)
    let username = req.query.username;
    User.findOne({username}).then(data=>{
        return res.send(data)
    })
})

module.exports = router;