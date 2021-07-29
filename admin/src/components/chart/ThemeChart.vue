<template>
  <div id="main5" style="width: 500px;height:500px;" ref="myCharts"></div>
</template>

<script>
  // import echarts from 'echarts'
  export default {
    data () {
      return {
        option: {
          title: {
            text: '主题分类',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: ['日式', '仪式', '旅拍', '户外写真', '室内写真', '小清新', '少女']
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
                {value: 30, name: '日式'},
                {value: 28, name: '仪式'},
                {value: 26, name: '旅拍'},
                {value: 24, name: '户外写真'},
                {value: 22, name: '室内写真'},
                {value: 20, name: '小清新'},
                {value: 18, name: '少女'}
              ]
            }
          ]
        }
      }
    },
    mounted () {
      let myChart = this.$echarts.init(document.getElementById('main5'));
      myChart.setOption(this.option);
    },
    methods: {

    }
  }
</script>

<style>

</style>