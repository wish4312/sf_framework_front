import { mapState, mapMutations, mapActions } from "vuex";
import 'hammerjs';
import AlertPop from "@/components/common/modal/AlertPop";
export default {
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      drawer: state => state.drawer
    }),
  },
  watch: {
  },
  components:{
    AlertPop
  },
  beforeCreate() {},
  created() {},
  mounted() {
    this.layoutInit();
  },
  beforeDestroy() {
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      postApi: "modules/list/postApi",
      postUpdateApi: "modules/list/postUpdateApi",
      postApiReturn: "modules/list/postApiReturn",
      setTree: "modules/list/setTree",
      getListReturn: "modules/list/getListReturn",
      postInsertReturn: "modules/list/postInsertReturn",
      putUpdateReturn: "modules/list/putUpdateReturn",
      deleteDeleteReturn: "modules/list/deleteDeleteReturn",
    }),
    layoutInit() {
      if(this.$refs.searchFilter){
        if(this.$refs.contents){
          const searchFilterHeight = this.$refs.searchFilter.offsetHeight;
          this.$refs.contents.style.height = `calc(100% - ${searchFilterHeight}px)`;
        }
      }else if(this.$refs.contents){
        this.$refs.contents.style.height = `calc(100%)`;
      }
    },
    setPercentage(warp, percentage){
      return Math.round(this.$refs[warp].offsetWidth / 100) * percentage;
    },
    init() {}
  }
};
