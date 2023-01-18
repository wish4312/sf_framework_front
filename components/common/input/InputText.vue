<template>
  <v-row class="search-box" align="center" no-gutters>
    <v-col v-if="label" :cols="labelCols">
      <Label>
        <v-icon x-small :color="required ? '#fb8200' : 'primary'" class="mr-1">mdi-record-circle</v-icon>
        {{ label }}
      </Label>
    </v-col>
    <v-col :cols="label ? textCols : ''">
    <KInput :style="{ width: boxWidth}" 
        v-model="textVal"
        class="v-input__custom"
        :disabled="disabled"
        :type="type"
        outlined
        :hide-details="true"
        @change="inputText"
        @keyup.enter = "search"></KInput>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Input } from "@progress/kendo-vue-inputs";
import { Label } from "@progress/kendo-vue-labels";
export default {
  props: {
    diffModel: {
      type: String,
      require: false
    },
    label: {
      type: String,
      require: true
    },
    valueNm: {
      type: String,
      require: true
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false
    },
    labelCols:{
      type: Number,
      require: false,
      default: 4
    },
    textCols:{
      type: Number,
      require: false,
      default: 7
    },
    searchOption:{
      type:Boolean,
      require:false
    },
    required:{
      type:Boolean,
      require:false,
      default:false
    },
    boxWidth:{
        type: String,
        require: false,
        default: '100%'
    },
    dataNm:{
        type: String,
        require: false,
        default: null
    },
    type:{
        type: String,
        require: false,
        default: 'text'
    }
  },
  components: {
    KInput: Input,
    Label
  },
  data() {
    return {
        textVal : null
    };
  },
  computed: {
    ...mapState({
    })
  },
  created() {},
    methods: {
      search(){
        if(this.searchOption === true){
            this.$emit('input-text-set', this.dataNm, this.textVal);
        }
      },
      inputText(val){
        this.$emit('input-text-set', this.dataNm, this.textVal);
      }
    },
};
</script>

<style></style>
