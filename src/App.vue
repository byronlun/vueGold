<template>
  <div id="app">
    <header>
      <el-col :span="2">
        <img src="./assets/logo-header.svg" class="verticalCenter">
      </el-col>
      <el-col :span="20">
        <span>&nbsp</span>
      </el-col>
      <el-col :span="2">
        <el-button type="text" @click="dialogRegisterVisible = true" class="verticalCenter">注册 ·  </el-button>
        <el-dialog v-model="dialogRegisterVisible" size="tiny" custom-class="registerForm">
          <el-form :model="registerForm" label-position="left" :rules="registerFormRules" ref="registerForm" >
            <el-form-item label="请先注册">
              <el-input v-model="registerForm.usename" size="large" placeholder="昵称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="registerForm.emailPhone" size="large" placeholder="邮箱/手机"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="registerForm.password" size="large" placeholder="密码"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="dialogRegisterVisible = false">立即注册</el-button>
          <el-button type="text" @click="dialogRegisterVisible = false">已有账号登录</el-button>
        </el-dialog>
        <el-button type="text" @click="dialogSigninVisible = true" class="verticalCenter verticalCenterRight">登录</el-button>
        <el-dialog v-model="dialogSigninVisible" size="tiny" custom-class="signinForm">
          <el-form :model="signinForm" label-position="left" :rules="signinFormRules" ref="signinForm" >
            <el-form-item label="登录">
              <el-input v-model="signinForm.emailPhone" size="large" placeholder="邮箱/手机"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="signinForm.password" size="large" placeholder="密码"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="dialogSigninVisible = false">登录</el-button>
        </el-dialog>
      </el-col>
    </header>
    
    <main>
      <div class="content">
        <section>
          <TabMenu v-on:routeChange="handleRouteChange"></TabMenu>
        </section>
        <div class="rightContent">
          <router-view v-bind:parent-route="currentRoute"></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TabMenu from './components/TabMenu.vue'

export default {
  name: 'app',
  data () {
    return {
      dialogRegisterVisible: false,
      dialogSigninVisible: false,
      registerForm: {
        usename: '',
        emailPhone: '',
        password: ''
      },
      registerFormRules: {
      },
      signinForm: {
        emailPhone: '',
        password: ''
      },
      signinFormRules: {
      },
      currentRoute: ''
    }
  },
  components: {
    TabMenu
  },
  methods: {
    handleRouteChange (route) {
      this.currentRoute = route
    }
  }
}
</script>

<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
  }
  body {
    // background-color: #f4f5f5;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    header {
      height: 64px;
      width: 1000px;
      margin: 0px auto;
      background-color: white;
      position: relative;

      .el-col-2:last-child {
        float: right;
      }
      .verticalCenter {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .verticalCenterRight {
        margin-left: 40px;
      }
      .registerForm, .signinForm {
        width: 320px;

        .el-dialog__header {
          padding: 10px 10px 0;
        }

        .el-dialog__body {
          padding: 15px 25px;

          .el-form-item__label {
            font-weight: 700;
            font-family: PingFangSC-Medium;
            font-size: 1.4em;
            color:black;
          }

          .el-button {
            width: 270px;
            margin: 0px;
          }
        }
      }
    }

    main {
      background-color: #f4f5f5;
      overflow: hidden;
      
      .content {
        width: 1000px;
        margin: 0px auto;
        margin-top: 1em;
        margin-bottom: 3em;
        display: flex;
      }
      section {
        flex: 0 0 auto;
        margin-right: 1.5em;
        width: 7em;
      }
      .rightContent {
        background-color: white;
        flex: 1 1 auto;
        // padding: 0 5px;
      }
    }
  }



</style>
