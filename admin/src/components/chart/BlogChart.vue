<template>
  <div id="main3" style="width: 500px;height:500px;" ref="myCharts"></div>
</template>

<script>
  // import echarts from 'echarts'
  export default {
    data () {
      return {
        option: {
          title: {
            text: '博客分类',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: ['摄影教程', '游记', '探点', '小技巧', '新品发布']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          series: [
            {
              name: '面积模式',
              type: 'pie',
              radius: [20, 140],
              center: ['50 %', '50%'],
              roseType: 'radius',
              itemStyle: {
                borderRadius: 5
              },
              data: [
                {value: 30, name: '摄影教程'},
                {value: 28, name: '游记'},
                {value: 26, name: '探点'},
                {value: 24, name: '小技巧'},
                {value: 22, name: '新品发布'},
              ]
            }
          ]
        }
      }
    },
    mounted () {
      let myChart = this.$echarts.init(document.getElementById('main3'));
      myChart.setOption(this.option);
    },
    methods: {

    }
  }
</script>

<style>

</style>