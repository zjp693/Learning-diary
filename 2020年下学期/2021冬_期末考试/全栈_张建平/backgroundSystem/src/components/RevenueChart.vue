<template>
  <div class="chart" ref="chart">123</div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    // 执行初始化图形
    this.initChart();
  },
  data() {
    return {
      option: {
        title: {
          text: "营收趋势",
          subtext: "单位（元）",
          textStyle: {
            fontWeight: 700,
          },
          top: "2%",
          left: "4%",
        },
        grid: {
          heigh: "100%",
          top: "20%",
          left: "6%",
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [3000, 2800, 3800, 934, 5000, 3500, 2000, 4000],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },
  methods: {
    // 初始化chart图形
    initChart() {
      // 基于准备好的dom元素，初始化echarts实例
      const chart = echarts.init(document.querySelector(".chart"));
      console.log(chart);
      window.onresize = function () {
        chart.resize();
      };
      // 绘制图表
      chart.setOption(this.option);
    },
  },
};
</script>

<style>
.chart {
  min-width: 1500px;
  height: 500px;
  box-shadow: 0 0 8px #bdbbbb;
  border-radius: 20px;
}
</style>