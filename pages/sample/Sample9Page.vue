<template>
    <div>
      <v-row>
        <v-col :cols="6">
            <kcard style="width:100%; height:300px;">
                <div id="lineDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
        <v-col :cols="6">
            <kcard style="width:100%; height:300px;">
                <div id="lineStackDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="6">
            <kcard style="width:100%; height:300px;">
                <div id="barDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
        <v-col :cols="6">
            <kcard style="width:100%; height:300px;">
                <div id="barStackDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="3">
            <kcard style="width:100%; height:300px;">
                <div id="pieDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
        <v-col :cols="3">
            <kcard style="width:100%; height:300px;">
                <div id="doughnutDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
        <v-col :cols="3">
            <kcard style="width:100%; height:300px;">
                <div id="radarDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
        <v-col :cols="3">
            <kcard style="width:100%; height:300px;">
                <div id="cusRadarDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="6">
            <kcard style="width:100%; height:300px;">
                <div id="scatterDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
        <v-col :cols="3">
            <kcard style="width:100%; height:300px;">
                <div id="gaugeDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
        <v-col :cols="3">
            <kcard style="width:100%; height:300px;">
                <div id="multiGaugeDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="12">
            <kcard style="width:100%; height:600px;">
                <div id="diskDom" style="width:100%; height:100%;"></div>
            </kcard>
        </v-col>
      </v-row>
  </div>
  </template>
<script>
import * as echarts from 'echarts';
import mixinGlobal from "@/mixin/global.js";
import { Card, CardBody, CardTitle, CardActions } from "@progress/kendo-vue-layout";
let myTitle;
let myMenuId;
export default {
  mixins: [mixinGlobal],
  async asyncData(context) {
    const myState = context.store.state;
    myMenuId = context.route.query.menuId;
    await context.store.commit("setActiveMenuInfo", myState.menuData[myMenuId]);
    myTitle = await myState.activeMenuInfo.menuNm;
  },
  meta: {
    title: () => {
      return myTitle;
    },
    menuId: myMenuId,
    closable: true
  },
  components: {
    echarts,
    "kcard" : Card,
    CardBody, CardTitle, CardActions,
  },
  data(){
    return {
        lineChartDom : null,
        lineChart : null,
        lineOption : {
            title: {
                text: 'Line'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
                }
            ]
        },
        lineStackChartDom : null,
        lineStackChart : null,
        lineStackOption : {
            title: {
                text: 'Stacked Line'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        barChartDom : null,
        barChart : null,
        barOption : {
            title: {
                text: 'Bar'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
                }
            ],
            yAxis: [
                {
                type: 'value'
                }
            ],
            series: [
                {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        },
        barStackChartDom : null,
        barStackChart : null,
        barStackOption : {
            title: {
                text: 'Stacked Bar'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'shadow'
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                type: 'value'
                }
            ],
            series: [
                {
                name: 'Direct',
                type: 'bar',
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                name: 'Email',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                name: 'Union Ads',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                name: 'Video Ads',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                name: 'Search Engine',
                type: 'bar',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                emphasis: {
                    focus: 'series'
                },
                markLine: {
                    lineStyle: {
                    type: 'dashed'
                    },
                    data: [[{ type: 'min' }, { type: 'max' }]]
                }
                },
                {
                name: 'Baidu',
                type: 'bar',
                barWidth: 5,
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                name: 'Google',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 290, 230, 220]
                },
                {
                name: 'Bing',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [60, 72, 71, 74, 190, 130, 110]
                },
                {
                name: 'Others',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [62, 82, 91, 84, 109, 110, 120]
                }
            ]
        },
        pieChartDom : null,
        pieChart : null,
        pieOption : {
            title: {
                text: 'Pie',
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
                }
            ]
        },
        doughnutChartDom : null,
        doughnutChart : null,
        doughnutOption : {
            title: {
                text: 'Doughnut'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
                }
            ]
        },
        
        radarChartDom : null,
        radarChart : null,
        radarOption : {
            title: {
                text: 'Radar'
            },
            legend: {
                data: ['Allocated Budget', 'Actual Spending']
            },
            radar: {
                // shape: 'circle',
                indicator: [
                { name: 'Sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'Information Technology', max: 30000 },
                { name: 'Customer Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 }
                ]
            },
            series: [
                {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                    name: 'Allocated Budget'
                    },
                    {
                    value: [5000, 14000, 28000, 26000, 42000, 21000],
                    name: 'Actual Spending'
                    }
                ]
                }
            ]
        },
        cusRadarChartDom : null,
        cusRadarChart : null,
        cusRadarOption : {
            color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
            title: {
                text: 'Customized Radar'
            },
            legend: {},
            radar: [
                {
                indicator: [
                    { text: 'Indicator1' },
                    { text: 'Indicator2' },
                    { text: 'Indicator3' },
                    { text: 'Indicator4' },
                    { text: 'Indicator5' }
                ],
                center: ['25%', '50%'],
                radius: 120,
                startAngle: 90,
                splitNumber: 4,
                shape: 'circle',
                axisName: {
                    formatter: '【{value}】',
                    color: '#428BD4'
                },
                splitArea: {
                    areaStyle: {
                    color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                    }
                },
                axisLine: {
                    lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                    }
                },
                splitLine: {
                    lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                    }
                }
                },
                {
                indicator: [
                    { text: 'Indicator1', max: 150 },
                    { text: 'Indicator2', max: 150 },
                    { text: 'Indicator3', max: 150 },
                    { text: 'Indicator4', max: 120 },
                    { text: 'Indicator5', max: 108 },
                    { text: 'Indicator6', max: 72 }
                ],
                center: ['75%', '50%'],
                radius: 120,
                axisName: {
                    color: '#fff',
                    backgroundColor: '#666',
                    borderRadius: 3,
                    padding: [3, 5]
                }
                }
            ],
            series: [
                {
                type: 'radar',
                emphasis: {
                    lineStyle: {
                    width: 4
                    }
                },
                data: [
                    {
                    value: [100, 8, 0.4, -80, 2000],
                    name: 'Data A'
                    },
                    {
                    value: [60, 5, 0.3, -100, 1500],
                    name: 'Data B',
                    areaStyle: {
                        color: 'rgba(255, 228, 52, 0.6)'
                    }
                    }
                ]
                },
                {
                type: 'radar',
                radarIndex: 1,
                data: [
                    {
                    value: [120, 118, 130, 100, 99, 70],
                    name: 'Data C',
                    symbol: 'rect',
                    symbolSize: 12,
                    lineStyle: {
                        type: 'dashed'
                    },
                    label: {
                        show: true,
                        formatter: function (params) {
                        return params.value;
                        }
                    }
                    },
                    {
                    value: [100, 93, 50, 90, 70, 60],
                    name: 'Data D',
                    areaStyle: {
                        color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                        {
                            color: 'rgba(255, 145, 124, 0.1)',
                            offset: 0
                        },
                        {
                            color: 'rgba(255, 145, 124, 0.9)',
                            offset: 1
                        }
                        ])
                    }
                    }
                ]
                }
            ]
        },
        
        scatterChartDom : null,
        scatterChart : null,
        scatterOption : {
            title: {
                text: 'Scatter'
            },
            xAxis: {},
            yAxis: {},
            series: [
                {
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.07, 6.95],
                    [13.0, 7.58],
                    [9.05, 8.81],
                    [11.0, 8.33],
                    [14.0, 7.66],
                    [13.4, 6.81],
                    [10.0, 6.33],
                    [14.0, 8.96],
                    [12.5, 6.82],
                    [9.15, 7.2],
                    [11.5, 7.2],
                    [3.03, 4.23],
                    [12.2, 7.83],
                    [2.02, 4.47],
                    [1.05, 3.33],
                    [4.05, 4.96],
                    [6.03, 7.24],
                    [12.0, 6.26],
                    [12.0, 8.84],
                    [7.08, 5.82],
                    [5.02, 5.68]
                ],
                type: 'scatter'
                }
            ]
        },
        gaugeChartDom : null,
        gaugeChart : null,
        gaugeOption : {
            title: {
                text: 'Gauge'
            },
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            series: [
                {
                name: 'Pressure',
                type: 'gauge',
                progress: {
                    show: true
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value}'
                },
                data: [
                    {
                    value: 50,
                    name: 'SCORE'
                    }
                ]
                }
            ]
        },
        multiGaugeChartDom : null,
        multiGaugeChart : null,
        multiGaugeOption : {
            title: {
                text: 'Multi Gauge'
            },
            series: [
                {
                type: 'gauge',
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 18,
                    itemStyle: {
                    color: '#FAC858'
                    }
                },
                pointer: {
                    icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                    width: 8,
                    length: '80%',
                    offsetCenter: [0, '8%']
                },
                progress: {
                    show: true,
                    overlap: true,
                    roundCap: true
                },
                axisLine: {
                    roundCap: true
                },
                data: [
                    {
                        value: 20,
                        name: 'Good',
                        title: {
                        offsetCenter: ['-40%', '80%']
                        },
                        detail: {
                        offsetCenter: ['-40%', '95%']
                        }
                    },
                    {
                        value: 40,
                        name: 'Better',
                        title: {
                        offsetCenter: ['0%', '80%']
                        },
                        detail: {
                        offsetCenter: ['0%', '95%']
                        }
                    },
                    {
                        value: 60,
                        name: 'Perfect',
                        title: {
                        offsetCenter: ['40%', '80%']
                        },
                        detail: {
                        offsetCenter: ['40%', '95%']
                        }
                    }
                ],
                title: {
                    fontSize: 14
                },
                detail: {
                    width: 40,
                    height: 14,
                    fontSize: 14,
                    color: '#fff',
                    backgroundColor: 'auto',
                    borderRadius: 3,
                    formatter: '{value}%'
                }
                }
            ]
        },
        diskChartDom : null,
        diskChart : null,
        diskOption : {
            title: {
                text: 'Disk Usage',
            },

            tooltip: {
                formatter: function (info) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];

                for (var i = 1; i < treePathInfo.length; i++) {
                    treePath.push(treePathInfo[i].name);
                }

                return [
                    '<div class="tooltip-title">' +
                    formatUtil.encodeHTML(treePath.join('/')) +
                    '</div>',
                    'Disk Usage: ' + formatUtil.addCommas(value) + ' KB'
                ].join('');
                }
            },

            series: [
                {
                name: 'Disk Usage',
                type: 'treemap',
                visibleMin: 300,
                label: {
                    show: true,
                    formatter: '{b}'
                },
                itemStyle: {
                    borderColor: '#fff'
                },
                levels: [{
                    itemStyle: {
                    borderWidth: 0,
                    gapWidth: 5
                    }
                },
                {
                    itemStyle: {
                    gapWidth: 1
                    }
                },
                {
                    colorSaturation: [0.35, 0.5],
                    itemStyle: {
                    gapWidth: 1,
                    borderColorSaturation: 0.6
                    }
                }],
                data: dummy
                }
            ]
        }
    }
  },
  mounted(){
    this.lineChartDom = document.getElementById('lineDom');
    this.lineChart = echarts.init(this.lineChartDom);
    this.lineChart.setOption(this.lineOption);

    this.lineStackChartDom = document.getElementById('lineStackDom'),
    this.lineStackChart = echarts.init(this.lineStackChartDom),
    this.lineStackChart.setOption(this.lineStackOption);

    this.barChartDom = document.getElementById('barDom');
    this.barChart = echarts.init(this.barChartDom);
    this.barChart.setOption(this.barOption);

    this.barStackChartDom = document.getElementById('barStackDom');
    this.barStackChart = echarts.init(this.barStackChartDom);
    this.barStackChart.setOption(this.barStackOption);

    this.pieChartDom = document.getElementById('pieDom');
    this.pieChart = echarts.init(this.pieChartDom);
    this.pieChart.setOption(this.pieOption);
    
    this.doughnutChartDom = document.getElementById('doughnutDom');
    this.doughnutChart = echarts.init(this.doughnutChartDom);
    this.doughnutChart.setOption(this.doughnutOption);

    this.radarChartDom = document.getElementById('radarDom');
    this.radarChart = echarts.init(this.radarChartDom);
    this.radarChart.setOption(this.radarOption);
    
    this.cusRadarChartDom = document.getElementById('cusRadarDom');
    this.cusRadarChart = echarts.init(this.cusRadarChartDom);
    this.cusRadarChart.setOption(this.cusRadarOption);

    this.scatterChartDom = document.getElementById('scatterDom');
    this.scatterChart = echarts.init(this.scatterChartDom);
    this.scatterChart.setOption(this.scatterOption);

    this.gaugeChartDom = document.getElementById('gaugeDom');
    this.gaugeChart = echarts.init(this.gaugeChartDom);
    this.gaugeChart.setOption(this.gaugeOption);

    this.multiGaugeChartDom = document.getElementById('multiGaugeDom');
    this.multiGaugeChart = echarts.init(this.multiGaugeChartDom);
    this.multiGaugeChart.setOption(this.multiGaugeOption);

    this.diskChartDom = document.getElementById('diskDom');
    this.diskChart = echarts.init(this.diskChartDom);
    this.diskChart.setOption(this.diskOption);
    
  },
  method:{
    
  }
}
const formatUtil = echarts.format;
let dummy = [
    {
        "value": 40,
        "name": "Accessibility",
        "path": "Accessibility"
    },
    {
        "value": 180,
        "name": "Accounts",
        "path": "Accounts",
        "children": [
            {
                "value": 76,
                "name": "Access",
                "path": "Accounts/Access",
                "children": [
                    {
                        "value": 12,
                        "name": "DefaultAccessPlugin.bundle",
                        "path": "Accounts/Access/DefaultAccessPlugin.bundle"
                    },
                    {
                        "value": 28,
                        "name": "FacebookAccessPlugin.bundle",
                        "path": "Accounts/Access/FacebookAccessPlugin.bundle"
                    },
                    {
                        "value": 20,
                        "name": "LinkedInAccessPlugin.bundle",
                        "path": "Accounts/Access/LinkedInAccessPlugin.bundle"
                    },
                    {
                        "value": 16,
                        "name": "TencentWeiboAccessPlugin.bundle",
                        "path": "Accounts/Access/TencentWeiboAccessPlugin.bundle"
                    }
                ]
            },
            {
                "value": 92,
                "name": "Authentication",
                "path": "Accounts/Authentication",
                "children": [
                    {
                        "value": 24,
                        "name": "FacebookAuthenticationPlugin.bundle",
                        "path": "Accounts/Authentication/FacebookAuthenticationPlugin.bundle"
                    },
                    {
                        "value": 16,
                        "name": "LinkedInAuthenticationPlugin.bundle",
                        "path": "Accounts/Authentication/LinkedInAuthenticationPlugin.bundle"
                    },
                    {
                        "value": 20,
                        "name": "TencentWeiboAuthenticationPlugin.bundle",
                        "path": "Accounts/Authentication/TencentWeiboAuthenticationPlugin.bundle"
                    },
                    {
                        "value": 16,
                        "name": "TwitterAuthenticationPlugin.bundle",
                        "path": "Accounts/Authentication/TwitterAuthenticationPlugin.bundle"
                    },
                    {
                        "value": 16,
                        "name": "WeiboAuthenticationPlugin.bundle",
                        "path": "Accounts/Authentication/WeiboAuthenticationPlugin.bundle"
                    }
                ]
            },
            {
                "value": 12,
                "name": "Notification",
                "path": "Accounts/Notification",
                "children": [
                    {
                        "value": 12,
                        "name": "SPAAccountsNotificationPlugin.bundle",
                        "path": "Accounts/Notification/SPAAccountsNotificationPlugin.bundle"
                    }
                ]
            }
        ]
    },
    {
        "value": 1904,
        "name": "AddressBook Plug-Ins",
        "path": "AddressBook Plug-Ins",
        "children": [
            {
                "value": 744,
                "name": "CardDAVPlugin.sourcebundle",
                "path": "AddressBook Plug-Ins/CardDAVPlugin.sourcebundle",
                "children": [
                    {
                        "value": 744,
                        "name": "Contents",
                        "path": "AddressBook Plug-Ins/CardDAVPlugin.sourcebundle/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "DirectoryServices.sourcebundle",
                "path": "AddressBook Plug-Ins/DirectoryServices.sourcebundle",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "AddressBook Plug-Ins/DirectoryServices.sourcebundle/Contents"
                    }
                ]
            },
            {
                "value": 680,
                "name": "Exchange.sourcebundle",
                "path": "AddressBook Plug-Ins/Exchange.sourcebundle",
                "children": [
                    {
                        "value": 680,
                        "name": "Contents",
                        "path": "AddressBook Plug-Ins/Exchange.sourcebundle/Contents"
                    }
                ]
            },
            {
                "value": 432,
                "name": "LDAP.sourcebundle",
                "path": "AddressBook Plug-Ins/LDAP.sourcebundle",
                "children": [
                    {
                        "value": 432,
                        "name": "Contents",
                        "path": "AddressBook Plug-Ins/LDAP.sourcebundle/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "LocalSource.sourcebundle",
                "path": "AddressBook Plug-Ins/LocalSource.sourcebundle",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "AddressBook Plug-Ins/LocalSource.sourcebundle/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 36,
        "name": "Assistant",
        "path": "Assistant",
        "children": [
            {
                "value": 36,
                "name": "Plugins",
                "path": "Assistant/Plugins",
                "children": [
                    {
                        "value": 36,
                        "name": "AddressBook.assistantBundle",
                        "path": "Assistant/Plugins/AddressBook.assistantBundle"
                    },
                    {
                        "value": 8,
                        "name": "GenericAddressHandler.addresshandler",
                        "path": "Recents/Plugins/GenericAddressHandler.addresshandler"
                    },
                    {
                        "value": 12,
                        "name": "MapsRecents.addresshandler",
                        "path": "Recents/Plugins/MapsRecents.addresshandler"
                    }
                ]
            }
        ]
    },
    {
        "value": 53228,
        "name": "Automator",
        "path": "Automator",
        "children": [
            {
                "value": 0,
                "name": "ActivateFonts.action",
                "path": "Automator/ActivateFonts.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/ActivateFonts.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "AddAttachments to Front Message.action",
                "path": "Automator/AddAttachments to Front Message.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/AddAttachments to Front Message.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "AddColor Profile.action",
                "path": "Automator/AddColor Profile.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/AddColor Profile.action/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "AddGrid to PDF Documents.action",
                "path": "Automator/AddGrid to PDF Documents.action",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Automator/AddGrid to PDF Documents.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "AddMovie to iDVD Menu.action",
                "path": "Automator/AddMovie to iDVD Menu.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/AddMovie to iDVD Menu.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "AddPhotos to Album.action",
                "path": "Automator/AddPhotos to Album.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/AddPhotos to Album.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "AddSongs to iPod.action",
                "path": "Automator/AddSongs to iPod.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/AddSongs to iPod.action/Contents"
                    }
                ]
            },
            {
                "value": 44,
                "name": "AddSongs to Playlist.action",
                "path": "Automator/AddSongs to Playlist.action",
                "children": [
                    {
                        "value": 44,
                        "name": "Contents",
                        "path": "Automator/AddSongs to Playlist.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "AddThumbnail Icon to Image Files.action",
                "path": "Automator/AddThumbnail Icon to Image Files.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/AddThumbnail Icon to Image Files.action/Contents"
                    }
                ]
            },
            {
                "value": 268,
                "name": "Addto Font Library.action",
                "path": "Automator/Addto Font Library.action",
                "children": [
                    {
                        "value": 268,
                        "name": "Contents",
                        "path": "Automator/Addto Font Library.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "AddressBook.definition",
                "path": "Automator/AddressBook.definition",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/AddressBook.definition/Contents"
                    }
                ]
            },
            {
                "value": 408,
                "name": "AppleVersioning Tool.action",
                "path": "Automator/AppleVersioning Tool.action",
                "children": [
                    {
                        "value": 408,
                        "name": "Contents",
                        "path": "Automator/AppleVersioning Tool.action/Contents"
                    }
                ]
            },
            {
                "value": 568,
                "name": "ApplyColorSync Profile to Images.action",
                "path": "Automator/ApplyColorSync Profile to Images.action",
                "children": [
                    {
                        "value": 568,
                        "name": "Contents",
                        "path": "Automator/ApplyColorSync Profile to Images.action/Contents"
                    }
                ]
            },
            {
                "value": 348,
                "name": "ApplyQuartz Composition Filter to Image Files.action",
                "path": "Automator/ApplyQuartz Composition Filter to Image Files.action",
                "children": [
                    {
                        "value": 348,
                        "name": "Contents",
                        "path": "Automator/ApplyQuartz Composition Filter to Image Files.action/Contents"
                    }
                ]
            },
            {
                "value": 368,
                "name": "ApplyQuartz Filter to PDF Documents.action",
                "path": "Automator/ApplyQuartz Filter to PDF Documents.action",
                "children": [
                    {
                        "value": 368,
                        "name": "Contents",
                        "path": "Automator/ApplyQuartz Filter to PDF Documents.action/Contents"
                    }
                ]
            },
            {
                "value": 96,
                "name": "ApplySQL.action",
                "path": "Automator/ApplySQL.action",
                "children": [
                    {
                        "value": 96,
                        "name": "Contents",
                        "path": "Automator/ApplySQL.action/Contents"
                    }
                ]
            },
            {
                "value": 372,
                "name": "Askfor Confirmation.action",
                "path": "Automator/Askfor Confirmation.action",
                "children": [
                    {
                        "value": 372,
                        "name": "Contents",
                        "path": "Automator/Askfor Confirmation.action/Contents"
                    }
                ]
            },
            {
                "value": 104,
                "name": "Askfor Finder Items.action",
                "path": "Automator/Askfor Finder Items.action",
                "children": [
                    {
                        "value": 104,
                        "name": "Contents",
                        "path": "Automator/Askfor Finder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 52,
                "name": "Askfor Movies.action",
                "path": "Automator/Askfor Movies.action",
                "children": [
                    {
                        "value": 52,
                        "name": "Contents",
                        "path": "Automator/Askfor Movies.action/Contents"
                    }
                ]
            },
            {
                "value": 44,
                "name": "Askfor Photos.action",
                "path": "Automator/Askfor Photos.action",
                "children": [
                    {
                        "value": 44,
                        "name": "Contents",
                        "path": "Automator/Askfor Photos.action/Contents"
                    }
                ]
            },
            {
                "value": 16,
                "name": "Askfor Servers.action",
                "path": "Automator/Askfor Servers.action",
                "children": [
                    {
                        "value": 16,
                        "name": "Contents",
                        "path": "Automator/Askfor Servers.action/Contents"
                    }
                ]
            },
            {
                "value": 52,
                "name": "Askfor Songs.action",
                "path": "Automator/Askfor Songs.action",
                "children": [
                    {
                        "value": 52,
                        "name": "Contents",
                        "path": "Automator/Askfor Songs.action/Contents"
                    }
                ]
            },
            {
                "value": 288,
                "name": "Askfor Text.action",
                "path": "Automator/Askfor Text.action",
                "children": [
                    {
                        "value": 288,
                        "name": "Contents",
                        "path": "Automator/Askfor Text.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "Automator.definition",
                "path": "Automator/Automator.definition",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/Automator.definition/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "BrowseMovies.action",
                "path": "Automator/BrowseMovies.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/BrowseMovies.action/Contents"
                    }
                ]
            },
            {
                "value": 552,
                "name": "BuildXcode Project.action",
                "path": "Automator/BuildXcode Project.action",
                "children": [
                    {
                        "value": 552,
                        "name": "Contents",
                        "path": "Automator/BuildXcode Project.action/Contents"
                    }
                ]
            },
            {
                "value": 296,
                "name": "BurnA Disc.action",
                "path": "Automator/BurnA Disc.action",
                "children": [
                    {
                        "value": 296,
                        "name": "Contents",
                        "path": "Automator/BurnA Disc.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ChangeCase of Song Names.action",
                "path": "Automator/ChangeCase of Song Names.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ChangeCase of Song Names.action/Contents"
                    }
                ]
            },
            {
                "value": 60,
                "name": "ChangeType of Images.action",
                "path": "Automator/ChangeType of Images.action",
                "children": [
                    {
                        "value": 60,
                        "name": "Contents",
                        "path": "Automator/ChangeType of Images.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "Choosefrom List.action",
                "path": "Automator/Choosefrom List.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/Choosefrom List.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "CombineMail Messages.action",
                "path": "Automator/CombineMail Messages.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/CombineMail Messages.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "CombinePDF Pages.action",
                "path": "Automator/CombinePDF Pages.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/CombinePDF Pages.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "CombineText Files.action",
                "path": "Automator/CombineText Files.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/CombineText Files.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "CompressImages in PDF Documents.action",
                "path": "Automator/CompressImages in PDF Documents.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/CompressImages in PDF Documents.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "Connectto Servers.action",
                "path": "Automator/Connectto Servers.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/Connectto Servers.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertAccount object to Mailbox object.caction",
                "path": "Automator/ConvertAccount object to Mailbox object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertAccount object to Mailbox object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertAlbum object to Photo object.caction",
                "path": "Automator/ConvertAlbum object to Photo object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertAlbum object to Photo object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertAlias object to Finder object.caction",
                "path": "Automator/ConvertAlias object to Finder object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertAlias object to Finder object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertAlias object to iPhoto photo object.caction",
                "path": "Automator/ConvertAlias object to iPhoto photo object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertAlias object to iPhoto photo object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertCalendar object to Event object.caction",
                "path": "Automator/ConvertCalendar object to Event object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertCalendar object to Event object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertCalendar object to Reminders object.caction",
                "path": "Automator/ConvertCalendar object to Reminders object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertCalendar object to Reminders object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertCocoa Data To Cocoa String.caction",
                "path": "Automator/ConvertCocoa Data To Cocoa String.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertCocoa Data To Cocoa String.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertCocoa String To Cocoa Data.caction",
                "path": "Automator/ConvertCocoa String To Cocoa Data.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertCocoa String To Cocoa Data.caction/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "ConvertCocoa URL to iTunes Track Object.caction",
                "path": "Automator/ConvertCocoa URL to iTunes Track Object.caction",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/ConvertCocoa URL to iTunes Track Object.caction/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "ConvertCocoa URL to RSS Feed.caction",
                "path": "Automator/ConvertCocoa URL to RSS Feed.caction",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/ConvertCocoa URL to RSS Feed.caction/Contents"
                    }
                ]
            },
            {
                "value": 40,
                "name": "ConvertCSV to SQL.action",
                "path": "Automator/ConvertCSV to SQL.action",
                "children": [
                    {
                        "value": 40,
                        "name": "Contents",
                        "path": "Automator/ConvertCSV to SQL.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertFeeds to Articles.caction",
                "path": "Automator/ConvertFeeds to Articles.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertFeeds to Articles.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertFinder object to Alias object.caction",
                "path": "Automator/ConvertFinder object to Alias object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertFinder object to Alias object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertGroup object to Person object.caction",
                "path": "Automator/ConvertGroup object to Person object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertGroup object to Person object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertiPhoto Album to Alias object.caction",
                "path": "Automator/ConvertiPhoto Album to Alias object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertiPhoto Album to Alias object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertiTunes object to Alias object.caction",
                "path": "Automator/ConvertiTunes object to Alias object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertiTunes object to Alias object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertiTunes Playlist object to Alias object.caction",
                "path": "Automator/ConvertiTunes Playlist object to Alias object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertiTunes Playlist object to Alias object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertMailbox object to Message object.caction",
                "path": "Automator/ConvertMailbox object to Message object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertMailbox object to Message object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertPhoto object to Alias object.caction",
                "path": "Automator/ConvertPhoto object to Alias object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertPhoto object to Alias object.caction/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertPlaylist object to Song object.caction",
                "path": "Automator/ConvertPlaylist object to Song object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertPlaylist object to Song object.caction/Contents"
                    }
                ]
            },
            {
                "value": 2760,
                "name": "ConvertQuartz Compositions to QuickTime Movies.action",
                "path": "Automator/ConvertQuartz Compositions to QuickTime Movies.action",
                "children": [
                    {
                        "value": 2760,
                        "name": "Contents",
                        "path": "Automator/ConvertQuartz Compositions to QuickTime Movies.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ConvertSource object to Playlist object.caction",
                "path": "Automator/ConvertSource object to Playlist object.caction",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ConvertSource object to Playlist object.caction/Contents"
                    }
                ]
            },
            {
                "value": 96,
                "name": "CopyFinder Items.action",
                "path": "Automator/CopyFinder Items.action",
                "children": [
                    {
                        "value": 96,
                        "name": "Contents",
                        "path": "Automator/CopyFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "Copyto Clipboard.action",
                "path": "Automator/Copyto Clipboard.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/Copyto Clipboard.action/Contents"
                    }
                ]
            },
            {
                "value": 72,
                "name": "CreateAnnotated Movie File.action",
                "path": "Automator/CreateAnnotated Movie File.action",
                "children": [
                    {
                        "value": 72,
                        "name": "Contents",
                        "path": "Automator/CreateAnnotated Movie File.action/Contents"
                    }
                ]
            },
            {
                "value": 96,
                "name": "CreateArchive.action",
                "path": "Automator/CreateArchive.action",
                "children": [
                    {
                        "value": 96,
                        "name": "Contents",
                        "path": "Automator/CreateArchive.action/Contents"
                    }
                ]
            },
            {
                "value": 412,
                "name": "CreateBanner Image from Text.action",
                "path": "Automator/CreateBanner Image from Text.action",
                "children": [
                    {
                        "value": 412,
                        "name": "Contents",
                        "path": "Automator/CreateBanner Image from Text.action/Contents"
                    }
                ]
            },
            {
                "value": 392,
                "name": "CreatePackage.action",
                "path": "Automator/CreatePackage.action",
                "children": [
                    {
                        "value": 392,
                        "name": "Contents",
                        "path": "Automator/CreatePackage.action/Contents"
                    }
                ]
            },
            {
                "value": 208,
                "name": "CreateThumbnail Images.action",
                "path": "Automator/CreateThumbnail Images.action",
                "children": [
                    {
                        "value": 208,
                        "name": "Contents",
                        "path": "Automator/CreateThumbnail Images.action/Contents"
                    }
                ]
            },
            {
                "value": 712,
                "name": "CropImages.action",
                "path": "Automator/CropImages.action",
                "children": [
                    {
                        "value": 712,
                        "name": "Contents",
                        "path": "Automator/CropImages.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "CVSAdd.action",
                "path": "Automator/CVSAdd.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/CVSAdd.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "CVSCheckout.action",
                "path": "Automator/CVSCheckout.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/CVSCheckout.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "CVSCommit.action",
                "path": "Automator/CVSCommit.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/CVSCommit.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "CVSUpdate.action",
                "path": "Automator/CVSUpdate.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/CVSUpdate.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "DeactivateFonts.action",
                "path": "Automator/DeactivateFonts.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/DeactivateFonts.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "DeleteAll iPod Notes.action",
                "path": "Automator/DeleteAll iPod Notes.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/DeleteAll iPod Notes.action/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "DeleteCalendar Events.action",
                "path": "Automator/DeleteCalendar Events.action",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Automator/DeleteCalendar Events.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "DeleteCalendar Items.action",
                "path": "Automator/DeleteCalendar Items.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/DeleteCalendar Items.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "DeleteCalendars.action",
                "path": "Automator/DeleteCalendars.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/DeleteCalendars.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "DeleteReminders.action",
                "path": "Automator/DeleteReminders.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/DeleteReminders.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "DisplayMail Messages.action",
                "path": "Automator/DisplayMail Messages.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/DisplayMail Messages.action/Contents"
                    }
                ]
            },
            {
                "value": 16,
                "name": "DisplayNotification.action",
                "path": "Automator/DisplayNotification.action",
                "children": [
                    {
                        "value": 16,
                        "name": "Contents",
                        "path": "Automator/DisplayNotification.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "DisplayWebpages 2.action",
                "path": "Automator/DisplayWebpages 2.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/DisplayWebpages 2.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "DisplayWebpages.action",
                "path": "Automator/DisplayWebpages.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/DisplayWebpages.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "DownloadPictures.action",
                "path": "Automator/DownloadPictures.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/DownloadPictures.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "DownloadURLs.action",
                "path": "Automator/DownloadURLs.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/DownloadURLs.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "DuplicateFinder Items.action",
                "path": "Automator/DuplicateFinder Items.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/DuplicateFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "EjectDisk.action",
                "path": "Automator/EjectDisk.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/EjectDisk.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "EjectiPod.action",
                "path": "Automator/EjectiPod.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/EjectiPod.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "Enableor Disable Tracks.action",
                "path": "Automator/Enableor Disable Tracks.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/Enableor Disable Tracks.action/Contents"
                    }
                ]
            },
            {
                "value": 464,
                "name": "EncodeMedia.action",
                "path": "Automator/EncodeMedia.action",
                "children": [
                    {
                        "value": 464,
                        "name": "Contents",
                        "path": "Automator/EncodeMedia.action/Contents"
                    }
                ]
            },
            {
                "value": 80,
                "name": "Encodeto MPEG Audio.action",
                "path": "Automator/Encodeto MPEG Audio.action",
                "children": [
                    {
                        "value": 80,
                        "name": "Contents",
                        "path": "Automator/Encodeto MPEG Audio.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "EncryptPDF Documents.action",
                "path": "Automator/EncryptPDF Documents.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/EncryptPDF Documents.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "EventSummary.action",
                "path": "Automator/EventSummary.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/EventSummary.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "ExecuteSQL.action",
                "path": "Automator/ExecuteSQL.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/ExecuteSQL.action/Contents"
                    }
                ]
            },
            {
                "value": 264,
                "name": "ExportFont Files.action",
                "path": "Automator/ExportFont Files.action",
                "children": [
                    {
                        "value": 264,
                        "name": "Contents",
                        "path": "Automator/ExportFont Files.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "ExportMovies for iPod.action",
                "path": "Automator/ExportMovies for iPod.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/ExportMovies for iPod.action/Contents"
                    }
                ]
            },
            {
                "value": 44,
                "name": "ExportvCards.action",
                "path": "Automator/ExportvCards.action",
                "children": [
                    {
                        "value": 44,
                        "name": "Contents",
                        "path": "Automator/ExportvCards.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "ExtractData from Text.action",
                "path": "Automator/ExtractData from Text.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/ExtractData from Text.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "ExtractOdd & Even Pages.action",
                "path": "Automator/ExtractOdd & Even Pages.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/ExtractOdd & Even Pages.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "ExtractPDF Annotations.action",
                "path": "Automator/ExtractPDF Annotations.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/ExtractPDF Annotations.action/Contents"
                    }
                ]
            },
            {
                "value": 2620,
                "name": "ExtractPDF Text.action",
                "path": "Automator/ExtractPDF Text.action",
                "children": [
                    {
                        "value": 2620,
                        "name": "Contents",
                        "path": "Automator/ExtractPDF Text.action/Contents"
                    }
                ]
            },
            {
                "value": 44,
                "name": "FilterArticles.action",
                "path": "Automator/FilterArticles.action",
                "children": [
                    {
                        "value": 44,
                        "name": "Contents",
                        "path": "Automator/FilterArticles.action/Contents"
                    }
                ]
            },
            {
                "value": 272,
                "name": "FilterCalendar Items 2.action",
                "path": "Automator/FilterCalendar Items 2.action",
                "children": [
                    {
                        "value": 272,
                        "name": "Contents",
                        "path": "Automator/FilterCalendar Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 280,
                "name": "FilterContacts Items 2.action",
                "path": "Automator/FilterContacts Items 2.action",
                "children": [
                    {
                        "value": 280,
                        "name": "Contents",
                        "path": "Automator/FilterContacts Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 280,
                "name": "FilterFinder Items 2.action",
                "path": "Automator/FilterFinder Items 2.action",
                "children": [
                    {
                        "value": 280,
                        "name": "Contents",
                        "path": "Automator/FilterFinder Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "FilterFinder Items.action",
                "path": "Automator/FilterFinder Items.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/FilterFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 264,
                "name": "FilterFonts by Font Type.action",
                "path": "Automator/FilterFonts by Font Type.action",
                "children": [
                    {
                        "value": 264,
                        "name": "Contents",
                        "path": "Automator/FilterFonts by Font Type.action/Contents"
                    }
                ]
            },
            {
                "value": 280,
                "name": "FilteriPhoto Items 2.action",
                "path": "Automator/FilteriPhoto Items 2.action",
                "children": [
                    {
                        "value": 280,
                        "name": "Contents",
                        "path": "Automator/FilteriPhoto Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 272,
                "name": "FilterItems.action",
                "path": "Automator/FilterItems.action",
                "children": [
                    {
                        "value": 272,
                        "name": "Contents",
                        "path": "Automator/FilterItems.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "FilteriTunes Items 2.action",
                "path": "Automator/FilteriTunes Items 2.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/FilteriTunes Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "FilterMail Items 2.action",
                "path": "Automator/FilterMail Items 2.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/FilterMail Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 60,
                "name": "FilterParagraphs.action",
                "path": "Automator/FilterParagraphs.action",
                "children": [
                    {
                        "value": 60,
                        "name": "Contents",
                        "path": "Automator/FilterParagraphs.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "FilterURLs 2.action",
                "path": "Automator/FilterURLs 2.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/FilterURLs 2.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "FilterURLs.action",
                "path": "Automator/FilterURLs.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/FilterURLs.action/Contents"
                    }
                ]
            },
            {
                "value": 272,
                "name": "FindCalendar Items 2.action",
                "path": "Automator/FindCalendar Items 2.action",
                "children": [
                    {
                        "value": 272,
                        "name": "Contents",
                        "path": "Automator/FindCalendar Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "FindContacts Items 2.action",
                "path": "Automator/FindContacts Items 2.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/FindContacts Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "FindFinder Items 2.action",
                "path": "Automator/FindFinder Items 2.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/FindFinder Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 280,
                "name": "FindFinder Items.action",
                "path": "Automator/FindFinder Items.action",
                "children": [
                    {
                        "value": 280,
                        "name": "Contents",
                        "path": "Automator/FindFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "FindiPhoto Items 2.action",
                "path": "Automator/FindiPhoto Items 2.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/FindiPhoto Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 272,
                "name": "FindItems.action",
                "path": "Automator/FindItems.action",
                "children": [
                    {
                        "value": 272,
                        "name": "Contents",
                        "path": "Automator/FindItems.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "FindiTunes Items 2.action",
                "path": "Automator/FindiTunes Items 2.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/FindiTunes Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 280,
                "name": "FindMail Items 2.action",
                "path": "Automator/FindMail Items 2.action",
                "children": [
                    {
                        "value": 280,
                        "name": "Contents",
                        "path": "Automator/FindMail Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 84,
                "name": "FindPeople with Birthdays.action",
                "path": "Automator/FindPeople with Birthdays.action",
                "children": [
                    {
                        "value": 84,
                        "name": "Contents",
                        "path": "Automator/FindPeople with Birthdays.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "Finder.definition",
                "path": "Automator/Finder.definition",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/Finder.definition/Contents"
                    }
                ]
            },
            {
                "value": 104,
                "name": "FlipImages.action",
                "path": "Automator/FlipImages.action",
                "children": [
                    {
                        "value": 104,
                        "name": "Contents",
                        "path": "Automator/FlipImages.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "FontBook.definition",
                "path": "Automator/FontBook.definition",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/FontBook.definition/Contents"
                    }
                ]
            },
            {
                "value": 36,
                "name": "GetAttachments from Mail Messages.action",
                "path": "Automator/GetAttachments from Mail Messages.action",
                "children": [
                    {
                        "value": 36,
                        "name": "Contents",
                        "path": "Automator/GetAttachments from Mail Messages.action/Contents"
                    }
                ]
            },
            {
                "value": 180,
                "name": "GetContact Information.action",
                "path": "Automator/GetContact Information.action",
                "children": [
                    {
                        "value": 180,
                        "name": "Contents",
                        "path": "Automator/GetContact Information.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "GetContents of Clipboard.action",
                "path": "Automator/GetContents of Clipboard.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/GetContents of Clipboard.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "GetContents of TextEdit Document.action",
                "path": "Automator/GetContents of TextEdit Document.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/GetContents of TextEdit Document.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "GetContents of Webpages.action",
                "path": "Automator/GetContents of Webpages.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/GetContents of Webpages.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "GetCurrent Webpage from Safari.action",
                "path": "Automator/GetCurrent Webpage from Safari.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/GetCurrent Webpage from Safari.action/Contents"
                    }
                ]
            },
            {
                "value": 84,
                "name": "GetDefinition of Word.action",
                "path": "Automator/GetDefinition of Word.action",
                "children": [
                    {
                        "value": 84,
                        "name": "Contents",
                        "path": "Automator/GetDefinition of Word.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "GetEnclosure URLs from Articles.action",
                "path": "Automator/GetEnclosure URLs from Articles.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/GetEnclosure URLs from Articles.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "GetFeeds from URLs.action",
                "path": "Automator/GetFeeds from URLs.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/GetFeeds from URLs.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "GetFiles for Fonts.action",
                "path": "Automator/GetFiles for Fonts.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/GetFiles for Fonts.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "GetFolder Contents.action",
                "path": "Automator/GetFolder Contents.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/GetFolder Contents.action/Contents"
                    }
                ]
            },
            {
                "value": 412,
                "name": "GetFont Info.action",
                "path": "Automator/GetFont Info.action",
                "children": [
                    {
                        "value": 412,
                        "name": "Contents",
                        "path": "Automator/GetFont Info.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "GetFonts from Font Files.action",
                "path": "Automator/GetFonts from Font Files.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/GetFonts from Font Files.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "GetFonts of TextEdit Document.action",
                "path": "Automator/GetFonts of TextEdit Document.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/GetFonts of TextEdit Document.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "GetiDVD Slideshow Images.action",
                "path": "Automator/GetiDVD Slideshow Images.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/GetiDVD Slideshow Images.action/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "GetImage URLs from Articles.action",
                "path": "Automator/GetImage URLs from Articles.action",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "Automator/GetImage URLs from Articles.action/Contents"
                    }
                ]
            },
            {
                "value": 52,
                "name": "GetImage URLs from Webpage.action",
                "path": "Automator/GetImage URLs from Webpage.action",
                "children": [
                    {
                        "value": 52,
                        "name": "Contents",
                        "path": "Automator/GetImage URLs from Webpage.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "GetLink URLs from Articles.action",
                "path": "Automator/GetLink URLs from Articles.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/GetLink URLs from Articles.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "GetLink URLs from Webpages.action",
                "path": "Automator/GetLink URLs from Webpages.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/GetLink URLs from Webpages.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "GetNew Mail.action",
                "path": "Automator/GetNew Mail.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/GetNew Mail.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "GetPDF Metadata.action",
                "path": "Automator/GetPDF Metadata.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/GetPDF Metadata.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "GetPermalinks of Articles.action",
                "path": "Automator/GetPermalinks of Articles.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/GetPermalinks of Articles.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "GetPostScript name of Font.action",
                "path": "Automator/GetPostScript name of Font.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/GetPostScript name of Font.action/Contents"
                    }
                ]
            },
            {
                "value": 44,
                "name": "GetSelected Contacts Items 2.action",
                "path": "Automator/GetSelected Contacts Items 2.action",
                "children": [
                    {
                        "value": 44,
                        "name": "Contents",
                        "path": "Automator/GetSelected Contacts Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "GetSelected Finder Items 2.action",
                "path": "Automator/GetSelected Finder Items 2.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/GetSelected Finder Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "GetSelected iPhoto Items 2.action",
                "path": "Automator/GetSelected iPhoto Items 2.action",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "Automator/GetSelected iPhoto Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "GetSelected Items.action",
                "path": "Automator/GetSelected Items.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/GetSelected Items.action/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "GetSelected iTunes Items 2.action",
                "path": "Automator/GetSelected iTunes Items 2.action",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "Automator/GetSelected iTunes Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "GetSelected Mail Items 2.action",
                "path": "Automator/GetSelected Mail Items 2.action",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "Automator/GetSelected Mail Items 2.action/Contents"
                    }
                ]
            },
            {
                "value": 540,
                "name": "GetSpecified Calendar Items.action",
                "path": "Automator/GetSpecified Calendar Items.action",
                "children": [
                    {
                        "value": 540,
                        "name": "Contents",
                        "path": "Automator/GetSpecified Calendar Items.action/Contents"
                    }
                ]
            },
            {
                "value": 292,
                "name": "GetSpecified Contacts Items.action",
                "path": "Automator/GetSpecified Contacts Items.action",
                "children": [
                    {
                        "value": 292,
                        "name": "Contents",
                        "path": "Automator/GetSpecified Contacts Items.action/Contents"
                    }
                ]
            },
            {
                "value": 308,
                "name": "GetSpecified Finder Items.action",
                "path": "Automator/GetSpecified Finder Items.action",
                "children": [
                    {
                        "value": 308,
                        "name": "Contents",
                        "path": "Automator/GetSpecified Finder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 288,
                "name": "GetSpecified iPhoto Items.action",
                "path": "Automator/GetSpecified iPhoto Items.action",
                "children": [
                    {
                        "value": 288,
                        "name": "Contents",
                        "path": "Automator/GetSpecified iPhoto Items.action/Contents"
                    }
                ]
            },
            {
                "value": 288,
                "name": "GetSpecified iTunes Items.action",
                "path": "Automator/GetSpecified iTunes Items.action",
                "children": [
                    {
                        "value": 288,
                        "name": "Contents",
                        "path": "Automator/GetSpecified iTunes Items.action/Contents"
                    }
                ]
            },
            {
                "value": 380,
                "name": "GetSpecified Mail Items.action",
                "path": "Automator/GetSpecified Mail Items.action",
                "children": [
                    {
                        "value": 380,
                        "name": "Contents",
                        "path": "Automator/GetSpecified Mail Items.action/Contents"
                    }
                ]
            },
            {
                "value": 288,
                "name": "GetSpecified Movies.action",
                "path": "Automator/GetSpecified Movies.action",
                "children": [
                    {
                        "value": 288,
                        "name": "Contents",
                        "path": "Automator/GetSpecified Movies.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "GetSpecified Servers.action",
                "path": "Automator/GetSpecified Servers.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/GetSpecified Servers.action/Contents"
                    }
                ]
            },
            {
                "value": 272,
                "name": "GetSpecified Text.action",
                "path": "Automator/GetSpecified Text.action",
                "children": [
                    {
                        "value": 272,
                        "name": "Contents",
                        "path": "Automator/GetSpecified Text.action/Contents"
                    }
                ]
            },
            {
                "value": 288,
                "name": "GetSpecified URLs.action",
                "path": "Automator/GetSpecified URLs.action",
                "children": [
                    {
                        "value": 288,
                        "name": "Contents",
                        "path": "Automator/GetSpecified URLs.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "GetText from Articles.action",
                "path": "Automator/GetText from Articles.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/GetText from Articles.action/Contents"
                    }
                ]
            },
            {
                "value": 40,
                "name": "GetText from Webpage.action",
                "path": "Automator/GetText from Webpage.action",
                "children": [
                    {
                        "value": 40,
                        "name": "Contents",
                        "path": "Automator/GetText from Webpage.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "Getthe Current Song.action",
                "path": "Automator/Getthe Current Song.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/Getthe Current Song.action/Contents"
                    }
                ]
            },
            {
                "value": 36,
                "name": "GetValue of Variable.action",
                "path": "Automator/GetValue of Variable.action",
                "children": [
                    {
                        "value": 36,
                        "name": "Contents",
                        "path": "Automator/GetValue of Variable.action/Contents"
                    }
                ]
            },
            {
                "value": 280,
                "name": "GroupMailer.action",
                "path": "Automator/GroupMailer.action",
                "children": [
                    {
                        "value": 280,
                        "name": "Contents",
                        "path": "Automator/GroupMailer.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "HideAll Applications.action",
                "path": "Automator/HideAll Applications.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/HideAll Applications.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "HintMovies.action",
                "path": "Automator/HintMovies.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/HintMovies.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "iCal.definition",
                "path": "Automator/iCal.definition",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/iCal.definition/Contents"
                    }
                ]
            },
            {
                "value": 44,
                "name": "ImportAudio Files.action",
                "path": "Automator/ImportAudio Files.action",
                "children": [
                    {
                        "value": 44,
                        "name": "Contents",
                        "path": "Automator/ImportAudio Files.action/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "ImportFiles into iPhoto.action",
                "path": "Automator/ImportFiles into iPhoto.action",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "Automator/ImportFiles into iPhoto.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "ImportFiles into iTunes.action",
                "path": "Automator/ImportFiles into iTunes.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/ImportFiles into iTunes.action/Contents"
                    }
                ]
            },
            {
                "value": 256,
                "name": "InitiateRemote Broadcast.action",
                "path": "Automator/InitiateRemote Broadcast.action",
                "children": [
                    {
                        "value": 256,
                        "name": "Contents",
                        "path": "Automator/InitiateRemote Broadcast.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "iPhoto.definition",
                "path": "Automator/iPhoto.definition",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/iPhoto.definition/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "iTunes.definition",
                "path": "Automator/iTunes.definition",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/iTunes.definition/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "LabelFinder Items.action",
                "path": "Automator/LabelFinder Items.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/LabelFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "LaunchApplication.action",
                "path": "Automator/LaunchApplication.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/LaunchApplication.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "Loop.action",
                "path": "Automator/Loop.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/Loop.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "Mail.definition",
                "path": "Automator/Mail.definition",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/Mail.definition/Contents"
                    }
                ]
            },
            {
                "value": 16,
                "name": "MarkArticles.action",
                "path": "Automator/MarkArticles.action",
                "children": [
                    {
                        "value": 16,
                        "name": "Contents",
                        "path": "Automator/MarkArticles.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "MountDisk Image.action",
                "path": "Automator/MountDisk Image.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/MountDisk Image.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "MoveFinder Items to Trash.action",
                "path": "Automator/MoveFinder Items to Trash.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/MoveFinder Items to Trash.action/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "MoveFinder Items.action",
                "path": "Automator/MoveFinder Items.action",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "Automator/MoveFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 108,
                "name": "NewAliases.action",
                "path": "Automator/NewAliases.action",
                "children": [
                    {
                        "value": 108,
                        "name": "Contents",
                        "path": "Automator/NewAliases.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "NewAudio Capture.action",
                "path": "Automator/NewAudio Capture.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/NewAudio Capture.action/Contents"
                    }
                ]
            },
            {
                "value": 676,
                "name": "NewCalendar Events Leopard.action",
                "path": "Automator/NewCalendar Events Leopard.action",
                "children": [
                    {
                        "value": 676,
                        "name": "Contents",
                        "path": "Automator/NewCalendar Events Leopard.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "NewCalendar.action",
                "path": "Automator/NewCalendar.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/NewCalendar.action/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "NewDisk Image.action",
                "path": "Automator/NewDisk Image.action",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Automator/NewDisk Image.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "NewFolder.action",
                "path": "Automator/NewFolder.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/NewFolder.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "NewiDVD Menu.action",
                "path": "Automator/NewiDVD Menu.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/NewiDVD Menu.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "NewiDVD Movie Sequence.action",
                "path": "Automator/NewiDVD Movie Sequence.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/NewiDVD Movie Sequence.action/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "NewiDVD Slideshow.action",
                "path": "Automator/NewiDVD Slideshow.action",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Automator/NewiDVD Slideshow.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "NewiPhoto Album.action",
                "path": "Automator/NewiPhoto Album.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/NewiPhoto Album.action/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "NewiPod Note.action",
                "path": "Automator/NewiPod Note.action",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Automator/NewiPod Note.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "NewiTunes Playlist.action",
                "path": "Automator/NewiTunes Playlist.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/NewiTunes Playlist.action/Contents"
                    }
                ]
            },
            {
                "value": 576,
                "name": "NewMail Message.action",
                "path": "Automator/NewMail Message.action",
                "children": [
                    {
                        "value": 576,
                        "name": "Contents",
                        "path": "Automator/NewMail Message.action/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "NewPDF Contact Sheet.action",
                "path": "Automator/NewPDF Contact Sheet.action",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Automator/NewPDF Contact Sheet.action/Contents"
                    }
                ]
            },
            {
                "value": 4444,
                "name": "NewPDF from Images.action",
                "path": "Automator/NewPDF from Images.action",
                "children": [
                    {
                        "value": 4444,
                        "name": "Contents",
                        "path": "Automator/NewPDF from Images.action/Contents"
                    }
                ]
            },
            {
                "value": 1976,
                "name": "NewQuickTime Slideshow.action",
                "path": "Automator/NewQuickTime Slideshow.action",
                "children": [
                    {
                        "value": 1976,
                        "name": "Contents",
                        "path": "Automator/NewQuickTime Slideshow.action/Contents"
                    }
                ]
            },
            {
                "value": 808,
                "name": "NewReminders Item.action",
                "path": "Automator/NewReminders Item.action",
                "children": [
                    {
                        "value": 808,
                        "name": "Contents",
                        "path": "Automator/NewReminders Item.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "NewScreen Capture.action",
                "path": "Automator/NewScreen Capture.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/NewScreen Capture.action/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "NewText File.action",
                "path": "Automator/NewText File.action",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Automator/NewText File.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "NewTextEdit Document.action",
                "path": "Automator/NewTextEdit Document.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/NewTextEdit Document.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "NewVideo Capture.action",
                "path": "Automator/NewVideo Capture.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/NewVideo Capture.action/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "OpenFinder Items.action",
                "path": "Automator/OpenFinder Items.action",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "Automator/OpenFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "OpenImages in Preview.action",
                "path": "Automator/OpenImages in Preview.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/OpenImages in Preview.action/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "OpenKeynote Presentations.action",
                "path": "Automator/OpenKeynote Presentations.action",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Automator/OpenKeynote Presentations.action/Contents"
                    }
                ]
            },
            {
                "value": 60,
                "name": "PadImages.action",
                "path": "Automator/PadImages.action",
                "children": [
                    {
                        "value": 60,
                        "name": "Contents",
                        "path": "Automator/PadImages.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "PauseCapture.action",
                "path": "Automator/PauseCapture.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/PauseCapture.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "PauseDVD Playback.action",
                "path": "Automator/PauseDVD Playback.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/PauseDVD Playback.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "PauseiTunes.action",
                "path": "Automator/PauseiTunes.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/PauseiTunes.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "Pause.action",
                "path": "Automator/Pause.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/Pause.action/Contents"
                    }
                ]
            },
            {
                "value": 3696,
                "name": "PDFto Images.action",
                "path": "Automator/PDFto Images.action",
                "children": [
                    {
                        "value": 3696,
                        "name": "Contents",
                        "path": "Automator/PDFto Images.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "PlayDVD.action",
                "path": "Automator/PlayDVD.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/PlayDVD.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "PlayiPhoto Slideshow.action",
                "path": "Automator/PlayiPhoto Slideshow.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/PlayiPhoto Slideshow.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "PlayiTunes Playlist.action",
                "path": "Automator/PlayiTunes Playlist.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/PlayiTunes Playlist.action/Contents"
                    }
                ]
            },
            {
                "value": 264,
                "name": "PlayMovies.action",
                "path": "Automator/PlayMovies.action",
                "children": [
                    {
                        "value": 264,
                        "name": "Contents",
                        "path": "Automator/PlayMovies.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "PrintFinder Items.action",
                "path": "Automator/PrintFinder Items.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/PrintFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 108,
                "name": "PrintImages.action",
                "path": "Automator/PrintImages.action",
                "children": [
                    {
                        "value": 108,
                        "name": "Contents",
                        "path": "Automator/PrintImages.action/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "PrintKeynote Presentation.action",
                "path": "Automator/PrintKeynote Presentation.action",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Automator/PrintKeynote Presentation.action/Contents"
                    }
                ]
            },
            {
                "value": 288,
                "name": "QuitAll Applications.action",
                "path": "Automator/QuitAll Applications.action",
                "children": [
                    {
                        "value": 288,
                        "name": "Contents",
                        "path": "Automator/QuitAll Applications.action/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "QuitApplication.action",
                "path": "Automator/QuitApplication.action",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "Automator/QuitApplication.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "RemoveEmpty Playlists.action",
                "path": "Automator/RemoveEmpty Playlists.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/RemoveEmpty Playlists.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "RemoveFont Files.action",
                "path": "Automator/RemoveFont Files.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/RemoveFont Files.action/Contents"
                    }
                ]
            },
            {
                "value": 1092,
                "name": "RenameFinder Items.action",
                "path": "Automator/RenameFinder Items.action",
                "children": [
                    {
                        "value": 1092,
                        "name": "Contents",
                        "path": "Automator/RenameFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 16,
                "name": "RenamePDF Documents.action",
                "path": "Automator/RenamePDF Documents.action",
                "children": [
                    {
                        "value": 16,
                        "name": "Contents",
                        "path": "Automator/RenamePDF Documents.action/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "RenderPDF Pages as Images.action",
                "path": "Automator/RenderPDF Pages as Images.action",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Automator/RenderPDF Pages as Images.action/Contents"
                    }
                ]
            },
            {
                "value": 2888,
                "name": "RenderQuartz Compositions to Image Files.action",
                "path": "Automator/RenderQuartz Compositions to Image Files.action",
                "children": [
                    {
                        "value": 2888,
                        "name": "Contents",
                        "path": "Automator/RenderQuartz Compositions to Image Files.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "ResumeCapture.action",
                "path": "Automator/ResumeCapture.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/ResumeCapture.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ResumeDVD Playback.action",
                "path": "Automator/ResumeDVD Playback.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ResumeDVD Playback.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "RevealFinder Items.action",
                "path": "Automator/RevealFinder Items.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/RevealFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 428,
                "name": "ReviewPhotos.action",
                "path": "Automator/ReviewPhotos.action",
                "children": [
                    {
                        "value": 428,
                        "name": "Contents",
                        "path": "Automator/ReviewPhotos.action/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "RotateImages.action",
                "path": "Automator/RotateImages.action",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Automator/RotateImages.action/Contents"
                    }
                ]
            },
            {
                "value": 308,
                "name": "RunAppleScript.action",
                "path": "Automator/RunAppleScript.action",
                "children": [
                    {
                        "value": 308,
                        "name": "Contents",
                        "path": "Automator/RunAppleScript.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "RunSelf-Test.action",
                "path": "Automator/RunSelf-Test.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/RunSelf-Test.action/Contents"
                    }
                ]
            },
            {
                "value": 316,
                "name": "RunShell Script.action",
                "path": "Automator/RunShell Script.action",
                "children": [
                    {
                        "value": 316,
                        "name": "Contents",
                        "path": "Automator/RunShell Script.action/Contents"
                    }
                ]
            },
            {
                "value": 36,
                "name": "RunWeb Service.action",
                "path": "Automator/RunWeb Service.action",
                "children": [
                    {
                        "value": 36,
                        "name": "Contents",
                        "path": "Automator/RunWeb Service.action/Contents"
                    }
                ]
            },
            {
                "value": 416,
                "name": "RunWorkflow.action",
                "path": "Automator/RunWorkflow.action",
                "children": [
                    {
                        "value": 416,
                        "name": "Contents",
                        "path": "Automator/RunWorkflow.action/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "SaveImages from Web Content.action",
                "path": "Automator/SaveImages from Web Content.action",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Automator/SaveImages from Web Content.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "ScaleImages.action",
                "path": "Automator/ScaleImages.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/ScaleImages.action/Contents"
                    }
                ]
            },
            {
                "value": 2112,
                "name": "SearchPDFs.action",
                "path": "Automator/SearchPDFs.action",
                "children": [
                    {
                        "value": 2112,
                        "name": "Contents",
                        "path": "Automator/SearchPDFs.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "SelectFonts in Font Book.action",
                "path": "Automator/SelectFonts in Font Book.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/SelectFonts in Font Book.action/Contents"
                    }
                ]
            },
            {
                "value": 944,
                "name": "SendBirthday Greetings.action",
                "path": "Automator/SendBirthday Greetings.action",
                "children": [
                    {
                        "value": 944,
                        "name": "Contents",
                        "path": "Automator/SendBirthday Greetings.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "SendOutgoing Messages.action",
                "path": "Automator/SendOutgoing Messages.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/SendOutgoing Messages.action/Contents"
                    }
                ]
            },
            {
                "value": 16,
                "name": "SetApplication for Files.action",
                "path": "Automator/SetApplication for Files.action",
                "children": [
                    {
                        "value": 16,
                        "name": "Contents",
                        "path": "Automator/SetApplication for Files.action/Contents"
                    }
                ]
            },
            {
                "value": 340,
                "name": "SetComputer Volume.action",
                "path": "Automator/SetComputer Volume.action",
                "children": [
                    {
                        "value": 340,
                        "name": "Contents",
                        "path": "Automator/SetComputer Volume.action/Contents"
                    }
                ]
            },
            {
                "value": 44,
                "name": "SetContents of TextEdit Document.action",
                "path": "Automator/SetContents of TextEdit Document.action",
                "children": [
                    {
                        "value": 44,
                        "name": "Contents",
                        "path": "Automator/SetContents of TextEdit Document.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "SetDesktop Picture.action",
                "path": "Automator/SetDesktop Picture.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/SetDesktop Picture.action/Contents"
                    }
                ]
            },
            {
                "value": 820,
                "name": "SetFolder Views.action",
                "path": "Automator/SetFolder Views.action",
                "children": [
                    {
                        "value": 820,
                        "name": "Contents",
                        "path": "Automator/SetFolder Views.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "SetiDVD Background Image.action",
                "path": "Automator/SetiDVD Background Image.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/SetiDVD Background Image.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "SetiDVD Button Face.action",
                "path": "Automator/SetiDVD Button Face.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/SetiDVD Button Face.action/Contents"
                    }
                ]
            },
            {
                "value": 112,
                "name": "SetInfo of iTunes Songs.action",
                "path": "Automator/SetInfo of iTunes Songs.action",
                "children": [
                    {
                        "value": 112,
                        "name": "Contents",
                        "path": "Automator/SetInfo of iTunes Songs.action/Contents"
                    }
                ]
            },
            {
                "value": 408,
                "name": "SetiTunes Equalizer.action",
                "path": "Automator/SetiTunes Equalizer.action",
                "children": [
                    {
                        "value": 408,
                        "name": "Contents",
                        "path": "Automator/SetiTunes Equalizer.action/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "SetiTunes Volume.action",
                "path": "Automator/SetiTunes Volume.action",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Automator/SetiTunes Volume.action/Contents"
                    }
                ]
            },
            {
                "value": 280,
                "name": "SetMovie Annotations.action",
                "path": "Automator/SetMovie Annotations.action",
                "children": [
                    {
                        "value": 280,
                        "name": "Contents",
                        "path": "Automator/SetMovie Annotations.action/Contents"
                    }
                ]
            },
            {
                "value": 256,
                "name": "SetMovie Playback Properties.action",
                "path": "Automator/SetMovie Playback Properties.action",
                "children": [
                    {
                        "value": 256,
                        "name": "Contents",
                        "path": "Automator/SetMovie Playback Properties.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "SetMovie URL.action",
                "path": "Automator/SetMovie URL.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/SetMovie URL.action/Contents"
                    }
                ]
            },
            {
                "value": 408,
                "name": "SetOptions of iTunes Songs.action",
                "path": "Automator/SetOptions of iTunes Songs.action",
                "children": [
                    {
                        "value": 408,
                        "name": "Contents",
                        "path": "Automator/SetOptions of iTunes Songs.action/Contents"
                    }
                ]
            },
            {
                "value": 408,
                "name": "SetPDF Metadata.action",
                "path": "Automator/SetPDF Metadata.action",
                "children": [
                    {
                        "value": 408,
                        "name": "Contents",
                        "path": "Automator/SetPDF Metadata.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "SetSpotlight Comments for Finder Items.action",
                "path": "Automator/SetSpotlight Comments for Finder Items.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/SetSpotlight Comments for Finder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "SetValue of Variable.action",
                "path": "Automator/SetValue of Variable.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/SetValue of Variable.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ShowMain iDVD Menu.action",
                "path": "Automator/ShowMain iDVD Menu.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ShowMain iDVD Menu.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ShowNext Keynote Slide.action",
                "path": "Automator/ShowNext Keynote Slide.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ShowNext Keynote Slide.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "ShowPrevious Keynote Slide.action",
                "path": "Automator/ShowPrevious Keynote Slide.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/ShowPrevious Keynote Slide.action/Contents"
                    }
                ]
            },
            {
                "value": 16,
                "name": "ShowSpecified Keynote Slide.action",
                "path": "Automator/ShowSpecified Keynote Slide.action",
                "children": [
                    {
                        "value": 16,
                        "name": "Contents",
                        "path": "Automator/ShowSpecified Keynote Slide.action/Contents"
                    }
                ]
            },
            {
                "value": 36,
                "name": "SortFinder Items.action",
                "path": "Automator/SortFinder Items.action",
                "children": [
                    {
                        "value": 36,
                        "name": "Contents",
                        "path": "Automator/SortFinder Items.action/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "SpeakText.action",
                "path": "Automator/SpeakText.action",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Automator/SpeakText.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "SpotlightLeopard.action",
                "path": "Automator/SpotlightLeopard.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/SpotlightLeopard.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "StartCapture.action",
                "path": "Automator/StartCapture.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/StartCapture.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "StartiTunes Playing.action",
                "path": "Automator/StartiTunes Playing.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/StartiTunes Playing.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "StartiTunes Visuals.action",
                "path": "Automator/StartiTunes Visuals.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/StartiTunes Visuals.action/Contents"
                    }
                ]
            },
            {
                "value": 16,
                "name": "StartKeynote Slideshow.action",
                "path": "Automator/StartKeynote Slideshow.action",
                "children": [
                    {
                        "value": 16,
                        "name": "Contents",
                        "path": "Automator/StartKeynote Slideshow.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "StartScreen Saver.action",
                "path": "Automator/StartScreen Saver.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/StartScreen Saver.action/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "StopCapture.action",
                "path": "Automator/StopCapture.action",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Automator/StopCapture.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "StopDVD Playback.action",
                "path": "Automator/StopDVD Playback.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/StopDVD Playback.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "StopiTunes Visuals.action",
                "path": "Automator/StopiTunes Visuals.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/StopiTunes Visuals.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "StopKeynote Slideshow.action",
                "path": "Automator/StopKeynote Slideshow.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/StopKeynote Slideshow.action/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "SystemProfile.action",
                "path": "Automator/SystemProfile.action",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "Automator/SystemProfile.action/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "TakePicture.action",
                "path": "Automator/TakePicture.action",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Automator/TakePicture.action/Contents"
                    }
                ]
            },
            {
                "value": 420,
                "name": "TakeScreenshot.action",
                "path": "Automator/TakeScreenshot.action",
                "children": [
                    {
                        "value": 420,
                        "name": "Contents",
                        "path": "Automator/TakeScreenshot.action/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "TakeVideo Snapshot.action",
                "path": "Automator/TakeVideo Snapshot.action",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Automator/TakeVideo Snapshot.action/Contents"
                    }
                ]
            },
            {
                "value": 100,
                "name": "Textto Audio File.action",
                "path": "Automator/Textto Audio File.action",
                "children": [
                    {
                        "value": 100,
                        "name": "Contents",
                        "path": "Automator/Textto Audio File.action/Contents"
                    }
                ]
            },
            {
                "value": 436,
                "name": "Textto EPUB File.action",
                "path": "Automator/Textto EPUB File.action",
                "children": [
                    {
                        "value": 436,
                        "name": "Contents",
                        "path": "Automator/Textto EPUB File.action/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "UpdateiPod.action",
                "path": "Automator/UpdateiPod.action",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "Automator/UpdateiPod.action/Contents"
                    }
                ]
            },
            {
                "value": 264,
                "name": "ValidateFont Files.action",
                "path": "Automator/ValidateFont Files.action",
                "children": [
                    {
                        "value": 264,
                        "name": "Contents",
                        "path": "Automator/ValidateFont Files.action/Contents"
                    }
                ]
            },
            {
                "value": 272,
                "name": "ViewResults.action",
                "path": "Automator/ViewResults.action",
                "children": [
                    {
                        "value": 272,
                        "name": "Contents",
                        "path": "Automator/ViewResults.action/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "Waitfor User Action.action",
                "path": "Automator/Waitfor User Action.action",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Automator/Waitfor User Action.action/Contents"
                    }
                ]
            },
            {
                "value": 456,
                "name": "WatchMe Do.action",
                "path": "Automator/WatchMe Do.action",
                "children": [
                    {
                        "value": 456,
                        "name": "Contents",
                        "path": "Automator/WatchMe Do.action/Contents"
                    }
                ]
            },
            {
                "value": 72,
                "name": "WatermarkPDF Documents.action",
                "path": "Automator/WatermarkPDF Documents.action",
                "children": [
                    {
                        "value": 72,
                        "name": "Contents",
                        "path": "Automator/WatermarkPDF Documents.action/Contents"
                    }
                ]
            },
            {
                "value": 80,
                "name": "WebsitePopup.action",
                "path": "Automator/WebsitePopup.action",
                "children": [
                    {
                        "value": 80,
                        "name": "Contents",
                        "path": "Automator/WebsitePopup.action/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 2868,
        "name": "BridgeSupport",
        "path": "BridgeSupport",
        "children": [
            {
                "value": 0,
                "name": "include",
                "path": "BridgeSupport/include"
            },
            {
                "value": 2840,
                "name": "ruby-2.0",
                "path": "BridgeSupport/ruby-2.0"
            }
        ]
    },
    {
        "value": 21988,
        "name": "Caches",
        "path": "Caches",
        "children": [
            {
                "value": 2296,
                "name": "com.apple.CVMS",
                "path": "Caches/com.apple.CVMS"
            },
            {
                "value": 19048,
                "name": "com.apple.kext.caches",
                "path": "Caches/com.apple.kext.caches",
                "children": [
                    {
                        "value": 12,
                        "name": "Directories",
                        "path": "Caches/com.apple.kext.caches/Directories"
                    },
                    {
                        "value": 19036,
                        "name": "Startup",
                        "path": "Caches/com.apple.kext.caches/Startup"
                    }
                ]
            }
        ]
    },
    {
        "value": 2252,
        "name": "ColorPickers",
        "path": "ColorPickers",
        "children": [
            {
                "value": 288,
                "name": "NSColorPickerCrayon.colorPicker",
                "path": "ColorPickers/NSColorPickerCrayon.colorPicker",
                "children": [
                    {
                        "value": 0,
                        "name": "_CodeSignature",
                        "path": "ColorPickers/NSColorPickerCrayon.colorPicker/_CodeSignature"
                    },
                    {
                        "value": 288,
                        "name": "Resources",
                        "path": "ColorPickers/NSColorPickerCrayon.colorPicker/Resources"
                    }
                ]
            },
            {
                "value": 524,
                "name": "NSColorPickerPageableNameList.colorPicker",
                "path": "ColorPickers/NSColorPickerPageableNameList.colorPicker",
                "children": [
                    {
                        "value": 0,
                        "name": "_CodeSignature",
                        "path": "ColorPickers/NSColorPickerPageableNameList.colorPicker/_CodeSignature"
                    },
                    {
                        "value": 524,
                        "name": "Resources",
                        "path": "ColorPickers/NSColorPickerPageableNameList.colorPicker/Resources"
                    }
                ]
            },
            {
                "value": 848,
                "name": "NSColorPickerSliders.colorPicker",
                "path": "ColorPickers/NSColorPickerSliders.colorPicker",
                "children": [
                    {
                        "value": 0,
                        "name": "_CodeSignature",
                        "path": "ColorPickers/NSColorPickerSliders.colorPicker/_CodeSignature"
                    },
                    {
                        "value": 848,
                        "name": "Resources",
                        "path": "ColorPickers/NSColorPickerSliders.colorPicker/Resources"
                    }
                ]
            },
            {
                "value": 532,
                "name": "NSColorPickerUser.colorPicker",
                "path": "ColorPickers/NSColorPickerUser.colorPicker",
                "children": [
                    {
                        "value": 0,
                        "name": "_CodeSignature",
                        "path": "ColorPickers/NSColorPickerUser.colorPicker/_CodeSignature"
                    },
                    {
                        "value": 532,
                        "name": "Resources",
                        "path": "ColorPickers/NSColorPickerUser.colorPicker/Resources"
                    }
                ]
            },
            {
                "value": 60,
                "name": "NSColorPickerWheel.colorPicker",
                "path": "ColorPickers/NSColorPickerWheel.colorPicker",
                "children": [
                    {
                        "value": 0,
                        "name": "_CodeSignature",
                        "path": "ColorPickers/NSColorPickerWheel.colorPicker/_CodeSignature"
                    },
                    {
                        "value": 60,
                        "name": "Resources",
                        "path": "ColorPickers/NSColorPickerWheel.colorPicker/Resources"
                    }
                ]
            }
        ]
    },
    {
        "value": 0,
        "name": "Colors",
        "path": "Colors",
        "children": [
            {
                "value": 0,
                "name": "Apple.clr",
                "path": "Colors/Apple.clr",
                "children": [
                    {
                        "value": 0,
                        "name": "ar.lproj",
                        "path": "Colors/Apple.clr/ar.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ca.lproj",
                        "path": "Colors/Apple.clr/ca.lproj"
                    },
                    {
                        "value": 0,
                        "name": "cs.lproj",
                        "path": "Colors/Apple.clr/cs.lproj"
                    },
                    {
                        "value": 0,
                        "name": "da.lproj",
                        "path": "Colors/Apple.clr/da.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Dutch.lproj",
                        "path": "Colors/Apple.clr/Dutch.lproj"
                    },
                    {
                        "value": 0,
                        "name": "el.lproj",
                        "path": "Colors/Apple.clr/el.lproj"
                    },
                    {
                        "value": 0,
                        "name": "English.lproj",
                        "path": "Colors/Apple.clr/English.lproj"
                    },
                    {
                        "value": 0,
                        "name": "fi.lproj",
                        "path": "Colors/Apple.clr/fi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "French.lproj",
                        "path": "Colors/Apple.clr/French.lproj"
                    },
                    {
                        "value": 0,
                        "name": "German.lproj",
                        "path": "Colors/Apple.clr/German.lproj"
                    },
                    {
                        "value": 0,
                        "name": "he.lproj",
                        "path": "Colors/Apple.clr/he.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hr.lproj",
                        "path": "Colors/Apple.clr/hr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hu.lproj",
                        "path": "Colors/Apple.clr/hu.lproj"
                    },
                    {
                        "value": 0,
                        "name": "id.lproj",
                        "path": "Colors/Apple.clr/id.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Italian.lproj",
                        "path": "Colors/Apple.clr/Italian.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Japanese.lproj",
                        "path": "Colors/Apple.clr/Japanese.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ko.lproj",
                        "path": "Colors/Apple.clr/ko.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ms.lproj",
                        "path": "Colors/Apple.clr/ms.lproj"
                    },
                    {
                        "value": 0,
                        "name": "no.lproj",
                        "path": "Colors/Apple.clr/no.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pl.lproj",
                        "path": "Colors/Apple.clr/pl.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt.lproj",
                        "path": "Colors/Apple.clr/pt.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt_PT.lproj",
                        "path": "Colors/Apple.clr/pt_PT.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ro.lproj",
                        "path": "Colors/Apple.clr/ro.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ru.lproj",
                        "path": "Colors/Apple.clr/ru.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sk.lproj",
                        "path": "Colors/Apple.clr/sk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Spanish.lproj",
                        "path": "Colors/Apple.clr/Spanish.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sv.lproj",
                        "path": "Colors/Apple.clr/sv.lproj"
                    },
                    {
                        "value": 0,
                        "name": "th.lproj",
                        "path": "Colors/Apple.clr/th.lproj"
                    },
                    {
                        "value": 0,
                        "name": "tr.lproj",
                        "path": "Colors/Apple.clr/tr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "uk.lproj",
                        "path": "Colors/Apple.clr/uk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "vi.lproj",
                        "path": "Colors/Apple.clr/vi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_CN.lproj",
                        "path": "Colors/Apple.clr/zh_CN.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_TW.lproj",
                        "path": "Colors/Apple.clr/zh_TW.lproj"
                    }
                ]
            },
            {
                "value": 0,
                "name": "Crayons.clr",
                "path": "Colors/Crayons.clr",
                "children": [
                    {
                        "value": 0,
                        "name": "ar.lproj",
                        "path": "Colors/Crayons.clr/ar.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ca.lproj",
                        "path": "Colors/Crayons.clr/ca.lproj"
                    },
                    {
                        "value": 0,
                        "name": "cs.lproj",
                        "path": "Colors/Crayons.clr/cs.lproj"
                    },
                    {
                        "value": 0,
                        "name": "da.lproj",
                        "path": "Colors/Crayons.clr/da.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Dutch.lproj",
                        "path": "Colors/Crayons.clr/Dutch.lproj"
                    },
                    {
                        "value": 0,
                        "name": "el.lproj",
                        "path": "Colors/Crayons.clr/el.lproj"
                    },
                    {
                        "value": 0,
                        "name": "English.lproj",
                        "path": "Colors/Crayons.clr/English.lproj"
                    },
                    {
                        "value": 0,
                        "name": "fi.lproj",
                        "path": "Colors/Crayons.clr/fi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "French.lproj",
                        "path": "Colors/Crayons.clr/French.lproj"
                    },
                    {
                        "value": 0,
                        "name": "German.lproj",
                        "path": "Colors/Crayons.clr/German.lproj"
                    },
                    {
                        "value": 0,
                        "name": "he.lproj",
                        "path": "Colors/Crayons.clr/he.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hr.lproj",
                        "path": "Colors/Crayons.clr/hr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hu.lproj",
                        "path": "Colors/Crayons.clr/hu.lproj"
                    },
                    {
                        "value": 0,
                        "name": "id.lproj",
                        "path": "Colors/Crayons.clr/id.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Italian.lproj",
                        "path": "Colors/Crayons.clr/Italian.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Japanese.lproj",
                        "path": "Colors/Crayons.clr/Japanese.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ko.lproj",
                        "path": "Colors/Crayons.clr/ko.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ms.lproj",
                        "path": "Colors/Crayons.clr/ms.lproj"
                    },
                    {
                        "value": 0,
                        "name": "no.lproj",
                        "path": "Colors/Crayons.clr/no.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pl.lproj",
                        "path": "Colors/Crayons.clr/pl.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt.lproj",
                        "path": "Colors/Crayons.clr/pt.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt_PT.lproj",
                        "path": "Colors/Crayons.clr/pt_PT.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ro.lproj",
                        "path": "Colors/Crayons.clr/ro.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ru.lproj",
                        "path": "Colors/Crayons.clr/ru.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sk.lproj",
                        "path": "Colors/Crayons.clr/sk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Spanish.lproj",
                        "path": "Colors/Crayons.clr/Spanish.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sv.lproj",
                        "path": "Colors/Crayons.clr/sv.lproj"
                    },
                    {
                        "value": 0,
                        "name": "th.lproj",
                        "path": "Colors/Crayons.clr/th.lproj"
                    },
                    {
                        "value": 0,
                        "name": "tr.lproj",
                        "path": "Colors/Crayons.clr/tr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "uk.lproj",
                        "path": "Colors/Crayons.clr/uk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "vi.lproj",
                        "path": "Colors/Crayons.clr/vi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_CN.lproj",
                        "path": "Colors/Crayons.clr/zh_CN.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_TW.lproj",
                        "path": "Colors/Crayons.clr/zh_TW.lproj"
                    }
                ]
            },
            {
                "value": 0,
                "name": "System.clr",
                "path": "Colors/System.clr",
                "children": [
                    {
                        "value": 0,
                        "name": "ar.lproj",
                        "path": "Colors/System.clr/ar.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ca.lproj",
                        "path": "Colors/System.clr/ca.lproj"
                    },
                    {
                        "value": 0,
                        "name": "cs.lproj",
                        "path": "Colors/System.clr/cs.lproj"
                    },
                    {
                        "value": 0,
                        "name": "da.lproj",
                        "path": "Colors/System.clr/da.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Dutch.lproj",
                        "path": "Colors/System.clr/Dutch.lproj"
                    },
                    {
                        "value": 0,
                        "name": "el.lproj",
                        "path": "Colors/System.clr/el.lproj"
                    },
                    {
                        "value": 0,
                        "name": "English.lproj",
                        "path": "Colors/System.clr/English.lproj"
                    },
                    {
                        "value": 0,
                        "name": "fi.lproj",
                        "path": "Colors/System.clr/fi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "French.lproj",
                        "path": "Colors/System.clr/French.lproj"
                    },
                    {
                        "value": 0,
                        "name": "German.lproj",
                        "path": "Colors/System.clr/German.lproj"
                    },
                    {
                        "value": 0,
                        "name": "he.lproj",
                        "path": "Colors/System.clr/he.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hr.lproj",
                        "path": "Colors/System.clr/hr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hu.lproj",
                        "path": "Colors/System.clr/hu.lproj"
                    },
                    {
                        "value": 0,
                        "name": "id.lproj",
                        "path": "Colors/System.clr/id.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Italian.lproj",
                        "path": "Colors/System.clr/Italian.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Japanese.lproj",
                        "path": "Colors/System.clr/Japanese.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ko.lproj",
                        "path": "Colors/System.clr/ko.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ms.lproj",
                        "path": "Colors/System.clr/ms.lproj"
                    },
                    {
                        "value": 0,
                        "name": "no.lproj",
                        "path": "Colors/System.clr/no.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pl.lproj",
                        "path": "Colors/System.clr/pl.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt.lproj",
                        "path": "Colors/System.clr/pt.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt_PT.lproj",
                        "path": "Colors/System.clr/pt_PT.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ro.lproj",
                        "path": "Colors/System.clr/ro.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ru.lproj",
                        "path": "Colors/System.clr/ru.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sk.lproj",
                        "path": "Colors/System.clr/sk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Spanish.lproj",
                        "path": "Colors/System.clr/Spanish.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sv.lproj",
                        "path": "Colors/System.clr/sv.lproj"
                    },
                    {
                        "value": 0,
                        "name": "th.lproj",
                        "path": "Colors/System.clr/th.lproj"
                    },
                    {
                        "value": 0,
                        "name": "tr.lproj",
                        "path": "Colors/System.clr/tr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "uk.lproj",
                        "path": "Colors/System.clr/uk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "vi.lproj",
                        "path": "Colors/System.clr/vi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_CN.lproj",
                        "path": "Colors/System.clr/zh_CN.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_TW.lproj",
                        "path": "Colors/System.clr/zh_TW.lproj"
                    }
                ]
            }
        ]
    },
    {
        "value": 2908,
        "name": "ColorSync",
        "path": "ColorSync",
        "children": [
            {
                "value": 2868,
                "name": "Calibrators",
                "path": "ColorSync/Calibrators",
                "children": [
                    {
                        "value": 2868,
                        "name": "DisplayCalibrator.app",
                        "path": "ColorSync/Calibrators/DisplayCalibrator.app"
                    }
                ]
            },
            {
                "value": 40,
                "name": "Profiles",
                "path": "ColorSync/Profiles"
            }
        ]
    },
    {
        "value": 21772,
        "name": "Components",
        "path": "Components",
        "children": [
            {
                "value": 416,
                "name": "AppleScript.component",
                "path": "Components/AppleScript.component",
                "children": [
                    {
                        "value": 416,
                        "name": "Contents",
                        "path": "Components/AppleScript.component/Contents"
                    }
                ]
            },
            {
                "value": 2592,
                "name": "AudioCodecs.component",
                "path": "Components/AudioCodecs.component",
                "children": [
                    {
                        "value": 2592,
                        "name": "Contents",
                        "path": "Components/AudioCodecs.component/Contents"
                    }
                ]
            },
            {
                "value": 92,
                "name": "AUSpeechSynthesis.component",
                "path": "Components/AUSpeechSynthesis.component",
                "children": [
                    {
                        "value": 92,
                        "name": "Contents",
                        "path": "Components/AUSpeechSynthesis.component/Contents"
                    }
                ]
            },
            {
                "value": 18492,
                "name": "CoreAudio.component",
                "path": "Components/CoreAudio.component",
                "children": [
                    {
                        "value": 18492,
                        "name": "Contents",
                        "path": "Components/CoreAudio.component/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "IOFWDVComponents.component",
                "path": "Components/IOFWDVComponents.component",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "Components/IOFWDVComponents.component/Contents"
                    }
                ]
            },
            {
                "value": 16,
                "name": "IOQTComponents.component",
                "path": "Components/IOQTComponents.component",
                "children": [
                    {
                        "value": 16,
                        "name": "Contents",
                        "path": "Components/IOQTComponents.component/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "PDFImporter.component",
                "path": "Components/PDFImporter.component",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "Components/PDFImporter.component/Contents"
                    }
                ]
            },
            {
                "value": 120,
                "name": "SoundManagerComponents.component",
                "path": "Components/SoundManagerComponents.component",
                "children": [
                    {
                        "value": 120,
                        "name": "Contents",
                        "path": "Components/SoundManagerComponents.component/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 45728,
        "name": "Compositions",
        "path": "Compositions",
        "children": [
            {
                "value": 0,
                "name": ".Localization.bundle",
                "path": "Compositions/.Localization.bundle",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Compositions/.Localization.bundle/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 409060,
        "name": "CoreServices",
        "path": "CoreServices",
        "children": [
            {
                "value": 1152,
                "name": "AddPrinter.app",
                "path": "CoreServices/AddPrinter.app",
                "children": [
                    {
                        "value": 1152,
                        "name": "Contents",
                        "path": "CoreServices/AddPrinter.app/Contents"
                    }
                ]
            },
            {
                "value": 72,
                "name": "AddressBookUrlForwarder.app",
                "path": "CoreServices/AddressBookUrlForwarder.app",
                "children": [
                    {
                        "value": 72,
                        "name": "Contents",
                        "path": "CoreServices/AddressBookUrlForwarder.app/Contents"
                    }
                ]
            },
            {
                "value": 20,
                "name": "AirPlayUIAgent.app",
                "path": "CoreServices/AirPlayUIAgent.app",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "CoreServices/AirPlayUIAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "AirPortBase Station Agent.app",
                "path": "CoreServices/AirPortBase Station Agent.app",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "CoreServices/AirPortBase Station Agent.app/Contents"
                    }
                ]
            },
            {
                "value": 92,
                "name": "AOS.bundle",
                "path": "CoreServices/AOS.bundle",
                "children": [
                    {
                        "value": 92,
                        "name": "Contents",
                        "path": "CoreServices/AOS.bundle/Contents"
                    }
                ]
            },
            {
                "value": 1564,
                "name": "AppDownloadLauncher.app",
                "path": "CoreServices/AppDownloadLauncher.app",
                "children": [
                    {
                        "value": 1564,
                        "name": "Contents",
                        "path": "CoreServices/AppDownloadLauncher.app/Contents"
                    }
                ]
            },
            {
                "value": 376,
                "name": "Apple80211Agent.app",
                "path": "CoreServices/Apple80211Agent.app",
                "children": [
                    {
                        "value": 376,
                        "name": "Contents",
                        "path": "CoreServices/Apple80211Agent.app/Contents"
                    }
                ]
            },
            {
                "value": 480,
                "name": "AppleFileServer.app",
                "path": "CoreServices/AppleFileServer.app",
                "children": [
                    {
                        "value": 480,
                        "name": "Contents",
                        "path": "CoreServices/AppleFileServer.app/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "AppleGraphicsWarning.app",
                "path": "CoreServices/AppleGraphicsWarning.app",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "CoreServices/AppleGraphicsWarning.app/Contents"
                    }
                ]
            },
            {
                "value": 1752,
                "name": "AppleScriptUtility.app",
                "path": "CoreServices/AppleScriptUtility.app",
                "children": [
                    {
                        "value": 1752,
                        "name": "Contents",
                        "path": "CoreServices/AppleScriptUtility.app/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "ApplicationFirewall.bundle",
                "path": "CoreServices/ApplicationFirewall.bundle",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "CoreServices/ApplicationFirewall.bundle/Contents"
                    }
                ]
            },
            {
                "value": 14808,
                "name": "Applications",
                "path": "CoreServices/Applications",
                "children": [
                    {
                        "value": 1792,
                        "name": "NetworkUtility.app",
                        "path": "CoreServices/Applications/NetworkUtility.app"
                    },
                    {
                        "value": 7328,
                        "name": "RAIDUtility.app",
                        "path": "CoreServices/Applications/RAIDUtility.app"
                    },
                    {
                        "value": 5688,
                        "name": "WirelessDiagnostics.app",
                        "path": "CoreServices/Applications/WirelessDiagnostics.app"
                    }
                ]
            },
            {
                "value": 6620,
                "name": "ArchiveUtility.app",
                "path": "CoreServices/ArchiveUtility.app",
                "children": [
                    {
                        "value": 6620,
                        "name": "Contents",
                        "path": "CoreServices/ArchiveUtility.app/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "AutomatorLauncher.app",
                "path": "CoreServices/AutomatorLauncher.app",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "CoreServices/AutomatorLauncher.app/Contents"
                    }
                ]
            },
            {
                "value": 584,
                "name": "AutomatorRunner.app",
                "path": "CoreServices/AutomatorRunner.app",
                "children": [
                    {
                        "value": 584,
                        "name": "Contents",
                        "path": "CoreServices/AutomatorRunner.app/Contents"
                    }
                ]
            },
            {
                "value": 412,
                "name": "AVRCPAgent.app",
                "path": "CoreServices/AVRCPAgent.app",
                "children": [
                    {
                        "value": 412,
                        "name": "Contents",
                        "path": "CoreServices/AVRCPAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 1400,
                "name": "backupd.bundle",
                "path": "CoreServices/backupd.bundle",
                "children": [
                    {
                        "value": 1400,
                        "name": "Contents",
                        "path": "CoreServices/backupd.bundle/Contents"
                    }
                ]
            },
            {
                "value": 2548,
                "name": "BluetoothSetup Assistant.app",
                "path": "CoreServices/BluetoothSetup Assistant.app",
                "children": [
                    {
                        "value": 2548,
                        "name": "Contents",
                        "path": "CoreServices/BluetoothSetup Assistant.app/Contents"
                    }
                ]
            },
            {
                "value": 2588,
                "name": "BluetoothUIServer.app",
                "path": "CoreServices/BluetoothUIServer.app",
                "children": [
                    {
                        "value": 2588,
                        "name": "Contents",
                        "path": "CoreServices/BluetoothUIServer.app/Contents"
                    }
                ]
            },
            {
                "value": 1288,
                "name": "CalendarFileHandler.app",
                "path": "CoreServices/CalendarFileHandler.app",
                "children": [
                    {
                        "value": 1288,
                        "name": "Contents",
                        "path": "CoreServices/CalendarFileHandler.app/Contents"
                    }
                ]
            },
            {
                "value": 44,
                "name": "CaptiveNetwork Assistant.app",
                "path": "CoreServices/CaptiveNetwork Assistant.app",
                "children": [
                    {
                        "value": 44,
                        "name": "Contents",
                        "path": "CoreServices/CaptiveNetwork Assistant.app/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "CarbonSpellChecker.bundle",
                "path": "CoreServices/CarbonSpellChecker.bundle",
                "children": [
                    {
                        "value": 12,
                        "name": "Contents",
                        "path": "CoreServices/CarbonSpellChecker.bundle/Contents"
                    }
                ]
            },
            {
                "value": 27144,
                "name": "CertificateAssistant.app",
                "path": "CoreServices/CertificateAssistant.app",
                "children": [
                    {
                        "value": 27144,
                        "name": "Contents",
                        "path": "CoreServices/CertificateAssistant.app/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "CommonCocoaPanels.bundle",
                "path": "CoreServices/CommonCocoaPanels.bundle",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "CoreServices/CommonCocoaPanels.bundle/Contents"
                    }
                ]
            },
            {
                "value": 676,
                "name": "CoreLocationAgent.app",
                "path": "CoreServices/CoreLocationAgent.app",
                "children": [
                    {
                        "value": 676,
                        "name": "Contents",
                        "path": "CoreServices/CoreLocationAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 164,
                "name": "CoreServicesUIAgent.app",
                "path": "CoreServices/CoreServicesUIAgent.app",
                "children": [
                    {
                        "value": 164,
                        "name": "Contents",
                        "path": "CoreServices/CoreServicesUIAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 171300,
                "name": "CoreTypes.bundle",
                "path": "CoreServices/CoreTypes.bundle",
                "children": [
                    {
                        "value": 171300,
                        "name": "Contents",
                        "path": "CoreServices/CoreTypes.bundle/Contents"
                    }
                ]
            },
            {
                "value": 308,
                "name": "DatabaseEvents.app",
                "path": "CoreServices/DatabaseEvents.app",
                "children": [
                    {
                        "value": 308,
                        "name": "Contents",
                        "path": "CoreServices/DatabaseEvents.app/Contents"
                    }
                ]
            },
            {
                "value": 6104,
                "name": "DirectoryUtility.app",
                "path": "CoreServices/DirectoryUtility.app",
                "children": [
                    {
                        "value": 6104,
                        "name": "Contents",
                        "path": "CoreServices/DirectoryUtility.app/Contents"
                    }
                ]
            },
            {
                "value": 1840,
                "name": "DiskImageMounter.app",
                "path": "CoreServices/DiskImageMounter.app",
                "children": [
                    {
                        "value": 1840,
                        "name": "Contents",
                        "path": "CoreServices/DiskImageMounter.app/Contents"
                    }
                ]
            },
            {
                "value": 8476,
                "name": "Dock.app",
                "path": "CoreServices/Dock.app",
                "children": [
                    {
                        "value": 8476,
                        "name": "Contents",
                        "path": "CoreServices/Dock.app/Contents"
                    }
                ]
            },
            {
                "value": 696,
                "name": "Encodings",
                "path": "CoreServices/Encodings"
            },
            {
                "value": 1024,
                "name": "ExpansionSlot Utility.app",
                "path": "CoreServices/ExpansionSlot Utility.app",
                "children": [
                    {
                        "value": 1024,
                        "name": "Contents",
                        "path": "CoreServices/ExpansionSlot Utility.app/Contents"
                    }
                ]
            },
            {
                "value": 1732,
                "name": "FileSync.app",
                "path": "CoreServices/FileSync.app",
                "children": [
                    {
                        "value": 1732,
                        "name": "Contents",
                        "path": "CoreServices/FileSync.app/Contents"
                    }
                ]
            },
            {
                "value": 572,
                "name": "FileSyncAgent.app",
                "path": "CoreServices/FileSyncAgent.app",
                "children": [
                    {
                        "value": 572,
                        "name": "Contents",
                        "path": "CoreServices/FileSyncAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 35168,
                "name": "Finder.app",
                "path": "CoreServices/Finder.app",
                "children": [
                    {
                        "value": 35168,
                        "name": "Contents",
                        "path": "CoreServices/Finder.app/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "FirmwareUpdates",
                "path": "CoreServices/FirmwareUpdates"
            },
            {
                "value": 336,
                "name": "FolderActions Dispatcher.app",
                "path": "CoreServices/FolderActions Dispatcher.app",
                "children": [
                    {
                        "value": 336,
                        "name": "Contents",
                        "path": "CoreServices/FolderActions Dispatcher.app/Contents"
                    }
                ]
            },
            {
                "value": 1820,
                "name": "FolderActions Setup.app",
                "path": "CoreServices/FolderActions Setup.app",
                "children": [
                    {
                        "value": 1820,
                        "name": "Contents",
                        "path": "CoreServices/FolderActions Setup.app/Contents"
                    }
                ]
            },
            {
                "value": 3268,
                "name": "HelpViewer.app",
                "path": "CoreServices/HelpViewer.app",
                "children": [
                    {
                        "value": 3268,
                        "name": "Contents",
                        "path": "CoreServices/HelpViewer.app/Contents"
                    }
                ]
            },
            {
                "value": 352,
                "name": "ImageEvents.app",
                "path": "CoreServices/ImageEvents.app",
                "children": [
                    {
                        "value": 352,
                        "name": "Contents",
                        "path": "CoreServices/ImageEvents.app/Contents"
                    }
                ]
            },
            {
                "value": 2012,
                "name": "InstallCommand Line Developer Tools.app",
                "path": "CoreServices/InstallCommand Line Developer Tools.app",
                "children": [
                    {
                        "value": 2012,
                        "name": "Contents",
                        "path": "CoreServices/InstallCommand Line Developer Tools.app/Contents"
                    }
                ]
            },
            {
                "value": 108,
                "name": "Installin Progress.app",
                "path": "CoreServices/Installin Progress.app",
                "children": [
                    {
                        "value": 108,
                        "name": "Contents",
                        "path": "CoreServices/Installin Progress.app/Contents"
                    }
                ]
            },
            {
                "value": 7444,
                "name": "Installer.app",
                "path": "CoreServices/Installer.app",
                "children": [
                    {
                        "value": 7444,
                        "name": "Contents",
                        "path": "CoreServices/Installer.app/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "InstallerStatusNotifications.bundle",
                "path": "CoreServices/InstallerStatusNotifications.bundle",
                "children": [
                    {
                        "value": 8,
                        "name": "Contents",
                        "path": "CoreServices/InstallerStatusNotifications.bundle/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "InternetSharing.bundle",
                "path": "CoreServices/InternetSharing.bundle",
                "children": [
                    {
                        "value": 0,
                        "name": "Resources",
                        "path": "CoreServices/InternetSharing.bundle/Resources"
                    }
                ]
            },
            {
                "value": 244,
                "name": "JarLauncher.app",
                "path": "CoreServices/JarLauncher.app",
                "children": [
                    {
                        "value": 244,
                        "name": "Contents",
                        "path": "CoreServices/JarLauncher.app/Contents"
                    }
                ]
            },
            {
                "value": 152,
                "name": "JavaWeb Start.app",
                "path": "CoreServices/JavaWeb Start.app",
                "children": [
                    {
                        "value": 152,
                        "name": "Contents",
                        "path": "CoreServices/JavaWeb Start.app/Contents"
                    }
                ]
            },
            {
                "value": 12,
                "name": "KernelEventAgent.bundle",
                "path": "CoreServices/KernelEventAgent.bundle",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "CoreServices/KernelEventAgent.bundle/Contents"
                    },
                    {
                        "value": 12,
                        "name": "FileSystemUIAgent.app",
                        "path": "CoreServices/KernelEventAgent.bundle/FileSystemUIAgent.app"
                    }
                ]
            },
            {
                "value": 1016,
                "name": "KeyboardSetupAssistant.app",
                "path": "CoreServices/KeyboardSetupAssistant.app",
                "children": [
                    {
                        "value": 1016,
                        "name": "Contents",
                        "path": "CoreServices/KeyboardSetupAssistant.app/Contents"
                    }
                ]
            },
            {
                "value": 840,
                "name": "KeychainCircle Notification.app",
                "path": "CoreServices/KeychainCircle Notification.app",
                "children": [
                    {
                        "value": 840,
                        "name": "Contents",
                        "path": "CoreServices/KeychainCircle Notification.app/Contents"
                    }
                ]
            },
            {
                "value": 1448,
                "name": "LanguageChooser.app",
                "path": "CoreServices/LanguageChooser.app",
                "children": [
                    {
                        "value": 1448,
                        "name": "Contents",
                        "path": "CoreServices/LanguageChooser.app/Contents"
                    }
                ]
            },
            {
                "value": 868,
                "name": "LocationMenu.app",
                "path": "CoreServices/LocationMenu.app",
                "children": [
                    {
                        "value": 868,
                        "name": "Contents",
                        "path": "CoreServices/LocationMenu.app/Contents"
                    }
                ]
            },
            {
                "value": 8260,
                "name": "loginwindow.app",
                "path": "CoreServices/loginwindow.app",
                "children": [
                    {
                        "value": 8260,
                        "name": "Contents",
                        "path": "CoreServices/loginwindow.app/Contents"
                    }
                ]
            },
            {
                "value": 3632,
                "name": "ManagedClient.app",
                "path": "CoreServices/ManagedClient.app",
                "children": [
                    {
                        "value": 3632,
                        "name": "Contents",
                        "path": "CoreServices/ManagedClient.app/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "mDNSResponder.bundle",
                "path": "CoreServices/mDNSResponder.bundle",
                "children": [
                    {
                        "value": 0,
                        "name": "Resources",
                        "path": "CoreServices/mDNSResponder.bundle/Resources"
                    }
                ]
            },
            {
                "value": 420,
                "name": "MemorySlot Utility.app",
                "path": "CoreServices/MemorySlot Utility.app",
                "children": [
                    {
                        "value": 420,
                        "name": "Contents",
                        "path": "CoreServices/MemorySlot Utility.app/Contents"
                    }
                ]
            },
            {
                "value": 4272,
                "name": "MenuExtras",
                "path": "CoreServices/MenuExtras",
                "children": [
                    {
                        "value": 416,
                        "name": "AirPort.menu",
                        "path": "CoreServices/MenuExtras/AirPort.menu"
                    },
                    {
                        "value": 788,
                        "name": "Battery.menu",
                        "path": "CoreServices/MenuExtras/Battery.menu"
                    },
                    {
                        "value": 112,
                        "name": "Bluetooth.menu",
                        "path": "CoreServices/MenuExtras/Bluetooth.menu"
                    },
                    {
                        "value": 12,
                        "name": "Clock.menu",
                        "path": "CoreServices/MenuExtras/Clock.menu"
                    },
                    {
                        "value": 84,
                        "name": "Displays.menu",
                        "path": "CoreServices/MenuExtras/Displays.menu"
                    },
                    {
                        "value": 32,
                        "name": "Eject.menu",
                        "path": "CoreServices/MenuExtras/Eject.menu"
                    },
                    {
                        "value": 24,
                        "name": "ExpressCard.menu",
                        "path": "CoreServices/MenuExtras/ExpressCard.menu"
                    },
                    {
                        "value": 76,
                        "name": "Fax.menu",
                        "path": "CoreServices/MenuExtras/Fax.menu"
                    },
                    {
                        "value": 112,
                        "name": "HomeSync.menu",
                        "path": "CoreServices/MenuExtras/HomeSync.menu"
                    },
                    {
                        "value": 84,
                        "name": "iChat.menu",
                        "path": "CoreServices/MenuExtras/iChat.menu"
                    },
                    {
                        "value": 28,
                        "name": "Ink.menu",
                        "path": "CoreServices/MenuExtras/Ink.menu"
                    },
                    {
                        "value": 104,
                        "name": "IrDA.menu",
                        "path": "CoreServices/MenuExtras/IrDA.menu"
                    },
                    {
                        "value": 68,
                        "name": "PPP.menu",
                        "path": "CoreServices/MenuExtras/PPP.menu"
                    },
                    {
                        "value": 24,
                        "name": "PPPoE.menu",
                        "path": "CoreServices/MenuExtras/PPPoE.menu"
                    },
                    {
                        "value": 60,
                        "name": "RemoteDesktop.menu",
                        "path": "CoreServices/MenuExtras/RemoteDesktop.menu"
                    },
                    {
                        "value": 48,
                        "name": "Script Menu.menu",
                        "path": "CoreServices/MenuExtras/Script Menu.menu"
                    },
                    {
                        "value": 832,
                        "name": "TextInput.menu",
                        "path": "CoreServices/MenuExtras/TextInput.menu"
                    },
                    {
                        "value": 144,
                        "name": "TimeMachine.menu",
                        "path": "CoreServices/MenuExtras/TimeMachine.menu"
                    },
                    {
                        "value": 40,
                        "name": "UniversalAccess.menu",
                        "path": "CoreServices/MenuExtras/UniversalAccess.menu"
                    },
                    {
                        "value": 108,
                        "name": "User.menu",
                        "path": "CoreServices/MenuExtras/User.menu"
                    },
                    {
                        "value": 316,
                        "name": "Volume.menu",
                        "path": "CoreServices/MenuExtras/Volume.menu"
                    },
                    {
                        "value": 48,
                        "name": "VPN.menu",
                        "path": "CoreServices/MenuExtras/VPN.menu"
                    },
                    {
                        "value": 712,
                        "name": "WWAN.menu",
                        "path": "CoreServices/MenuExtras/WWAN.menu"
                    }
                ]
            },
            {
                "value": 16,
                "name": "MLTEFile.bundle",
                "path": "CoreServices/MLTEFile.bundle",
                "children": [
                    {
                        "value": 16,
                        "name": "Contents",
                        "path": "CoreServices/MLTEFile.bundle/Contents"
                    }
                ]
            },
            {
                "value": 616,
                "name": "MRTAgent.app",
                "path": "CoreServices/MRTAgent.app",
                "children": [
                    {
                        "value": 616,
                        "name": "Contents",
                        "path": "CoreServices/MRTAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 1540,
                "name": "NetAuthAgent.app",
                "path": "CoreServices/NetAuthAgent.app",
                "children": [
                    {
                        "value": 1540,
                        "name": "Contents",
                        "path": "CoreServices/NetAuthAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 3388,
                "name": "NetworkDiagnostics.app",
                "path": "CoreServices/NetworkDiagnostics.app",
                "children": [
                    {
                        "value": 3388,
                        "name": "Contents",
                        "path": "CoreServices/NetworkDiagnostics.app/Contents"
                    }
                ]
            },
            {
                "value": 9384,
                "name": "NetworkSetup Assistant.app",
                "path": "CoreServices/NetworkSetup Assistant.app",
                "children": [
                    {
                        "value": 9384,
                        "name": "Contents",
                        "path": "CoreServices/NetworkSetup Assistant.app/Contents"
                    }
                ]
            },
            {
                "value": 716,
                "name": "NotificationCenter.app",
                "path": "CoreServices/NotificationCenter.app",
                "children": [
                    {
                        "value": 716,
                        "name": "Contents",
                        "path": "CoreServices/NotificationCenter.app/Contents"
                    }
                ]
            },
            {
                "value": 948,
                "name": "OBEXAgent.app",
                "path": "CoreServices/OBEXAgent.app",
                "children": [
                    {
                        "value": 948,
                        "name": "Contents",
                        "path": "CoreServices/OBEXAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 1596,
                "name": "ODSAgent.app",
                "path": "CoreServices/ODSAgent.app",
                "children": [
                    {
                        "value": 1596,
                        "name": "Contents",
                        "path": "CoreServices/ODSAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 492,
                "name": "PassViewer.app",
                "path": "CoreServices/PassViewer.app",
                "children": [
                    {
                        "value": 492,
                        "name": "Contents",
                        "path": "CoreServices/PassViewer.app/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "PerformanceMetricLocalizations.bundle",
                "path": "CoreServices/PerformanceMetricLocalizations.bundle",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "CoreServices/PerformanceMetricLocalizations.bundle/Contents"
                    }
                ]
            },
            {
                "value": 88,
                "name": "powerd.bundle",
                "path": "CoreServices/powerd.bundle",
                "children": [
                    {
                        "value": 0,
                        "name": "_CodeSignature",
                        "path": "CoreServices/powerd.bundle/_CodeSignature"
                    },
                    {
                        "value": 0,
                        "name": "ar.lproj",
                        "path": "CoreServices/powerd.bundle/ar.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ca.lproj",
                        "path": "CoreServices/powerd.bundle/ca.lproj"
                    },
                    {
                        "value": 0,
                        "name": "cs.lproj",
                        "path": "CoreServices/powerd.bundle/cs.lproj"
                    },
                    {
                        "value": 0,
                        "name": "da.lproj",
                        "path": "CoreServices/powerd.bundle/da.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Dutch.lproj",
                        "path": "CoreServices/powerd.bundle/Dutch.lproj"
                    },
                    {
                        "value": 0,
                        "name": "el.lproj",
                        "path": "CoreServices/powerd.bundle/el.lproj"
                    },
                    {
                        "value": 0,
                        "name": "English.lproj",
                        "path": "CoreServices/powerd.bundle/English.lproj"
                    },
                    {
                        "value": 0,
                        "name": "fi.lproj",
                        "path": "CoreServices/powerd.bundle/fi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "French.lproj",
                        "path": "CoreServices/powerd.bundle/French.lproj"
                    },
                    {
                        "value": 0,
                        "name": "German.lproj",
                        "path": "CoreServices/powerd.bundle/German.lproj"
                    },
                    {
                        "value": 0,
                        "name": "he.lproj",
                        "path": "CoreServices/powerd.bundle/he.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hr.lproj",
                        "path": "CoreServices/powerd.bundle/hr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hu.lproj",
                        "path": "CoreServices/powerd.bundle/hu.lproj"
                    },
                    {
                        "value": 0,
                        "name": "id.lproj",
                        "path": "CoreServices/powerd.bundle/id.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Italian.lproj",
                        "path": "CoreServices/powerd.bundle/Italian.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Japanese.lproj",
                        "path": "CoreServices/powerd.bundle/Japanese.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ko.lproj",
                        "path": "CoreServices/powerd.bundle/ko.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ms.lproj",
                        "path": "CoreServices/powerd.bundle/ms.lproj"
                    },
                    {
                        "value": 0,
                        "name": "no.lproj",
                        "path": "CoreServices/powerd.bundle/no.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pl.lproj",
                        "path": "CoreServices/powerd.bundle/pl.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt.lproj",
                        "path": "CoreServices/powerd.bundle/pt.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt_PT.lproj",
                        "path": "CoreServices/powerd.bundle/pt_PT.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ro.lproj",
                        "path": "CoreServices/powerd.bundle/ro.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ru.lproj",
                        "path": "CoreServices/powerd.bundle/ru.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sk.lproj",
                        "path": "CoreServices/powerd.bundle/sk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Spanish.lproj",
                        "path": "CoreServices/powerd.bundle/Spanish.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sv.lproj",
                        "path": "CoreServices/powerd.bundle/sv.lproj"
                    },
                    {
                        "value": 0,
                        "name": "th.lproj",
                        "path": "CoreServices/powerd.bundle/th.lproj"
                    },
                    {
                        "value": 0,
                        "name": "tr.lproj",
                        "path": "CoreServices/powerd.bundle/tr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "uk.lproj",
                        "path": "CoreServices/powerd.bundle/uk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "vi.lproj",
                        "path": "CoreServices/powerd.bundle/vi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_CN.lproj",
                        "path": "CoreServices/powerd.bundle/zh_CN.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_TW.lproj",
                        "path": "CoreServices/powerd.bundle/zh_TW.lproj"
                    }
                ]
            },
            {
                "value": 776,
                "name": "ProblemReporter.app",
                "path": "CoreServices/ProblemReporter.app",
                "children": [
                    {
                        "value": 776,
                        "name": "Contents",
                        "path": "CoreServices/ProblemReporter.app/Contents"
                    }
                ]
            },
            {
                "value": 4748,
                "name": "RawCamera.bundle",
                "path": "CoreServices/RawCamera.bundle",
                "children": [
                    {
                        "value": 4748,
                        "name": "Contents",
                        "path": "CoreServices/RawCamera.bundle/Contents"
                    }
                ]
            },
            {
                "value": 2112,
                "name": "RawCameraSupport.bundle",
                "path": "CoreServices/RawCameraSupport.bundle",
                "children": [
                    {
                        "value": 2112,
                        "name": "Contents",
                        "path": "CoreServices/RawCameraSupport.bundle/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "rcd.app",
                "path": "CoreServices/rcd.app",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "CoreServices/rcd.app/Contents"
                    }
                ]
            },
            {
                "value": 156,
                "name": "RegisterPluginIMApp.app",
                "path": "CoreServices/RegisterPluginIMApp.app",
                "children": [
                    {
                        "value": 156,
                        "name": "Contents",
                        "path": "CoreServices/RegisterPluginIMApp.app/Contents"
                    }
                ]
            },
            {
                "value": 3504,
                "name": "RemoteManagement",
                "path": "CoreServices/RemoteManagement",
                "children": [
                    {
                        "value": 872,
                        "name": "AppleVNCServer.bundle",
                        "path": "CoreServices/RemoteManagement/AppleVNCServer.bundle"
                    },
                    {
                        "value": 2260,
                        "name": "ARDAgent.app",
                        "path": "CoreServices/RemoteManagement/ARDAgent.app"
                    },
                    {
                        "value": 144,
                        "name": "ScreensharingAgent.bundle",
                        "path": "CoreServices/RemoteManagement/ScreensharingAgent.bundle"
                    },
                    {
                        "value": 228,
                        "name": "screensharingd.bundle",
                        "path": "CoreServices/RemoteManagement/screensharingd.bundle"
                    }
                ]
            },
            {
                "value": 672,
                "name": "ReportPanic.app",
                "path": "CoreServices/ReportPanic.app",
                "children": [
                    {
                        "value": 672,
                        "name": "Contents",
                        "path": "CoreServices/ReportPanic.app/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "Resources",
                "path": "CoreServices/Resources",
                "children": [
                    {
                        "value": 0,
                        "name": "ar.lproj",
                        "path": "CoreServices/Resources/ar.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ca.lproj",
                        "path": "CoreServices/Resources/ca.lproj"
                    },
                    {
                        "value": 0,
                        "name": "cs.lproj",
                        "path": "CoreServices/Resources/cs.lproj"
                    },
                    {
                        "value": 0,
                        "name": "da.lproj",
                        "path": "CoreServices/Resources/da.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Dutch.lproj",
                        "path": "CoreServices/Resources/Dutch.lproj"
                    },
                    {
                        "value": 0,
                        "name": "el.lproj",
                        "path": "CoreServices/Resources/el.lproj"
                    },
                    {
                        "value": 0,
                        "name": "English.lproj",
                        "path": "CoreServices/Resources/English.lproj"
                    },
                    {
                        "value": 0,
                        "name": "fi.lproj",
                        "path": "CoreServices/Resources/fi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "French.lproj",
                        "path": "CoreServices/Resources/French.lproj"
                    },
                    {
                        "value": 0,
                        "name": "German.lproj",
                        "path": "CoreServices/Resources/German.lproj"
                    },
                    {
                        "value": 0,
                        "name": "he.lproj",
                        "path": "CoreServices/Resources/he.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hr.lproj",
                        "path": "CoreServices/Resources/hr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hu.lproj",
                        "path": "CoreServices/Resources/hu.lproj"
                    },
                    {
                        "value": 0,
                        "name": "id.lproj",
                        "path": "CoreServices/Resources/id.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Italian.lproj",
                        "path": "CoreServices/Resources/Italian.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Japanese.lproj",
                        "path": "CoreServices/Resources/Japanese.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ko.lproj",
                        "path": "CoreServices/Resources/ko.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ms.lproj",
                        "path": "CoreServices/Resources/ms.lproj"
                    },
                    {
                        "value": 0,
                        "name": "no.lproj",
                        "path": "CoreServices/Resources/no.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pl.lproj",
                        "path": "CoreServices/Resources/pl.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Profiles",
                        "path": "CoreServices/Resources/Profiles"
                    },
                    {
                        "value": 0,
                        "name": "pt.lproj",
                        "path": "CoreServices/Resources/pt.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt_PT.lproj",
                        "path": "CoreServices/Resources/pt_PT.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ro.lproj",
                        "path": "CoreServices/Resources/ro.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ru.lproj",
                        "path": "CoreServices/Resources/ru.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sk.lproj",
                        "path": "CoreServices/Resources/sk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "Spanish.lproj",
                        "path": "CoreServices/Resources/Spanish.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sv.lproj",
                        "path": "CoreServices/Resources/sv.lproj"
                    },
                    {
                        "value": 0,
                        "name": "th.lproj",
                        "path": "CoreServices/Resources/th.lproj"
                    },
                    {
                        "value": 0,
                        "name": "tr.lproj",
                        "path": "CoreServices/Resources/tr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "uk.lproj",
                        "path": "CoreServices/Resources/uk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "vi.lproj",
                        "path": "CoreServices/Resources/vi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_CN.lproj",
                        "path": "CoreServices/Resources/zh_CN.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_TW.lproj",
                        "path": "CoreServices/Resources/zh_TW.lproj"
                    }
                ]
            },
            {
                "value": 20,
                "name": "RFBEventHelper.bundle",
                "path": "CoreServices/RFBEventHelper.bundle",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "CoreServices/RFBEventHelper.bundle/Contents"
                    }
                ]
            },
            {
                "value": 3304,
                "name": "ScreenSharing.app",
                "path": "CoreServices/ScreenSharing.app",
                "children": [
                    {
                        "value": 3304,
                        "name": "Contents",
                        "path": "CoreServices/ScreenSharing.app/Contents"
                    }
                ]
            },
            {
                "value": 244,
                "name": "Search.bundle",
                "path": "CoreServices/Search.bundle",
                "children": [
                    {
                        "value": 244,
                        "name": "Contents",
                        "path": "CoreServices/Search.bundle/Contents"
                    }
                ]
            },
            {
                "value": 4128,
                "name": "SecurityAgentPlugins",
                "path": "CoreServices/SecurityAgentPlugins",
                "children": [
                    {
                        "value": 304,
                        "name": "DiskUnlock.bundle",
                        "path": "CoreServices/SecurityAgentPlugins/DiskUnlock.bundle"
                    },
                    {
                        "value": 1192,
                        "name": "FamilyControls.bundle",
                        "path": "CoreServices/SecurityAgentPlugins/FamilyControls.bundle"
                    },
                    {
                        "value": 340,
                        "name": "HomeDirMechanism.bundle",
                        "path": "CoreServices/SecurityAgentPlugins/HomeDirMechanism.bundle"
                    },
                    {
                        "value": 1156,
                        "name": "KerberosAgent.bundle",
                        "path": "CoreServices/SecurityAgentPlugins/KerberosAgent.bundle"
                    },
                    {
                        "value": 276,
                        "name": "loginKC.bundle",
                        "path": "CoreServices/SecurityAgentPlugins/loginKC.bundle"
                    },
                    {
                        "value": 104,
                        "name": "loginwindow.bundle",
                        "path": "CoreServices/SecurityAgentPlugins/loginwindow.bundle"
                    },
                    {
                        "value": 384,
                        "name": "MCXMechanism.bundle",
                        "path": "CoreServices/SecurityAgentPlugins/MCXMechanism.bundle"
                    },
                    {
                        "value": 12,
                        "name": "PKINITMechanism.bundle",
                        "path": "CoreServices/SecurityAgentPlugins/PKINITMechanism.bundle"
                    },
                    {
                        "value": 360,
                        "name": "RestartAuthorization.bundle",
                        "path": "CoreServices/SecurityAgentPlugins/RestartAuthorization.bundle"
                    }
                ]
            },
            {
                "value": 328,
                "name": "SecurityFixer.app",
                "path": "CoreServices/SecurityFixer.app",
                "children": [
                    {
                        "value": 328,
                        "name": "Contents",
                        "path": "CoreServices/SecurityFixer.app/Contents"
                    }
                ]
            },
            {
                "value": 28200,
                "name": "SetupAssistant.app",
                "path": "CoreServices/SetupAssistant.app",
                "children": [
                    {
                        "value": 28200,
                        "name": "Contents",
                        "path": "CoreServices/SetupAssistant.app/Contents"
                    }
                ]
            },
            {
                "value": 164,
                "name": "SetupAssistantPlugins",
                "path": "CoreServices/SetupAssistantPlugins",
                "children": [
                    {
                        "value": 8,
                        "name": "AppStore.icdplugin",
                        "path": "CoreServices/SetupAssistantPlugins/AppStore.icdplugin"
                    },
                    {
                        "value": 8,
                        "name": "Calendar.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/Calendar.flplugin"
                    },
                    {
                        "value": 8,
                        "name": "FaceTime.icdplugin",
                        "path": "CoreServices/SetupAssistantPlugins/FaceTime.icdplugin"
                    },
                    {
                        "value": 8,
                        "name": "Fonts.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/Fonts.flplugin"
                    },
                    {
                        "value": 16,
                        "name": "GameCenter.icdplugin",
                        "path": "CoreServices/SetupAssistantPlugins/GameCenter.icdplugin"
                    },
                    {
                        "value": 8,
                        "name": "Helpd.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/Helpd.flplugin"
                    },
                    {
                        "value": 8,
                        "name": "iBooks.icdplugin",
                        "path": "CoreServices/SetupAssistantPlugins/iBooks.icdplugin"
                    },
                    {
                        "value": 16,
                        "name": "IdentityServices.icdplugin",
                        "path": "CoreServices/SetupAssistantPlugins/IdentityServices.icdplugin"
                    },
                    {
                        "value": 8,
                        "name": "iMessage.icdplugin",
                        "path": "CoreServices/SetupAssistantPlugins/iMessage.icdplugin"
                    },
                    {
                        "value": 8,
                        "name": "LaunchServices.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/LaunchServices.flplugin"
                    },
                    {
                        "value": 12,
                        "name": "Mail.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/Mail.flplugin"
                    },
                    {
                        "value": 8,
                        "name": "QuickLook.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/QuickLook.flplugin"
                    },
                    {
                        "value": 8,
                        "name": "Safari.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/Safari.flplugin"
                    },
                    {
                        "value": 8,
                        "name": "ServicesMenu.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/ServicesMenu.flplugin"
                    },
                    {
                        "value": 8,
                        "name": "SoftwareUpdateActions.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/SoftwareUpdateActions.flplugin"
                    },
                    {
                        "value": 8,
                        "name": "Spotlight.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/Spotlight.flplugin"
                    },
                    {
                        "value": 16,
                        "name": "UAU.flplugin",
                        "path": "CoreServices/SetupAssistantPlugins/UAU.flplugin"
                    }
                ]
            },
            {
                "value": 48,
                "name": "SocialPushAgent.app",
                "path": "CoreServices/SocialPushAgent.app",
                "children": [
                    {
                        "value": 48,
                        "name": "Contents",
                        "path": "CoreServices/SocialPushAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 2196,
                "name": "SoftwareUpdate.app",
                "path": "CoreServices/SoftwareUpdate.app",
                "children": [
                    {
                        "value": 2196,
                        "name": "Contents",
                        "path": "CoreServices/SoftwareUpdate.app/Contents"
                    }
                ]
            },
            {
                "value": 856,
                "name": "Spotlight.app",
                "path": "CoreServices/Spotlight.app",
                "children": [
                    {
                        "value": 856,
                        "name": "Contents",
                        "path": "CoreServices/Spotlight.app/Contents"
                    }
                ]
            },
            {
                "value": 384,
                "name": "SystemEvents.app",
                "path": "CoreServices/SystemEvents.app",
                "children": [
                    {
                        "value": 384,
                        "name": "Contents",
                        "path": "CoreServices/SystemEvents.app/Contents"
                    }
                ]
            },
            {
                "value": 2152,
                "name": "SystemImage Utility.app",
                "path": "CoreServices/SystemImage Utility.app",
                "children": [
                    {
                        "value": 2152,
                        "name": "Contents",
                        "path": "CoreServices/SystemImage Utility.app/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "SystemFolderLocalizations",
                "path": "CoreServices/SystemFolderLocalizations",
                "children": [
                    {
                        "value": 0,
                        "name": "ar.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/ar.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ca.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/ca.lproj"
                    },
                    {
                        "value": 0,
                        "name": "cs.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/cs.lproj"
                    },
                    {
                        "value": 0,
                        "name": "da.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/da.lproj"
                    },
                    {
                        "value": 0,
                        "name": "de.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/de.lproj"
                    },
                    {
                        "value": 0,
                        "name": "el.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/el.lproj"
                    },
                    {
                        "value": 0,
                        "name": "en.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/en.lproj"
                    },
                    {
                        "value": 0,
                        "name": "es.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/es.lproj"
                    },
                    {
                        "value": 0,
                        "name": "fi.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/fi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "fr.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/fr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "he.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/he.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hr.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/hr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "hu.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/hu.lproj"
                    },
                    {
                        "value": 0,
                        "name": "id.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/id.lproj"
                    },
                    {
                        "value": 0,
                        "name": "it.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/it.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ja.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/ja.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ko.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/ko.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ms.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/ms.lproj"
                    },
                    {
                        "value": 0,
                        "name": "nl.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/nl.lproj"
                    },
                    {
                        "value": 0,
                        "name": "no.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/no.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pl.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/pl.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/pt.lproj"
                    },
                    {
                        "value": 0,
                        "name": "pt_PT.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/pt_PT.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ro.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/ro.lproj"
                    },
                    {
                        "value": 0,
                        "name": "ru.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/ru.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sk.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/sk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "sv.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/sv.lproj"
                    },
                    {
                        "value": 0,
                        "name": "th.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/th.lproj"
                    },
                    {
                        "value": 0,
                        "name": "tr.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/tr.lproj"
                    },
                    {
                        "value": 0,
                        "name": "uk.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/uk.lproj"
                    },
                    {
                        "value": 0,
                        "name": "vi.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/vi.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_CN.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/zh_CN.lproj"
                    },
                    {
                        "value": 0,
                        "name": "zh_TW.lproj",
                        "path": "CoreServices/SystemFolderLocalizations/zh_TW.lproj"
                    }
                ]
            },
            {
                "value": 852,
                "name": "SystemUIServer.app",
                "path": "CoreServices/SystemUIServer.app",
                "children": [
                    {
                        "value": 852,
                        "name": "Contents",
                        "path": "CoreServices/SystemUIServer.app/Contents"
                    }
                ]
            },
            {
                "value": 132,
                "name": "SystemVersion.bundle",
                "path": "CoreServices/SystemVersion.bundle",
                "children": [
                    {
                        "value": 4,
                        "name": "ar.lproj",
                        "path": "CoreServices/SystemVersion.bundle/ar.lproj"
                    },
                    {
                        "value": 4,
                        "name": "ca.lproj",
                        "path": "CoreServices/SystemVersion.bundle/ca.lproj"
                    },
                    {
                        "value": 4,
                        "name": "cs.lproj",
                        "path": "CoreServices/SystemVersion.bundle/cs.lproj"
                    },
                    {
                        "value": 4,
                        "name": "da.lproj",
                        "path": "CoreServices/SystemVersion.bundle/da.lproj"
                    },
                    {
                        "value": 4,
                        "name": "Dutch.lproj",
                        "path": "CoreServices/SystemVersion.bundle/Dutch.lproj"
                    },
                    {
                        "value": 4,
                        "name": "el.lproj",
                        "path": "CoreServices/SystemVersion.bundle/el.lproj"
                    },
                    {
                        "value": 4,
                        "name": "English.lproj",
                        "path": "CoreServices/SystemVersion.bundle/English.lproj"
                    },
                    {
                        "value": 4,
                        "name": "fi.lproj",
                        "path": "CoreServices/SystemVersion.bundle/fi.lproj"
                    },
                    {
                        "value": 4,
                        "name": "French.lproj",
                        "path": "CoreServices/SystemVersion.bundle/French.lproj"
                    },
                    {
                        "value": 4,
                        "name": "German.lproj",
                        "path": "CoreServices/SystemVersion.bundle/German.lproj"
                    },
                    {
                        "value": 4,
                        "name": "he.lproj",
                        "path": "CoreServices/SystemVersion.bundle/he.lproj"
                    },
                    {
                        "value": 4,
                        "name": "hr.lproj",
                        "path": "CoreServices/SystemVersion.bundle/hr.lproj"
                    },
                    {
                        "value": 4,
                        "name": "hu.lproj",
                        "path": "CoreServices/SystemVersion.bundle/hu.lproj"
                    },
                    {
                        "value": 4,
                        "name": "id.lproj",
                        "path": "CoreServices/SystemVersion.bundle/id.lproj"
                    },
                    {
                        "value": 4,
                        "name": "Italian.lproj",
                        "path": "CoreServices/SystemVersion.bundle/Italian.lproj"
                    },
                    {
                        "value": 4,
                        "name": "Japanese.lproj",
                        "path": "CoreServices/SystemVersion.bundle/Japanese.lproj"
                    },
                    {
                        "value": 4,
                        "name": "ko.lproj",
                        "path": "CoreServices/SystemVersion.bundle/ko.lproj"
                    },
                    {
                        "value": 4,
                        "name": "ms.lproj",
                        "path": "CoreServices/SystemVersion.bundle/ms.lproj"
                    },
                    {
                        "value": 4,
                        "name": "no.lproj",
                        "path": "CoreServices/SystemVersion.bundle/no.lproj"
                    },
                    {
                        "value": 4,
                        "name": "pl.lproj",
                        "path": "CoreServices/SystemVersion.bundle/pl.lproj"
                    },
                    {
                        "value": 4,
                        "name": "pt.lproj",
                        "path": "CoreServices/SystemVersion.bundle/pt.lproj"
                    },
                    {
                        "value": 4,
                        "name": "pt_PT.lproj",
                        "path": "CoreServices/SystemVersion.bundle/pt_PT.lproj"
                    },
                    {
                        "value": 4,
                        "name": "ro.lproj",
                        "path": "CoreServices/SystemVersion.bundle/ro.lproj"
                    },
                    {
                        "value": 4,
                        "name": "ru.lproj",
                        "path": "CoreServices/SystemVersion.bundle/ru.lproj"
                    },
                    {
                        "value": 4,
                        "name": "sk.lproj",
                        "path": "CoreServices/SystemVersion.bundle/sk.lproj"
                    },
                    {
                        "value": 4,
                        "name": "Spanish.lproj",
                        "path": "CoreServices/SystemVersion.bundle/Spanish.lproj"
                    },
                    {
                        "value": 4,
                        "name": "sv.lproj",
                        "path": "CoreServices/SystemVersion.bundle/sv.lproj"
                    },
                    {
                        "value": 4,
                        "name": "th.lproj",
                        "path": "CoreServices/SystemVersion.bundle/th.lproj"
                    },
                    {
                        "value": 4,
                        "name": "tr.lproj",
                        "path": "CoreServices/SystemVersion.bundle/tr.lproj"
                    },
                    {
                        "value": 4,
                        "name": "uk.lproj",
                        "path": "CoreServices/SystemVersion.bundle/uk.lproj"
                    },
                    {
                        "value": 4,
                        "name": "vi.lproj",
                        "path": "CoreServices/SystemVersion.bundle/vi.lproj"
                    },
                    {
                        "value": 4,
                        "name": "zh_CN.lproj",
                        "path": "CoreServices/SystemVersion.bundle/zh_CN.lproj"
                    },
                    {
                        "value": 4,
                        "name": "zh_TW.lproj",
                        "path": "CoreServices/SystemVersion.bundle/zh_TW.lproj"
                    }
                ]
            },
            {
                "value": 3148,
                "name": "TicketViewer.app",
                "path": "CoreServices/TicketViewer.app",
                "children": [
                    {
                        "value": 3148,
                        "name": "Contents",
                        "path": "CoreServices/TicketViewer.app/Contents"
                    }
                ]
            },
            {
                "value": 532,
                "name": "TypographyPanel.bundle",
                "path": "CoreServices/TypographyPanel.bundle",
                "children": [
                    {
                        "value": 532,
                        "name": "Contents",
                        "path": "CoreServices/TypographyPanel.bundle/Contents"
                    }
                ]
            },
            {
                "value": 676,
                "name": "UniversalAccessControl.app",
                "path": "CoreServices/UniversalAccessControl.app",
                "children": [
                    {
                        "value": 676,
                        "name": "Contents",
                        "path": "CoreServices/UniversalAccessControl.app/Contents"
                    }
                ]
            },
            {
                "value": 52,
                "name": "UnmountAssistantAgent.app",
                "path": "CoreServices/UnmountAssistantAgent.app",
                "children": [
                    {
                        "value": 52,
                        "name": "Contents",
                        "path": "CoreServices/UnmountAssistantAgent.app/Contents"
                    }
                ]
            },
            {
                "value": 60,
                "name": "UserNotificationCenter.app",
                "path": "CoreServices/UserNotificationCenter.app",
                "children": [
                    {
                        "value": 60,
                        "name": "Contents",
                        "path": "CoreServices/UserNotificationCenter.app/Contents"
                    }
                ]
            },
            {
                "value": 456,
                "name": "VoiceOver.app",
                "path": "CoreServices/VoiceOver.app",
                "children": [
                    {
                        "value": 456,
                        "name": "Contents",
                        "path": "CoreServices/VoiceOver.app/Contents"
                    }
                ]
            },
            {
                "value": 44,
                "name": "XsanManagerDaemon.bundle",
                "path": "CoreServices/XsanManagerDaemon.bundle",
                "children": [
                    {
                        "value": 44,
                        "name": "Contents",
                        "path": "CoreServices/XsanManagerDaemon.bundle/Contents"
                    }
                ]
            },
            {
                "value": 844,
                "name": "ZoomWindow.app",
                "path": "CoreServices/ZoomWindow.app",
                "children": [
                    {
                        "value": 844,
                        "name": "Contents",
                        "path": "CoreServices/ZoomWindow.app/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 72,
        "name": "DirectoryServices",
        "path": "DirectoryServices",
        "children": [
            {
                "value": 0,
                "name": "DefaultLocalDB",
                "path": "DirectoryServices/DefaultLocalDB"
            },
            {
                "value": 72,
                "name": "dscl",
                "path": "DirectoryServices/dscl",
                "children": [
                    {
                        "value": 44,
                        "name": "mcxcl.dsclext",
                        "path": "DirectoryServices/dscl/mcxcl.dsclext"
                    },
                    {
                        "value": 28,
                        "name": "mcxProfiles.dsclext",
                        "path": "DirectoryServices/dscl/mcxProfiles.dsclext"
                    }
                ]
            },
            {
                "value": 0,
                "name": "Templates",
                "path": "DirectoryServices/Templates",
                "children": [
                    {
                        "value": 0,
                        "name": "LDAPv3",
                        "path": "DirectoryServices/Templates/LDAPv3"
                    }
                ]
            }
        ]
    },
    {
        "value": 0,
        "name": "Displays",
        "path": "Displays",
        "children": [
            {
                "value": 0,
                "name": "_CodeSignature",
                "path": "Displays/_CodeSignature"
            },
            {
                "value": 0,
                "name": "Overrides",
                "path": "Displays/Overrides",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Displays/Overrides/Contents"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-11a9",
                        "path": "Displays/Overrides/DisplayVendorID-11a9"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-2283",
                        "path": "Displays/Overrides/DisplayVendorID-2283"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-34a9",
                        "path": "Displays/Overrides/DisplayVendorID-34a9"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-38a3",
                        "path": "Displays/Overrides/DisplayVendorID-38a3"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-4c2d",
                        "path": "Displays/Overrides/DisplayVendorID-4c2d"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-4dd9",
                        "path": "Displays/Overrides/DisplayVendorID-4dd9"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-5a63",
                        "path": "Displays/Overrides/DisplayVendorID-5a63"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-5b4",
                        "path": "Displays/Overrides/DisplayVendorID-5b4"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-610",
                        "path": "Displays/Overrides/DisplayVendorID-610"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-756e6b6e",
                        "path": "Displays/Overrides/DisplayVendorID-756e6b6e"
                    },
                    {
                        "value": 0,
                        "name": "DisplayVendorID-daf",
                        "path": "Displays/Overrides/DisplayVendorID-daf"
                    }
                ]
            }
        ]
    },
    {
        "value": 16,
        "name": "DTDs",
        "path": "DTDs"
    },
    {
        "value": 400116,
        "name": "Extensions",
        "path": "Extensions",
        "children": [
            {
                "value": 0,
                "name": "10.5",
                "path": "Extensions/10.5"
            },
            {
                "value": 0,
                "name": "10.6",
                "path": "Extensions/10.6"
            },
            {
                "value": 116,
                "name": "Accusys6xxxx.kext",
                "path": "Extensions/Accusys6xxxx.kext",
                "children": [
                    {
                        "value": 116,
                        "name": "Contents",
                        "path": "Extensions/Accusys6xxxx.kext/Contents"
                    }
                ]
            },
            {
                "value": 1236,
                "name": "acfs.kext",
                "path": "Extensions/acfs.kext",
                "children": [
                    {
                        "value": 1236,
                        "name": "Contents",
                        "path": "Extensions/acfs.kext/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "acfsctl.kext",
                "path": "Extensions/acfsctl.kext",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Extensions/acfsctl.kext/Contents"
                    }
                ]
            },
            {
                "value": 196,
                "name": "ALF.kext",
                "path": "Extensions/ALF.kext",
                "children": [
                    {
                        "value": 196,
                        "name": "Contents",
                        "path": "Extensions/ALF.kext/Contents"
                    }
                ]
            },
            {
                "value": 1836,
                "name": "AMD2400Controller.kext",
                "path": "Extensions/AMD2400Controller.kext",
                "children": [
                    {
                        "value": 1836,
                        "name": "Contents",
                        "path": "Extensions/AMD2400Controller.kext/Contents"
                    }
                ]
            },
            {
                "value": 1840,
                "name": "AMD2600Controller.kext",
                "path": "Extensions/AMD2600Controller.kext",
                "children": [
                    {
                        "value": 1840,
                        "name": "Contents",
                        "path": "Extensions/AMD2600Controller.kext/Contents"
                    }
                ]
            },
            {
                "value": 1848,
                "name": "AMD3800Controller.kext",
                "path": "Extensions/AMD3800Controller.kext",
                "children": [
                    {
                        "value": 1848,
                        "name": "Contents",
                        "path": "Extensions/AMD3800Controller.kext/Contents"
                    }
                ]
            },
            {
                "value": 1828,
                "name": "AMD4600Controller.kext",
                "path": "Extensions/AMD4600Controller.kext",
                "children": [
                    {
                        "value": 1828,
                        "name": "Contents",
                        "path": "Extensions/AMD4600Controller.kext/Contents"
                    }
                ]
            },
            {
                "value": 1820,
                "name": "AMD4800Controller.kext",
                "path": "Extensions/AMD4800Controller.kext",
                "children": [
                    {
                        "value": 1820,
                        "name": "Contents",
                        "path": "Extensions/AMD4800Controller.kext/Contents"
                    }
                ]
            },
            {
                "value": 2268,
                "name": "AMD5000Controller.kext",
                "path": "Extensions/AMD5000Controller.kext",
                "children": [
                    {
                        "value": 2268,
                        "name": "Contents",
                        "path": "Extensions/AMD5000Controller.kext/Contents"
                    }
                ]
            },
            {
                "value": 2292,
                "name": "AMD6000Controller.kext",
                "path": "Extensions/AMD6000Controller.kext",
                "children": [
                    {
                        "value": 2292,
                        "name": "Contents",
                        "path": "Extensions/AMD6000Controller.kext/Contents"
                    }
                ]
            },
            {
                "value": 2316,
                "name": "AMD7000Controller.kext",
                "path": "Extensions/AMD7000Controller.kext",
                "children": [
                    {
                        "value": 2316,
                        "name": "Contents",
                        "path": "Extensions/AMD7000Controller.kext/Contents"
                    }
                ]
            },
            {
                "value": 164,
                "name": "AMDFramebuffer.kext",
                "path": "Extensions/AMDFramebuffer.kext",
                "children": [
                    {
                        "value": 164,
                        "name": "Contents",
                        "path": "Extensions/AMDFramebuffer.kext/Contents"
                    }
                ]
            },
            {
                "value": 1572,
                "name": "AMDRadeonVADriver.bundle",
                "path": "Extensions/AMDRadeonVADriver.bundle",
                "children": [
                    {
                        "value": 1572,
                        "name": "Contents",
                        "path": "Extensions/AMDRadeonVADriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 4756,
                "name": "AMDRadeonX3000.kext",
                "path": "Extensions/AMDRadeonX3000.kext",
                "children": [
                    {
                        "value": 4756,
                        "name": "Contents",
                        "path": "Extensions/AMDRadeonX3000.kext/Contents"
                    }
                ]
            },
            {
                "value": 11224,
                "name": "AMDRadeonX3000GLDriver.bundle",
                "path": "Extensions/AMDRadeonX3000GLDriver.bundle",
                "children": [
                    {
                        "value": 11224,
                        "name": "Contents",
                        "path": "Extensions/AMDRadeonX3000GLDriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 4532,
                "name": "AMDRadeonX4000.kext",
                "path": "Extensions/AMDRadeonX4000.kext",
                "children": [
                    {
                        "value": 4532,
                        "name": "Contents",
                        "path": "Extensions/AMDRadeonX4000.kext/Contents"
                    }
                ]
            },
            {
                "value": 17144,
                "name": "AMDRadeonX4000GLDriver.bundle",
                "path": "Extensions/AMDRadeonX4000GLDriver.bundle",
                "children": [
                    {
                        "value": 17144,
                        "name": "Contents",
                        "path": "Extensions/AMDRadeonX4000GLDriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 544,
                "name": "AMDSupport.kext",
                "path": "Extensions/AMDSupport.kext",
                "children": [
                    {
                        "value": 544,
                        "name": "Contents",
                        "path": "Extensions/AMDSupport.kext/Contents"
                    }
                ]
            },
            {
                "value": 148,
                "name": "Apple16X50Serial.kext",
                "path": "Extensions/Apple16X50Serial.kext",
                "children": [
                    {
                        "value": 148,
                        "name": "Contents",
                        "path": "Extensions/Apple16X50Serial.kext/Contents"
                    }
                ]
            },
            {
                "value": 60,
                "name": "Apple_iSight.kext",
                "path": "Extensions/Apple_iSight.kext",
                "children": [
                    {
                        "value": 60,
                        "name": "Contents",
                        "path": "Extensions/Apple_iSight.kext/Contents"
                    }
                ]
            },
            {
                "value": 596,
                "name": "AppleACPIPlatform.kext",
                "path": "Extensions/AppleACPIPlatform.kext",
                "children": [
                    {
                        "value": 596,
                        "name": "Contents",
                        "path": "Extensions/AppleACPIPlatform.kext/Contents"
                    }
                ]
            },
            {
                "value": 208,
                "name": "AppleAHCIPort.kext",
                "path": "Extensions/AppleAHCIPort.kext",
                "children": [
                    {
                        "value": 208,
                        "name": "Contents",
                        "path": "Extensions/AppleAHCIPort.kext/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "AppleAPIC.kext",
                "path": "Extensions/AppleAPIC.kext",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Extensions/AppleAPIC.kext/Contents"
                    }
                ]
            },
            {
                "value": 84,
                "name": "AppleBacklight.kext",
                "path": "Extensions/AppleBacklight.kext",
                "children": [
                    {
                        "value": 84,
                        "name": "Contents",
                        "path": "Extensions/AppleBacklight.kext/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "AppleBacklightExpert.kext",
                "path": "Extensions/AppleBacklightExpert.kext",
                "children": [
                    {
                        "value": 4,
                        "name": "_CodeSignature",
                        "path": "Extensions/AppleBacklightExpert.kext/_CodeSignature"
                    }
                ]
            },
            {
                "value": 180,
                "name": "AppleBluetoothMultitouch.kext",
                "path": "Extensions/AppleBluetoothMultitouch.kext",
                "children": [
                    {
                        "value": 180,
                        "name": "Contents",
                        "path": "Extensions/AppleBluetoothMultitouch.kext/Contents"
                    }
                ]
            },
            {
                "value": 80,
                "name": "AppleBMC.kext",
                "path": "Extensions/AppleBMC.kext",
                "children": [
                    {
                        "value": 80,
                        "name": "Contents",
                        "path": "Extensions/AppleBMC.kext/Contents"
                    }
                ]
            },
            {
                "value": 152,
                "name": "AppleCameraInterface.kext",
                "path": "Extensions/AppleCameraInterface.kext",
                "children": [
                    {
                        "value": 152,
                        "name": "Contents",
                        "path": "Extensions/AppleCameraInterface.kext/Contents"
                    }
                ]
            },
            {
                "value": 152,
                "name": "AppleEFIRuntime.kext",
                "path": "Extensions/AppleEFIRuntime.kext",
                "children": [
                    {
                        "value": 152,
                        "name": "Contents",
                        "path": "Extensions/AppleEFIRuntime.kext/Contents"
                    }
                ]
            },
            {
                "value": 88,
                "name": "AppleFDEKeyStore.kext",
                "path": "Extensions/AppleFDEKeyStore.kext",
                "children": [
                    {
                        "value": 88,
                        "name": "Contents",
                        "path": "Extensions/AppleFDEKeyStore.kext/Contents"
                    }
                ]
            },
            {
                "value": 48,
                "name": "AppleFileSystemDriver.kext",
                "path": "Extensions/AppleFileSystemDriver.kext",
                "children": [
                    {
                        "value": 48,
                        "name": "Contents",
                        "path": "Extensions/AppleFileSystemDriver.kext/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "AppleFSCompressionTypeDataless.kext",
                "path": "Extensions/AppleFSCompressionTypeDataless.kext",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Extensions/AppleFSCompressionTypeDataless.kext/Contents"
                    }
                ]
            },
            {
                "value": 60,
                "name": "AppleFSCompressionTypeZlib.kext",
                "path": "Extensions/AppleFSCompressionTypeZlib.kext",
                "children": [
                    {
                        "value": 60,
                        "name": "Contents",
                        "path": "Extensions/AppleFSCompressionTypeZlib.kext/Contents"
                    }
                ]
            },
            {
                "value": 628,
                "name": "AppleFWAudio.kext",
                "path": "Extensions/AppleFWAudio.kext",
                "children": [
                    {
                        "value": 628,
                        "name": "Contents",
                        "path": "Extensions/AppleFWAudio.kext/Contents"
                    }
                ]
            },
            {
                "value": 396,
                "name": "AppleGraphicsControl.kext",
                "path": "Extensions/AppleGraphicsControl.kext",
                "children": [
                    {
                        "value": 396,
                        "name": "Contents",
                        "path": "Extensions/AppleGraphicsControl.kext/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "AppleGraphicsPowerManagement.kext",
                "path": "Extensions/AppleGraphicsPowerManagement.kext",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Extensions/AppleGraphicsPowerManagement.kext/Contents"
                    }
                ]
            },
            {
                "value": 3112,
                "name": "AppleHDA.kext",
                "path": "Extensions/AppleHDA.kext",
                "children": [
                    {
                        "value": 3112,
                        "name": "Contents",
                        "path": "Extensions/AppleHDA.kext/Contents"
                    }
                ]
            },
            {
                "value": 488,
                "name": "AppleHIDKeyboard.kext",
                "path": "Extensions/AppleHIDKeyboard.kext",
                "children": [
                    {
                        "value": 488,
                        "name": "Contents",
                        "path": "Extensions/AppleHIDKeyboard.kext/Contents"
                    }
                ]
            },
            {
                "value": 184,
                "name": "AppleHIDMouse.kext",
                "path": "Extensions/AppleHIDMouse.kext",
                "children": [
                    {
                        "value": 184,
                        "name": "Contents",
                        "path": "Extensions/AppleHIDMouse.kext/Contents"
                    }
                ]
            },
            {
                "value": 52,
                "name": "AppleHPET.kext",
                "path": "Extensions/AppleHPET.kext",
                "children": [
                    {
                        "value": 52,
                        "name": "Contents",
                        "path": "Extensions/AppleHPET.kext/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "AppleHSSPIHIDDriver.kext",
                "path": "Extensions/AppleHSSPIHIDDriver.kext",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Extensions/AppleHSSPIHIDDriver.kext/Contents"
                    }
                ]
            },
            {
                "value": 144,
                "name": "AppleHSSPISupport.kext",
                "path": "Extensions/AppleHSSPISupport.kext",
                "children": [
                    {
                        "value": 144,
                        "name": "Contents",
                        "path": "Extensions/AppleHSSPISupport.kext/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "AppleHWAccess.kext",
                "path": "Extensions/AppleHWAccess.kext",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Extensions/AppleHWAccess.kext/Contents"
                    }
                ]
            },
            {
                "value": 72,
                "name": "AppleHWSensor.kext",
                "path": "Extensions/AppleHWSensor.kext",
                "children": [
                    {
                        "value": 72,
                        "name": "Contents",
                        "path": "Extensions/AppleHWSensor.kext/Contents"
                    }
                ]
            },
            {
                "value": 244,
                "name": "AppleIntelCPUPowerManagement.kext",
                "path": "Extensions/AppleIntelCPUPowerManagement.kext",
                "children": [
                    {
                        "value": 244,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelCPUPowerManagement.kext/Contents"
                    }
                ]
            },
            {
                "value": 52,
                "name": "AppleIntelCPUPowerManagementClient.kext",
                "path": "Extensions/AppleIntelCPUPowerManagementClient.kext",
                "children": [
                    {
                        "value": 52,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelCPUPowerManagementClient.kext/Contents"
                    }
                ]
            },
            {
                "value": 480,
                "name": "AppleIntelFramebufferAzul.kext",
                "path": "Extensions/AppleIntelFramebufferAzul.kext",
                "children": [
                    {
                        "value": 480,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelFramebufferAzul.kext/Contents"
                    }
                ]
            },
            {
                "value": 492,
                "name": "AppleIntelFramebufferCapri.kext",
                "path": "Extensions/AppleIntelFramebufferCapri.kext",
                "children": [
                    {
                        "value": 492,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelFramebufferCapri.kext/Contents"
                    }
                ]
            },
            {
                "value": 604,
                "name": "AppleIntelHD3000Graphics.kext",
                "path": "Extensions/AppleIntelHD3000Graphics.kext",
                "children": [
                    {
                        "value": 604,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHD3000Graphics.kext/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "AppleIntelHD3000GraphicsGA.plugin",
                "path": "Extensions/AppleIntelHD3000GraphicsGA.plugin",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHD3000GraphicsGA.plugin/Contents"
                    }
                ]
            },
            {
                "value": 9164,
                "name": "AppleIntelHD3000GraphicsGLDriver.bundle",
                "path": "Extensions/AppleIntelHD3000GraphicsGLDriver.bundle",
                "children": [
                    {
                        "value": 9164,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHD3000GraphicsGLDriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 2520,
                "name": "AppleIntelHD3000GraphicsVADriver.bundle",
                "path": "Extensions/AppleIntelHD3000GraphicsVADriver.bundle",
                "children": [
                    {
                        "value": 2520,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHD3000GraphicsVADriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 536,
                "name": "AppleIntelHD4000Graphics.kext",
                "path": "Extensions/AppleIntelHD4000Graphics.kext",
                "children": [
                    {
                        "value": 536,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHD4000Graphics.kext/Contents"
                    }
                ]
            },
            {
                "value": 22996,
                "name": "AppleIntelHD4000GraphicsGLDriver.bundle",
                "path": "Extensions/AppleIntelHD4000GraphicsGLDriver.bundle",
                "children": [
                    {
                        "value": 22996,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHD4000GraphicsGLDriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 3608,
                "name": "AppleIntelHD4000GraphicsVADriver.bundle",
                "path": "Extensions/AppleIntelHD4000GraphicsVADriver.bundle",
                "children": [
                    {
                        "value": 3608,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHD4000GraphicsVADriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 564,
                "name": "AppleIntelHD5000Graphics.kext",
                "path": "Extensions/AppleIntelHD5000Graphics.kext",
                "children": [
                    {
                        "value": 564,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHD5000Graphics.kext/Contents"
                    }
                ]
            },
            {
                "value": 20692,
                "name": "AppleIntelHD5000GraphicsGLDriver.bundle",
                "path": "Extensions/AppleIntelHD5000GraphicsGLDriver.bundle",
                "children": [
                    {
                        "value": 20692,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHD5000GraphicsGLDriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 6120,
                "name": "AppleIntelHD5000GraphicsVADriver.bundle",
                "path": "Extensions/AppleIntelHD5000GraphicsVADriver.bundle",
                "children": [
                    {
                        "value": 6120,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHD5000GraphicsVADriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 976,
                "name": "AppleIntelHDGraphics.kext",
                "path": "Extensions/AppleIntelHDGraphics.kext",
                "children": [
                    {
                        "value": 976,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHDGraphics.kext/Contents"
                    }
                ]
            },
            {
                "value": 148,
                "name": "AppleIntelHDGraphicsFB.kext",
                "path": "Extensions/AppleIntelHDGraphicsFB.kext",
                "children": [
                    {
                        "value": 148,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHDGraphicsFB.kext/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "AppleIntelHDGraphicsGA.plugin",
                "path": "Extensions/AppleIntelHDGraphicsGA.plugin",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHDGraphicsGA.plugin/Contents"
                    }
                ]
            },
            {
                "value": 9108,
                "name": "AppleIntelHDGraphicsGLDriver.bundle",
                "path": "Extensions/AppleIntelHDGraphicsGLDriver.bundle",
                "children": [
                    {
                        "value": 9108,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHDGraphicsGLDriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 104,
                "name": "AppleIntelHDGraphicsVADriver.bundle",
                "path": "Extensions/AppleIntelHDGraphicsVADriver.bundle",
                "children": [
                    {
                        "value": 104,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHDGraphicsVADriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 96,
                "name": "AppleIntelHSWVA.bundle",
                "path": "Extensions/AppleIntelHSWVA.bundle",
                "children": [
                    {
                        "value": 96,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelHSWVA.bundle/Contents"
                    }
                ]
            },
            {
                "value": 96,
                "name": "AppleIntelIVBVA.bundle",
                "path": "Extensions/AppleIntelIVBVA.bundle",
                "children": [
                    {
                        "value": 96,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelIVBVA.bundle/Contents"
                    }
                ]
            },
            {
                "value": 72,
                "name": "AppleIntelLpssDmac.kext",
                "path": "Extensions/AppleIntelLpssDmac.kext",
                "children": [
                    {
                        "value": 72,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelLpssDmac.kext/Contents"
                    }
                ]
            },
            {
                "value": 76,
                "name": "AppleIntelLpssGspi.kext",
                "path": "Extensions/AppleIntelLpssGspi.kext",
                "children": [
                    {
                        "value": 76,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelLpssGspi.kext/Contents"
                    }
                ]
            },
            {
                "value": 132,
                "name": "AppleIntelLpssSpiController.kext",
                "path": "Extensions/AppleIntelLpssSpiController.kext",
                "children": [
                    {
                        "value": 132,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelLpssSpiController.kext/Contents"
                    }
                ]
            },
            {
                "value": 308,
                "name": "AppleIntelSNBGraphicsFB.kext",
                "path": "Extensions/AppleIntelSNBGraphicsFB.kext",
                "children": [
                    {
                        "value": 308,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelSNBGraphicsFB.kext/Contents"
                    }
                ]
            },
            {
                "value": 144,
                "name": "AppleIntelSNBVA.bundle",
                "path": "Extensions/AppleIntelSNBVA.bundle",
                "children": [
                    {
                        "value": 144,
                        "name": "Contents",
                        "path": "Extensions/AppleIntelSNBVA.bundle/Contents"
                    }
                ]
            },
            {
                "value": 72,
                "name": "AppleIRController.kext",
                "path": "Extensions/AppleIRController.kext",
                "children": [
                    {
                        "value": 72,
                        "name": "Contents",
                        "path": "Extensions/AppleIRController.kext/Contents"
                    }
                ]
            },
            {
                "value": 208,
                "name": "AppleKextExcludeList.kext",
                "path": "Extensions/AppleKextExcludeList.kext",
                "children": [
                    {
                        "value": 208,
                        "name": "Contents",
                        "path": "Extensions/AppleKextExcludeList.kext/Contents"
                    }
                ]
            },
            {
                "value": 120,
                "name": "AppleKeyStore.kext",
                "path": "Extensions/AppleKeyStore.kext",
                "children": [
                    {
                        "value": 120,
                        "name": "Contents",
                        "path": "Extensions/AppleKeyStore.kext/Contents"
                    }
                ]
            },
            {
                "value": 48,
                "name": "AppleKeyswitch.kext",
                "path": "Extensions/AppleKeyswitch.kext",
                "children": [
                    {
                        "value": 48,
                        "name": "Contents",
                        "path": "Extensions/AppleKeyswitch.kext/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "AppleLPC.kext",
                "path": "Extensions/AppleLPC.kext",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Extensions/AppleLPC.kext/Contents"
                    }
                ]
            },
            {
                "value": 188,
                "name": "AppleLSIFusionMPT.kext",
                "path": "Extensions/AppleLSIFusionMPT.kext",
                "children": [
                    {
                        "value": 188,
                        "name": "Contents",
                        "path": "Extensions/AppleLSIFusionMPT.kext/Contents"
                    }
                ]
            },
            {
                "value": 36,
                "name": "AppleMatch.kext",
                "path": "Extensions/AppleMatch.kext",
                "children": [
                    {
                        "value": 36,
                        "name": "Contents",
                        "path": "Extensions/AppleMatch.kext/Contents"
                    }
                ]
            },
            {
                "value": 140,
                "name": "AppleMCCSControl.kext",
                "path": "Extensions/AppleMCCSControl.kext",
                "children": [
                    {
                        "value": 140,
                        "name": "Contents",
                        "path": "Extensions/AppleMCCSControl.kext/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "AppleMCEDriver.kext",
                "path": "Extensions/AppleMCEDriver.kext",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Extensions/AppleMCEDriver.kext/Contents"
                    }
                ]
            },
            {
                "value": 76,
                "name": "AppleMCP89RootPortPM.kext",
                "path": "Extensions/AppleMCP89RootPortPM.kext",
                "children": [
                    {
                        "value": 76,
                        "name": "Contents",
                        "path": "Extensions/AppleMCP89RootPortPM.kext/Contents"
                    }
                ]
            },
            {
                "value": 156,
                "name": "AppleMIDIFWDriver.plugin",
                "path": "Extensions/AppleMIDIFWDriver.plugin",
                "children": [
                    {
                        "value": 156,
                        "name": "Contents",
                        "path": "Extensions/AppleMIDIFWDriver.plugin/Contents"
                    }
                ]
            },
            {
                "value": 236,
                "name": "AppleMIDIIACDriver.plugin",
                "path": "Extensions/AppleMIDIIACDriver.plugin",
                "children": [
                    {
                        "value": 236,
                        "name": "Contents",
                        "path": "Extensions/AppleMIDIIACDriver.plugin/Contents"
                    }
                ]
            },
            {
                "value": 416,
                "name": "AppleMIDIRTPDriver.plugin",
                "path": "Extensions/AppleMIDIRTPDriver.plugin",
                "children": [
                    {
                        "value": 416,
                        "name": "Contents",
                        "path": "Extensions/AppleMIDIRTPDriver.plugin/Contents"
                    }
                ]
            },
            {
                "value": 248,
                "name": "AppleMIDIUSBDriver.plugin",
                "path": "Extensions/AppleMIDIUSBDriver.plugin",
                "children": [
                    {
                        "value": 248,
                        "name": "Contents",
                        "path": "Extensions/AppleMIDIUSBDriver.plugin/Contents"
                    }
                ]
            },
            {
                "value": 68,
                "name": "AppleMikeyHIDDriver.kext",
                "path": "Extensions/AppleMikeyHIDDriver.kext",
                "children": [
                    {
                        "value": 68,
                        "name": "Contents",
                        "path": "Extensions/AppleMikeyHIDDriver.kext/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "AppleMobileDevice.kext",
                "path": "Extensions/AppleMobileDevice.kext",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "Extensions/AppleMobileDevice.kext/Contents"
                    }
                ]
            },
            {
                "value": 860,
                "name": "AppleMultitouchDriver.kext",
                "path": "Extensions/AppleMultitouchDriver.kext",
                "children": [
                    {
                        "value": 860,
                        "name": "Contents",
                        "path": "Extensions/AppleMultitouchDriver.kext/Contents"
                    }
                ]
            },
            {
                "value": 136,
                "name": "ApplePlatformEnabler.kext",
                "path": "Extensions/ApplePlatformEnabler.kext",
                "children": [
                    {
                        "value": 136,
                        "name": "Contents",
                        "path": "Extensions/ApplePlatformEnabler.kext/Contents"
                    }
                ]
            },
            {
                "value": 240,
                "name": "AppleRAID.kext",
                "path": "Extensions/AppleRAID.kext",
                "children": [
                    {
                        "value": 240,
                        "name": "Contents",
                        "path": "Extensions/AppleRAID.kext/Contents"
                    }
                ]
            },
            {
                "value": 372,
                "name": "AppleRAIDCard.kext",
                "path": "Extensions/AppleRAIDCard.kext",
                "children": [
                    {
                        "value": 372,
                        "name": "Contents",
                        "path": "Extensions/AppleRAIDCard.kext/Contents"
                    }
                ]
            },
            {
                "value": 80,
                "name": "AppleRTC.kext",
                "path": "Extensions/AppleRTC.kext",
                "children": [
                    {
                        "value": 80,
                        "name": "Contents",
                        "path": "Extensions/AppleRTC.kext/Contents"
                    }
                ]
            },
            {
                "value": 148,
                "name": "AppleSDXC.kext",
                "path": "Extensions/AppleSDXC.kext",
                "children": [
                    {
                        "value": 148,
                        "name": "Contents",
                        "path": "Extensions/AppleSDXC.kext/Contents"
                    }
                ]
            },
            {
                "value": 76,
                "name": "AppleSEP.kext",
                "path": "Extensions/AppleSEP.kext",
                "children": [
                    {
                        "value": 76,
                        "name": "Contents",
                        "path": "Extensions/AppleSEP.kext/Contents"
                    }
                ]
            },
            {
                "value": 88,
                "name": "AppleSmartBatteryManager.kext",
                "path": "Extensions/AppleSmartBatteryManager.kext",
                "children": [
                    {
                        "value": 88,
                        "name": "Contents",
                        "path": "Extensions/AppleSmartBatteryManager.kext/Contents"
                    }
                ]
            },
            {
                "value": 60,
                "name": "AppleSMBIOS.kext",
                "path": "Extensions/AppleSMBIOS.kext",
                "children": [
                    {
                        "value": 60,
                        "name": "Contents",
                        "path": "Extensions/AppleSMBIOS.kext/Contents"
                    }
                ]
            },
            {
                "value": 116,
                "name": "AppleSMBusController.kext",
                "path": "Extensions/AppleSMBusController.kext",
                "children": [
                    {
                        "value": 116,
                        "name": "Contents",
                        "path": "Extensions/AppleSMBusController.kext/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "AppleSMBusPCI.kext",
                "path": "Extensions/AppleSMBusPCI.kext",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Extensions/AppleSMBusPCI.kext/Contents"
                    }
                ]
            },
            {
                "value": 120,
                "name": "AppleSMC.kext",
                "path": "Extensions/AppleSMC.kext",
                "children": [
                    {
                        "value": 120,
                        "name": "Contents",
                        "path": "Extensions/AppleSMC.kext/Contents"
                    }
                ]
            },
            {
                "value": 172,
                "name": "AppleSMCLMU.kext",
                "path": "Extensions/AppleSMCLMU.kext",
                "children": [
                    {
                        "value": 172,
                        "name": "Contents",
                        "path": "Extensions/AppleSMCLMU.kext/Contents"
                    }
                ]
            },
            {
                "value": 88,
                "name": "AppleSRP.kext",
                "path": "Extensions/AppleSRP.kext",
                "children": [
                    {
                        "value": 88,
                        "name": "Contents",
                        "path": "Extensions/AppleSRP.kext/Contents"
                    }
                ]
            },
            {
                "value": 1936,
                "name": "AppleStorageDrivers.kext",
                "path": "Extensions/AppleStorageDrivers.kext",
                "children": [
                    {
                        "value": 1936,
                        "name": "Contents",
                        "path": "Extensions/AppleStorageDrivers.kext/Contents"
                    }
                ]
            },
            {
                "value": 264,
                "name": "AppleThunderboltDPAdapters.kext",
                "path": "Extensions/AppleThunderboltDPAdapters.kext",
                "children": [
                    {
                        "value": 264,
                        "name": "Contents",
                        "path": "Extensions/AppleThunderboltDPAdapters.kext/Contents"
                    }
                ]
            },
            {
                "value": 204,
                "name": "AppleThunderboltEDMService.kext",
                "path": "Extensions/AppleThunderboltEDMService.kext",
                "children": [
                    {
                        "value": 204,
                        "name": "Contents",
                        "path": "Extensions/AppleThunderboltEDMService.kext/Contents"
                    }
                ]
            },
            {
                "value": 216,
                "name": "AppleThunderboltIP.kext",
                "path": "Extensions/AppleThunderboltIP.kext",
                "children": [
                    {
                        "value": 216,
                        "name": "Contents",
                        "path": "Extensions/AppleThunderboltIP.kext/Contents"
                    }
                ]
            },
            {
                "value": 168,
                "name": "AppleThunderboltNHI.kext",
                "path": "Extensions/AppleThunderboltNHI.kext",
                "children": [
                    {
                        "value": 168,
                        "name": "Contents",
                        "path": "Extensions/AppleThunderboltNHI.kext/Contents"
                    }
                ]
            },
            {
                "value": 172,
                "name": "AppleThunderboltPCIAdapters.kext",
                "path": "Extensions/AppleThunderboltPCIAdapters.kext",
                "children": [
                    {
                        "value": 172,
                        "name": "Contents",
                        "path": "Extensions/AppleThunderboltPCIAdapters.kext/Contents"
                    }
                ]
            },
            {
                "value": 164,
                "name": "AppleThunderboltUTDM.kext",
                "path": "Extensions/AppleThunderboltUTDM.kext",
                "children": [
                    {
                        "value": 164,
                        "name": "Contents",
                        "path": "Extensions/AppleThunderboltUTDM.kext/Contents"
                    }
                ]
            },
            {
                "value": 188,
                "name": "AppleTopCase.kext",
                "path": "Extensions/AppleTopCase.kext",
                "children": [
                    {
                        "value": 188,
                        "name": "Contents",
                        "path": "Extensions/AppleTopCase.kext/Contents"
                    }
                ]
            },
            {
                "value": 92,
                "name": "AppleTyMCEDriver.kext",
                "path": "Extensions/AppleTyMCEDriver.kext",
                "children": [
                    {
                        "value": 92,
                        "name": "Contents",
                        "path": "Extensions/AppleTyMCEDriver.kext/Contents"
                    }
                ]
            },
            {
                "value": 72,
                "name": "AppleUpstreamUserClient.kext",
                "path": "Extensions/AppleUpstreamUserClient.kext",
                "children": [
                    {
                        "value": 72,
                        "name": "Contents",
                        "path": "Extensions/AppleUpstreamUserClient.kext/Contents"
                    }
                ]
            },
            {
                "value": 408,
                "name": "AppleUSBAudio.kext",
                "path": "Extensions/AppleUSBAudio.kext",
                "children": [
                    {
                        "value": 408,
                        "name": "Contents",
                        "path": "Extensions/AppleUSBAudio.kext/Contents"
                    }
                ]
            },
            {
                "value": 76,
                "name": "AppleUSBDisplays.kext",
                "path": "Extensions/AppleUSBDisplays.kext",
                "children": [
                    {
                        "value": 76,
                        "name": "Contents",
                        "path": "Extensions/AppleUSBDisplays.kext/Contents"
                    }
                ]
            },
            {
                "value": 144,
                "name": "AppleUSBEthernetHost.kext",
                "path": "Extensions/AppleUSBEthernetHost.kext",
                "children": [
                    {
                        "value": 144,
                        "name": "Contents",
                        "path": "Extensions/AppleUSBEthernetHost.kext/Contents"
                    }
                ]
            },
            {
                "value": 160,
                "name": "AppleUSBMultitouch.kext",
                "path": "Extensions/AppleUSBMultitouch.kext",
                "children": [
                    {
                        "value": 160,
                        "name": "Contents",
                        "path": "Extensions/AppleUSBMultitouch.kext/Contents"
                    }
                ]
            },
            {
                "value": 728,
                "name": "AppleUSBTopCase.kext",
                "path": "Extensions/AppleUSBTopCase.kext",
                "children": [
                    {
                        "value": 728,
                        "name": "Contents",
                        "path": "Extensions/AppleUSBTopCase.kext/Contents"
                    }
                ]
            },
            {
                "value": 3576,
                "name": "AppleVADriver.bundle",
                "path": "Extensions/AppleVADriver.bundle",
                "children": [
                    {
                        "value": 3576,
                        "name": "Contents",
                        "path": "Extensions/AppleVADriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 60,
                "name": "AppleWWANAutoEject.kext",
                "path": "Extensions/AppleWWANAutoEject.kext",
                "children": [
                    {
                        "value": 60,
                        "name": "Contents",
                        "path": "Extensions/AppleWWANAutoEject.kext/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "AppleXsanFilter.kext",
                "path": "Extensions/AppleXsanFilter.kext",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Extensions/AppleXsanFilter.kext/Contents"
                    }
                ]
            },
            {
                "value": 2976,
                "name": "ATIRadeonX2000.kext",
                "path": "Extensions/ATIRadeonX2000.kext",
                "children": [
                    {
                        "value": 2976,
                        "name": "Contents",
                        "path": "Extensions/ATIRadeonX2000.kext/Contents"
                    }
                ]
            },
            {
                "value": 88,
                "name": "ATIRadeonX2000GA.plugin",
                "path": "Extensions/ATIRadeonX2000GA.plugin",
                "children": [
                    {
                        "value": 88,
                        "name": "Contents",
                        "path": "Extensions/ATIRadeonX2000GA.plugin/Contents"
                    }
                ]
            },
            {
                "value": 5808,
                "name": "ATIRadeonX2000GLDriver.bundle",
                "path": "Extensions/ATIRadeonX2000GLDriver.bundle",
                "children": [
                    {
                        "value": 5808,
                        "name": "Contents",
                        "path": "Extensions/ATIRadeonX2000GLDriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 396,
                "name": "ATIRadeonX2000VADriver.bundle",
                "path": "Extensions/ATIRadeonX2000VADriver.bundle",
                "children": [
                    {
                        "value": 396,
                        "name": "Contents",
                        "path": "Extensions/ATIRadeonX2000VADriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 496,
                "name": "ATTOCelerityFC.kext",
                "path": "Extensions/ATTOCelerityFC.kext",
                "children": [
                    {
                        "value": 496,
                        "name": "Contents",
                        "path": "Extensions/ATTOCelerityFC.kext/Contents"
                    }
                ]
            },
            {
                "value": 268,
                "name": "ATTOExpressPCI4.kext",
                "path": "Extensions/ATTOExpressPCI4.kext",
                "children": [
                    {
                        "value": 268,
                        "name": "Contents",
                        "path": "Extensions/ATTOExpressPCI4.kext/Contents"
                    }
                ]
            },
            {
                "value": 252,
                "name": "ATTOExpressSASHBA.kext",
                "path": "Extensions/ATTOExpressSASHBA.kext",
                "children": [
                    {
                        "value": 252,
                        "name": "Contents",
                        "path": "Extensions/ATTOExpressSASHBA.kext/Contents"
                    }
                ]
            },
            {
                "value": 388,
                "name": "ATTOExpressSASHBA3.kext",
                "path": "Extensions/ATTOExpressSASHBA3.kext",
                "children": [
                    {
                        "value": 388,
                        "name": "Contents",
                        "path": "Extensions/ATTOExpressSASHBA3.kext/Contents"
                    }
                ]
            },
            {
                "value": 212,
                "name": "ATTOExpressSASRAID.kext",
                "path": "Extensions/ATTOExpressSASRAID.kext",
                "children": [
                    {
                        "value": 212,
                        "name": "Contents",
                        "path": "Extensions/ATTOExpressSASRAID.kext/Contents"
                    }
                ]
            },
            {
                "value": 72,
                "name": "AudioAUUC.kext",
                "path": "Extensions/AudioAUUC.kext",
                "children": [
                    {
                        "value": 4,
                        "name": "_CodeSignature",
                        "path": "Extensions/AudioAUUC.kext/_CodeSignature"
                    }
                ]
            },
            {
                "value": 144,
                "name": "autofs.kext",
                "path": "Extensions/autofs.kext",
                "children": [
                    {
                        "value": 144,
                        "name": "Contents",
                        "path": "Extensions/autofs.kext/Contents"
                    }
                ]
            },
            {
                "value": 80,
                "name": "BootCache.kext",
                "path": "Extensions/BootCache.kext",
                "children": [
                    {
                        "value": 80,
                        "name": "Contents",
                        "path": "Extensions/BootCache.kext/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "cd9660.kext",
                "path": "Extensions/cd9660.kext",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Extensions/cd9660.kext/Contents"
                    }
                ]
            },
            {
                "value": 48,
                "name": "cddafs.kext",
                "path": "Extensions/cddafs.kext",
                "children": [
                    {
                        "value": 48,
                        "name": "Contents",
                        "path": "Extensions/cddafs.kext/Contents"
                    }
                ]
            },
            {
                "value": 432,
                "name": "CellPhoneHelper.kext",
                "path": "Extensions/CellPhoneHelper.kext",
                "children": [
                    {
                        "value": 432,
                        "name": "Contents",
                        "path": "Extensions/CellPhoneHelper.kext/Contents"
                    }
                ]
            },
            {
                "value": 0,
                "name": "ch34xsigned.kext",
                "path": "Extensions/ch34xsigned.kext"
            },
            {
                "value": 308,
                "name": "corecrypto.kext",
                "path": "Extensions/corecrypto.kext",
                "children": [
                    {
                        "value": 308,
                        "name": "Contents",
                        "path": "Extensions/corecrypto.kext/Contents"
                    }
                ]
            },
            {
                "value": 1324,
                "name": "CoreStorage.kext",
                "path": "Extensions/CoreStorage.kext",
                "children": [
                    {
                        "value": 1324,
                        "name": "Contents",
                        "path": "Extensions/CoreStorage.kext/Contents"
                    }
                ]
            },
            {
                "value": 72,
                "name": "DontSteal Mac OS X.kext",
                "path": "Extensions/DontSteal Mac OS X.kext",
                "children": [
                    {
                        "value": 68,
                        "name": "Contents",
                        "path": "Extensions/DontSteal Mac OS X.kext/Contents"
                    }
                ]
            },
            {
                "value": 36,
                "name": "DSACL.ppp",
                "path": "Extensions/DSACL.ppp",
                "children": [
                    {
                        "value": 36,
                        "name": "Contents",
                        "path": "Extensions/DSACL.ppp/Contents"
                    }
                ]
            },
            {
                "value": 40,
                "name": "DSAuth.ppp",
                "path": "Extensions/DSAuth.ppp",
                "children": [
                    {
                        "value": 40,
                        "name": "Contents",
                        "path": "Extensions/DSAuth.ppp/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "DVFamily.bundle",
                "path": "Extensions/DVFamily.bundle",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Extensions/DVFamily.bundle/Contents"
                    }
                ]
            },
            {
                "value": 312,
                "name": "EAP-KRB.ppp",
                "path": "Extensions/EAP-KRB.ppp",
                "children": [
                    {
                        "value": 312,
                        "name": "Contents",
                        "path": "Extensions/EAP-KRB.ppp/Contents"
                    }
                ]
            },
            {
                "value": 792,
                "name": "EAP-RSA.ppp",
                "path": "Extensions/EAP-RSA.ppp",
                "children": [
                    {
                        "value": 792,
                        "name": "Contents",
                        "path": "Extensions/EAP-RSA.ppp/Contents"
                    }
                ]
            },
            {
                "value": 308,
                "name": "EAP-TLS.ppp",
                "path": "Extensions/EAP-TLS.ppp",
                "children": [
                    {
                        "value": 308,
                        "name": "Contents",
                        "path": "Extensions/EAP-TLS.ppp/Contents"
                    }
                ]
            },
            {
                "value": 88,
                "name": "exfat.kext",
                "path": "Extensions/exfat.kext",
                "children": [
                    {
                        "value": 88,
                        "name": "Contents",
                        "path": "Extensions/exfat.kext/Contents"
                    }
                ]
            },
            {
                "value": 776,
                "name": "GeForce.kext",
                "path": "Extensions/GeForce.kext",
                "children": [
                    {
                        "value": 776,
                        "name": "Contents",
                        "path": "Extensions/GeForce.kext/Contents"
                    }
                ]
            },
            {
                "value": 160,
                "name": "GeForceGA.plugin",
                "path": "Extensions/GeForceGA.plugin",
                "children": [
                    {
                        "value": 160,
                        "name": "Contents",
                        "path": "Extensions/GeForceGA.plugin/Contents"
                    }
                ]
            },
            {
                "value": 67212,
                "name": "GeForceGLDriver.bundle",
                "path": "Extensions/GeForceGLDriver.bundle",
                "children": [
                    {
                        "value": 67212,
                        "name": "Contents",
                        "path": "Extensions/GeForceGLDriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 1100,
                "name": "GeForceTesla.kext",
                "path": "Extensions/GeForceTesla.kext",
                "children": [
                    {
                        "value": 1100,
                        "name": "Contents",
                        "path": "Extensions/GeForceTesla.kext/Contents"
                    }
                ]
            },
            {
                "value": 67012,
                "name": "GeForceTeslaGLDriver.bundle",
                "path": "Extensions/GeForceTeslaGLDriver.bundle",
                "children": [
                    {
                        "value": 67012,
                        "name": "Contents",
                        "path": "Extensions/GeForceTeslaGLDriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 1584,
                "name": "GeForceTeslaVADriver.bundle",
                "path": "Extensions/GeForceTeslaVADriver.bundle",
                "children": [
                    {
                        "value": 1584,
                        "name": "Contents",
                        "path": "Extensions/GeForceTeslaVADriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 1476,
                "name": "GeForceVADriver.bundle",
                "path": "Extensions/GeForceVADriver.bundle",
                "children": [
                    {
                        "value": 1476,
                        "name": "Contents",
                        "path": "Extensions/GeForceVADriver.bundle/Contents"
                    }
                ]
            },
            {
                "value": 212,
                "name": "intelhaxm.kext",
                "path": "Extensions/intelhaxm.kext",
                "children": [
                    {
                        "value": 212,
                        "name": "Contents",
                        "path": "Extensions/intelhaxm.kext/Contents"
                    }
                ]
            },
            {
                "value": 10488,
                "name": "IO80211Family.kext",
                "path": "Extensions/IO80211Family.kext",
                "children": [
                    {
                        "value": 10488,
                        "name": "Contents",
                        "path": "Extensions/IO80211Family.kext/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "IOAccelerator2D.plugin",
                "path": "Extensions/IOAccelerator2D.plugin",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Extensions/IOAccelerator2D.plugin/Contents"
                    }
                ]
            },
            {
                "value": 448,
                "name": "IOAcceleratorFamily.kext",
                "path": "Extensions/IOAcceleratorFamily.kext",
                "children": [
                    {
                        "value": 448,
                        "name": "Contents",
                        "path": "Extensions/IOAcceleratorFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 508,
                "name": "IOAcceleratorFamily2.kext",
                "path": "Extensions/IOAcceleratorFamily2.kext",
                "children": [
                    {
                        "value": 508,
                        "name": "Contents",
                        "path": "Extensions/IOAcceleratorFamily2.kext/Contents"
                    }
                ]
            },
            {
                "value": 76,
                "name": "IOACPIFamily.kext",
                "path": "Extensions/IOACPIFamily.kext",
                "children": [
                    {
                        "value": 76,
                        "name": "Contents",
                        "path": "Extensions/IOACPIFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 448,
                "name": "IOAHCIFamily.kext",
                "path": "Extensions/IOAHCIFamily.kext",
                "children": [
                    {
                        "value": 448,
                        "name": "Contents",
                        "path": "Extensions/IOAHCIFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 872,
                "name": "IOATAFamily.kext",
                "path": "Extensions/IOATAFamily.kext",
                "children": [
                    {
                        "value": 872,
                        "name": "Contents",
                        "path": "Extensions/IOATAFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 276,
                "name": "IOAudioFamily.kext",
                "path": "Extensions/IOAudioFamily.kext",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "Extensions/IOAudioFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 692,
                "name": "IOAVBFamily.kext",
                "path": "Extensions/IOAVBFamily.kext",
                "children": [
                    {
                        "value": 692,
                        "name": "Contents",
                        "path": "Extensions/IOAVBFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 4808,
                "name": "IOBDStorageFamily.kext",
                "path": "Extensions/IOBDStorageFamily.kext",
                "children": [
                    {
                        "value": 4808,
                        "name": "Contents",
                        "path": "Extensions/IOBDStorageFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 4460,
                "name": "IOBluetoothFamily.kext",
                "path": "Extensions/IOBluetoothFamily.kext",
                "children": [
                    {
                        "value": 4460,
                        "name": "Contents",
                        "path": "Extensions/IOBluetoothFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 260,
                "name": "IOBluetoothHIDDriver.kext",
                "path": "Extensions/IOBluetoothHIDDriver.kext",
                "children": [
                    {
                        "value": 260,
                        "name": "Contents",
                        "path": "Extensions/IOBluetoothHIDDriver.kext/Contents"
                    }
                ]
            },
            {
                "value": 4816,
                "name": "IOCDStorageFamily.kext",
                "path": "Extensions/IOCDStorageFamily.kext",
                "children": [
                    {
                        "value": 4816,
                        "name": "Contents",
                        "path": "Extensions/IOCDStorageFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 9656,
                "name": "IODVDStorageFamily.kext",
                "path": "Extensions/IODVDStorageFamily.kext",
                "children": [
                    {
                        "value": 9656,
                        "name": "Contents",
                        "path": "Extensions/IODVDStorageFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 288,
                "name": "IOFireWireAVC.kext",
                "path": "Extensions/IOFireWireAVC.kext",
                "children": [
                    {
                        "value": 288,
                        "name": "Contents",
                        "path": "Extensions/IOFireWireAVC.kext/Contents"
                    }
                ]
            },
            {
                "value": 1424,
                "name": "IOFireWireFamily.kext",
                "path": "Extensions/IOFireWireFamily.kext",
                "children": [
                    {
                        "value": 1424,
                        "name": "Contents",
                        "path": "Extensions/IOFireWireFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 236,
                "name": "IOFireWireIP.kext",
                "path": "Extensions/IOFireWireIP.kext",
                "children": [
                    {
                        "value": 236,
                        "name": "Contents",
                        "path": "Extensions/IOFireWireIP.kext/Contents"
                    }
                ]
            },
            {
                "value": 288,
                "name": "IOFireWireSBP2.kext",
                "path": "Extensions/IOFireWireSBP2.kext",
                "children": [
                    {
                        "value": 288,
                        "name": "Contents",
                        "path": "Extensions/IOFireWireSBP2.kext/Contents"
                    }
                ]
            },
            {
                "value": 68,
                "name": "IOFireWireSerialBusProtocolTransport.kext",
                "path": "Extensions/IOFireWireSerialBusProtocolTransport.kext",
                "children": [
                    {
                        "value": 68,
                        "name": "Contents",
                        "path": "Extensions/IOFireWireSerialBusProtocolTransport.kext/Contents"
                    }
                ]
            },
            {
                "value": 320,
                "name": "IOGraphicsFamily.kext",
                "path": "Extensions/IOGraphicsFamily.kext",
                "children": [
                    {
                        "value": 4,
                        "name": "_CodeSignature",
                        "path": "Extensions/IOGraphicsFamily.kext/_CodeSignature"
                    }
                ]
            },
            {
                "value": 804,
                "name": "IOHDIXController.kext",
                "path": "Extensions/IOHDIXController.kext",
                "children": [
                    {
                        "value": 804,
                        "name": "Contents",
                        "path": "Extensions/IOHDIXController.kext/Contents"
                    }
                ]
            },
            {
                "value": 940,
                "name": "IOHIDFamily.kext",
                "path": "Extensions/IOHIDFamily.kext",
                "children": [
                    {
                        "value": 940,
                        "name": "Contents",
                        "path": "Extensions/IOHIDFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 108,
                "name": "IONDRVSupport.kext",
                "path": "Extensions/IONDRVSupport.kext",
                "children": [
                    {
                        "value": 4,
                        "name": "_CodeSignature",
                        "path": "Extensions/IONDRVSupport.kext/_CodeSignature"
                    }
                ]
            },
            {
                "value": 2396,
                "name": "IONetworkingFamily.kext",
                "path": "Extensions/IONetworkingFamily.kext",
                "children": [
                    {
                        "value": 2396,
                        "name": "Contents",
                        "path": "Extensions/IONetworkingFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 228,
                "name": "IOPCIFamily.kext",
                "path": "Extensions/IOPCIFamily.kext",
                "children": [
                    {
                        "value": 4,
                        "name": "_CodeSignature",
                        "path": "Extensions/IOPCIFamily.kext/_CodeSignature"
                    }
                ]
            },
            {
                "value": 1400,
                "name": "IOPlatformPluginFamily.kext",
                "path": "Extensions/IOPlatformPluginFamily.kext",
                "children": [
                    {
                        "value": 1400,
                        "name": "Contents",
                        "path": "Extensions/IOPlatformPluginFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 108,
                "name": "IOReportFamily.kext",
                "path": "Extensions/IOReportFamily.kext",
                "children": [
                    {
                        "value": 108,
                        "name": "Contents",
                        "path": "Extensions/IOReportFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 13020,
                "name": "IOSCSIArchitectureModelFamily.kext",
                "path": "Extensions/IOSCSIArchitectureModelFamily.kext",
                "children": [
                    {
                        "value": 13020,
                        "name": "Contents",
                        "path": "Extensions/IOSCSIArchitectureModelFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 120,
                "name": "IOSCSIParallelFamily.kext",
                "path": "Extensions/IOSCSIParallelFamily.kext",
                "children": [
                    {
                        "value": 120,
                        "name": "Contents",
                        "path": "Extensions/IOSCSIParallelFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 1292,
                "name": "IOSerialFamily.kext",
                "path": "Extensions/IOSerialFamily.kext",
                "children": [
                    {
                        "value": 1292,
                        "name": "Contents",
                        "path": "Extensions/IOSerialFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 52,
                "name": "IOSMBusFamily.kext",
                "path": "Extensions/IOSMBusFamily.kext",
                "children": [
                    {
                        "value": 52,
                        "name": "Contents",
                        "path": "Extensions/IOSMBusFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 2064,
                "name": "IOStorageFamily.kext",
                "path": "Extensions/IOStorageFamily.kext",
                "children": [
                    {
                        "value": 2064,
                        "name": "Contents",
                        "path": "Extensions/IOStorageFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 164,
                "name": "IOStreamFamily.kext",
                "path": "Extensions/IOStreamFamily.kext",
                "children": [
                    {
                        "value": 164,
                        "name": "Contents",
                        "path": "Extensions/IOStreamFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 124,
                "name": "IOSurface.kext",
                "path": "Extensions/IOSurface.kext",
                "children": [
                    {
                        "value": 124,
                        "name": "Contents",
                        "path": "Extensions/IOSurface.kext/Contents"
                    }
                ]
            },
            {
                "value": 1040,
                "name": "IOThunderboltFamily.kext",
                "path": "Extensions/IOThunderboltFamily.kext",
                "children": [
                    {
                        "value": 1040,
                        "name": "Contents",
                        "path": "Extensions/IOThunderboltFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 248,
                "name": "IOTimeSyncFamily.kext",
                "path": "Extensions/IOTimeSyncFamily.kext",
                "children": [
                    {
                        "value": 248,
                        "name": "Contents",
                        "path": "Extensions/IOTimeSyncFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 96,
                "name": "IOUSBAttachedSCSI.kext",
                "path": "Extensions/IOUSBAttachedSCSI.kext",
                "children": [
                    {
                        "value": 96,
                        "name": "Contents",
                        "path": "Extensions/IOUSBAttachedSCSI.kext/Contents"
                    }
                ]
            },
            {
                "value": 4628,
                "name": "IOUSBFamily.kext",
                "path": "Extensions/IOUSBFamily.kext",
                "children": [
                    {
                        "value": 4628,
                        "name": "Contents",
                        "path": "Extensions/IOUSBFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 140,
                "name": "IOUSBMassStorageClass.kext",
                "path": "Extensions/IOUSBMassStorageClass.kext",
                "children": [
                    {
                        "value": 140,
                        "name": "Contents",
                        "path": "Extensions/IOUSBMassStorageClass.kext/Contents"
                    }
                ]
            },
            {
                "value": 100,
                "name": "IOUserEthernet.kext",
                "path": "Extensions/IOUserEthernet.kext",
                "children": [
                    {
                        "value": 100,
                        "name": "Contents",
                        "path": "Extensions/IOUserEthernet.kext/Contents"
                    }
                ]
            },
            {
                "value": 172,
                "name": "IOVideoFamily.kext",
                "path": "Extensions/IOVideoFamily.kext",
                "children": [
                    {
                        "value": 172,
                        "name": "Contents",
                        "path": "Extensions/IOVideoFamily.kext/Contents"
                    }
                ]
            },
            {
                "value": 168,
                "name": "iPodDriver.kext",
                "path": "Extensions/iPodDriver.kext",
                "children": [
                    {
                        "value": 168,
                        "name": "Contents",
                        "path": "Extensions/iPodDriver.kext/Contents"
                    }
                ]
            },
            {
                "value": 108,
                "name": "JMicronATA.kext",
                "path": "Extensions/JMicronATA.kext",
                "children": [
                    {
                        "value": 108,
                        "name": "Contents",
                        "path": "Extensions/JMicronATA.kext/Contents"
                    }
                ]
            },
            {
                "value": 208,
                "name": "L2TP.ppp",
                "path": "Extensions/L2TP.ppp",
                "children": [
                    {
                        "value": 208,
                        "name": "Contents",
                        "path": "Extensions/L2TP.ppp/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "mcxalr.kext",
                "path": "Extensions/mcxalr.kext",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Extensions/mcxalr.kext/Contents"
                    }
                ]
            },
            {
                "value": 92,
                "name": "msdosfs.kext",
                "path": "Extensions/msdosfs.kext",
                "children": [
                    {
                        "value": 92,
                        "name": "Contents",
                        "path": "Extensions/msdosfs.kext/Contents"
                    }
                ]
            },
            {
                "value": 408,
                "name": "ntfs.kext",
                "path": "Extensions/ntfs.kext",
                "children": [
                    {
                        "value": 408,
                        "name": "Contents",
                        "path": "Extensions/ntfs.kext/Contents"
                    }
                ]
            },
            {
                "value": 2128,
                "name": "NVDAGF100Hal.kext",
                "path": "Extensions/NVDAGF100Hal.kext",
                "children": [
                    {
                        "value": 2128,
                        "name": "Contents",
                        "path": "Extensions/NVDAGF100Hal.kext/Contents"
                    }
                ]
            },
            {
                "value": 1952,
                "name": "NVDAGK100Hal.kext",
                "path": "Extensions/NVDAGK100Hal.kext",
                "children": [
                    {
                        "value": 1952,
                        "name": "Contents",
                        "path": "Extensions/NVDAGK100Hal.kext/Contents"
                    }
                ]
            },
            {
                "value": 3104,
                "name": "NVDANV50HalTesla.kext",
                "path": "Extensions/NVDANV50HalTesla.kext",
                "children": [
                    {
                        "value": 3104,
                        "name": "Contents",
                        "path": "Extensions/NVDANV50HalTesla.kext/Contents"
                    }
                ]
            },
            {
                "value": 2524,
                "name": "NVDAResman.kext",
                "path": "Extensions/NVDAResman.kext",
                "children": [
                    {
                        "value": 2524,
                        "name": "Contents",
                        "path": "Extensions/NVDAResman.kext/Contents"
                    }
                ]
            },
            {
                "value": 2540,
                "name": "NVDAResmanTesla.kext",
                "path": "Extensions/NVDAResmanTesla.kext",
                "children": [
                    {
                        "value": 2540,
                        "name": "Contents",
                        "path": "Extensions/NVDAResmanTesla.kext/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "NVDAStartup.kext",
                "path": "Extensions/NVDAStartup.kext",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Extensions/NVDAStartup.kext/Contents"
                    }
                ]
            },
            {
                "value": 104,
                "name": "NVSMU.kext",
                "path": "Extensions/NVSMU.kext",
                "children": [
                    {
                        "value": 104,
                        "name": "Contents",
                        "path": "Extensions/NVSMU.kext/Contents"
                    }
                ]
            },
            {
                "value": 92,
                "name": "OSvKernDSPLib.kext",
                "path": "Extensions/OSvKernDSPLib.kext",
                "children": [
                    {
                        "value": 92,
                        "name": "Contents",
                        "path": "Extensions/OSvKernDSPLib.kext/Contents"
                    }
                ]
            },
            {
                "value": 72,
                "name": "PPP.kext",
                "path": "Extensions/PPP.kext",
                "children": [
                    {
                        "value": 72,
                        "name": "Contents",
                        "path": "Extensions/PPP.kext/Contents"
                    }
                ]
            },
            {
                "value": 120,
                "name": "PPPoE.ppp",
                "path": "Extensions/PPPoE.ppp",
                "children": [
                    {
                        "value": 120,
                        "name": "Contents",
                        "path": "Extensions/PPPoE.ppp/Contents"
                    }
                ]
            },
            {
                "value": 1572,
                "name": "PPPSerial.ppp",
                "path": "Extensions/PPPSerial.ppp",
                "children": [
                    {
                        "value": 1572,
                        "name": "Contents",
                        "path": "Extensions/PPPSerial.ppp/Contents"
                    }
                ]
            },
            {
                "value": 120,
                "name": "PPTP.ppp",
                "path": "Extensions/PPTP.ppp",
                "children": [
                    {
                        "value": 120,
                        "name": "Contents",
                        "path": "Extensions/PPTP.ppp/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "pthread.kext",
                "path": "Extensions/pthread.kext",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "Extensions/pthread.kext/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "Quarantine.kext",
                "path": "Extensions/Quarantine.kext",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Extensions/Quarantine.kext/Contents"
                    }
                ]
            },
            {
                "value": 56,
                "name": "Radius.ppp",
                "path": "Extensions/Radius.ppp",
                "children": [
                    {
                        "value": 56,
                        "name": "Contents",
                        "path": "Extensions/Radius.ppp/Contents"
                    }
                ]
            },
            {
                "value": 52,
                "name": "RemoteVirtualInterface.kext",
                "path": "Extensions/RemoteVirtualInterface.kext",
                "children": [
                    {
                        "value": 52,
                        "name": "Contents",
                        "path": "Extensions/RemoteVirtualInterface.kext/Contents"
                    }
                ]
            },
            {
                "value": 108,
                "name": "Sandbox.kext",
                "path": "Extensions/Sandbox.kext",
                "children": [
                    {
                        "value": 108,
                        "name": "Contents",
                        "path": "Extensions/Sandbox.kext/Contents"
                    }
                ]
            },
            {
                "value": 68,
                "name": "SMARTLib.plugin",
                "path": "Extensions/SMARTLib.plugin",
                "children": [
                    {
                        "value": 68,
                        "name": "Contents",
                        "path": "Extensions/SMARTLib.plugin/Contents"
                    }
                ]
            },
            {
                "value": 376,
                "name": "smbfs.kext",
                "path": "Extensions/smbfs.kext",
                "children": [
                    {
                        "value": 376,
                        "name": "Contents",
                        "path": "Extensions/smbfs.kext/Contents"
                    }
                ]
            },
            {
                "value": 80,
                "name": "SMCMotionSensor.kext",
                "path": "Extensions/SMCMotionSensor.kext",
                "children": [
                    {
                        "value": 80,
                        "name": "Contents",
                        "path": "Extensions/SMCMotionSensor.kext/Contents"
                    }
                ]
            },
            {
                "value": 504,
                "name": "System.kext",
                "path": "Extensions/System.kext",
                "children": [
                    {
                        "value": 20,
                        "name": "_CodeSignature",
                        "path": "Extensions/System.kext/_CodeSignature"
                    },
                    {
                        "value": 476,
                        "name": "PlugIns",
                        "path": "Extensions/System.kext/PlugIns"
                    }
                ]
            },
            {
                "value": 56,
                "name": "TMSafetyNet.kext",
                "path": "Extensions/TMSafetyNet.kext",
                "children": [
                    {
                        "value": 40,
                        "name": "Contents",
                        "path": "Extensions/TMSafetyNet.kext/Contents"
                    },
                    {
                        "value": 16,
                        "name": "Helpers",
                        "path": "Extensions/TMSafetyNet.kext/Helpers"
                    }
                ]
            },
            {
                "value": 40,
                "name": "triggers.kext",
                "path": "Extensions/triggers.kext",
                "children": [
                    {
                        "value": 40,
                        "name": "Contents",
                        "path": "Extensions/triggers.kext/Contents"
                    }
                ]
            },
            {
                "value": 296,
                "name": "udf.kext",
                "path": "Extensions/udf.kext",
                "children": [
                    {
                        "value": 296,
                        "name": "Contents",
                        "path": "Extensions/udf.kext/Contents"
                    }
                ]
            },
            {
                "value": 212,
                "name": "vecLib.kext",
                "path": "Extensions/vecLib.kext",
                "children": [
                    {
                        "value": 212,
                        "name": "Contents",
                        "path": "Extensions/vecLib.kext/Contents"
                    }
                ]
            },
            {
                "value": 176,
                "name": "webcontentfilter.kext",
                "path": "Extensions/webcontentfilter.kext",
                "children": [
                    {
                        "value": 176,
                        "name": "Contents",
                        "path": "Extensions/webcontentfilter.kext/Contents"
                    }
                ]
            },
            {
                "value": 232,
                "name": "webdav_fs.kext",
                "path": "Extensions/webdav_fs.kext",
                "children": [
                    {
                        "value": 232,
                        "name": "Contents",
                        "path": "Extensions/webdav_fs.kext/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 11992,
        "name": "Filesystems",
        "path": "Filesystems",
        "children": [
            {
                "value": 5740,
                "name": "acfs.fs",
                "path": "Filesystems/acfs.fs",
                "children": [
                    {
                        "value": 5644,
                        "name": "Contents",
                        "path": "Filesystems/acfs.fs/Contents"
                    }
                ]
            },
            {
                "value": 636,
                "name": "AppleShare",
                "path": "Filesystems/AppleShare",
                "children": [
                    {
                        "value": 524,
                        "name": "afpfs.kext",
                        "path": "Filesystems/AppleShare/afpfs.kext"
                    },
                    {
                        "value": 88,
                        "name": "asp_tcp.kext",
                        "path": "Filesystems/AppleShare/asp_tcp.kext"
                    },
                    {
                        "value": 16,
                        "name": "check_afp.app",
                        "path": "Filesystems/AppleShare/check_afp.app"
                    }
                ]
            },
            {
                "value": 16,
                "name": "cd9660.fs",
                "path": "Filesystems/cd9660.fs",
                "children": [
                    {
                        "value": 16,
                        "name": "Contents",
                        "path": "Filesystems/cd9660.fs/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "cddafs.fs",
                "path": "Filesystems/cddafs.fs",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "Filesystems/cddafs.fs/Contents"
                    }
                ]
            },
            {
                "value": 76,
                "name": "exfat.fs",
                "path": "Filesystems/exfat.fs",
                "children": [
                    {
                        "value": 72,
                        "name": "Contents",
                        "path": "Filesystems/exfat.fs/Contents"
                    }
                ]
            },
            {
                "value": 36,
                "name": "ftp.fs",
                "path": "Filesystems/ftp.fs",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Filesystems/ftp.fs/Contents"
                    }
                ]
            },
            {
                "value": 3180,
                "name": "hfs.fs",
                "path": "Filesystems/hfs.fs",
                "children": [
                    {
                        "value": 452,
                        "name": "Contents",
                        "path": "Filesystems/hfs.fs/Contents"
                    },
                    {
                        "value": 2724,
                        "name": "Encodings",
                        "path": "Filesystems/hfs.fs/Encodings"
                    }
                ]
            },
            {
                "value": 64,
                "name": "msdos.fs",
                "path": "Filesystems/msdos.fs",
                "children": [
                    {
                        "value": 60,
                        "name": "Contents",
                        "path": "Filesystems/msdos.fs/Contents"
                    }
                ]
            },
            {
                "value": 172,
                "name": "NetFSPlugins",
                "path": "Filesystems/NetFSPlugins",
                "children": [
                    {
                        "value": 44,
                        "name": "afp.bundle",
                        "path": "Filesystems/NetFSPlugins/afp.bundle"
                    },
                    {
                        "value": 20,
                        "name": "ftp.bundle",
                        "path": "Filesystems/NetFSPlugins/ftp.bundle"
                    },
                    {
                        "value": 36,
                        "name": "http.bundle",
                        "path": "Filesystems/NetFSPlugins/http.bundle"
                    },
                    {
                        "value": 16,
                        "name": "nfs.bundle",
                        "path": "Filesystems/NetFSPlugins/nfs.bundle"
                    },
                    {
                        "value": 56,
                        "name": "smb.bundle",
                        "path": "Filesystems/NetFSPlugins/smb.bundle"
                    }
                ]
            },
            {
                "value": 0,
                "name": "nfs.fs",
                "path": "Filesystems/nfs.fs",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Filesystems/nfs.fs/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "ntfs.fs",
                "path": "Filesystems/ntfs.fs",
                "children": [
                    {
                        "value": 20,
                        "name": "Contents",
                        "path": "Filesystems/ntfs.fs/Contents"
                    }
                ]
            },
            {
                "value": 1800,
                "name": "prlufs.fs",
                "path": "Filesystems/prlufs.fs",
                "children": [
                    {
                        "value": 1800,
                        "name": "Support",
                        "path": "Filesystems/prlufs.fs/Support"
                    }
                ]
            },
            {
                "value": 0,
                "name": "smbfs.fs",
                "path": "Filesystems/smbfs.fs",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Filesystems/smbfs.fs/Contents"
                    }
                ]
            },
            {
                "value": 204,
                "name": "udf.fs",
                "path": "Filesystems/udf.fs",
                "children": [
                    {
                        "value": 200,
                        "name": "Contents",
                        "path": "Filesystems/udf.fs/Contents"
                    }
                ]
            },
            {
                "value": 8,
                "name": "webdav.fs",
                "path": "Filesystems/webdav.fs",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Filesystems/webdav.fs/Contents"
                    },
                    {
                        "value": 8,
                        "name": "Support",
                        "path": "Filesystems/webdav.fs/Support"
                    }
                ]
            }
        ]
    },
    {
        "value": 112,
        "name": "Filters",
        "path": "Filters"
    },
    {
        "value": 201212,
        "name": "Fonts",
        "path": "Fonts"
    },
    {
        "value": 647772,
        "name": "Frameworks",
        "path": "Frameworks",
        "children": [
            {
                "value": 9800,
                "name": "Accelerate.framework",
                "path": "Frameworks/Accelerate.framework",
                "children": [
                    {
                        "value": 9788,
                        "name": "Versions",
                        "path": "Frameworks/Accelerate.framework/Versions"
                    }
                ]
            },
            {
                "value": 100,
                "name": "Accounts.framework",
                "path": "Frameworks/Accounts.framework",
                "children": [
                    {
                        "value": 92,
                        "name": "Versions",
                        "path": "Frameworks/Accounts.framework/Versions"
                    }
                ]
            },
            {
                "value": 10144,
                "name": "AddressBook.framework",
                "path": "Frameworks/AddressBook.framework",
                "children": [
                    {
                        "value": 10136,
                        "name": "Versions",
                        "path": "Frameworks/AddressBook.framework/Versions"
                    }
                ]
            },
            {
                "value": 64,
                "name": "AGL.framework",
                "path": "Frameworks/AGL.framework",
                "children": [
                    {
                        "value": 56,
                        "name": "Versions",
                        "path": "Frameworks/AGL.framework/Versions"
                    }
                ]
            },
            {
                "value": 30320,
                "name": "AppKit.framework",
                "path": "Frameworks/AppKit.framework",
                "children": [
                    {
                        "value": 30308,
                        "name": "Versions",
                        "path": "Frameworks/AppKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 12,
                "name": "AppKitScripting.framework",
                "path": "Frameworks/AppKitScripting.framework",
                "children": [
                    {
                        "value": 4,
                        "name": "Versions",
                        "path": "Frameworks/AppKitScripting.framework/Versions"
                    }
                ]
            },
            {
                "value": 632,
                "name": "AppleScriptKit.framework",
                "path": "Frameworks/AppleScriptKit.framework",
                "children": [
                    {
                        "value": 624,
                        "name": "Versions",
                        "path": "Frameworks/AppleScriptKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 104,
                "name": "AppleScriptObjC.framework",
                "path": "Frameworks/AppleScriptObjC.framework",
                "children": [
                    {
                        "value": 96,
                        "name": "Versions",
                        "path": "Frameworks/AppleScriptObjC.framework/Versions"
                    }
                ]
            },
            {
                "value": 324,
                "name": "AppleShareClientCore.framework",
                "path": "Frameworks/AppleShareClientCore.framework",
                "children": [
                    {
                        "value": 316,
                        "name": "Versions",
                        "path": "Frameworks/AppleShareClientCore.framework/Versions"
                    }
                ]
            },
            {
                "value": 77200,
                "name": "ApplicationServices.framework",
                "path": "Frameworks/ApplicationServices.framework",
                "children": [
                    {
                        "value": 77188,
                        "name": "Versions",
                        "path": "Frameworks/ApplicationServices.framework/Versions"
                    }
                ]
            },
            {
                "value": 1792,
                "name": "AudioToolbox.framework",
                "path": "Frameworks/AudioToolbox.framework",
                "children": [
                    {
                        "value": 1716,
                        "name": "Versions",
                        "path": "Frameworks/AudioToolbox.framework/Versions"
                    },
                    {
                        "value": 68,
                        "name": "XPCServices",
                        "path": "Frameworks/AudioToolbox.framework/XPCServices"
                    }
                ]
            },
            {
                "value": 40,
                "name": "AudioUnit.framework",
                "path": "Frameworks/AudioUnit.framework",
                "children": [
                    {
                        "value": 32,
                        "name": "Versions",
                        "path": "Frameworks/AudioUnit.framework/Versions"
                    }
                ]
            },
            {
                "value": 736,
                "name": "AudioVideoBridging.framework",
                "path": "Frameworks/AudioVideoBridging.framework",
                "children": [
                    {
                        "value": 728,
                        "name": "Versions",
                        "path": "Frameworks/AudioVideoBridging.framework/Versions"
                    }
                ]
            },
            {
                "value": 11496,
                "name": "Automator.framework",
                "path": "Frameworks/Automator.framework",
                "children": [
                    {
                        "value": 4,
                        "name": "Frameworks",
                        "path": "Frameworks/Automator.framework/Frameworks"
                    },
                    {
                        "value": 11484,
                        "name": "Versions",
                        "path": "Frameworks/Automator.framework/Versions"
                    }
                ]
            },
            {
                "value": 1648,
                "name": "AVFoundation.framework",
                "path": "Frameworks/AVFoundation.framework",
                "children": [
                    {
                        "value": 1640,
                        "name": "Versions",
                        "path": "Frameworks/AVFoundation.framework/Versions"
                    }
                ]
            },
            {
                "value": 408,
                "name": "AVKit.framework",
                "path": "Frameworks/AVKit.framework",
                "children": [
                    {
                        "value": 400,
                        "name": "Versions",
                        "path": "Frameworks/AVKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 1132,
                "name": "CalendarStore.framework",
                "path": "Frameworks/CalendarStore.framework",
                "children": [
                    {
                        "value": 1124,
                        "name": "Versions",
                        "path": "Frameworks/CalendarStore.framework/Versions"
                    }
                ]
            },
            {
                "value": 25920,
                "name": "Carbon.framework",
                "path": "Frameworks/Carbon.framework",
                "children": [
                    {
                        "value": 25908,
                        "name": "Versions",
                        "path": "Frameworks/Carbon.framework/Versions"
                    }
                ]
            },
            {
                "value": 2000,
                "name": "CFNetwork.framework",
                "path": "Frameworks/CFNetwork.framework",
                "children": [
                    {
                        "value": 1992,
                        "name": "Versions",
                        "path": "Frameworks/CFNetwork.framework/Versions"
                    }
                ]
            },
            {
                "value": 20,
                "name": "Cocoa.framework",
                "path": "Frameworks/Cocoa.framework",
                "children": [
                    {
                        "value": 12,
                        "name": "Versions",
                        "path": "Frameworks/Cocoa.framework/Versions"
                    }
                ]
            },
            {
                "value": 900,
                "name": "Collaboration.framework",
                "path": "Frameworks/Collaboration.framework",
                "children": [
                    {
                        "value": 892,
                        "name": "Versions",
                        "path": "Frameworks/Collaboration.framework/Versions"
                    }
                ]
            },
            {
                "value": 432,
                "name": "CoreAudio.framework",
                "path": "Frameworks/CoreAudio.framework",
                "children": [
                    {
                        "value": 420,
                        "name": "Versions",
                        "path": "Frameworks/CoreAudio.framework/Versions"
                    }
                ]
            },
            {
                "value": 716,
                "name": "CoreAudioKit.framework",
                "path": "Frameworks/CoreAudioKit.framework",
                "children": [
                    {
                        "value": 708,
                        "name": "Versions",
                        "path": "Frameworks/CoreAudioKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 2632,
                "name": "CoreData.framework",
                "path": "Frameworks/CoreData.framework",
                "children": [
                    {
                        "value": 2624,
                        "name": "Versions",
                        "path": "Frameworks/CoreData.framework/Versions"
                    }
                ]
            },
            {
                "value": 2608,
                "name": "CoreFoundation.framework",
                "path": "Frameworks/CoreFoundation.framework",
                "children": [
                    {
                        "value": 2600,
                        "name": "Versions",
                        "path": "Frameworks/CoreFoundation.framework/Versions"
                    }
                ]
            },
            {
                "value": 9152,
                "name": "CoreGraphics.framework",
                "path": "Frameworks/CoreGraphics.framework",
                "children": [
                    {
                        "value": 9144,
                        "name": "Versions",
                        "path": "Frameworks/CoreGraphics.framework/Versions"
                    }
                ]
            },
            {
                "value": 14552,
                "name": "CoreLocation.framework",
                "path": "Frameworks/CoreLocation.framework",
                "children": [
                    {
                        "value": 14540,
                        "name": "Versions",
                        "path": "Frameworks/CoreLocation.framework/Versions"
                    }
                ]
            },
            {
                "value": 452,
                "name": "CoreMedia.framework",
                "path": "Frameworks/CoreMedia.framework",
                "children": [
                    {
                        "value": 440,
                        "name": "Versions",
                        "path": "Frameworks/CoreMedia.framework/Versions"
                    }
                ]
            },
            {
                "value": 2876,
                "name": "CoreMediaIO.framework",
                "path": "Frameworks/CoreMediaIO.framework",
                "children": [
                    {
                        "value": 2864,
                        "name": "Versions",
                        "path": "Frameworks/CoreMediaIO.framework/Versions"
                    }
                ]
            },
            {
                "value": 320,
                "name": "CoreMIDI.framework",
                "path": "Frameworks/CoreMIDI.framework",
                "children": [
                    {
                        "value": 308,
                        "name": "Versions",
                        "path": "Frameworks/CoreMIDI.framework/Versions"
                    }
                ]
            },
            {
                "value": 20,
                "name": "CoreMIDIServer.framework",
                "path": "Frameworks/CoreMIDIServer.framework",
                "children": [
                    {
                        "value": 12,
                        "name": "Versions",
                        "path": "Frameworks/CoreMIDIServer.framework/Versions"
                    }
                ]
            },
            {
                "value": 12024,
                "name": "CoreServices.framework",
                "path": "Frameworks/CoreServices.framework",
                "children": [
                    {
                        "value": 12012,
                        "name": "Versions",
                        "path": "Frameworks/CoreServices.framework/Versions"
                    }
                ]
            },
            {
                "value": 1472,
                "name": "CoreText.framework",
                "path": "Frameworks/CoreText.framework",
                "children": [
                    {
                        "value": 1464,
                        "name": "Versions",
                        "path": "Frameworks/CoreText.framework/Versions"
                    }
                ]
            },
            {
                "value": 204,
                "name": "CoreVideo.framework",
                "path": "Frameworks/CoreVideo.framework",
                "children": [
                    {
                        "value": 196,
                        "name": "Versions",
                        "path": "Frameworks/CoreVideo.framework/Versions"
                    }
                ]
            },
            {
                "value": 520,
                "name": "CoreWiFi.framework",
                "path": "Frameworks/CoreWiFi.framework",
                "children": [
                    {
                        "value": 512,
                        "name": "Versions",
                        "path": "Frameworks/CoreWiFi.framework/Versions"
                    }
                ]
            },
            {
                "value": 536,
                "name": "CoreWLAN.framework",
                "path": "Frameworks/CoreWLAN.framework",
                "children": [
                    {
                        "value": 528,
                        "name": "Versions",
                        "path": "Frameworks/CoreWLAN.framework/Versions"
                    }
                ]
            },
            {
                "value": 88,
                "name": "DirectoryService.framework",
                "path": "Frameworks/DirectoryService.framework",
                "children": [
                    {
                        "value": 80,
                        "name": "Versions",
                        "path": "Frameworks/DirectoryService.framework/Versions"
                    }
                ]
            },
            {
                "value": 1352,
                "name": "DiscRecording.framework",
                "path": "Frameworks/DiscRecording.framework",
                "children": [
                    {
                        "value": 1344,
                        "name": "Versions",
                        "path": "Frameworks/DiscRecording.framework/Versions"
                    }
                ]
            },
            {
                "value": 1384,
                "name": "DiscRecordingUI.framework",
                "path": "Frameworks/DiscRecordingUI.framework",
                "children": [
                    {
                        "value": 1376,
                        "name": "Versions",
                        "path": "Frameworks/DiscRecordingUI.framework/Versions"
                    }
                ]
            },
            {
                "value": 76,
                "name": "DiskArbitration.framework",
                "path": "Frameworks/DiskArbitration.framework",
                "children": [
                    {
                        "value": 68,
                        "name": "Versions",
                        "path": "Frameworks/DiskArbitration.framework/Versions"
                    }
                ]
            },
            {
                "value": 32,
                "name": "DrawSprocket.framework",
                "path": "Frameworks/DrawSprocket.framework",
                "children": [
                    {
                        "value": 24,
                        "name": "Versions",
                        "path": "Frameworks/DrawSprocket.framework/Versions"
                    }
                ]
            },
            {
                "value": 20,
                "name": "DVComponentGlue.framework",
                "path": "Frameworks/DVComponentGlue.framework",
                "children": [
                    {
                        "value": 12,
                        "name": "Versions",
                        "path": "Frameworks/DVComponentGlue.framework/Versions"
                    }
                ]
            },
            {
                "value": 1420,
                "name": "DVDPlayback.framework",
                "path": "Frameworks/DVDPlayback.framework",
                "children": [
                    {
                        "value": 1412,
                        "name": "Versions",
                        "path": "Frameworks/DVDPlayback.framework/Versions"
                    }
                ]
            },
            {
                "value": 232,
                "name": "EventKit.framework",
                "path": "Frameworks/EventKit.framework",
                "children": [
                    {
                        "value": 224,
                        "name": "Versions",
                        "path": "Frameworks/EventKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 32,
                "name": "ExceptionHandling.framework",
                "path": "Frameworks/ExceptionHandling.framework",
                "children": [
                    {
                        "value": 24,
                        "name": "Versions",
                        "path": "Frameworks/ExceptionHandling.framework/Versions"
                    }
                ]
            },
            {
                "value": 32,
                "name": "ForceFeedback.framework",
                "path": "Frameworks/ForceFeedback.framework",
                "children": [
                    {
                        "value": 24,
                        "name": "Versions",
                        "path": "Frameworks/ForceFeedback.framework/Versions"
                    }
                ]
            },
            {
                "value": 4228,
                "name": "Foundation.framework",
                "path": "Frameworks/Foundation.framework",
                "children": [
                    {
                        "value": 4216,
                        "name": "Versions",
                        "path": "Frameworks/Foundation.framework/Versions"
                    }
                ]
            },
            {
                "value": 52,
                "name": "FWAUserLib.framework",
                "path": "Frameworks/FWAUserLib.framework",
                "children": [
                    {
                        "value": 44,
                        "name": "Versions",
                        "path": "Frameworks/FWAUserLib.framework/Versions"
                    }
                ]
            },
            {
                "value": 60,
                "name": "GameController.framework",
                "path": "Frameworks/GameController.framework",
                "children": [
                    {
                        "value": 52,
                        "name": "Versions",
                        "path": "Frameworks/GameController.framework/Versions"
                    }
                ]
            },
            {
                "value": 44244,
                "name": "GameKit.framework",
                "path": "Frameworks/GameKit.framework",
                "children": [
                    {
                        "value": 44236,
                        "name": "Versions",
                        "path": "Frameworks/GameKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 132,
                "name": "GLKit.framework",
                "path": "Frameworks/GLKit.framework",
                "children": [
                    {
                        "value": 124,
                        "name": "Versions",
                        "path": "Frameworks/GLKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 1740,
                "name": "GLUT.framework",
                "path": "Frameworks/GLUT.framework",
                "children": [
                    {
                        "value": 1732,
                        "name": "Versions",
                        "path": "Frameworks/GLUT.framework/Versions"
                    }
                ]
            },
            {
                "value": 280,
                "name": "GSS.framework",
                "path": "Frameworks/GSS.framework",
                "children": [
                    {
                        "value": 272,
                        "name": "Versions",
                        "path": "Frameworks/GSS.framework/Versions"
                    }
                ]
            },
            {
                "value": 236,
                "name": "ICADevices.framework",
                "path": "Frameworks/ICADevices.framework",
                "children": [
                    {
                        "value": 228,
                        "name": "Versions",
                        "path": "Frameworks/ICADevices.framework/Versions"
                    }
                ]
            },
            {
                "value": 392,
                "name": "ImageCaptureCore.framework",
                "path": "Frameworks/ImageCaptureCore.framework",
                "children": [
                    {
                        "value": 384,
                        "name": "Versions",
                        "path": "Frameworks/ImageCaptureCore.framework/Versions"
                    }
                ]
            },
            {
                "value": 4008,
                "name": "ImageIO.framework",
                "path": "Frameworks/ImageIO.framework",
                "children": [
                    {
                        "value": 4000,
                        "name": "Versions",
                        "path": "Frameworks/ImageIO.framework/Versions"
                    }
                ]
            },
            {
                "value": 104,
                "name": "IMServicePlugIn.framework",
                "path": "Frameworks/IMServicePlugIn.framework",
                "children": [
                    {
                        "value": 28,
                        "name": "IMServicePlugInAgent.app",
                        "path": "Frameworks/IMServicePlugIn.framework/IMServicePlugInAgent.app"
                    },
                    {
                        "value": 64,
                        "name": "Versions",
                        "path": "Frameworks/IMServicePlugIn.framework/Versions"
                    }
                ]
            },
            {
                "value": 368,
                "name": "InputMethodKit.framework",
                "path": "Frameworks/InputMethodKit.framework",
                "children": [
                    {
                        "value": 356,
                        "name": "Versions",
                        "path": "Frameworks/InputMethodKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 360,
                "name": "InstallerPlugins.framework",
                "path": "Frameworks/InstallerPlugins.framework",
                "children": [
                    {
                        "value": 352,
                        "name": "Versions",
                        "path": "Frameworks/InstallerPlugins.framework/Versions"
                    }
                ]
            },
            {
                "value": 76,
                "name": "InstantMessage.framework",
                "path": "Frameworks/InstantMessage.framework",
                "children": [
                    {
                        "value": 68,
                        "name": "Versions",
                        "path": "Frameworks/InstantMessage.framework/Versions"
                    }
                ]
            },
            {
                "value": 904,
                "name": "IOBluetooth.framework",
                "path": "Frameworks/IOBluetooth.framework",
                "children": [
                    {
                        "value": 892,
                        "name": "Versions",
                        "path": "Frameworks/IOBluetooth.framework/Versions"
                    }
                ]
            },
            {
                "value": 4592,
                "name": "IOBluetoothUI.framework",
                "path": "Frameworks/IOBluetoothUI.framework",
                "children": [
                    {
                        "value": 4584,
                        "name": "Versions",
                        "path": "Frameworks/IOBluetoothUI.framework/Versions"
                    }
                ]
            },
            {
                "value": 688,
                "name": "IOKit.framework",
                "path": "Frameworks/IOKit.framework",
                "children": [
                    {
                        "value": 680,
                        "name": "Versions",
                        "path": "Frameworks/IOKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 48,
                "name": "IOSurface.framework",
                "path": "Frameworks/IOSurface.framework",
                "children": [
                    {
                        "value": 40,
                        "name": "Versions",
                        "path": "Frameworks/IOSurface.framework/Versions"
                    }
                ]
            },
            {
                "value": 28,
                "name": "JavaFrameEmbedding.framework",
                "path": "Frameworks/JavaFrameEmbedding.framework",
                "children": [
                    {
                        "value": 20,
                        "name": "Versions",
                        "path": "Frameworks/JavaFrameEmbedding.framework/Versions"
                    }
                ]
            },
            {
                "value": 3336,
                "name": "JavaScriptCore.framework",
                "path": "Frameworks/JavaScriptCore.framework",
                "children": [
                    {
                        "value": 3328,
                        "name": "Versions",
                        "path": "Frameworks/JavaScriptCore.framework/Versions"
                    }
                ]
            },
            {
                "value": 2756,
                "name": "JavaVM.framework",
                "path": "Frameworks/JavaVM.framework",
                "children": [
                    {
                        "value": 2728,
                        "name": "Versions",
                        "path": "Frameworks/JavaVM.framework/Versions"
                    }
                ]
            },
            {
                "value": 168,
                "name": "Kerberos.framework",
                "path": "Frameworks/Kerberos.framework",
                "children": [
                    {
                        "value": 160,
                        "name": "Versions",
                        "path": "Frameworks/Kerberos.framework/Versions"
                    }
                ]
            },
            {
                "value": 36,
                "name": "Kernel.framework",
                "path": "Frameworks/Kernel.framework",
                "children": [
                    {
                        "value": 32,
                        "name": "Versions",
                        "path": "Frameworks/Kernel.framework/Versions"
                    }
                ]
            },
            {
                "value": 200,
                "name": "LatentSemanticMapping.framework",
                "path": "Frameworks/LatentSemanticMapping.framework",
                "children": [
                    {
                        "value": 192,
                        "name": "Versions",
                        "path": "Frameworks/LatentSemanticMapping.framework/Versions"
                    }
                ]
            },
            {
                "value": 284,
                "name": "LDAP.framework",
                "path": "Frameworks/LDAP.framework",
                "children": [
                    {
                        "value": 276,
                        "name": "Versions",
                        "path": "Frameworks/LDAP.framework/Versions"
                    }
                ]
            },
            {
                "value": 1872,
                "name": "MapKit.framework",
                "path": "Frameworks/MapKit.framework",
                "children": [
                    {
                        "value": 1864,
                        "name": "Versions",
                        "path": "Frameworks/MapKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 56,
                "name": "MediaAccessibility.framework",
                "path": "Frameworks/MediaAccessibility.framework",
                "children": [
                    {
                        "value": 48,
                        "name": "Versions",
                        "path": "Frameworks/MediaAccessibility.framework/Versions"
                    }
                ]
            },
            {
                "value": 100,
                "name": "MediaLibrary.framework",
                "path": "Frameworks/MediaLibrary.framework",
                "children": [
                    {
                        "value": 88,
                        "name": "Versions",
                        "path": "Frameworks/MediaLibrary.framework/Versions"
                    }
                ]
            },
            {
                "value": 3708,
                "name": "MediaToolbox.framework",
                "path": "Frameworks/MediaToolbox.framework",
                "children": [
                    {
                        "value": 3700,
                        "name": "Versions",
                        "path": "Frameworks/MediaToolbox.framework/Versions"
                    }
                ]
            },
            {
                "value": 16,
                "name": "Message.framework",
                "path": "Frameworks/Message.framework",
                "children": [
                    {
                        "value": 12,
                        "name": "Versions",
                        "path": "Frameworks/Message.framework/Versions"
                    }
                ]
            },
            {
                "value": 64,
                "name": "NetFS.framework",
                "path": "Frameworks/NetFS.framework",
                "children": [
                    {
                        "value": 56,
                        "name": "Versions",
                        "path": "Frameworks/NetFS.framework/Versions"
                    }
                ]
            },
            {
                "value": 192,
                "name": "OpenAL.framework",
                "path": "Frameworks/OpenAL.framework",
                "children": [
                    {
                        "value": 184,
                        "name": "Versions",
                        "path": "Frameworks/OpenAL.framework/Versions"
                    }
                ]
            },
            {
                "value": 78380,
                "name": "OpenCL.framework",
                "path": "Frameworks/OpenCL.framework",
                "children": [
                    {
                        "value": 78368,
                        "name": "Versions",
                        "path": "Frameworks/OpenCL.framework/Versions"
                    }
                ]
            },
            {
                "value": 288,
                "name": "OpenDirectory.framework",
                "path": "Frameworks/OpenDirectory.framework",
                "children": [
                    {
                        "value": 252,
                        "name": "Versions",
                        "path": "Frameworks/OpenDirectory.framework/Versions"
                    }
                ]
            },
            {
                "value": 25628,
                "name": "OpenGL.framework",
                "path": "Frameworks/OpenGL.framework",
                "children": [
                    {
                        "value": 25616,
                        "name": "Versions",
                        "path": "Frameworks/OpenGL.framework/Versions"
                    }
                ]
            },
            {
                "value": 1136,
                "name": "OSAKit.framework",
                "path": "Frameworks/OSAKit.framework",
                "children": [
                    {
                        "value": 1128,
                        "name": "Versions",
                        "path": "Frameworks/OSAKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 88,
                "name": "PCSC.framework",
                "path": "Frameworks/PCSC.framework",
                "children": [
                    {
                        "value": 80,
                        "name": "Versions",
                        "path": "Frameworks/PCSC.framework/Versions"
                    }
                ]
            },
            {
                "value": 192,
                "name": "PreferencePanes.framework",
                "path": "Frameworks/PreferencePanes.framework",
                "children": [
                    {
                        "value": 180,
                        "name": "Versions",
                        "path": "Frameworks/PreferencePanes.framework/Versions"
                    }
                ]
            },
            {
                "value": 1012,
                "name": "PubSub.framework",
                "path": "Frameworks/PubSub.framework",
                "children": [
                    {
                        "value": 1004,
                        "name": "Versions",
                        "path": "Frameworks/PubSub.framework/Versions"
                    }
                ]
            },
            {
                "value": 129696,
                "name": "Python.framework",
                "path": "Frameworks/Python.framework",
                "children": [
                    {
                        "value": 129684,
                        "name": "Versions",
                        "path": "Frameworks/Python.framework/Versions"
                    }
                ]
            },
            {
                "value": 2516,
                "name": "QTKit.framework",
                "path": "Frameworks/QTKit.framework",
                "children": [
                    {
                        "value": 2504,
                        "name": "Versions",
                        "path": "Frameworks/QTKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 23712,
                "name": "Quartz.framework",
                "path": "Frameworks/Quartz.framework",
                "children": [
                    {
                        "value": 23700,
                        "name": "Versions",
                        "path": "Frameworks/Quartz.framework/Versions"
                    }
                ]
            },
            {
                "value": 6644,
                "name": "QuartzCore.framework",
                "path": "Frameworks/QuartzCore.framework",
                "children": [
                    {
                        "value": 6632,
                        "name": "Versions",
                        "path": "Frameworks/QuartzCore.framework/Versions"
                    }
                ]
            },
            {
                "value": 3960,
                "name": "QuickLook.framework",
                "path": "Frameworks/QuickLook.framework",
                "children": [
                    {
                        "value": 3948,
                        "name": "Versions",
                        "path": "Frameworks/QuickLook.framework/Versions"
                    }
                ]
            },
            {
                "value": 3460,
                "name": "QuickTime.framework",
                "path": "Frameworks/QuickTime.framework",
                "children": [
                    {
                        "value": 3452,
                        "name": "Versions",
                        "path": "Frameworks/QuickTime.framework/Versions"
                    }
                ]
            },
            {
                "value": 13168,
                "name": "Ruby.framework",
                "path": "Frameworks/Ruby.framework",
                "children": [
                    {
                        "value": 13160,
                        "name": "Versions",
                        "path": "Frameworks/Ruby.framework/Versions"
                    }
                ]
            },
            {
                "value": 204,
                "name": "RubyCocoa.framework",
                "path": "Frameworks/RubyCocoa.framework",
                "children": [
                    {
                        "value": 196,
                        "name": "Versions",
                        "path": "Frameworks/RubyCocoa.framework/Versions"
                    }
                ]
            },
            {
                "value": 3628,
                "name": "SceneKit.framework",
                "path": "Frameworks/SceneKit.framework",
                "children": [
                    {
                        "value": 3616,
                        "name": "Versions",
                        "path": "Frameworks/SceneKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 1812,
                "name": "ScreenSaver.framework",
                "path": "Frameworks/ScreenSaver.framework",
                "children": [
                    {
                        "value": 1804,
                        "name": "Versions",
                        "path": "Frameworks/ScreenSaver.framework/Versions"
                    }
                ]
            },
            {
                "value": 12,
                "name": "Scripting.framework",
                "path": "Frameworks/Scripting.framework",
                "children": [
                    {
                        "value": 4,
                        "name": "Versions",
                        "path": "Frameworks/Scripting.framework/Versions"
                    }
                ]
            },
            {
                "value": 144,
                "name": "ScriptingBridge.framework",
                "path": "Frameworks/ScriptingBridge.framework",
                "children": [
                    {
                        "value": 136,
                        "name": "Versions",
                        "path": "Frameworks/ScriptingBridge.framework/Versions"
                    }
                ]
            },
            {
                "value": 6224,
                "name": "Security.framework",
                "path": "Frameworks/Security.framework",
                "children": [
                    {
                        "value": 124,
                        "name": "PlugIns",
                        "path": "Frameworks/Security.framework/PlugIns"
                    },
                    {
                        "value": 6088,
                        "name": "Versions",
                        "path": "Frameworks/Security.framework/Versions"
                    }
                ]
            },
            {
                "value": 2076,
                "name": "SecurityFoundation.framework",
                "path": "Frameworks/SecurityFoundation.framework",
                "children": [
                    {
                        "value": 2068,
                        "name": "Versions",
                        "path": "Frameworks/SecurityFoundation.framework/Versions"
                    }
                ]
            },
            {
                "value": 8660,
                "name": "SecurityInterface.framework",
                "path": "Frameworks/SecurityInterface.framework",
                "children": [
                    {
                        "value": 8652,
                        "name": "Versions",
                        "path": "Frameworks/SecurityInterface.framework/Versions"
                    }
                ]
            },
            {
                "value": 88,
                "name": "ServiceManagement.framework",
                "path": "Frameworks/ServiceManagement.framework",
                "children": [
                    {
                        "value": 68,
                        "name": "Versions",
                        "path": "Frameworks/ServiceManagement.framework/Versions"
                    },
                    {
                        "value": 12,
                        "name": "XPCServices",
                        "path": "Frameworks/ServiceManagement.framework/XPCServices"
                    }
                ]
            },
            {
                "value": 1112,
                "name": "Social.framework",
                "path": "Frameworks/Social.framework",
                "children": [
                    {
                        "value": 516,
                        "name": "Versions",
                        "path": "Frameworks/Social.framework/Versions"
                    },
                    {
                        "value": 588,
                        "name": "XPCServices",
                        "path": "Frameworks/Social.framework/XPCServices"
                    }
                ]
            },
            {
                "value": 500,
                "name": "SpriteKit.framework",
                "path": "Frameworks/SpriteKit.framework",
                "children": [
                    {
                        "value": 492,
                        "name": "Versions",
                        "path": "Frameworks/SpriteKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 96,
                "name": "StoreKit.framework",
                "path": "Frameworks/StoreKit.framework",
                "children": [
                    {
                        "value": 88,
                        "name": "Versions",
                        "path": "Frameworks/StoreKit.framework/Versions"
                    }
                ]
            },
            {
                "value": 1608,
                "name": "SyncServices.framework",
                "path": "Frameworks/SyncServices.framework",
                "children": [
                    {
                        "value": 1600,
                        "name": "Versions",
                        "path": "Frameworks/SyncServices.framework/Versions"
                    }
                ]
            },
            {
                "value": 44,
                "name": "System.framework",
                "path": "Frameworks/System.framework",
                "children": [
                    {
                        "value": 36,
                        "name": "Versions",
                        "path": "Frameworks/System.framework/Versions"
                    }
                ]
            },
            {
                "value": 576,
                "name": "SystemConfiguration.framework",
                "path": "Frameworks/SystemConfiguration.framework",
                "children": [
                    {
                        "value": 568,
                        "name": "Versions",
                        "path": "Frameworks/SystemConfiguration.framework/Versions"
                    }
                ]
            },
            {
                "value": 3208,
                "name": "Tcl.framework",
                "path": "Frameworks/Tcl.framework",
                "children": [
                    {
                        "value": 3200,
                        "name": "Versions",
                        "path": "Frameworks/Tcl.framework/Versions"
                    }
                ]
            },
            {
                "value": 3172,
                "name": "Tk.framework",
                "path": "Frameworks/Tk.framework",
                "children": [
                    {
                        "value": 3160,
                        "name": "Versions",
                        "path": "Frameworks/Tk.framework/Versions"
                    }
                ]
            },
            {
                "value": 76,
                "name": "TWAIN.framework",
                "path": "Frameworks/TWAIN.framework",
                "children": [
                    {
                        "value": 68,
                        "name": "Versions",
                        "path": "Frameworks/TWAIN.framework/Versions"
                    }
                ]
            },
            {
                "value": 24,
                "name": "VideoDecodeAcceleration.framework",
                "path": "Frameworks/VideoDecodeAcceleration.framework",
                "children": [
                    {
                        "value": 16,
                        "name": "Versions",
                        "path": "Frameworks/VideoDecodeAcceleration.framework/Versions"
                    }
                ]
            },
            {
                "value": 3648,
                "name": "VideoToolbox.framework",
                "path": "Frameworks/VideoToolbox.framework",
                "children": [
                    {
                        "value": 3636,
                        "name": "Versions",
                        "path": "Frameworks/VideoToolbox.framework/Versions"
                    }
                ]
            },
            {
                "value": 17668,
                "name": "WebKit.framework",
                "path": "Frameworks/WebKit.framework",
                "children": [
                    {
                        "value": 17512,
                        "name": "Versions",
                        "path": "Frameworks/WebKit.framework/Versions"
                    },
                    {
                        "value": 116,
                        "name": "WebKitPluginHost.app",
                        "path": "Frameworks/WebKit.framework/WebKitPluginHost.app"
                    }
                ]
            }
        ]
    },
    {
        "value": 1076,
        "name": "Graphics",
        "path": "Graphics",
        "children": [
            {
                "value": 876,
                "name": "QuartzComposer Patches",
                "path": "Graphics/QuartzComposer Patches",
                "children": [
                    {
                        "value": 148,
                        "name": "Backdrops.plugin",
                        "path": "Graphics/QuartzComposer Patches/Backdrops.plugin"
                    },
                    {
                        "value": 36,
                        "name": "FaceEffects.plugin",
                        "path": "Graphics/QuartzComposer Patches/FaceEffects.plugin"
                    }
                ]
            },
            {
                "value": 200,
                "name": "QuartzComposer Plug-Ins",
                "path": "Graphics/QuartzComposer Plug-Ins",
                "children": [
                    {
                        "value": 200,
                        "name": "WOTD.plugin",
                        "path": "Graphics/QuartzComposer Plug-Ins/WOTD.plugin"
                    }
                ]
            }
        ]
    },
    {
        "value": 0,
        "name": "IdentityServices",
        "path": "IdentityServices",
        "children": [
            {
                "value": 0,
                "name": "ServiceDefinitions",
                "path": "IdentityServices/ServiceDefinitions"
            }
        ]
    },
    {
        "value": 2900,
        "name": "ImageCapture",
        "path": "ImageCapture",
        "children": [
            {
                "value": 200,
                "name": "Automatic Tasks",
                "path": "ImageCapture/Automatic Tasks",
                "children": [
                    {
                        "value": 52,
                        "name": "Build Web Page.app",
                        "path": "ImageCapture/Automatic Tasks/Build Web Page.app"
                    },
                    {
                        "value": 148,
                        "name": "MakePDF.app",
                        "path": "ImageCapture/Automatic Tasks/MakePDF.app"
                    }
                ]
            },
            {
                "value": 480,
                "name": "Devices",
                "path": "ImageCapture/Devices",
                "children": [
                    {
                        "value": 84,
                        "name": "AirScanScanner.app",
                        "path": "ImageCapture/Devices/AirScanScanner.app"
                    },
                    {
                        "value": 44,
                        "name": "MassStorageCamera.app",
                        "path": "ImageCapture/Devices/MassStorageCamera.app"
                    },
                    {
                        "value": 124,
                        "name": "PTPCamera.app",
                        "path": "ImageCapture/Devices/PTPCamera.app"
                    },
                    {
                        "value": 36,
                        "name": "Type4Camera.app",
                        "path": "ImageCapture/Devices/Type4Camera.app"
                    },
                    {
                        "value": 32,
                        "name": "Type5Camera.app",
                        "path": "ImageCapture/Devices/Type5Camera.app"
                    },
                    {
                        "value": 36,
                        "name": "Type8Camera.app",
                        "path": "ImageCapture/Devices/Type8Camera.app"
                    },
                    {
                        "value": 124,
                        "name": "VirtualScanner.app",
                        "path": "ImageCapture/Devices/VirtualScanner.app"
                    }
                ]
            },
            {
                "value": 2212,
                "name": "Support",
                "path": "ImageCapture/Support",
                "children": [
                    {
                        "value": 432,
                        "name": "Application",
                        "path": "ImageCapture/Support/Application"
                    },
                    {
                        "value": 1608,
                        "name": "Icons",
                        "path": "ImageCapture/Support/Icons"
                    },
                    {
                        "value": 172,
                        "name": "Image Capture Extension.app",
                        "path": "ImageCapture/Support/Image Capture Extension.app"
                    },
                    {
                        "value": 3184,
                        "name": "CoreDeploy.bundle",
                        "path": "Java/Support/CoreDeploy.bundle"
                    },
                    {
                        "value": 2732,
                        "name": "Deploy.bundle",
                        "path": "Java/Support/Deploy.bundle"
                    }
                ]
            },
            {
                "value": 8,
                "name": "Tools",
                "path": "ImageCapture/Tools"
            },
            {
                "value": 0,
                "name": "TWAIN Data Sources",
                "path": "ImageCapture/TWAIN Data Sources"
            }
        ]
    },
    {
        "value": 23668,
        "name": "InputMethods",
        "path": "InputMethods",
        "children": [
            {
                "value": 1400,
                "name": "50onPaletteServer.app",
                "path": "InputMethods/50onPaletteServer.app",
                "children": [
                    {
                        "value": 1400,
                        "name": "Contents",
                        "path": "InputMethods/50onPaletteServer.app/Contents"
                    }
                ]
            },
            {
                "value": 5728,
                "name": "CharacterPalette.app",
                "path": "InputMethods/CharacterPalette.app",
                "children": [
                    {
                        "value": 5728,
                        "name": "Contents",
                        "path": "InputMethods/CharacterPalette.app/Contents"
                    }
                ]
            },
            {
                "value": 2476,
                "name": "DictationIM.app",
                "path": "InputMethods/DictationIM.app",
                "children": [
                    {
                        "value": 2476,
                        "name": "Contents",
                        "path": "InputMethods/DictationIM.app/Contents"
                    }
                ]
            },
            {
                "value": 88,
                "name": "InkServer.app",
                "path": "InputMethods/InkServer.app",
                "children": [
                    {
                        "value": 88,
                        "name": "Contents",
                        "path": "InputMethods/InkServer.app/Contents"
                    }
                ]
            },
            {
                "value": 736,
                "name": "KeyboardViewer.app",
                "path": "InputMethods/KeyboardViewer.app",
                "children": [
                    {
                        "value": 736,
                        "name": "Contents",
                        "path": "InputMethods/KeyboardViewer.app/Contents"
                    }
                ]
            },
            {
                "value": 1144,
                "name": "KoreanIM.app",
                "path": "InputMethods/KoreanIM.app",
                "children": [
                    {
                        "value": 1144,
                        "name": "Contents",
                        "path": "InputMethods/KoreanIM.app/Contents"
                    }
                ]
            },
            {
                "value": 2484,
                "name": "Kotoeri.app",
                "path": "InputMethods/Kotoeri.app",
                "children": [
                    {
                        "value": 2484,
                        "name": "Contents",
                        "path": "InputMethods/Kotoeri.app/Contents"
                    }
                ]
            },
            {
                "value": 40,
                "name": "PluginIM.app",
                "path": "InputMethods/PluginIM.app",
                "children": [
                    {
                        "value": 40,
                        "name": "Contents",
                        "path": "InputMethods/PluginIM.app/Contents"
                    }
                ]
            },
            {
                "value": 24,
                "name": "PressAndHold.app",
                "path": "InputMethods/PressAndHold.app",
                "children": [
                    {
                        "value": 24,
                        "name": "Contents",
                        "path": "InputMethods/PressAndHold.app/Contents"
                    }
                ]
            },
            {
                "value": 64,
                "name": "SCIM.app",
                "path": "InputMethods/SCIM.app",
                "children": [
                    {
                        "value": 64,
                        "name": "Contents",
                        "path": "InputMethods/SCIM.app/Contents"
                    }
                ]
            },
            {
                "value": 6916,
                "name": "Switch Control.app",
                "path": "InputMethods/Switch Control.app",
                "children": [
                    {
                        "value": 6916,
                        "name": "Contents",
                        "path": "InputMethods/Switch Control.app/Contents"
                    }
                ]
            },
            {
                "value": 104,
                "name": "TamilIM.app",
                "path": "InputMethods/TamilIM.app",
                "children": [
                    {
                        "value": 104,
                        "name": "Contents",
                        "path": "InputMethods/TamilIM.app/Contents"
                    }
                ]
            },
            {
                "value": 92,
                "name": "TCIM.app",
                "path": "InputMethods/TCIM.app",
                "children": [
                    {
                        "value": 92,
                        "name": "Contents",
                        "path": "InputMethods/TCIM.app/Contents"
                    }
                ]
            },
            {
                "value": 1820,
                "name": "TrackpadIM.app",
                "path": "InputMethods/TrackpadIM.app",
                "children": [
                    {
                        "value": 1820,
                        "name": "Contents",
                        "path": "InputMethods/TrackpadIM.app/Contents"
                    }
                ]
            },
            {
                "value": 552,
                "name": "VietnameseIM.app",
                "path": "InputMethods/VietnameseIM.app",
                "children": [
                    {
                        "value": 552,
                        "name": "Contents",
                        "path": "InputMethods/VietnameseIM.app/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 17668,
        "name": "InternetAccounts",
        "path": "InternetAccounts",
        "children": [
            {
                "value": 336,
                "name": "126.iaplugin",
                "path": "InternetAccounts/126.iaplugin",
                "children": [
                    {
                        "value": 336,
                        "name": "Contents",
                        "path": "InternetAccounts/126.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 332,
                "name": "163.iaplugin",
                "path": "InternetAccounts/163.iaplugin",
                "children": [
                    {
                        "value": 332,
                        "name": "Contents",
                        "path": "InternetAccounts/163.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 48,
                "name": "AddressBook.iaplugin",
                "path": "InternetAccounts/AddressBook.iaplugin",
                "children": [
                    {
                        "value": 48,
                        "name": "Contents",
                        "path": "InternetAccounts/AddressBook.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 304,
                "name": "AOL.iaplugin",
                "path": "InternetAccounts/AOL.iaplugin",
                "children": [
                    {
                        "value": 304,
                        "name": "Contents",
                        "path": "InternetAccounts/AOL.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 44,
                "name": "Calendar.iaplugin",
                "path": "InternetAccounts/Calendar.iaplugin",
                "children": [
                    {
                        "value": 44,
                        "name": "Contents",
                        "path": "InternetAccounts/Calendar.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 784,
                "name": "Exchange.iaplugin",
                "path": "InternetAccounts/Exchange.iaplugin",
                "children": [
                    {
                        "value": 784,
                        "name": "Contents",
                        "path": "InternetAccounts/Exchange.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 996,
                "name": "Facebook.iaplugin",
                "path": "InternetAccounts/Facebook.iaplugin",
                "children": [
                    {
                        "value": 996,
                        "name": "Contents",
                        "path": "InternetAccounts/Facebook.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 596,
                "name": "Flickr.iaplugin",
                "path": "InternetAccounts/Flickr.iaplugin",
                "children": [
                    {
                        "value": 596,
                        "name": "Contents",
                        "path": "InternetAccounts/Flickr.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 384,
                "name": "Google.iaplugin",
                "path": "InternetAccounts/Google.iaplugin",
                "children": [
                    {
                        "value": 384,
                        "name": "Contents",
                        "path": "InternetAccounts/Google.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "iChat.iaplugin",
                "path": "InternetAccounts/iChat.iaplugin",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "InternetAccounts/iChat.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 7436,
                "name": "iCloud.iaplugin",
                "path": "InternetAccounts/iCloud.iaplugin",
                "children": [
                    {
                        "value": 7436,
                        "name": "Contents",
                        "path": "InternetAccounts/iCloud.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 840,
                "name": "LinkedIn.iaplugin",
                "path": "InternetAccounts/LinkedIn.iaplugin",
                "children": [
                    {
                        "value": 840,
                        "name": "Contents",
                        "path": "InternetAccounts/LinkedIn.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 28,
                "name": "Mail.iaplugin",
                "path": "InternetAccounts/Mail.iaplugin",
                "children": [
                    {
                        "value": 28,
                        "name": "Contents",
                        "path": "InternetAccounts/Mail.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "Notes.iaplugin",
                "path": "InternetAccounts/Notes.iaplugin",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "InternetAccounts/Notes.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 416,
                "name": "OSXServer.iaplugin",
                "path": "InternetAccounts/OSXServer.iaplugin",
                "children": [
                    {
                        "value": 416,
                        "name": "Contents",
                        "path": "InternetAccounts/OSXServer.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 376,
                "name": "QQ.iaplugin",
                "path": "InternetAccounts/QQ.iaplugin",
                "children": [
                    {
                        "value": 376,
                        "name": "Contents",
                        "path": "InternetAccounts/QQ.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 32,
                "name": "Reminders.iaplugin",
                "path": "InternetAccounts/Reminders.iaplugin",
                "children": [
                    {
                        "value": 32,
                        "name": "Contents",
                        "path": "InternetAccounts/Reminders.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 1024,
                "name": "SetupPlugins",
                "path": "InternetAccounts/SetupPlugins",
                "children": [
                    {
                        "value": 412,
                        "name": "CalUIAccountSetup.iaplugin",
                        "path": "InternetAccounts/SetupPlugins/CalUIAccountSetup.iaplugin"
                    },
                    {
                        "value": 580,
                        "name": "Contacts.iaplugin",
                        "path": "InternetAccounts/SetupPlugins/Contacts.iaplugin"
                    },
                    {
                        "value": 8,
                        "name": "MailAccountSetup.iaplugin",
                        "path": "InternetAccounts/SetupPlugins/MailAccountSetup.iaplugin"
                    },
                    {
                        "value": 16,
                        "name": "Messages.iaplugin",
                        "path": "InternetAccounts/SetupPlugins/Messages.iaplugin"
                    },
                    {
                        "value": 8,
                        "name": "NotesAccountSetup.iaplugin",
                        "path": "InternetAccounts/SetupPlugins/NotesAccountSetup.iaplugin"
                    }
                ]
            },
            {
                "value": 392,
                "name": "TencentWeibo.iaplugin",
                "path": "InternetAccounts/TencentWeibo.iaplugin",
                "children": [
                    {
                        "value": 392,
                        "name": "Contents",
                        "path": "InternetAccounts/TencentWeibo.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 612,
                "name": "Tudou.iaplugin",
                "path": "InternetAccounts/Tudou.iaplugin",
                "children": [
                    {
                        "value": 612,
                        "name": "Contents",
                        "path": "InternetAccounts/Tudou.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 608,
                "name": "TwitterPlugin.iaplugin",
                "path": "InternetAccounts/TwitterPlugin.iaplugin",
                "children": [
                    {
                        "value": 608,
                        "name": "Contents",
                        "path": "InternetAccounts/TwitterPlugin.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 584,
                "name": "Vimeo.iaplugin",
                "path": "InternetAccounts/Vimeo.iaplugin",
                "children": [
                    {
                        "value": 584,
                        "name": "Contents",
                        "path": "InternetAccounts/Vimeo.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 468,
                "name": "Weibo.iaplugin",
                "path": "InternetAccounts/Weibo.iaplugin",
                "children": [
                    {
                        "value": 468,
                        "name": "Contents",
                        "path": "InternetAccounts/Weibo.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 316,
                "name": "Yahoo.iaplugin",
                "path": "InternetAccounts/Yahoo.iaplugin",
                "children": [
                    {
                        "value": 316,
                        "name": "Contents",
                        "path": "InternetAccounts/Yahoo.iaplugin/Contents"
                    }
                ]
            },
            {
                "value": 648,
                "name": "Youku.iaplugin",
                "path": "InternetAccounts/Youku.iaplugin",
                "children": [
                    {
                        "value": 648,
                        "name": "Contents",
                        "path": "InternetAccounts/Youku.iaplugin/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 68776,
        "name": "Java",
        "path": "Java",
        "children": [
            {
                "value": 8848,
                "name": "Extensions",
                "path": "Java/Extensions"
            },
            {
                "value": 54012,
                "name": "JavaVirtualMachines",
                "path": "Java/JavaVirtualMachines",
                "children": [
                    {
                        "value": 54012,
                        "name": "1.6.0.jdk",
                        "path": "Java/JavaVirtualMachines/1.6.0.jdk"
                    }
                ]
            },
            {
                "value": 5916,
                "name": "Support",
                "path": "Java/Support",
                "children": [
                    {
                        "value": 432,
                        "name": "Application",
                        "path": "ImageCapture/Support/Application"
                    },
                    {
                        "value": 1608,
                        "name": "Icons",
                        "path": "ImageCapture/Support/Icons"
                    },
                    {
                        "value": 172,
                        "name": "Image Capture Extension.app",
                        "path": "ImageCapture/Support/Image Capture Extension.app"
                    },
                    {
                        "value": 3184,
                        "name": "CoreDeploy.bundle",
                        "path": "Java/Support/CoreDeploy.bundle"
                    },
                    {
                        "value": 2732,
                        "name": "Deploy.bundle",
                        "path": "Java/Support/Deploy.bundle"
                    }
                ]
            }
        ]
    },
    {
        "value": 48,
        "name": "KerberosPlugins",
        "path": "KerberosPlugins",
        "children": [
            {
                "value": 48,
                "name": "KerberosFrameworkPlugins",
                "path": "KerberosPlugins/KerberosFrameworkPlugins",
                "children": [
                    {
                        "value": 8,
                        "name": "heimdalodpac.bundle",
                        "path": "KerberosPlugins/KerberosFrameworkPlugins/heimdalodpac.bundle"
                    },
                    {
                        "value": 16,
                        "name": "LKDCLocate.bundle",
                        "path": "KerberosPlugins/KerberosFrameworkPlugins/LKDCLocate.bundle"
                    },
                    {
                        "value": 12,
                        "name": "Reachability.bundle",
                        "path": "KerberosPlugins/KerberosFrameworkPlugins/Reachability.bundle"
                    },
                    {
                        "value": 12,
                        "name": "SCKerberosConfig.bundle",
                        "path": "KerberosPlugins/KerberosFrameworkPlugins/SCKerberosConfig.bundle"
                    }
                ]
            }
        ]
    },
    {
        "value": 276,
        "name": "KeyboardLayouts",
        "path": "KeyboardLayouts",
        "children": [
            {
                "value": 276,
                "name": "AppleKeyboardLayouts.bundle",
                "path": "KeyboardLayouts/AppleKeyboardLayouts.bundle",
                "children": [
                    {
                        "value": 276,
                        "name": "Contents",
                        "path": "KeyboardLayouts/AppleKeyboardLayouts.bundle/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 408,
        "name": "Keychains",
        "path": "Keychains"
    },
    {
        "value": 4,
        "name": "LaunchAgents",
        "path": "LaunchAgents"
    },
    {
        "value": 20,
        "name": "LaunchDaemons",
        "path": "LaunchDaemons"
    },
    {
        "value": 96532,
        "name": "LinguisticData",
        "path": "LinguisticData",
        "children": [
            {
                "value": 8,
                "name": "da",
                "path": "LinguisticData/da"
            },
            {
                "value": 16476,
                "name": "de",
                "path": "LinguisticData/de"
            },
            {
                "value": 9788,
                "name": "en",
                "path": "LinguisticData/en",
                "children": [
                    {
                        "value": 36,
                        "name": "GB",
                        "path": "LinguisticData/en/GB"
                    },
                    {
                        "value": 28,
                        "name": "US",
                        "path": "LinguisticData/en/US"
                    }
                ]
            },
            {
                "value": 10276,
                "name": "es",
                "path": "LinguisticData/es"
            },
            {
                "value": 0,
                "name": "fi",
                "path": "LinguisticData/fi"
            },
            {
                "value": 12468,
                "name": "fr",
                "path": "LinguisticData/fr"
            },
            {
                "value": 7336,
                "name": "it",
                "path": "LinguisticData/it"
            },
            {
                "value": 192,
                "name": "ko",
                "path": "LinguisticData/ko"
            },
            {
                "value": 48,
                "name": "nl",
                "path": "LinguisticData/nl"
            },
            {
                "value": 112,
                "name": "no",
                "path": "LinguisticData/no"
            },
            {
                "value": 4496,
                "name": "pt",
                "path": "LinguisticData/pt"
            },
            {
                "value": 24,
                "name": "ru",
                "path": "LinguisticData/ru"
            },
            {
                "value": 20,
                "name": "sv",
                "path": "LinguisticData/sv"
            },
            {
                "value": 0,
                "name": "tr",
                "path": "LinguisticData/tr"
            },
            {
                "value": 35288,
                "name": "zh",
                "path": "LinguisticData/zh",
                "children": [
                    {
                        "value": 2604,
                        "name": "Hans",
                        "path": "LinguisticData/zh/Hans"
                    },
                    {
                        "value": 2868,
                        "name": "Hant",
                        "path": "LinguisticData/zh/Hant"
                    }
                ]
            }
        ]
    },
    {
        "value": 4,
        "name": "LocationBundles",
        "path": "LocationBundles"
    },
    {
        "value": 800,
        "name": "LoginPlugins",
        "path": "LoginPlugins",
        "children": [
            {
                "value": 348,
                "name": "BezelServices.loginPlugin",
                "path": "LoginPlugins/BezelServices.loginPlugin",
                "children": [
                    {
                        "value": 348,
                        "name": "Contents",
                        "path": "LoginPlugins/BezelServices.loginPlugin/Contents"
                    }
                ]
            },
            {
                "value": 108,
                "name": "DisplayServices.loginPlugin",
                "path": "LoginPlugins/DisplayServices.loginPlugin",
                "children": [
                    {
                        "value": 108,
                        "name": "Contents",
                        "path": "LoginPlugins/DisplayServices.loginPlugin/Contents"
                    }
                ]
            },
            {
                "value": 344,
                "name": "FSDisconnect.loginPlugin",
                "path": "LoginPlugins/FSDisconnect.loginPlugin",
                "children": [
                    {
                        "value": 344,
                        "name": "Contents",
                        "path": "LoginPlugins/FSDisconnect.loginPlugin/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 188,
        "name": "Messages",
        "path": "Messages",
        "children": [
            {
                "value": 188,
                "name": "PlugIns",
                "path": "Messages/PlugIns",
                "children": [
                    {
                        "value": 12,
                        "name": "Balloons.transcriptstyle",
                        "path": "Messages/PlugIns/Balloons.transcriptstyle"
                    },
                    {
                        "value": 8,
                        "name": "Boxes.transcriptstyle",
                        "path": "Messages/PlugIns/Boxes.transcriptstyle"
                    },
                    {
                        "value": 8,
                        "name": "Compact.transcriptstyle",
                        "path": "Messages/PlugIns/Compact.transcriptstyle"
                    },
                    {
                        "value": 76,
                        "name": "FaceTime.imservice",
                        "path": "Messages/PlugIns/FaceTime.imservice"
                    },
                    {
                        "value": 84,
                        "name": "iMessage.imservice",
                        "path": "Messages/PlugIns/iMessage.imservice"
                    }
                ]
            }
        ]
    },
    {
        "value": 0,
        "name": "Metadata",
        "path": "Metadata",
        "children": [
            {
                "value": 0,
                "name": "com.apple.finder.legacy.mdlabels",
                "path": "Metadata/com.apple.finder.legacy.mdlabels",
                "children": [
                    {
                        "value": 0,
                        "name": "Contents",
                        "path": "Metadata/com.apple.finder.legacy.mdlabels/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 3276,
        "name": "MonitorPanels",
        "path": "MonitorPanels",
        "children": [
            {
                "value": 860,
                "name": "AppleDisplay.monitorPanels",
                "path": "MonitorPanels/AppleDisplay.monitorPanels",
                "children": [
                    {
                        "value": 860,
                        "name": "Contents",
                        "path": "MonitorPanels/AppleDisplay.monitorPanels/Contents"
                    }
                ]
            },
            {
                "value": 36,
                "name": "Arrange.monitorPanel",
                "path": "MonitorPanels/Arrange.monitorPanel",
                "children": [
                    {
                        "value": 36,
                        "name": "Contents",
                        "path": "MonitorPanels/Arrange.monitorPanel/Contents"
                    }
                ]
            },
            {
                "value": 2080,
                "name": "Display.monitorPanel",
                "path": "MonitorPanels/Display.monitorPanel",
                "children": [
                    {
                        "value": 2080,
                        "name": "Contents",
                        "path": "MonitorPanels/Display.monitorPanel/Contents"
                    }
                ]
            },
            {
                "value": 300,
                "name": "Profile.monitorPanel",
                "path": "MonitorPanels/Profile.monitorPanel",
                "children": [
                    {
                        "value": 300,
                        "name": "Contents",
                        "path": "MonitorPanels/Profile.monitorPanel/Contents"
                    }
                ]
            }
        ]
    },
    {
        "value": 652,
        "name": "OpenDirectory",
        "path": "OpenDirectory",
        "children": [
            {
                "value": 8,
                "name": "Configurations",
                "path": "OpenDirectory/Configurations"
            },
            {
                "value": 0,
                "name": "DynamicNodeTemplates",
                "path": "OpenDirectory/DynamicNodeTemplates"
            },
            {
                "value": 0,
                "name": "ManagedClient",
                "path": "OpenDirectory/ManagedClient"
            },
            {
                "value": 12,
                "name": "Mappings",
                "path": "OpenDirectory/Mappings"
            },
            {
                "value": 612,
                "name": "Modules",
                "path": "OpenDirectory/Modules",
                "children": [
                    {
                        "value": 68,
                        "name": "ActiveDirectory.bundle",
                        "path": "OpenDirectory/Modules/ActiveDirectory.bundle"
                    },
                    {
                        "value": 12,
                        "name": "AppleID.bundle",
                        "path": "OpenDirectory/Modules/AppleID.bundle"
                    },
                    {
                        "value": 76,
                        "name": "AppleODClientLDAP.bundle",
                        "path": "OpenDirectory/Modules/AppleODClientLDAP.bundle"
                    },
                    {
                        "value": 68,
                        "name": "AppleODClientPWS.bundle",
                        "path": "OpenDirectory/Modules/AppleODClientPWS.bundle"
                    },
                    {
                        "value": 12,
                        "name": "ConfigurationProfiles.bundle",
                        "path": "OpenDirectory/Modules/ConfigurationProfiles.bundle"
                    },
                    {
                        "value": 20,
                        "name": "configure.bundle",
                        "path": "OpenDirectory/Modules/configure.bundle"
                    },
                    {
                        "value": 8,
                        "name": "FDESupport.bundle",
                        "path": "OpenDirectory/Modules/FDESupport.bundle"
                    },
                    {
                        "value": 12,
                        "name": "Kerberosv5.bundle",
                        "path": "OpenDirectory/Modules/Kerberosv5.bundle"
                    },
                    {
                        "value": 8,
                        "name": "keychain.bundle",
                        "path": "OpenDirectory/Modules/keychain.bundle"
                    },
                    {
                        "value": 44,
                        "name": "ldap.bundle",
                        "path": "OpenDirectory/Modules/ldap.bundle"
                    },
                    {
                        "value": 12,
                        "name": "legacy.bundle",
                        "path": "OpenDirectory/Modules/legacy.bundle"
                    },
                    {
                        "value": 12,
                        "name": "NetLogon.bundle",
                        "path": "OpenDirectory/Modules/NetLogon.bundle"
                    },
                    {
                        "value": 24,
                        "name": "nis.bundle",
                        "path": "OpenDirectory/Modules/nis.bundle"
                    },
                    {
                        "value": 68,
                        "name": "PlistFile.bundle",
                        "path": "OpenDirectory/Modules/PlistFile.bundle"
                    },
                    {
                        "value": 16,
                        "name": "proxy.bundle",
                        "path": "OpenDirectory/Modules/proxy.bundle"
                    },
                    {
                        "value": 20,
                        "name": "search.bundle",
                        "path": "OpenDirectory/Modules/search.bundle"
                    },
                    {
                        "value": 8,
                        "name": "statistics.bundle",
                        "path": "OpenDirectory/Modules/statistics.bundle"
                    },
                    {
                        "value": 124,
                        "name": "SystemCache.bundle",
                        "path": "OpenDirectory/Modules/SystemCache.bundle"
                    }
                ]
            },
            {
                "value": 8,
                "name": "Templates",
                "path": "OpenDirectory/Templates",
                "children": [
                    {
                        "value": 0,
                        "name": "LDAPv3",
                        "path": "DirectoryServices/Templates/LDAPv3"
                    }
                ]
            }
        ]
    },
    {
        "value": 0,
        "name": "OpenSSL",
        "path": "OpenSSL",
        "children": [
            {
                "value": 0,
                "name": "certs",
                "path": "OpenSSL/certs"
            },
            {
                "value": 0,
                "name": "misc",
                "path": "OpenSSL/misc"
            },
            {
                "value": 0,
                "name": "private",
                "path": "OpenSSL/private"
            }
        ]
    },
    {
        "value": 8,
        "name": "PasswordServer Filters",
        "path": "PasswordServer Filters"
    },
    {
        "value": 0,
        "name": "PerformanceMetrics",
        "path": "PerformanceMetrics"
    },
    {
        "value": 57236,
        "name": "Perl",
        "path": "Perl",
        "children": [
            {
                "value": 14848,
                "name": "5.12",
                "path": "Perl/5.12",
                "children": [
                    {
                        "value": 20,
                        "name": "App",
                        "path": "Perl/5.12/App"
                    },
                    {
                        "value": 48,
                        "name": "Archive",
                        "path": "Perl/5.12/Archive"
                    },
                    {
                        "value": 12,
                        "name": "Attribute",
                        "path": "Perl/5.12/Attribute"
                    },
                    {
                        "value": 16,
                        "name": "autodie",
                        "path": "Perl/5.12/autodie"
                    },
                    {
                        "value": 56,
                        "name": "B",
                        "path": "Perl/5.12/B"
                    },
                    {
                        "value": 0,
                        "name": "Carp",
                        "path": "Perl/5.12/Carp"
                    },
                    {
                        "value": 32,
                        "name": "CGI",
                        "path": "Perl/5.12/CGI"
                    },
                    {
                        "value": 8,
                        "name": "Class",
                        "path": "Perl/5.12/Class"
                    },
                    {
                        "value": 12,
                        "name": "Compress",
                        "path": "Perl/5.12/Compress"
                    },
                    {
                        "value": 0,
                        "name": "Config",
                        "path": "Perl/5.12/Config"
                    },
                    {
                        "value": 120,
                        "name": "CPAN",
                        "path": "Perl/5.12/CPAN"
                    },
                    {
                        "value": 180,
                        "name": "CPANPLUS",
                        "path": "Perl/5.12/CPANPLUS"
                    },
                    {
                        "value": 7064,
                        "name": "darwin-thread-multi-2level",
                        "path": "Perl/5.12/darwin-thread-multi-2level"
                    },
                    {
                        "value": 0,
                        "name": "DBM_Filter",
                        "path": "Perl/5.12/DBM_Filter"
                    },
                    {
                        "value": 0,
                        "name": "Devel",
                        "path": "Perl/5.12/Devel"
                    },
                    {
                        "value": 0,
                        "name": "Digest",
                        "path": "Perl/5.12/Digest"
                    },
                    {
                        "value": 12,
                        "name": "Encode",
                        "path": "Perl/5.12/Encode"
                    },
                    {
                        "value": 0,
                        "name": "encoding",
                        "path": "Perl/5.12/encoding"
                    },
                    {
                        "value": 0,
                        "name": "Exporter",
                        "path": "Perl/5.12/Exporter"
                    },
                    {
                        "value": 224,
                        "name": "ExtUtils",
                        "path": "Perl/5.12/ExtUtils"
                    },
                    {
                        "value": 104,
                        "name": "File",
                        "path": "Perl/5.12/File"
                    },
                    {
                        "value": 12,
                        "name": "Filter",
                        "path": "Perl/5.12/Filter"
                    },
                    {
                        "value": 28,
                        "name": "Getopt",
                        "path": "Perl/5.12/Getopt"
                    },
                    {
                        "value": 24,
                        "name": "I18N",
                        "path": "Perl/5.12/I18N"
                    },
                    {
                        "value": 0,
                        "name": "inc",
                        "path": "Perl/5.12/inc"
                    },
                    {
                        "value": 152,
                        "name": "IO",
                        "path": "Perl/5.12/IO"
                    },
                    {
                        "value": 24,
                        "name": "IPC",
                        "path": "Perl/5.12/IPC"
                    },
                    {
                        "value": 60,
                        "name": "Locale",
                        "path": "Perl/5.12/Locale"
                    },
                    {
                        "value": 8,
                        "name": "Log",
                        "path": "Perl/5.12/Log"
                    },
                    {
                        "value": 144,
                        "name": "Math",
                        "path": "Perl/5.12/Math"
                    },
                    {
                        "value": 8,
                        "name": "Memoize",
                        "path": "Perl/5.12/Memoize"
                    },
                    {
                        "value": 284,
                        "name": "Module",
                        "path": "Perl/5.12/Module"
                    },
                    {
                        "value": 80,
                        "name": "Net",
                        "path": "Perl/5.12/Net"
                    },
                    {
                        "value": 8,
                        "name": "Object",
                        "path": "Perl/5.12/Object"
                    },
                    {
                        "value": 0,
                        "name": "overload",
                        "path": "Perl/5.12/overload"
                    },
                    {
                        "value": 0,
                        "name": "Package",
                        "path": "Perl/5.12/Package"
                    },
                    {
                        "value": 8,
                        "name": "Params",
                        "path": "Perl/5.12/Params"
                    },
                    {
                        "value": 0,
                        "name": "Parse",
                        "path": "Perl/5.12/Parse"
                    },
                    {
                        "value": 0,
                        "name": "PerlIO",
                        "path": "Perl/5.12/PerlIO"
                    },
                    {
                        "value": 312,
                        "name": "Pod",
                        "path": "Perl/5.12/Pod"
                    },
                    {
                        "value": 2452,
                        "name": "pods",
                        "path": "Perl/5.12/pods"
                    },
                    {
                        "value": 0,
                        "name": "Search",
                        "path": "Perl/5.12/Search"
                    },
                    {
                        "value": 32,
                        "name": "TAP",
                        "path": "Perl/5.12/TAP"
                    },
                    {
                        "value": 36,
                        "name": "Term",
                        "path": "Perl/5.12/Term"
                    },
                    {
                        "value": 60,
                        "name": "Test",
                        "path": "Perl/5.12/Test"
                    },
                    {
                        "value": 20,
                        "name": "Text",
                        "path": "Perl/5.12/Text"
                    },
                    {
                        "value": 8,
                        "name": "Thread",
                        "path": "Perl/5.12/Thread"
                    },
                    {
                        "value": 28,
                        "name": "Tie",
                        "path": "Perl/5.12/Tie"
                    },
                    {
                        "value": 8,
                        "name": "Time",
                        "path": "Perl/5.12/Time"
                    },
                    {
                        "value": 280,
                        "name": "Unicode",
                        "path": "Perl/5.12/Unicode"
                    },
                    {
                        "value": 2348,
                        "name": "unicore",
                        "path": "Perl/5.12/unicore"
                    },
                    {
                        "value": 8,
                        "name": "User",
                        "path": "Perl/5.12/User"
                    },
                    {
                        "value": 12,
                        "name": "version",
                        "path": "Perl/5.12/version"
                    },
                    {
                        "value": 0,
                        "name": "warnings",
                        "path": "Perl/5.12/warnings"
                    }
                ]
            },
            {
                "value": 14072,
                "name": "5.16",
                "path": "Perl/5.16",
                "children": [
                    {
                        "value": 20,
                        "name": "App",
                        "path": "Perl/5.16/App"
                    },
                    {
                        "value": 48,
                        "name": "Archive",
                        "path": "Perl/5.16/Archive"
                    },
                    {
                        "value": 12,
                        "name": "Attribute",
                        "path": "Perl/5.16/Attribute"
                    },
                    {
                        "value": 16,
                        "name": "autodie",
                        "path": "Perl/5.16/autodie"
                    },
                    {
                        "value": 56,
                        "name": "B",
                        "path": "Perl/5.16/B"
                    },
                    {
                        "value": 0,
                        "name": "Carp",
                        "path": "Perl/5.16/Carp"
                    },
                    {
                        "value": 32,
                        "name": "CGI",
                        "path": "Perl/5.16/CGI"
                    },
                    {
                        "value": 8,
                        "name": "Class",
                        "path": "Perl/5.16/Class"
                    },
                    {
                        "value": 12,
                        "name": "Compress",
                        "path": "Perl/5.16/Compress"
                    },
                    {
                        "value": 0,
                        "name": "Config",
                        "path": "Perl/5.16/Config"
                    },
                    {
                        "value": 192,
                        "name": "CPAN",
                        "path": "Perl/5.16/CPAN"
                    },
                    {
                        "value": 180,
                        "name": "CPANPLUS",
                        "path": "Perl/5.16/CPANPLUS"
                    },
                    {
                        "value": 7328,
                        "name": "darwin-thread-multi-2level",
                        "path": "Perl/5.16/darwin-thread-multi-2level"
                    },
                    {
                        "value": 0,
                        "name": "DBM_Filter",
                        "path": "Perl/5.16/DBM_Filter"
                    },
                    {
                        "value": 0,
                        "name": "Devel",
                        "path": "Perl/5.16/Devel"
                    },
                    {
                        "value": 0,
                        "name": "Digest",
                        "path": "Perl/5.16/Digest"
                    },
                    {
                        "value": 12,
                        "name": "Encode",
                        "path": "Perl/5.16/Encode"
                    },
                    {
                        "value": 0,
                        "name": "encoding",
                        "path": "Perl/5.16/encoding"
                    },
                    {
                        "value": 0,
                        "name": "Exporter",
                        "path": "Perl/5.16/Exporter"
                    },
                    {
                        "value": 248,
                        "name": "ExtUtils",
                        "path": "Perl/5.16/ExtUtils"
                    },
                    {
                        "value": 96,
                        "name": "File",
                        "path": "Perl/5.16/File"
                    },
                    {
                        "value": 12,
                        "name": "Filter",
                        "path": "Perl/5.16/Filter"
                    },
                    {
                        "value": 28,
                        "name": "Getopt",
                        "path": "Perl/5.16/Getopt"
                    },
                    {
                        "value": 12,
                        "name": "HTTP",
                        "path": "Perl/5.16/HTTP"
                    },
                    {
                        "value": 24,
                        "name": "I18N",
                        "path": "Perl/5.16/I18N"
                    },
                    {
                        "value": 0,
                        "name": "inc",
                        "path": "Perl/5.16/inc"
                    },
                    {
                        "value": 168,
                        "name": "IO",
                        "path": "Perl/5.16/IO"
                    },
                    {
                        "value": 28,
                        "name": "IPC",
                        "path": "Perl/5.16/IPC"
                    },
                    {
                        "value": 28,
                        "name": "JSON",
                        "path": "Perl/5.16/JSON"
                    },
                    {
                        "value": 372,
                        "name": "Locale",
                        "path": "Perl/5.16/Locale"
                    },
                    {
                        "value": 8,
                        "name": "Log",
                        "path": "Perl/5.16/Log"
                    },
                    {
                        "value": 148,
                        "name": "Math",
                        "path": "Perl/5.16/Math"
                    },
                    {
                        "value": 8,
                        "name": "Memoize",
                        "path": "Perl/5.16/Memoize"
                    },
                    {
                        "value": 212,
                        "name": "Module",
                        "path": "Perl/5.16/Module"
                    },
                    {
                        "value": 80,
                        "name": "Net",
                        "path": "Perl/5.16/Net"
                    },
                    {
                        "value": 8,
                        "name": "Object",
                        "path": "Perl/5.16/Object"
                    },
                    {
                        "value": 0,
                        "name": "overload",
                        "path": "Perl/5.16/overload"
                    },
                    {
                        "value": 0,
                        "name": "Package",
                        "path": "Perl/5.16/Package"
                    },
                    {
                        "value": 8,
                        "name": "Params",
                        "path": "Perl/5.16/Params"
                    },
                    {
                        "value": 0,
                        "name": "Parse",
                        "path": "Perl/5.16/Parse"
                    },
                    {
                        "value": 0,
                        "name": "Perl",
                        "path": "Perl/5.16/Perl"
                    },
                    {
                        "value": 0,
                        "name": "PerlIO",
                        "path": "Perl/5.16/PerlIO"
                    },
                    {
                        "value": 324,
                        "name": "Pod",
                        "path": "Perl/5.16/Pod"
                    },
                    {
                        "value": 2452,
                        "name": "pods",
                        "path": "Perl/5.16/pods"
                    },
                    {
                        "value": 0,
                        "name": "Search",
                        "path": "Perl/5.16/Search"
                    },
                    {
                        "value": 44,
                        "name": "TAP",
                        "path": "Perl/5.16/TAP"
                    },
                    {
                        "value": 36,
                        "name": "Term",
                        "path": "Perl/5.16/Term"
                    },
                    {
                        "value": 60,
                        "name": "Test",
                        "path": "Perl/5.16/Test"
                    },
                    {
                        "value": 20,
                        "name": "Text",
                        "path": "Perl/5.16/Text"
                    },
                    {
                        "value": 8,
                        "name": "Thread",
                        "path": "Perl/5.16/Thread"
                    },
                    {
                        "value": 28,
                        "name": "Tie",
                        "path": "Perl/5.16/Tie"
                    },
                    {
                        "value": 8,
                        "name": "Time",
                        "path": "Perl/5.16/Time"
                    },
                    {
                        "value": 684,
                        "name": "Unicode",
                        "path": "Perl/5.16/Unicode"
                    },
                    {
                        "value": 468,
                        "name": "unicore",
                        "path": "Perl/5.16/unicore"
                    },
                    {
                        "value": 8,
                        "name": "User",
                        "path": "Perl/5.16/User"
                    },
                    {
                        "value": 12,
                        "name": "version",
                        "path": "Perl/5.16/version"
                    },
                    {
                        "value": 0,
                        "name": "warnings",
                        "path": "Perl/5.16/warnings"
                    }
                ]
            },
            {
                "value": 28316,
                "name": "Extras",
                "path": "Perl/Extras",
                "children": [
                    {
                        "value": 14188,
                        "name": "5.12",
                        "path": "Perl/Extras/5.12"
                    },
                    {
                        "value": 14128,
                        "name": "5.16",
                        "path": "Perl/Extras/5.16"
                    }
                ]
            }
        ]
    },
    {
        "value": 226552,
        "name": "PreferencePanes",
        "path": "PreferencePanes",
        "children": [
            {
                "value": 5380,
                "name": "Accounts.prefPane",
                "path": "PreferencePanes/Accounts.prefPane",
                "children": [
                    {
                        "value": 5380,
                        "name": "Contents",
                        "path": "PreferencePanes/Accounts.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 1448,
                "name": "Appearance.prefPane",
                "path": "PreferencePanes/Appearance.prefPane",
                "children": [
                    {
                        "value": 1448,
                        "name": "Contents",
                        "path": "PreferencePanes/Appearance.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 2008,
                "name": "AppStore.prefPane",
                "path": "PreferencePanes/AppStore.prefPane",
                "children": [
                    {
                        "value": 2008,
                        "name": "Contents",
                        "path": "PreferencePanes/AppStore.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 1636,
                "name": "Bluetooth.prefPane",
                "path": "PreferencePanes/Bluetooth.prefPane",
                "children": [
                    {
                        "value": 1636,
                        "name": "Contents",
                        "path": "PreferencePanes/Bluetooth.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 2348,
                "name": "DateAndTime.prefPane",
                "path": "PreferencePanes/DateAndTime.prefPane",
                "children": [
                    {
                        "value": 2348,
                        "name": "Contents",
                        "path": "PreferencePanes/DateAndTime.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 4644,
                "name": "DesktopScreenEffectsPref.prefPane",
                "path": "PreferencePanes/DesktopScreenEffectsPref.prefPane",
                "children": [
                    {
                        "value": 4644,
                        "name": "Contents",
                        "path": "PreferencePanes/DesktopScreenEffectsPref.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 2148,
                "name": "DigiHubDiscs.prefPane",
                "path": "PreferencePanes/DigiHubDiscs.prefPane",
                "children": [
                    {
                        "value": 2148,
                        "name": "Contents",
                        "path": "PreferencePanes/DigiHubDiscs.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 624,
                "name": "Displays.prefPane",
                "path": "PreferencePanes/Displays.prefPane",
                "children": [
                    {
                        "value": 624,
                        "name": "Contents",
                        "path": "PreferencePanes/Displays.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 1012,
                "name": "Dock.prefPane",
                "path": "PreferencePanes/Dock.prefPane",
                "children": [
                    {
                        "value": 1012,
                        "name": "Contents",
                        "path": "PreferencePanes/Dock.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 2568,
                "name": "EnergySaver.prefPane",
                "path": "PreferencePanes/EnergySaver.prefPane",
                "children": [
                    {
                        "value": 2568,
                        "name": "Contents",
                        "path": "PreferencePanes/EnergySaver.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 3056,
                "name": "Expose.prefPane",
                "path": "PreferencePanes/Expose.prefPane",
                "children": [
                    {
                        "value": 3056,
                        "name": "Contents",
                        "path": "PreferencePanes/Expose.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 156,
                "name": "FibreChannel.prefPane",
                "path": "PreferencePanes/FibreChannel.prefPane",
                "children": [
                    {
                        "value": 156,
                        "name": "Contents",
                        "path": "PreferencePanes/FibreChannel.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 252,
                "name": "iCloudPref.prefPane",
                "path": "PreferencePanes/iCloudPref.prefPane",
                "children": [
                    {
                        "value": 252,
                        "name": "Contents",
                        "path": "PreferencePanes/iCloudPref.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 1588,
                "name": "Ink.prefPane",
                "path": "PreferencePanes/Ink.prefPane",
                "children": [
                    {
                        "value": 1588,
                        "name": "Contents",
                        "path": "PreferencePanes/Ink.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 4616,
                "name": "InternetAccounts.prefPane",
                "path": "PreferencePanes/InternetAccounts.prefPane",
                "children": [
                    {
                        "value": 4616,
                        "name": "Contents",
                        "path": "PreferencePanes/InternetAccounts.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 3676,
                "name": "Keyboard.prefPane",
                "path": "PreferencePanes/Keyboard.prefPane",
                "children": [
                    {
                        "value": 3676,
                        "name": "Contents",
                        "path": "PreferencePanes/Keyboard.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 3468,
                "name": "Localization.prefPane",
                "path": "PreferencePanes/Localization.prefPane",
                "children": [
                    {
                        "value": 3468,
                        "name": "Contents",
                        "path": "PreferencePanes/Localization.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 23180,
                "name": "Mouse.prefPane",
                "path": "PreferencePanes/Mouse.prefPane",
                "children": [
                    {
                        "value": 23180,
                        "name": "Contents",
                        "path": "PreferencePanes/Mouse.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 20588,
                "name": "Network.prefPane",
                "path": "PreferencePanes/Network.prefPane",
                "children": [
                    {
                        "value": 20588,
                        "name": "Contents",
                        "path": "PreferencePanes/Network.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 1512,
                "name": "Notifications.prefPane",
                "path": "PreferencePanes/Notifications.prefPane",
                "children": [
                    {
                        "value": 1512,
                        "name": "Contents",
                        "path": "PreferencePanes/Notifications.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 7648,
                "name": "ParentalControls.prefPane",
                "path": "PreferencePanes/ParentalControls.prefPane",
                "children": [
                    {
                        "value": 7648,
                        "name": "Contents",
                        "path": "PreferencePanes/ParentalControls.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 4060,
                "name": "PrintAndScan.prefPane",
                "path": "PreferencePanes/PrintAndScan.prefPane",
                "children": [
                    {
                        "value": 4060,
                        "name": "Contents",
                        "path": "PreferencePanes/PrintAndScan.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 1904,
                "name": "Profiles.prefPane",
                "path": "PreferencePanes/Profiles.prefPane",
                "children": [
                    {
                        "value": 1904,
                        "name": "Contents",
                        "path": "PreferencePanes/Profiles.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 6280,
                "name": "Security.prefPane",
                "path": "PreferencePanes/Security.prefPane",
                "children": [
                    {
                        "value": 6280,
                        "name": "Contents",
                        "path": "PreferencePanes/Security.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 9608,
                "name": "SharingPref.prefPane",
                "path": "PreferencePanes/SharingPref.prefPane",
                "children": [
                    {
                        "value": 9608,
                        "name": "Contents",
                        "path": "PreferencePanes/SharingPref.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 2204,
                "name": "Sound.prefPane",
                "path": "PreferencePanes/Sound.prefPane",
                "children": [
                    {
                        "value": 2204,
                        "name": "Contents",
                        "path": "PreferencePanes/Sound.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 1072,
                "name": "Speech.prefPane",
                "path": "PreferencePanes/Speech.prefPane",
                "children": [
                    {
                        "value": 1072,
                        "name": "Contents",
                        "path": "PreferencePanes/Speech.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 1112,
                "name": "Spotlight.prefPane",
                "path": "PreferencePanes/Spotlight.prefPane",
                "children": [
                    {
                        "value": 1112,
                        "name": "Contents",
                        "path": "PreferencePanes/Spotlight.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 2040,
                "name": "StartupDisk.prefPane",
                "path": "PreferencePanes/StartupDisk.prefPane",
                "children": [
                    {
                        "value": 2040,
                        "name": "Contents",
                        "path": "PreferencePanes/StartupDisk.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 3080,
                "name": "TimeMachine.prefPane",
                "path": "PreferencePanes/TimeMachine.prefPane",
                "children": [
                    {
                        "value": 3080,
                        "name": "Contents",
                        "path": "PreferencePanes/TimeMachine.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 93312,
                "name": "Trackpad.prefPane",
                "path": "PreferencePanes/Trackpad.prefPane",
                "children": [
                    {
                        "value": 93312,
                        "name": "Contents",
                        "path": "PreferencePanes/Trackpad.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 7680,
                "name": "UniversalAccessPref.prefPane",
                "path": "PreferencePanes/UniversalAccessPref.prefPane",
                "children": [
                    {
                        "value": 7680,
                        "name": "Contents",
                        "path": "PreferencePanes/UniversalAccessPref.prefPane/Contents"
                    }
                ]
            },
            {
                "value": 640,
                "name": "Xsan.prefPane",
                "path": "PreferencePanes/Xsan.prefPane",
                "children": [
                    {
                        "value": 640,
                        "name": "Contents",
                        "path": "PreferencePanes/Xsan.prefPane/Contents"
                    }
                ]
            }
        ]
    },
]
</script>