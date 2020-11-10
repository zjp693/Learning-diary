<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header
        ><a-row>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="1">
            col-1
          </a-col>
          <a-col :span="2">
            <a-button type="primary" :disabled="true">
              登录
            </a-button>
          </a-col>
        </a-row></a-layout-header
      >
      <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout-content>
          <!-- 面包屑导航 -->
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><a href="">用户管理</a></a-breadcrumb-item
            >
            <a-breadcrumb-item
              ><a href="">用户列表</a></a-breadcrumb-item
            >
           
          </a-breadcrumb>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}

.ant-col {
  box-shadow: 0 0 1px #000;
}
</style>
