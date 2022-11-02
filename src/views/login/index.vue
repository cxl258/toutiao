<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="page-nav-bar" />

    <van-form>
      <van-field name="用户名" placeholder="输入手机号">
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>

      <van-field name="密码" placeholder="输入密码">
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <van-button class="send-sms-btn" round size="small" type="default"
            >发送验证码</van-button
          >
        </template>
      </van-field>

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 160px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 14px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>