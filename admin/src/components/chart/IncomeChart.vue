<template>
  <div id="main" style="width: 800px;height:500px;" ref="myCharts"></div>
</template>

<script>
  // import echarts from 'echarts'
  export default {
    data () {
      return {
        option: {
          title: {
            text: '网站收入'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['总收入', '预约摄影', '图库销售']
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
            data: ['十二月', '一月', '二月', '三月', '四月', '五月']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '总收入',
              type: 'line',
              stack: '1',
              data: [16467, 17888, 19847, 24040, 26023, 27336]
            },
            {
              name: '预约摄影',
              type: 'line',
              stack: '2',
              data: [8769, 8889, 7846, 13008, 14008, 12006]
            },
            {
              name: '图库销售',
              type: 'line',
              stack: '3',
              data: [7698, 8999, 12001, 11032, 12015, 15330]
            }
          ]
        }
      }
    },
    mounted () {
      let myChart = this.$echarts.init(document.getElementById('main'));
      myChart.setOption(this.option);
    },
    methods: {

    }
  }
</script>

<style>

</style>