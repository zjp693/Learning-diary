<template>
  <a-layout
    id="components-layout-demo-side"
    style="min-height: 100vh"
    class="home"
  >
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <router-link to="/home">
        <div class="logo">
          <img src="../assets/logo.png" alt="" />
          <span>后台管理系统</span>
        </div>
      </router-link>
  
      <a-menu
        theme="dark"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        :openKeys="openKeys"
        @openChange="onOpenChange"
      >
        <a-sub-menu :key="item.id" v-for="item in muntlist">
          <template #title v-if="item.path == 'users'">
            <span
              ><user-outlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'rights'">
            <span
              ><CodeSandboxOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'goods'">
            <span
              ><ShoppingOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'orders'">
            <span
              ><ContainerOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'reports'">
            <span
              ><AreaChartOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <a-menu-item
            :key="aitem.id"
            v-for="aitem in item.children"
            class="sider"
            ><AppstoreOutlined /><span>
              <router-link to="/users" style="color: #fff">{{
                aitem.authName
              }}</router-link></span
            ></a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <a-button class="button" @click="hanlerout">退出</a-button>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>

      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>


<script>
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  CodeSandboxOutlined,
  ShoppingOutlined,
  ContainerOutlined,
  AreaChartOutlined,
} from "@ant-design/icons-vue";
import { httpGet } from "../utils/http";
import { right } from "../api";
export default {
  components: {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,
    CodeSandboxOutlined,
    ShoppingOutlined,
    ContainerOutlined,
    AreaChartOutlined,
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ["1"],
      // 所有的路由
      muntlist: [],
      openKeys: [],
      rootSubmenuKeys: [],
    };
  },
  created() {
    this.userget();
  },
  methods: {
    userget() {
      httpGet(right.Sidemenu)
        .then((response) => {
          // console.log(response);
          let { data, meta } = response;
          // console.log(data);
          if (meta.status == 200) {
            this.muntlist = data;

            this.muntlist.forEach((item) => {
              this.rootSubmenuKeys.push(item.id);
            });
            console.log(this.muntlist);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    hanlerout() {
      window.sessionStorage.removeItem("token");
      this.$router.push("/login");
    },

    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>

<style>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  /* cursor: pointer; */
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
.logo {
  height: 32px;
  margin: 16px;
  overflow: hidden;
}
.logo img {
  height: 100%;
}
.logo span {
  margin: 0 14px;
  color: #fff;
}
.button {
  float: right;
  margin: 16px 24px;
}
/* .sider span {
  color: #fff;
} */
</style>