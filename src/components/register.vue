<template>
	<div class="register-wrap">
        <h3>注册</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <el-input type="text" placeholder="请输入用户名" v-model="newUsername"></el-input>
        <el-input type="password" placeholder="请输入密码" v-model="newPassword"></el-input>
        <el-button type="primary" v-on:click="register">注册</el-button>
        <router-link tag="div" :to="{path: '/'}">已有账号？马上登录</router-link>
    </div>
</template>


<style lang = "less">
    .register-wrap{
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
                newUsername: '',
                newPassword: ''
            }
        },
        methods:{
            register(){
                if(this.newUsername == '' || this.newPassword == ''){
                    alert('请输入用户名或密码')
                }else{
                	//json格式像后台提交数据
                    let data = {'newUsername':this.newUsername,'newPassword':this.newPassword}

                    //模拟像后台提交数据
                    /*
                    this.$http.get('api/Register', data)
                    .then((res) => {
                      this.showTishi = true
                      this.tishi = '登陆成功'
                    }, (err) => {
                      console.log(err)
                    })
                    */
                    this.showTishi = true
                    this.tishi = '注册成功'
                    
                }
            }
        }
    }
</script>