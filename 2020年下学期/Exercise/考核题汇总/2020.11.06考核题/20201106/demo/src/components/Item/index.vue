<template>
  <div class="home_container" v-if="questions.length > 0">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ itemNum }}</span>
      </header>
      <!-- 题目内容 -->
      <div class="item_back item_container_style">
        <div class="item_list_container">
          <!-- 题干 -->
          <header class="item_title">{{ itemTiops }}</header>
          <!-- 选项 -->
          <ul>
            <li
              class="item_list"
              v-for="(item, index) in questions[itemNum - 1].topic_answer"
              :key="item.topic_answer_id"
              @click="choosed(index, item.topic_answer_id)"
            >
              <span
                class="option_style"
                :class="{ has_choosed: choosedNum == index }"
                >{{ String.fromCharCode(65 + index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span
        class="next_item button_style"
        v-if="this.itemNum < this.questions.length"
        @click="nextItem"
      ></span>
      <span class="submit_item button_style" v-else @click="subititem"></span>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //答案的索引
      choosedId: null,
      // 答案的id
      choosedNum: null
    };
  },
  computed: {
    ...mapState(["itemNum", "questions"]),
    // 题目
    itemTiops() {
      return this.questions[this.itemNum - 1].topic_name;
    }
  },
  created() {
    this.$store.dispatch("getData");
  },
  methods: {
    //   按钮变色
    choosed(index, id) {
      this.choosedNum = index;
      this.choosedId = id;
    },
    // 下一题
    nextItem() {
      if (this.choosedNum != null) {
        this.choosedNum = null;
        console.log(this.questions.length);
        console.log(this.itemNum);
        this.$store.dispatch("additem", this.choosedId);
      } else {
        alert("空");
      }
    },
    // 提交
    subititem() {
      if (this.choosedNum != null) {
        this.choosedNum = null;               
        this.$store.dispatch("additems", this.choosedId);                        
        this.$router.push("/score");                                                                                                                                          
      } else {               
        alert("空");
      }                                                                                      
    }
  }
};
</script>

<style lang="scss">
.home_container {
  height: 100%;
  background-image: url("/images/1-1.jpg");
}
.next_item {
  background-image: url("/images/2-2.png");
}

.submit_item {
  background-image: url("/images/3-1.png");
}

.item_back {
  background-image: url("/images/2-1.png");
  background-size: 100% 100%;
}

.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item_list_container {
  margin: 2.5rem;
  padding: 0;
}

.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
