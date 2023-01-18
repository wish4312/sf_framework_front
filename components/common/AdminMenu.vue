<template>
  <v-menu offset-y nudge-bottom="8" :left="true">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        depressed
        :ripple="false"
        :style="btnStyle"
      >
        <avatar :rounded="'full'"
        style="width: 30x; height: 30px; flex-basis: 30px; box-shadow: 0 0 0 1px #fff; margin-right: 5px; text-align: center;">
          <span class="k-icon k-i-user" style="font-size: 25px;"></span>
        </avatar>
      </v-btn>
    </template>

    <v-list class="pa-2">
      <v-list-item style="color:#fff; border-bottom: 2px solid #fff;">
        <div style="color:#fff;">
          <v-icon class="mr-1" size="20" style="color:#fff">mdi-account-outline</v-icon>
          <span class="body-2">{{name}}</span>
        </div>
      </v-list-item>
      <v-list-item>
        <v-btn @click="pswdChange" small elevation="0">
          <v-icon class="mr-1" size="20">mdi-lock-outline</v-icon>
          <span class="body-2">{{$t('CommLang.btn.passwordBtn')}}</span>
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn @click="logout" small elevation="0">
          <v-icon class="mr-1" size="20">mdi-logout</v-icon>
          <span class="body-2">{{$t('CommLang.btn.logoutBtn')}}</span>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import { mapState } from "vuex";
import { Avatar } from '@progress/kendo-vue-layout';
export default {
  props: {
    miniVariant: Boolean,
    userNm: {
      type: String,
      require: true
    },
    comId: {
      type: String,
      require: true
    },
  },
  components:{
    avatar: Avatar,
  },
  data() {
    return {
      logoutUrl: "/login",
      item : {},
      name : this.$session.get("userInfo") == undefined ? "비로그인" : this.$session.get("userInfo").name
    };
  },
  computed: {
    ...mapState(["isDarkMode"]),
    btnStyle() {
      return this.isDarkMode ? { color: "#fff", width: "auto" } : { color: "#111", width: "auto" };
    }
  },
  methods: {
    async logout() {
      await this.$axios.post("/api/signout").then((response) => {
        if(response.status == "200"){
          this.$session.destroy();
          this.$nextTick(() => {
            window.location.href = this.logoutUrl;
          });
        }
      })
    },
    pswdChange(){
      this.$emit("open")
    }
  },
  mounted() {

  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/var.scss";
@each $theme in dark, light {
  .v-application.#{$theme}-mode {
    .mdi-account {
      color: map-deep-get(
        $config,
        #{$theme},
        "tui-datepicker-calendar-color"
      ) !important;
    }

    .v-list {
      background-color: map-deep-get(
        $config,
        #{$theme},
        "admin-menu-expanded-list-backgroundColor"
      );
      border-color: transparent;
    }
  }
}

.v-menu__content {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  width: 130px !important;
  z-index: 9 !important;
}

.v-list {
  .v-btn {
    padding: 0 !important;
    margin-bottom: 0;
    color: #fff;

    &:hover {
      color: #46c0ff;
    }

    > span {
      color: currentColor;
    }
  }
}

.v-btn {
  width: 100%;
  min-width: auto !important;
  display: flex;
  align-items: center;

  &,
  &:before {
    background-color: transparent !important;
  }

  :deep(.v-btn__content) {
      justify-content: flex-start;
  }

  &.miniVariant {
    :deep(.v-btn__content > .body-1, .v-btn__content > .mdi-chevron-down) {
        display: none;
      }
    }
}
</style>
