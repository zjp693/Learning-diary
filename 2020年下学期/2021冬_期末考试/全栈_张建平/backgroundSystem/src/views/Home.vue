<template>
  <el-container>
    <el-header>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="4"><span class="ed-title">教育管理后台</span></el-col>
        <el-col :span="4"
          ><span class="ed-username"
            ><i class="el-icon-chat-dot-round"></i>罗老师</span
          ></el-col
        >
      </el-row>
    </el-header>
    <!-- 布局容器 start -->
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="ed-menu"
          background-color="#34495e"
          text-color="#eeeeee"
          active-text-color="#13b078"
          :router="true"
        >
          <el-menu-item index="/home">
            <i class="el-icon-s-home"></i>
            <template v-slot:title>
              <span>首页</span>
            </template>
          </el-menu-item>

          <el-submenu index="/user">
            <template v-slot:title>
              <i class="el-icon-s-custom"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/user/teacher">教师</el-menu-item>
              <el-menu-item index="/user/student">学员</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/course">
            <i class="el-icon-s-platform"></i>
            <template v-slot:title>
              <span>课程管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/order">
            <i class="el-icon-s-order"></i>
            <template v-slot:title>
              <span>订单管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/content">
            <i class="el-icon-s-management"></i>
            <template v-slot:title>
              <span>内容管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/setting">
            <i class="el-icon-s-tools"></i>
            <template v-slot:title>
              <span>系统管理</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 主体内容 -->
      <!-- <el-main>Main</el-main> -->
      <router-view />
    </el-container>
    <!-- 布局容器 end -->
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #1abc9c;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
  // text-align: center;
  // line-height: 160px;
}

.el-container {
  height: 100vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.ed-title {
  font-size: 20px;
}

.ed-username {
  color: rgba($color: #fff, $alpha: 0.7);
  i {
    margin-right: 10px;
  }
}

.ed-menu {
  text-align: left;
  height: 100%;
}
</style>