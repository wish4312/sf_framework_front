<template>  
  <div class="login">
    <link rel="stylesheet" :href="themeLink"/>
    <div class="login-inner">
      <div class="login-img">
        <img src="https://lsitc.com/img/common/logo.png" style="width: 110px;"/>
      </div>
      <div>

        <div ref="form">
          <div class="login-form">
            <KInput
              v-model.trim="userId"
              ref="userId"
              type="text"
              @keypress.enter="focusPw()"
              :label="$i18n.t('LoginPage.label1')"
              :style="{width : '100%'}"
              height="44"
            ></KInput>
          </div>
          <div class="login-form">
            <KInput
              v-model.trim="userPw"
              ref="userPw"
              type="password"
              @keypress.enter="mberCheck()"
              :label="$i18n.t('LoginPage.label2')"
              :style="{width : '100%'}"
              height="44"
            ></KInput>
          </div>
          <Button :theme-color="'primary'" :style="{width : '400px'}" @click="mberCheck">{{$t('LoginPage.label3')}}</Button>
          <div style="margin-top: 10px; display: inherit; text-align: right;">
            <ThemeSwitch ref="themeSwitch"/>
            <DropDownList
              :style="{ width: '100px' }" 
              :data-items='i18List'
              :text-field="'text'"
              :value="i18nVal"
              :default-value="i18List[0]"
              @change="selectI18">
            </DropDownList>
          </div>
        </div>
      </div>
    </div>
    <AlertPop 
      ref="alertPop"
      :is="'alertPop'"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Input } from '@progress/kendo-vue-inputs';
import { Button } from "@progress/kendo-vue-buttons";
import { Avatar } from '@progress/kendo-vue-layout';
import AlertPop from "@/components/common/modal/AlertPop";
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import ThemeSwitch from "@/components/common/ThemeSwitch";
export default {
  layout: "landing",
  components:{
    KInput: Input,
    Button,
    Avatar,
    AlertPop,
    DropDownList,
    ThemeSwitch
  },
  data: () => ({
    valid: true,
    userId: "",
    userPw: "",
    i18List : [
      {
        text : "Kor",
        id : "ko",
        iso : "ko-KR"
      },
      {
        text : "Eng",
        id : "en",
        iso : "en-US"
      }
    ],
    i18nVal : {
      text : "Kor",
      id : "ko",
      iso : "ko-KR"
    },
  }),
  computed: {
    ...mapState(["indexRoot", "isDarkMode", "myHome"]),
    themeLink() {
      if(this.isDarkMode){
        return "https://kendo.cdn.telerik.com/themes/5.8.0/bootstrap/bootstrap-main-dark.css"
      }else{
        return "https://kendo.cdn.telerik.com/themes/5.8.0/bootstrap/bootstrap-nordic.css"
      }
    },
  },
  beforeMount(){
    let tmpI18n = localStorage.getItem("i18nVal") !=null ? JSON.parse(localStorage.getItem("i18nVal")) : {text : "Kor",id : "ko", iso:"ko-KR"};
    this.$i18n.setLocale(tmpI18n.id)
    this.i18nVal = tmpI18n;
  },
  mounted() {
    this.focusId();
    this.$vuetify.theme.isDark = localStorage.getItem("isDarkMode") == "true" ? true : false ;
    this.setThemeChange(localStorage.getItem("isDarkMode") == "true" ? true : false );
    this.$refs["themeSwitch"].mode = localStorage.getItem("isDarkMode") == "true" ? true : false ;
  },

  methods: {
    ...mapMutations({
      setUserInfo: "setUserInfo",
      setThemeChange: "setThemeChange"
    }),
    focusId() {
      this.$refs.userId.focus();
    },
    focusPw() {
      this.$refs.userPw.focus();
    },
    async mberCheck() {
      if (this.userId == "") {
        this.$refs['alertPop'].title = this.$i18n.t('CommLang.label.label6');
        this.$refs['alertPop'].message = this.$i18n.t('LoginPage.msg1');
        this.$refs['alertPop'].modalWidth = "300px";
        this.$refs['alertPop'].visibleDialog = true;
        this.focusId();
        return;
      }

      if (this.userPw == "") {
        this.$refs['alertPop'].title = this.$i18n.t('CommLang.label.label6');
        this.$refs['alertPop'].message = this.$i18n.t('LoginPage.msg2');
        this.$refs['alertPop'].modalWidth = "300px";
        this.$refs['alertPop'].visibleDialog = true;
        this.focusPw();
        return;
      }
      await this.loginChk();
    },
    async loginChk() {
      const DOMAIN = "/api/";
      const apiUrl = "signin";
      const form = new FormData();
      form.append('userId', this.userId);
      form.append('password', this.userPw);
      let res = await this.$axios.post("/api/signin", form).then((response) => {
        this.$router.push({ path: this.myHome.root });
        this.setUserInfo(response.data);
        this.$session.start();
        this.$session.set("userInfo", response.data)
      })
      .catch((error) => {
        this.$refs['alertPop'].title = this.$i18n.t('CommLang.label.label6');
        this.$refs['alertPop'].message = this.$i18n.t('LoginPage.msg3');
        this.$refs['alertPop'].modalWidth = "300px";
        this.$refs['alertPop'].visibleDialog = true;
      });
    },
    selectI18(val){
      localStorage.setItem("i18nVal", JSON.stringify({text: val.value.text, id:val.value.id, iso:val.value.iso}))
      window.location.reload();
      window.location.href = "/login";
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/var.scss";
@import "@/assets/scss/mixin.scss";

.login {
  height: calc(100% - 64px);
  position: relative;
  &-inner {
    width: 480px;
    padding: 30px 40px 50px;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &-logo {
    margin-bottom: 28px;
    text-align: center;
  }
  &-img {
    // width: 100px;
    // height: 100px;
    // border-radius: 50%;
    margin-bottom: 30px;
    text-align: center;
    // img {
    //   width: 110px;
    //   height: 70px;
    // }
  }
  &-form {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }

    .v-input {
      width: 100%;
    }
  }
}
@each $theme in dark, light {
  @include theme($theme);
  .v-application.#{$theme}-mode {
    .login {
      @if $theme == dark {
        background-color: #23272b;
      }
      @else {
        background-color: #fff;
      }
    }
    .login-inner {
      @if $theme == dark {
        background-color: rgba(113, 120, 152, 0.3);
      }
      @else {
        background-color: rgba(204, 204, 204, 0.35);

      }

    }
    .v-btn {
      @if $theme == dark {
        background-color: #18579e;
      }
      @else {
        background-color: #3f4d7d;
      }
    }
  }
}
</style>
