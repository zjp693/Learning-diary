<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>商品管理</a-breadcrumb-item>
      <a-breadcrumb-item>参数列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <!-- 主体 start -->
      <a-row>
        <a-col :span="8">
          <span>选择商品分类：</span>
          <a-cascader
            v-model:value="cascader.selectedKey"
            :options="cascader.data"
            :fieldNames="cascader.config"
            style="margin: 24px 0"
            @change="handleReadParamsList"
            placeholder="请选择"
          />
        </a-col>
      </a-row>
      <a-tabs v-model:activeKey="tabs.activeKey">
        <a-tab-pane key="many" tab="动态参数">
          <a-button type="primary" :disabled="isDisabled" @click="showAddParams"
            >添加参数</a-button
          >
          <a-table
            style="margin-top: 24px"
            :row-key="(record) => record.attr_id"
            :columns="table.cols"
            :data-source="table.manyData"
            bordered
            :pagination="false"
          >
            <template #index="{ index }">
              {{ index + 1 }}
            </template>

            <template #operation>
              <!-- 编辑 -->
              <a-button type="primary">
                <EditOutlined />
              </a-button>
              <!-- 删除 -->
              <a-button type="danger" style="margin: 0 10px">
                <DeleteOutlined
              /></a-button>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="only" tab="静态属性" force-render>
          <a-button type="primary" :disabled="isDisabled" @click="showAddParams"
            >添加参数</a-button
          >
          <a-table
            style="margin-top: 24px"
            :row-key="(record) => record.attr_id"
            :columns="table.cols"
            :data-source="table.onlyData"
            bordered
            :pagination="false"
          >
            <template #index="{ index }">
              {{ index + 1 }}
            </template>

            <template #expandedRowRender="{ record }">
              {{ record }}
            </template>

            <template #operation>
              <!-- 编辑 -->
              <a-button type="primary">
                <EditOutlined />
              </a-button>
              <!-- 删除 -->
              <a-button type="danger" style="margin: 0 10px">
                <DeleteOutlined
              /></a-button>
            </template>
          </a-table>
        </a-tab-pane>
      </a-tabs>
      <!-- 添加 -->
      <a-modal
        :title="'添加' + titleText"
        v-model:visible="AddParams.visible"
        @ok="handleAddParams"
      >
        <a-form
          :model="AddParams.Model"
          :rules="AddParams.Rules"
          ref="AddParamsRef"
        >
          <a-form-item required :label="titleText" name="attr_name">
            <a-input v-model:value="AddParams.Model.attr_name" />
          </a-form-item>
        </a-form>
      </a-modal>
      <!-- 主体 end -->
    </a-card>
  </a-layout>
</template>
<script>
import { httpGet, httpPost } from "../utils/http";
import { goods } from "../api";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";

import { message } from "ant-design-vue";
export default {
  data() {
    return {
      cascader: {
        selectedKey: [],
        data: [],
        config: {
          label: "cat_name",
          value: "cat_id",
          children: "children",
        },
      },
      tabs: {
        activeKey: "many",
      },
      table: {
        cols: [
          {
            title: "#",
            key: "index",
            slots: { customRender: "index" },
          },
          {
            title: "属性名称",
            dataIndex: "attr_name",
          },
          {
            title: "操作",
            key: "operation",
            slots: { customRender: "operation" },
          },
        ],
        manyData: [],
        onlyData: [],
      },
      // 添加参数 模态框
      AddParams: {
        visible: false,
        Model: {
          attr_name: "",
        },
        Rules: {
          attr_name: [
            { required: true, message: "请填写参数", trigger: "blur" },
          ],
        },
      },
    };
  },
  created() {
    this.handleReadCateList();
  },
  methods: {
    handleReadCateList() {
      httpGet(goods.GetCategories)
        .then((response) => {
          // console.log(response);
          let { meta, data } = response;
          if (meta.status == 200) {
            this.cascader.data = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleReadParamsList() {
      httpGet(`categories/${this.cateId}/attributes`, {
        sel: this.tabs.activeKey,
      })
        .then((response) => {
          console.log(response);
          let { meta, data } = response;

          if (meta.status == 200) {
            if (this.tabs.activeKey == "many") {
              // 在many的时候才需要处理成数组
              data.forEach((ele) => {
                ele.attr_vals =
                  ele.attr_vals.length == 0 ? [] : ele.attr_vals.split(" ");

                ele.inputVisible = false;
              });
              this.table.manyData = data;
            } else {
              this.table.onlyData = data;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showAddParams() {
      this.AddParams.visible = true;
    },
    handleAddParams() {
      httpPost(`categories/${this.cateId}/attributes`, {
        attr_name: this.AddParams.Model.attr_name,
        attr_sel: this.tabs.activeKey,
      })
        .then((resonse) => {
          // console.log(resonse);
          let { meta } = resonse;
          if (meta.status == 201) {
            message.success(meta.msg);
            this.AddParams.visible = false;
            this.handleReadParamsList();
            this.$refs.AddParamsRef.resetFields();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    isDisabled() {
      return this.cascader.selectedKey.length !== 3;
    },
    cateId() {
      if (this.cascader.selectedKey.length == 3) {
        return this.cascader.selectedKey[this.cascader.selectedKey.length - 1];
      }
      return null;
    },
    titleText() {
      if (this.tabs.activeKey == "many") {
        return "动态参数";
      } else {
        return "静态属性";
      }
    },
  },
  components: {
    EditOutlined,
    DeleteOutlined,
  },
};
</script>

<style></style>
