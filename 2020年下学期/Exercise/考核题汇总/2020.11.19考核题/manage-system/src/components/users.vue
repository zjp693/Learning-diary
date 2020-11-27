<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>用户管理</a-breadcrumb-item>
      <a-breadcrumb-item>用户列表</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <a-form>
        <a-row>
          <a-col :span="12">
            <a-row :gutter="16">
              <a-col :span="18">
                <a-form-item :wrapperCol="{ span: 24 }">
                  <a-input-search size="large" placeholder="请输入内容" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-button type="primary" size="large" @click="showModal">
                  添加用户
                </a-button>
                <a-modal
                  title="添加用户"
                  v-model:visible="visible"
                  :confirm-loading="confirmLoading"
                >
                  <a-form>
                    <a-row>
                      <a-col :span="24">
                        <a-form-item
                          required
                          has-feedback
                          label="用户名"
                          name="usernaem"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input type="text" />
                        </a-form-item>
                        <a-form-item
                          required
                          has-feedback
                          label="密码"
                          name="password"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input-password type="text" />
                        </a-form-item>
                        <a-form-item
                          required
                          has-feedback
                          label="用户名"
                          name="usernaem"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input type="text" />
                        </a-form-item>
                        <a-form-item
                          required
                          has-feedback
                          label="用户名"
                          name="usernaem"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input type="text" />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-form>
                </a-modal>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-form>
      <a-table
        :columns="tablecolumn"
        :data-source="tabledata"
        :pagination="false"
      >
        <template #mg_state="{ text }">
          <a-switch :checked="text.mg_state" />
        </template>
        <template #opertion>
          <a-button type="primary"><EditOutlined /> </a-button>
          <a-button type="danger" style="margin: 0 10px"
            ><DeleteOutlined />
          </a-button>
          <a-button type="default" class="but"><SettingOutlined /> </a-button>
        </template>
      </a-table>
      <!-- 分页 -->
      <a-pagination
        v-model:current="current"
        :show-total="(total) => `共 ${total} 条`"
        show-size-changer
        show-quick-jumper
        :total="total"
        @change="onChange"
        :page-size-options="pageSizeOptions"
        @showSizeChange="onShowSizeChange"
      />
    </div>
  </a-layout>
</template>

<script>
import { httpGet } from "../utils/http";
import { user } from "../api";
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },
  data() {
    return {
      // 表格配置
      tablecolumn: [
        {
          title: "#",
          dataIndex: "index",
          key: "index",
        },
        {
          title: "姓名",
          dataIndex: "username",
          key: "username",
        },
        {
          title: "邮箱",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "电话",
          dataIndex: "create_time",
          key: "create_time",
        },
        {
          title: "角色",
          dataIndex: "role_name",
          key: "role_name",
        },
        {
          title: "状态",
          slots: { customRender: "mg_state" },
          key: "mg_state",
        },
        {
          title: "操作",
          slots: { customRender: "opertion" },
          key: "opertion",
        },
      ],
      // 表格数据
      tabledata: [],
      current: 1,
      total: 0,
      pageSizeOptions: ["1", "2", "5", "8", "10"],
      visible: false,
      confirmLoading: false,
    };
  },
  created() {
    this.getusers();
  },
  methods: {
    getusers(pagenum = 1, pagesize = 2) {
      httpGet(user.Getusers, {
        pagenum: pagenum,
        pagesize: pagesize,
      })
        .then((response) => {
          // console.log(response);
          let { data, meta } = response;
          console.log(data);
          if (meta.status == 200) {
            this.tabledata = data.users;
            this.current = data.pagenum;
            this.total = data.total;
            // console.log("data" + data);
            // console.log(this.tabledata);
            this.tabledata.forEach((ele, index) => {
              ele.index = index + 1;
            });
            console.log(this.tabledata);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onChange(current, pagesize) {
      this.getusers(current, pagesize);
    },
    onShowSizeChange(current, pagesize) {
      this.getusers(current, pagesize);
    },
    showModal() {
      this.visible = true;
    },
  },
};
</script>

<style>
.but {
  background-color: #e6a23c;
  color: #fff;
}
</style>