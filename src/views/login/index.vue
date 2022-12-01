<template>
  <div>
    <div class="content">
      <div class="content_1">账号密码登录</div>
      <div class="content_2">
        <input type="text" class="content_2_1" placeholder="请输入登录账号" v-model="loginParams.phone">
      </div>
      <div class="content_2">
        <input type="password" class="content_2_1" placeholder="请输入密码" v-model="loginParams.password">
      </div>
      <div class="content_3" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
import { login } from '../../utils/api'
export default {
  data() {
    return {
      // 登录参数
      loginParams: {},
    }
  },
  methods: {
    // 登录
    login() {
      login(this.loginParams).then(res => {
        if (res.code == -1) return alert(res.msg)
        sessionStorage.setItem('token', res.data.app_token)
        this.$router.push('/')
      })
    },
  },
  mounted() { },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>