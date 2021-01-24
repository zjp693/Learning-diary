<template>
  <el-main>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>课程管理</el-breadcrumb-item>
      <el-breadcrumb-item>课程列表</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 查询表单 start -->
    <el-form :inline="true" class="query-form">
      <el-form-item label="年级：">
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
      <el-table-column prop="cnum" label="课程编号"> </el-table-column>
      <el-table-column prop="name" label="课程名称"> </el-table-column>
      <el-table-column prop="course" label="课程分类"></el-table-column>
      <el-table-column prop="grade" label="年级"></el-table-column>
      <el-table-column prop="update" label="更新时间"></el-table-column>
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
    <el-dialog
      title="课程添加"
      v-model:visible="dialogFormVisible"
      :fullscreen="true"
      :center="true"
      class="course-add"
    >
      <template v-slot:default>
        <el-form>
          <el-form-item label="课程表题：" :label-width="formLabelWidth">
            <el-input
              autocomplete="off"
              placeholder="给课程起个名字"
            ></el-input>
          </el-form-item>
          <el-form-item label="选择课程封面：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="课程封面"></el-input>
          </el-form-item>
          <el-form-item label="课程OSS地址：" :label-width="formLabelWidth">
            <el-input
              autocomplete="off"
              placeholder="课程地址（云服务器存储地址）"
            ></el-input>
          </el-form-item>
          <el-form-item label="课程描述：" :label-width="formLabelWidth">
            <el-input type="textarea" autosize placeholder="请输入课程描述" />
          </el-form-item>
          <el-form-item label="课程大纲：" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入课程大纲，以分号分隔"
            />
          </el-form-item>
          <el-form-item label="课程制作人：" :label-width="formLabelWidth">
            <el-input
              autocomplete="off"
              placeholder="填写课程制作人"
            ></el-input>
          </el-form-item>
          <el-form-item label="使用年级：" :label-width="formLabelWidth">
            <el-select
              v-model="value2"
              placeholder="请选择"
              style="width: 100px"
            >
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="课程售价：" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="课程售价"></el-input>
          </el-form-item>
          <el-form-item label="是否公开：" :label-width="formLabelWidth">
            <el-radio v-model="radio" label="1">公开</el-radio>
            <el-radio v-model="radio" label="2">内部公开</el-radio>
            <el-radio v-model="radio" label="3">不公开</el-radio>
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

        <!-- 提示说明 -->
        <div class="tip-box">
          <p class="desc-title">说明</p>
          <p class="publish-title">课程发布</p>
          <span class="publish-text"
            >课程发布标题需要经过审核，上传封面图片必须经过精修，大小不超过2M</span
          >
        </div>
      </template>

      <!-- 添加弹窗 end -->
    </el-dialog>
  </el-main>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  data() {
    return {
      tableData: [
        {
          cnum: "001",
          name: "衡水小学3年级词汇试学课程",
          course: "语文",
          grade: "3年级",
          update: "2021-01-20 17:20:00",
        },
        {
          cnum: "002",
          name: "美式口音一小时999单词",
          course: "英语",
          grade: "All",
          update: "2021-01-20 17:20:00",
        },
        {
          cnum: "003",
          name: "寒假语文课程大放价9.9元12课时",
          course: "语文",
          grade: "五年级",
          update: "2021-01-20 17:20:00",
        },
        {
          cnum: "004",
          name: "衡水小学3年级词汇试学课程",
          course: "语文",
          grade: "3年级",
          update: "2021-01-20 17:20:00",
        },
        {
          cnum: "005",
          name: "衡水小学3年级词汇试学课程",
          course: "语文",
          grade: "3年级",
          update: "2021-01-20 17:20:00",
        },
        {
          cnum: "006",
          name: "衡水小学3年级词汇试学课程",
          course: "语文",
          grade: "3年级",
          update: "2021-01-20 17:20:00",
        },
        {
          cnum: "007",
          name: "衡水小学3年级词汇试学课程",
          course: "语文",
          grade: "3年级",
          update: "2021-01-20 17:20:00",
        },
        {
          cnum: "008",
          name: "衡水小学3年级词汇试学课程",
          course: "语文",
          grade: "3年级",
          update: "2021-01-20 17:20:00",
        },
        {
          cnum: "009",
          name: "衡水小学3年级词汇试学课程",
          course: "语文",
          grade: "3年级",
          update: "2021-01-20 17:20:00",
        },
        {
          cnum: "010",
          name: "衡水小学3年级词汇试学课程",
          course: "语文",
          grade: "3年级",
          update: "2021-01-20 17:20:00",
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
    const value2 = ref("5");
    const data2 = reactive({
      options2: [
        {
          value: "1",
          label: "1年级",
        },
        {
          value: "2",
          label: "2年级",
        },
        {
          value: "3",
          label: "3年级",
        },
        {
          value: "4",
          label: "4年级",
        },
        {
          value: "5",
          label: "5年级",
        },
        {
          value: "6",
          label: "6年级",
        },
      ],
    });
    const state = reactive({
      dialogFormVisible: false,
      formLabelWidth: "34%",
    });
    const radio = ref("2");
    return {
      value,
      ...toRefs(data),
      value2,
      ...toRefs(data2),
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
<style lang="scss">
.course-add {
  .el-input__inner,
  .el-textarea__inner {
    width: 50%;
  }
  .el-select {
    .el-input__inner {
      width: 100%;
    }
  }
}

.tip-box {
  position: absolute;
  bottom: 5%;
  left: 21%;
  text-align: left;
  color: #8c8c8c;

  .desc-title {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  .publish-title {
    font-size: 14px;
    font-weight: 700;
  }

  .publish-text {
    font-size: 14px;
  }
}
</style>