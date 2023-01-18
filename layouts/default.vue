<template>
  <v-app :class="`${isDarkMode ? 'dark-mode' : 'light-mode'}`">
    <link rel="stylesheet" :href="themeLink"/>
    <v-app-bar
        v-if="topMenu"
        :style="{'background-color' : isDarkMode ? '#212529' : '#f8f9fa'}">
        <v-toolbar-title>
          <div class="d-flex align-center justify-space-between py-4 px-3" style="height: 50px;">
            <router-link class="home" :to="myHome.root">
              <div class="lnb-logo">
                <img src="https://lsitc.com/img/common/logo.png" style="width: 110px;"/>
              </div>
            </router-link>
          </div>
        </v-toolbar-title>
        <v-spacer
        >
          <kMenu 
          :items="horizTreevieItems"
          :item-render="itemRender"
          @select="onSelect">
          <template v-slot:itemRender="{ props }">
            <div>
              <v-icon class="mr-1" size="20" v-text="iconClassName(props.item)"></v-icon>
              <span :style="{'color' : isDarkMode ? '#ffffff' : '#000000'}">{{ props.item.text}}</span>
            </div>
          </template>
          </kMenu>
        </v-spacer>
        <div style="align-self: center; display: flex; align-items: center;">
          <ThemeSwitch ref="themeSwitch" style="flex: none; margin-right: 6px;"/>
          <kSwitch
          :size="'small'"
          :value="topMenu"
          :style="{flex: 'none', 'margin-right': '6px'}"
          @change="topMenuOn"/>
          <SplitButton :theme-color="'primary'"  :items="closeBtnList" @itemclick="closeItemClick" :size="'small'" :style="{flex: 'none', 'margin-right': '6px'}">
            {{$t('CommLang.btn.closeBtn')}}
          </SplitButton>
          <!-- <SplitButton :theme-color="'primary'"  :items="myMenuList" @itemclick="myMenuClick" :size="'small'" :style="{flex: 'none', 'margin-right': '6px'}">
            {{$t('CommLang.btn.bookMarkBtn')}}
          </SplitButton> -->
          <kbutton :theme-color="'primary'" @click="refreshTab()" :size="'small'" :style="{flex: 'none'}">
            <span class="k-icon k-i-refresh" style="color: rgb(255, 255, 255);"></span>
          </kbutton>
          <AdminMenu :miniVariant="miniVariant"
            :userNm="userInfo.name"
            :comId="userInfo.comId"
            @open="openChangePswdPop" />
          <DropDownList
              :style="{ width: '100px' }" 
              :data-items='i18List'
              :text-field="'text'"
              :default-value="i18List[0]"
              :value="i18nVal"
              @change="selectI18"> 
          </DropDownList>
        </div>
      </v-app-bar>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="miniVariant"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
      v-if="!topMenu"
    >
    <div class="d-flex align-center justify-space-between py-4 px-3" style="height: 50px;">
      <router-link class="home" :to="myHome.root">
        <div class="lnb-logo">
          <img src="https://lsitc.com/img/common/logo.png" style="width: 110px;"/>
        </div>
      </router-link>
      <!-- <span
        :class="'k-icon k-i-rows'"
        @click.stop="miniVariant = !miniVariant"
        style="cursor : pointer"
      /> -->
    </div>
    <TreeView
      :dataItems="treevieItems"
      :item="'item'"
      :style="{'margin-top' : '20px'}"
      @expandchange="onExpandChange"
      @itemclick="onItemClick"
    >
      <template v-slot:item="{ props }">

        <div v-if="props.item.level == 1" style="width:100%; position: relative;"  :class="{ 'justify-center': miniVariant }">
          <v-icon class="mr-1" size="20" v-text="iconClassName(props.item)"></v-icon>
          <span v-if="!miniVariant" class="treeNmText">{{ props.item.text}}</span>
          <span v-if="!props.item.url && props.item.items && props.item.expanded && !miniVariant" :class="'k-icon k-i-arrow-chevron-down'"/>
          <span v-if="!props.item.url && props.item.items && !props.item.expanded && !miniVariant" :class="'k-icon k-i-arrow-chevron-right'"/>
        </div>
        <div v-else-if="!(props.item.level == 1)" style=""  :class="{ 'justify-center': miniVariant }">
          <v-icon class="mr-1" size="20" v-text="iconClassName(props.item)"></v-icon>
          <span v-if="!miniVariant" class="treeChildNmText">{{ props.item.text }}</span>
          <span v-if="!props.item.url && props.item.items && props.item.expanded && !miniVariant" :class="'k-icon k-i-arrow-chevron-down'"/>
          <span v-if="!props.item.url && props.item.items && !props.item.expanded && !miniVariant" :class="'k-icon k-i-arrow-chevron-right'"/>
      </div>
      </template>
    </TreeView>
    <template #append>
      <p class="text-caption"
        :style="{ letterSpacing: '-0.2px !important' }">
        &copy; {{ new Date().getFullYear() }}. LS ITC all rights reserved.
      </p>
    </template>
  </v-navigation-drawer>
  <v-main>
    <v-container fluid>
      <router-tab
        ref="routerTab"
        :tabs="treevieItems"
        :keep-last-tab="false"
        :contextmenu="false"    
      >
        <template slot-scope="{ title, closable, to }" :style="{ backgroundColor: isDarkMode ? '#0d6efd' : '#e7607b' }">
          <span>{{ title }}</span>
          <v-icon
            size="18"
            class="ml-2"
            v-if="closable"
            @click.stop="onCloseTab(to)">mdi-close-circle
          </v-icon>
        </template>
        <template #end v-if="!topMenu">
          <ThemeSwitch ref="themeSwitch"/>
          <kSwitch
          :size="'small'"
          :value="topMenu"
          @change="topMenuOn"/>
          <SplitButton :theme-color="'primary'" :items="closeBtnList" @itemclick="closeItemClick" :size="'small'">
            {{$t('CommLang.btn.closeBtn')}}
          </SplitButton>
          <!-- <SplitButton :theme-color="'primary'" :items="myMenuList" @itemclick="myMenuClick" :size="'small'">
            {{$t('CommLang.btn.bookMarkBtn')}}
          </SplitButton> -->
          <kbutton :theme-color="'primary'" @click="refreshTab()" :size="'small'">
            <span class="k-icon k-i-refresh" style="color: rgb(255, 255, 255);"></span>
          </kbutton>
          <kbutton :theme-color="'primary'" @click.stop="primaryDrawer.model = !primaryDrawer.model" :size="'small'">
            <span v-if="primaryDrawer.model" class="k-icon k-i-layout-side-by-side" style="color: rgb(255, 255, 255);"></span>
            <span v-if="!primaryDrawer.model" class="k-icon k-i-layout-1-by-4" style="color: rgb(255, 255, 255);"></span>
          </kbutton>
          <AdminMenu :miniVariant="miniVariant"
            :userNm="userInfo.name"
            :comId="userInfo.comId"
            @open="openChangePswdPop" />
          <DropDownList
              :style="{ width: '100px' }" 
              :data-items='i18List'
              :text-field="'text'"
              :value="i18nVal"
              :default-value="i18List[0]"
              @change="selectI18">
          </DropDownList>
        </template>
      </router-tab>
    </v-container>
    <div  v-if="topMenu" style="text-align: center; height: 29px;" :style="{'background-color' : isDarkMode ? '#000' : '#ffffff'}">
      <p class="text-caption"
        :style="{ letterSpacing: '-0.2px !important' }">
        &copy; {{ new Date().getFullYear() }}. LS ITC all rights reserved.
      </p>
    </div>
    <div v-if="isLoading" class="loading-container">
      <div class="loading">
        <Fade-loader />
      </div>
    </div>
    <ChangePswdPop 
        ref="changePswdPop"
        :userInfo="this.userInfo"
      />
  </v-main>
</v-app>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { Button, SplitButton} from '@progress/kendo-vue-buttons';
import { Switch } from "@progress/kendo-vue-inputs";
import ThemeSwitch from "@/components/common/ThemeSwitch";
import AdminMenu from "@/components/common/AdminMenu";
import FadeLoader from 'vue-spinner/src/FadeLoader.vue';
import ChangePswdPop from "~/components/common/modal/ChangePswdPop";
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { TreeView } from '@progress/kendo-vue-treeview';
import { Menu } from "@progress/kendo-vue-layout";
export default {
  // head() {
  //   return {
  //     htmlAttrs: {
  //       lang: this.$i18n.locale
  //     }
  //   }
  // },
  name: "App",
  components: { 
    "kbutton": Button,
    ThemeSwitch,
    SplitButton,
    FadeLoader,
    AdminMenu,
    ChangePswdPop,
    TreeView,
    "kSwitch" : Switch,
    "kMenu" : Menu,
    DropDownList
  },
  computed: {
    ...mapState({
      myHome: "myHome",
      menuData: "menuData",
      treevieItems: "treevieItems",
      horizTreevieItems: "horizTreevieItems",
      isDarkMode: "isDarkMode",
      activeMenuId: state => state.activeMenuInfo.menuId,
      userInfo: state => state.userInfo,
    }),
    selectedId() {
      return this.items.map((item) => item.data.path).indexOf(this.$route.path.toLowerCase());
    },
    menuIconKeys() {
      return Object.keys(this.menuIconById);
    },
    themeLink() {
      if(this.isDarkMode){
        return "https://kendo.cdn.telerik.com/themes/5.8.0/bootstrap/bootstrap-main-dark.css"
      }else{
        return "https://kendo.cdn.telerik.com/themes/5.8.0/bootstrap/bootstrap-nordic.css"
      }
    },
    activeTabs() {
      if (this.routerTabInstance) {
        return this.routerTabInstance.activeTab;
      } else {
        return this.myHome.root;
      }
    },
  },
  watch: {
    // activeTree: {
    //   deep: true,
    //   handler(newVal, oldVal) {
    //     const nv = newVal[0];
    //     const ov = oldVal[0];
    //     if (nv !== ov) {
    //       if (!nv) {
    //         this.activeTree.push(ov);
    //       } else {
    //         this.myMenuId = nv;
    //         if (this.menuData[nv].url){
    //           this.$router.push({
    //             path: `${this.menuData[nv].url}?menuId=${nv}`
    //           });
    //           this.$router.beforeEach((to, from, next) => {
    //             if (!to.matched.length) {
    //               next(false);
    //             } else {
    //               next();
    //             }
    //           });
    //         }else alert("지정된 페이지 경로가 없습니다.");
    //       }
    //     }
    //   }
    // },
    activeTabs: {
      deep: true,
      handler(value) {
        if (value) {
          // if (value.menuId != 'myIndex') {
          //   let thisMenuId = this.activeMenuId;
          //   var tmp = 0;
          //   for(var i=0; i < this.myMenuList.length; i++){
          //     if(this.myMenuList[i].menuId == thisMenuId){
          //       tmp = 1;
          //     }
          //   }
            // if (this.selectedItem) {
            //   this.selectedItem.selected = false;
            // }
            // this.menuData[this.activeMenuId].selected = true;
            // this.selectedItem = this.menuData[this.activeMenuId];
            //let tmpVal = this.menuData[this.activeMenuId]
            //this.onItemClick({item : tmpVal})
            //console.log("2", this.selectedItem)
            // this.bookmarkBtn = tmp;
            // this.myMenuId = thisMenuId;
            // this.activeTree.pop();
            // this.activeTree.push(thisMenuId);
          // }
        }
      }
    },
  },
  data() {
    return {
      itemRender: "itemRender",
      routerTabInstance: null,
      items: [],
      activeTree: [],
      miniVariant: false,
      bookmarkBtn: 0,
      menuIconById: {
        
      },
      myMenuList:[],
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },
      routerTabInstance: null,
      closeBtnList :[
        { text: "All", actionName: "delAllTabsData" },
        { text: "Other", actionName:"deleteSblingsTab" }
      ],
      isLoading: false,
      selectedItem: undefined,
      topMenu : false,
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
    };
  },
  beforeMount(){
    let tmpI18n = localStorage.getItem("i18nVal") !=null ? JSON.parse(localStorage.getItem("i18nVal")) : {text : "Kor",id : "ko", iso:"ko-KR"};
    this.$i18n.setLocale(tmpI18n.id)
    this.i18nVal = tmpI18n;
  },
  async mounted(){
    const _this = this;
    // let tmpI18n = localStorage.getItem("i18nVal") !=null ? JSON.parse(localStorage.getItem("i18nVal")) : {text : "한국어",id : "ko", iso:"ko-KR"};
    // this.$i18n.setLocale(tmpI18n.id)
    // this.i18nVal = tmpI18n;
    this.$axios.interceptors.request.use(function (config) {
      _this.isLoading = true;
      return config;
    }, function (error) {
      _this.isLoading =
      false;
      return Promise.reject(error);
    });

    this.$axios.interceptors.response.use(function (response) {
      _this.isLoading = false;
      return response;
    }, function (error) {
      _this.isLoading = false;
      return Promise.reject(error);
    });
    await this.getMenu({});
    //await this.selectMyMenuFunc();
    this.routerTabInstance = this.$refs.routerTab;
    if (this.$route.fullPath != "/") {
      this.$refs.routerTab.items.unshift({
        closable : false,
        id : "",
        menuId : "myIndex",
        title : "Index",
        to : "/"
      });
    }
    this.myMenuList = localStorage.getItem("myMenuList")!=null ? JSON.parse(localStorage.getItem("myMenuList")) : [];
    this.topMenu = localStorage.getItem("isTopMenu") == "true" ? true : false ;
    this.$vuetify.theme.isDark = localStorage.getItem("isDarkMode") == "true" ? true : false ;
    this.setThemeChange(localStorage.getItem("isDarkMode") == "true" ? true : false );
    this.$refs["themeSwitch"].mode = localStorage.getItem("isDarkMode") == "true" ? true : false ;
    if(this.topMenu){
      document.getElementsByClassName("v-main")[0].style.height = "95%";
      document.getElementsByClassName("container--fluid")[0].style.height = "98%";
    }else{
      document.getElementsByClassName("v-main")[0].style.height = "100%";
      document.getElementsByClassName("container--fluid")[0].style.height = "100%";
    }
  },
  created(){
  },
  methods: {
    ...mapMutations({
      setActiveMenuInfo: "setActiveMenuInfo",
      setThemeChange: "setThemeChange"
    }),
    ...mapActions({
      getMenu: "modules/menu/getMenu",
      postUpdateApi: "modules/list/postUpdateApi",
      postApiReturn: "modules/list/postApiReturn"
    }),
    closeItemClick(item) {
      if(item.itemIndex == 0){
        this.delAllTabsData();
      }else{
        this.deleteSblingsTab();
      }
    },
    myMenuClick(item){
      this.$router.push({
        path: item.item.url+"?menuId="+item.item.menuId
      });
    },
    refreshTab() {
      this.$nuxt.refresh();
      this.routerTabInstance.refresh();
    },
    delAllTabsData() {
      if (this.routerTabInstance.items.length > 0) {
        this.routerTabInstance.reset();
      }
    },
    deleteSblingsTab() {
      if (this.routerTabInstance.items.length > 1) {
        for (let i = this.routerTabInstance.items.length - 1; i > -1; --i) {
          const activeTo = this.routerTabInstance.activeTab.to;
          const diffTo = this.routerTabInstance.items[i].to;

          if (activeTo != diffTo && diffTo != this.myHome.root) {
            this.routerTabInstance.close(diffTo);
          }
        }
      }
    },
    tabScrollMove(dir) {
      const scrollTab = this.routerTabInstance.$refs.scroll;
      const scrollWidth =
        scrollTab.scrollData.scrollWidth - scrollTab.scrollData.clientWidth;
      const scrollLeft = scrollTab.scrollData.scrollLeft;

      const xAxis = this.calcScroll(scrollLeft, scrollWidth, dir);
      scrollTab.scrollTo(xAxis, 0);
    },
    calcScroll(sl, sw, dir) {
      const deScrW = 60;
      let returnSl = 0;
      switch (dir) {
        case "prev":
          returnSl = sl - deScrW <= 0 ? 0 : sl - deScrW;
          break;
        case "next":
          returnSl = sl + deScrW >= sw ? sw : sl + deScrW;
          break;
        default:
          break;
      }
      return returnSl;
    },
    onCloseTab(to) {
      const findIndex = this.$tabs.items.findIndex(v => v.to === to);
      const { to: next } = this.$tabs.items[findIndex - 1];
      this.$tabs.close(to, null);
      if(this.$router.currentRoute.fullPath != next){
        this.$router.replace(next);
      }
    },
    // async addBookMark(){
    //   this.myMenuList.push({menuId : this.activeMenuId, menuNm : this.menuData[this.activeMenuId]});
    //   localStorage.setItem("myMenuList", JSON.stringify(this.myMenuList))
    //   this.bookmarkBtn = 1;
    // },
    // async removeBookMark(){
    //   this.myMenuList.pop(this.activeMenuId);
    //   localStorage.setItem("myMenuList", JSON.stringify(this.myMenuList))
    //   this.bookmarkBtn = 0;
    // },
    openChangePswdPop(){
      this.$refs['changePswdPop'].message = this.$i18n.t('CommLang.message.msg1');
      this.$refs['changePswdPop'].visibleDialog = true;
    },
    onExpandChange(event) {
      event.item.expanded = !event.item.expanded;
    },
    iconClassName({ text, items, level, menuId }) {
      if (level == 1) {
        if(menuId == 1) {
          return 'mdi-cog-outline';
        }
        else if(menuId == 10) {
           return 'mdi-alert-circle-outline';
        }
        else {
          return 'mdi-package-variant-closed';
        }
      } else if (level == 2) {
        return 'mdi-square-medium';
      } else {
        return 'mdi-circle-medium';
      }
    },
    onItemClick(event) {      
      let menuId = event.item.menuId;
      this.myMenuId = menuId;
      if (this.menuData[menuId].url){
        this.$router.push({
          path: `${this.menuData[menuId].url}?menuId=${menuId}`
        });
        this.$router.beforeEach((to, from, next) => {
          if (!to.matched.length) {
            next(false);
          } else {
            next();
          }
        });
      }else{
        this.onExpandChange(event)
      }
    },
    onSelect(event){
      let menuId = event.item.menuId;
      this.myMenuId = menuId;
      if (this.menuData[menuId].url){
        this.$router.push({
          path: `${this.menuData[menuId].url}?menuId=${menuId}`
        });
        this.$router.beforeEach((to, from, next) => {
          if (!to.matched.length) {
            next(false);
          } else {
            next();
          }
        });
      }
    },
    topMenuOn(){
      this.topMenu = !this.topMenu;
      localStorage.setItem("isTopMenu", this.topMenu);
      if(this.topMenu){
        document.getElementsByClassName("v-main")[0].style.height = "95%";
        document.getElementsByClassName("container--fluid")[0].style.height = "98%";
      }else{
        document.getElementsByClassName("v-main")[0].style.height = "100%";
        document.getElementsByClassName("container--fluid")[0].style.height = "100%";
      }
    },
    selectI18(val){
      localStorage.setItem("i18nVal", JSON.stringify({text: val.value.text, id:val.value.id, iso:val.value.iso}))
      window.location.reload();
      window.location.href = "/";
    }
  }
};
</script>

<style lang="scss">
.loading {
    z-index: 99;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.4);
    //box-shadow: rgba(68, 67, 67, 0.9) 0 0 0 9999px;
  }
  .v-spinner{
    top:50%;
    left:50%;
  }
  .k-treeview-group{
    padding-left: 0px !important;
  }
  .k-treeview-leaf{
    width : 95% !important;
    height: 40px;
    padding: 0px !important;
  }
  .k-treeview-mid {
    height: 40px;;
  }
  .k-treeview-item{
    padding: 0 0 0 12px !important;
  }
  .k-treeview-leaf-text {
    display: inline-block;
    width: 100%;
  }
  .treeNmText {
    display: inline-block;
    width: calc(100% - 50px);
    text-overflow: ellipsis !important;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
  }
  .treeChildNmText {
    display: inline-block;
    width: calc(100% - 55px);
    text-overflow: ellipsis !important;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
  }
  .k-menu-item{
    padding-right: 20px;
  }
  .k-menu-horizontal{
    padding-left: 100px !important;
  }
  .k-menu-link{
    font-size: 16px;
  }
</style>
