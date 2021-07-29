<template>
  <div id="main2" style="width: 450px;height:450px;" ref="myCharts"></div>
</template>

<script>
  // import echarts from 'echarts'
  export default {
    data () {
      return {
        option: {
          title: {
            text: '收入构成'
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
              name: '收入来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
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
              color : [ '#09b4c5', '#c55d55'],
              labelLine: {
                show: false
              },
              data: [
                {value: 28048, name: '图库销售'},
                {value: 27635, name: '预约摄影'},

              ]
            }
          ]
        }
      }
    },
    mounted () {
      let myChart = this.$echarts.init(document.getElementById('main2'));
      myChart.setOption(this.option);
    },
    methods: {

    }
  }
</script>

<style>

</style>