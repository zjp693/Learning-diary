<template>
  <el-main>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>学员管理</el-breadcrumb-item>
      <el-breadcrumb-item>学员列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 查询表单 start -->
    <el-form :inline="true" class="query-form">
      <el-form-item label="姓名：">
        <el-input placeholder="请输入" style="width: 400px"></el-input>
      </el-form-item>
      <el-form-item label="课程：">
        <el-select v-model="value" placeholder="请选择" style="width: 400px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary">查 询</el-button>
    </el-form>
    <!-- 查询表单 end -->
    <div>
      <el-button
        type="primary"
        class="add-btn"
        @click="dialogFormVisible = true"
        >+ 添加</el-button
      >
    </div>
    <!-- 表格数据 start -->
    <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="snum" label="学员编号"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="course" label="购买课程分类"></el-table-column>
      <el-table-column prop="grade" label="年级"></el-table-column>
      <el-table-column prop="coursename" label="课程名称"></el-table-column>
      <el-table-column label="操作">
        <template v-slot>
          <div class="operation-btn">
            <span>编辑</span>
            <span>禁用</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格数据 end -->
    <!-- 添加弹窗 start -->
    <el-dialog title="学员添加" v-model:visible="dialogFormVisible">
      <template v-slot:default>
        <el-form>
          <el-form-item label="姓名：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="学员姓名"></el-input>
          </el-form-item>
          <el-form-item label="课程分类：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="购买课程分类"></el-input>
          </el-form-item>
          <el-form-item label="课程名称：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="购买课程名称"></el-input>
          </el-form-item>
          <el-form-item label="是否为VIP：" :label-width="formLabelWidth">
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </el-form-item>
        </el-form>
      </template>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false"
            >提 交</el-button
          >
          <el-button @click="dialogFormVisible = false">保 存</el-button>
          <el-button @click="dialogFormVisible = false">重 置</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 添加弹窗 end -->
  </el-main>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  data() {
    return {
      tableData: [
        {
          snum: "001",
          name: "丁奇伟",
          course: "语文",
          grade: "3年级",
          coursename: "衡水小学3年级词汇试学课程",
        },
        {
          snum: "002",
          name: "风清扬",
          course: "英语",
          grade: "All",
          coursename: "衡水小学3年级词汇试学课程",
        },
        {
          snum: "003",
          name: "决明子",
          course: "语文",
          grade: "五年级",
          coursename: "衡水小学3年级词汇试学课程",
        },
        {
          snum: "004",
          name: "小啦",
          course: "语文",
          grade: "3年级",
          coursename: "衡水小学3年级词汇试学课程",
        },
        {
          snum: "005",
          name: "小啦",
          course: "语文",
          grade: "3年级",
          coursename: "衡水小学3年级词汇试学课程",
        },
        {
          snum: "006",
          name: "小啦",
          course: "语文",
          grade: "3年级",
          coursename: "衡水小学3年级词汇试学课程",
        },
        {
          snum: "007",
          name: "小啦",
          course: "语文",
          grade: "3年级",
          coursename: "衡水小学3年级词汇试学课程",
        },
        {
          snum: "008",
          name: "小啦",
          course: "语文",
          grade: "3年级",
          coursename: "衡水小学3年级词汇试学课程",
        },
        {
          snum: "009",
          name: "小啦",
          course: "语文",
          grade: "3年级",
          coursename: "衡水小学3年级词汇试学课程",
        },
        {
          snum: "010",
          name: "小啦",
          course: "语文",
          grade: "3年级",
          coursename: "衡水小学3年级词汇试学课程",
        },
      ],
    };
  },
  setup() {
    const value = ref("");
    const data = reactive({
      options: [
        {
          value: "选项1",
          label: "语文",
        },
        {
          value: "选项2",
          label: "数学",
        },
        {
          value: "选项3",
          label: "英语",
        },
        {
          value: "选项4",
          label: "绘画",
        },
        {
          value: "选项5",
          label: "体育",
        },
      ],
    });
    const state = reactive({
      dialogFormVisible: false,
      formLabelWidth: "100px",
    });
    const radio = ref("2");
    return {
      value,
      ...toRefs(data),
      ...toRefs(state),
      radio,
    };
  },
};
</script>

<style lang="scss" scoped>
.query-form {
  padding: 100px 20px 40px;

  .el-form-item {
    margin-right: 60px;
  }
}

.add-btn {
  margin-left: 20px;
  margin-bottom: 20px;
}

.operation-btn {
  span {
    color: #319cff;
    margin-right: 20px;
  }
}
</style>