<template>
  <div id="main4" style="width: 500px;height:500px;" ref="myCharts"></div>
</template>

<script>
  // import echarts from 'echarts'
  export default {
    data () {
      return {
        option: {
          title: {
            text: '图片分类',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: ['壮美风光', '人物肖像', '艺术创作', '设计素材']
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
                {value: 60, name: '壮美风光'},
                {value: 52, name: '人物肖像'},
                {value: 45, name: '艺术创作'},
                {value: 40, name: '设计素材'},
              ]
            }
          ]
        }
      }
    },
    mounted () {
      let myChart = this.$echarts.init(document.getElementById('main4'));
      myChart.setOption(this.option);
    },
    methods: {

    }
  }
</script>

<style>

</style>