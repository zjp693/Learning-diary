<template>
<!-- 模板 -->
   <div>
           <div class="item" v-for="(item) in list" :key="item.id">
            <img :src="item.img" />
            <div class="name">{{item.name}}</div>
            <div class="change">
              <a href=""  @click.prevent="sub(item.id)">－</a>
              <input type="text" class="num" :value="item.num" @blur="change(item.id,$event)"/>
              <a href=""  @click.prevent="add(item.id)">＋</a>
            </div>
            <div class="del" @click.prevent="del(item.id)">×</div>
          </div>
          </div>
</template>

<script>
export default {
    props: ["list"],
            methods: {
                // 直接输入
                change(id, event) {
                    // console.log(id);
                    this.$emit("change-num", {
                        id: id,
                        type: "change",
                        num: event.target.value
                    })
                },
                // 删除
                del(id) {
                    this.$emit("del", id)
                },
                // 加
                add(id) {
                    this.$emit("change-num", {
                        id: id,
                        type: "add",
                    })
                },
                // 减
                sub(id) {
                    this.$emit("change-num", {
                        id: id,
                        type: "sub",
                    })
                }

            },
}
</script>

<style>

</style>