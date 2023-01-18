<template>
  <div>
    <v-row :style="{ height: '100%' }">
      <v-col :cols="12">
        <Splitter
          :style="{ height: '100%' }"
          :panes="panes"
          :orientation="'vertical'"
          @change="onChange"
        >
          <template v-slot:first>
            <Splitter :panes="innerPanes1" @change="onInnerChange">
              <template v-slot:1>
                <div class="pane-content">
                  <h3>메인화면 콘텐츠1</h3>
                  <p>컨텐츠 내용</p>
                </div>
              </template>
              <template v-slot:2>
                <div class="pane-content">
                  <h3>메인화면 콘텐츠2</h3>
                  <p>컨텐츠 내용</p>
                </div>
              </template>
              <template v-slot:3>
                <div class="pane-content">
                  <h3>메인화면 콘텐츠3</h3>
                  <p>컨텐츠 내용</p>
                </div>
              </template>
              <template v-slot:4>
                <div class="pane-content">
                  <h3>메인화면 콘텐츠4</h3>
                  <p>컨텐츠 내용</p>
                </div>
              </template>
            </Splitter>
          </template>
          <template v-slot:second>
              <Splitter :panes="innerPanes3" @change="onInnerChange3">
              <template v-slot:1>
                <div class="pane-content">
                  <h3>메인화면 콘텐츠5</h3>
                  <p>컨텐츠 내용</p>
                </div>
              </template>
              <template v-slot:2>
                <div class="pane-content">
                  <h3>메인화면 콘텐츠6</h3>
                  <p>컨텐츠 내용</p>
                </div>
              </template>
            </Splitter>
          </template>
          <template v-slot:third>
            <Splitter :panes="innerPanes2" @change="onInnerChange2">
              <template v-slot:1>
                <div class="pane-content">
                  <h3>메인화면 콘텐츠7</h3>
                  <p>컨텐츠 내용</p>
                </div>
              </template>
              <template v-slot:2>
                <div class="pane-content">
                  <h3>메인화면 콘텐츠8</h3>
                  <p>컨텐츠 내용</p>
                </div>
              </template>
              <template v-slot:3>
                <div class="pane-content">
                  <h3>메인화면 콘텐츠9</h3>
                  <p>컨텐츠 내용</p>
                </div>
              </template>
              <template v-slot:4>
                <div class="pane-content">
                  <h3>메인화면 콘텐츠10</h3>
                  <p>컨텐츠 내용</p>
                </div>
              </template>
            </Splitter>
          </template>
        </Splitter>
      </v-col>
    </v-row>    
  </div>
</template>

<script>
import { mapState } from "vuex"; // , mapActions
import { Splitter } from "@progress/kendo-vue-layout";

let myTitle;
const myMenuId = "myIndex";
export default {
  layout: "default",
  asyncData(context) {
    const myState = context.store.state;
    context.store.commit("setActiveMenuInfo", myState.menuData[myMenuId]);
    myTitle = "Index";
  },
  meta: {
    title: () => {
      return myTitle;
    },
    menuId: myMenuId,
    closable: false
  },
  computed: {
    ...mapState({
      isDarkMode: "isDarkMode",
      myHome: "myHome"
    }),

  },
  components: {
    Splitter
  },
  data() {
    return {
      panes: [
        { size: '40%', resizable: true, containsSplitter: true, content: 'first' },
        { resizable: true, content: 'second' },
        { size: '30%', resizable: true, content: 'third' },
      ],
      innerPanes1: [
        { resizable: true, size: '20%', min: '20px', collapsible: true, content: '1' },
        { resizable: true, content: '2' },
        { resizable: true, size: '30%', min: '20px', collapsible: true, content: '3' },
        { resizable: true, size: '30%', min: '20px', collapsible: true, content: '4' },
      ],
      innerPanes2: [
        { resizable: true, size: '20%',  collapsible: true, content: '1' },
        { resizable: true, content: '2' },
        { resizable: true, size: '30%',  collapsible: true, content: '3' },
        { resizable: true, size: '30%',  collapsible: true, content: '4' },
      ],
      innerPanes3: [
        { resizable: true, size: '50%',  collapsible: true, content: '1' },
        { resizable: true, content: '2' }
      ],
    };
  },
  beforeCreate() {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    onChange(event) {
      this.panes = event.newState;
    },
    onInnerChange(event) {
      this.innerPanes1 = event.newState;
    },
    onInnerChange2(event) {
      this.innerPanes2 = event.newState;
    },
    onInnerChange3(event) {
      this.innerPanes3 = event.newState;
    },
  }
};

</script>

<style lang="scss">
.pane-content { padding: 10px; }
.k-splitter-flex{height: 100% !important;}
</style>
