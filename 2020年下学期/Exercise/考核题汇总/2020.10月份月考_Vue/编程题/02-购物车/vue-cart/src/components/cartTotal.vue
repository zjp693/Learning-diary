<template>
<!-- 结算模板 -->
     <div class="total">
          <span>总价：{{price}}</span>
          <button>结算</button>
        </div>
</template>

<script>
export default {
    // 还不懂？？？？
    // 接收
 props: ["list"],
   computed: {
    //    计算价格
                price() {
                    var sum = 0
                    this.list.forEach(element => {
                        if (element.num < 0 || isNaN(element.num)) {
                            element.num = 0
                        }
                        sum += element.num * element.price
                    });
                    return sum
                }
            }
}
</script>

<style>

</style>