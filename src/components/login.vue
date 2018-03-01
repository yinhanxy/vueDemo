<template>
    <div>
        <div class="login-wrap">
            <h3>登录</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <el-input type="text" placeholder="请输入用户名" v-model="username"></el-input>
            <el-input type="password" placeholder="请输入密码" v-model="password"></el-input>
            <el-button type="primary" v-on:click="login">登录</el-button>
            <router-link tag="div" class="tips" :to="{path: '/register'}">没有账号？马上注册</router-link>
        </div>
    </div>
</template>

<style lang = "less">
    .login-wrap{
        text-align:center;
        .el-input
            input{
                width:250px;
                border:1px solid #888; 
                margin-bottom:15px;
            }
        p{
            color:red;
        }
        .el-button{
            width:250px;
        }
        .tips{
            cursor:pointer;
            &:hover{
                color:#41b883;
            }
        }
    }
</style>

<script>
    export default{
        data(){
            return{
                showTishi: false,
                tishi: '',
                username: '',
                password: ''
            }
        },
        methods:{
            login(){
                if(this.username =='' || this.password == ''){
                    alert('请输入用户名或密码')
                }else{
                    //json格式
                    let data = {'username':this.username,'password':this.password}
                    //模拟像后台提交数据
                    /*
                    this.$http.get('api/Login', data)
                    .then((res) => {
                      this.showTishi = true
                      this.tishi = '登陆成功'
                    }, (err) => {
                      console.log(err)
                    })
                    */
                    this.showTishi = true
                    this.tishi = '登陆成功'
                }
            }
        }


    }
</script>