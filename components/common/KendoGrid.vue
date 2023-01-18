<template>
    <div>
        <Grid 
        :style="{height : gridHeight}"
        :data-items="gridItems"
        :columns = "columns"
        :resizable="resizable"
        :sortable="sortable"
        :selected-field="selectedField"
        :edit-field="'inEdit'"
        :rowHeight="35"
        @rowclick="rowSelected"
        @itemchange="rowItemChange"
        @selectionchange="onSelectionChange"
        @headerselectionchange="onHeaderSelectionChange">
        <template v-slot:crudCellTemplate="{props}">
            <td :style="cellBackground(props.dataItem)">
                {{props.dataItem[props.field]}} 
            </td>
        </template>
        <template v-slot:[gridDropDownList[idx].dataVal]="{ props }" v-for="(item,idx) in gridDropDownList">
            <td v-if="!props.dataItem.inEdit" :class="'String'">{{ props.dataItem[item.dataVal] }}</td>
            <td v-else>
            <DropDownList
                :style="{ width: '100px' }"
                @change="(e) => rowDdChange(e, props.field, props.dataItem)"
                :value="props.dataItem[item.dataVal]"
                :rounded="'large'"
                :data-items="item.dataItem"
            ></DropDownList>
            </td>
        </template>
        </Grid>
    </div>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid'
import { mapState, mapMutations } from "vuex";
import { DropDownList } from '@progress/kendo-vue-dropdowns';
export default {
    components: {
        Grid,
        DropDownList
    },
    props: {
        columns: {
            type: Array,
            require: false,
            default: () => {
              return [];
            }
        },
        gridDropDownList:{
            type: Array,
            require: false,
            default: () =>{
                return [];
            }
        },
        selectedField: {
            type: String,
            require: false,
            default : null
        },
        gridItems: {
            type: Array,
            require: false,
            default: () => {
              return [];
            }   
        },
        gridData: {
            type: Array,
            require: false,
            default: () => {
              return [];
            }   
        },
        gridHeight: {
            type: String,
            require: false,
            default : null   
        },
        sortable:{
            type: Boolean,
            require: false,
            default : false
        },
        resizable:{
            type: Boolean,
            require: false,
            default : false
        },
        gridIdx:{
            type: Number,
            default: 0 
        }
    },
    computed: {
        ...mapState({
            drawer: state => state.drawer,
            activeMenuId(state) {
                if(state.activeMenuInfo)
                return state.activeMenuInfo.menuId;
            }
        }),
    },
    watch:{
        activeMenuId(val) {
            if(val){
                const _this = this;
                setTimeout(() => {
                    _this.scrollBody.scrollTop = _this.gridScrollTop;
                    _this.scrollBody.scrollLeft = _this.gridScrollLeft
                }, 700);
            }
        },
    },
    data(){
        return{
            scrollBody: null,
            gridScrollTop: 0,
            gridScrollLeft: 0
        }
    },
    async mounted() {
        this.scrollBody = document.getElementsByClassName("k-virtual-content")[this.gridIdx];
        this.scrollBody.addEventListener("scroll", e => {
            this.gridScrollTop = e.target.scrollTop;
            this.gridScrollLeft = e.target.scrollLeft;
        });
    },
    methods:{
        cellBackground: function(dataItem){
            if(dataItem.rowStat == "I"){
                return {"background-color" : "rgb(253, 253, 13, 0.32)"}
            }else if(dataItem.rowStat == "U"){
                return {"background-color" : "rgb(55, 180, 0,0.32)"}
            }else if(dataItem.rowStat == "D"){
                return {"background-color" : "rgb(243, 23, 0, 0.32)"}
            }
        },
        rowSelected(event){
            this.$emit('gridrowclick', event)
        },
        rowItemChange(event){
            this.$emit('griditemchange', event)
        },
        rowDdChange: function (e, name, dataItem) {
            this.$emit('gridddchang', e, name, dataItem)
        },
        onSelectionChange(event){
            this.$emit('selectionchange', event)
        },
        onHeaderSelectionChange(event){
            this.$emit('headerselectionchange', event)
        },
        sortChangeHandler: function(e) {
            this.sort = e.sort;
        },
    }
}
</script>