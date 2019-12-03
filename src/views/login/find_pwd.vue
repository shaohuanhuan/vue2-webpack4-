<template>
	<div class="find-container">
		<h3>找回密码</h3>333333
    <img src="../../assets/img/cql.jpg">
    <img src="../../assets/img/icon.png">
		<!-- <Form  inline="inline" :model="findForm" ref="findForm" :label-width="140" :rules="rules" class="camel-add-box">
			<FormItem label="手机号码：" prop="mobile">
        <y-input placeholder="请输入手机号号码" v-model="findForm.mobile" :maxlength="11"></y-input>
      </FormItem>	
      <FormItem label="验证码：" prop="code">
          <y-input class="code_input" placeholder="验证码" v-model="findForm.code" :maxlength="6" ></y-input>
          <y-button  class="code_btn" :disabled="!!timer" @click="getAuthCode">{{secText}}</y-button>
      </FormItem>
      <FormItem label="新密码" prop="new_pwd">
        <y-input type="password" v-model="findForm.new_pwd" :maxlength="20"></y-input>
      </FormItem>
      <FormItem label="确认密码" prop="new_pwd_repeat">
        <y-input type="password" v-model="findForm.new_pwd_repeat" :maxlength="20"></y-input>
      </FormItem>
      <FormItem label=" ">
        <y-button @click="addOk" class="block">完成</y-button>
      </FormItem>
		</Form>	 -->
	</div>
</template>

<script>
// import md5 from 'js-md5'
// import {loginApi} from '@/utils/api.js'
export default {
  name: 'find_pwd',
  data () {
    return {
      // findForm: {
      // 	mobile: '',
      // 	code: '',
      // 	new_pwd: '',
      //   new_pwd_repeat: ''
      // },
      // rules: {
      // 	mobile: [{ required: true, trigger: 'blur', message:'请输入手机号' }, {validator: validator.mobile, trigger: 'blur'}],
      //   code: [{ required: true, trigger: 'blur', message:'请输入验证码' }, {validator: validator.isNumber, trigger: 'blur'}],
      //   new_pwd: [{ required: true, trigger: 'blur', message:'请输入新密码' }, {validator: validator.pwd, trigger: 'blur'}],
      //   new_pwd_repeat: [{ required: true, trigger: 'blur', message:'请输入确认密码' }, {validator: validator.pwdRepeat, trigger: 'blur', pwd: ''}]
      // },
      // secText: '获取验证码',
      // second: 59,
      // timer: 0
    }
  },
  watch: {
    // 'findForm.new_pwd' (v) {
		//   this.rules.new_pwd_repeat[1].pwd = v
    // }
  },
  mounted () {
    console.log(11111)
    // this.$store.commit('LOADING', false)
  },
  methods: {
    // 提交
    addOk () {
      let params = { mobile: this.findForm['mobile'],
      			      	 code: this.findForm['code'],
                     new_pwd: md5(this.findForm['new_pwd']),
                     comt_type: 1}
      this.$refs['findForm'].validate((valid) => {
        if (valid) {
          loginApi.findPwd(params).then((resp) => {
            this.$Message.success('密码修改成功, 请重新登录')
            setTimeout(() => {
              this.$router.push('/login')
              // window.location.href = '/#/login'
            }, 1000)
          })
        }
      })
    },
    // 发送验证码
    getAuthCode (){
      let testPhone = /^1\d{10}$/
      if (!testPhone.test(this.findForm.mobile)) {
        this.$Message.error('请填写正确的手机号')
        return
      }
      loginApi.getCode({mobile: this.findForm.mobile, comt_type: 1}).then(resp => {
        this.timeCommon()
      })
    },
    timeCommon () {
      this.second = 59
      this.secText = '59s重新获取'
      this.timer = setInterval(() => {
        if (this.second === 0) {
          this.secText = '获取验证码'
          clearInterval(this.timer)
          this.timer = null
          return
        }
        this.second = this.second - 1
        this.secText = this.second + 's重新获取'
      }, 1000)
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/css/reset.scss';

.find-container {
	height: 100%;
	background: white;
	padding-top: 100px;
  text-align: center;
  box-sizing: border-box;
	h3 {
		margin-bottom: 30px;
	};
	.code_input {
		width: 100px;
		float: left;
	};
	.code_btn {
		float: right;
	}
}
</style>