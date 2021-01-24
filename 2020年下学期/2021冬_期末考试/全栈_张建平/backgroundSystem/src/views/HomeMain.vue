<template>
  <el-main>
    <!-- 今日运营数据 -->
    <el-container class="home-item jryy-box">
      <el-header>今日运营数据</el-header>
      <el-main
        ><el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-item-1">今日订单数：9999</div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content bg-item-2">今日订单数：9999</div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content bg-item-3">今日订单数：9999</div></el-col
          >
        </el-row></el-main
      >
    </el-container>
    <!-- 待完成事项 -->
    <el-container class="home-item dwcsx-box">
      <el-header>待完成事项</el-header>
      <el-main
        ><el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-item-4">
              待提交订单数：9999
            </div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content bg-item-5">
              待提交订单数：9999
            </div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content bg-item-6">
              待提交订单数：9999
            </div></el-col
          >
        </el-row></el-main
      >
    </el-container>
    <!-- 营收统计 -->
    <el-container class="home-item">
      <el-header>营收统计</el-header>
      <el-main class="chart-main">
        <!-- 营收统计趋势chart -->
        <RevenueChart />
        <!-- <RevenueChart /> -->
        <div class="day-btn">
          <el-button type="danger" round>近7天</el-button>
          <el-button round>近30天</el-button>
        </div>
      </el-main>
    </el-container>
  </el-main>
</template>

<script>
import RevenueChart from "@/components/RevenueChart";
export default {
  components: {
    RevenueChart,
  },
};
</script>

<style lang="scss" scoped>
.home-item {
  margin-bottom: 20px;

  .el-header {
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    height: 30px !important;
  }

  .el-main {
    padding: 4px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-item-1 {
    background-color: #ff6666;
  }
  .bg-item-2 {
    background-color: #fcc666;
  }
  .bg-item-3 {
    background-color: #ff9966;
  }
  .bg-item-4 {
    background-color: #abcdef;
  }
  .bg-item-5 {
    background-color: #bedcaf;
  }
  .bg-item-6 {
    background-color: #cafedb;
  }
  .grid-content {
    height: 80px;
    border-radius: 2px;
    text-align: center;
    line-height: 80px;
    font-weight: 700;
  }
  &.jryy-box {
    .el-col {
      color: #eeeeee;
    }
  }

  .row-bg {
    padding: 10px 0;
    // background-color: #f9fafc;
    border: 1px solid #c3c3c3;
    border-radius: 6px;
  }

  .chart-main {
    position: relative;
  }
  .day-btn {
    position: absolute;
    top: 18px;
    right: 48px;
    z-index: 9;
  }
}
</style>