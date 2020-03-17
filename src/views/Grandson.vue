<!--
 * @Author: nieloong@aliyun.com
 * @Date: 2020-03-16 21:31:53
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-03-17 00:19:58
 * @FilePath: /StateGridKms/base-lear/src/views/Grandson.vue
 * @Descripttion:
 * @version:
 -->
<template>
  <div>
    <h5 style="color:#f88f88">+Grandson</h5>
    <button @click="tarnsmit">传爷爷</button>
  </div>
</template>

<script>
let count = 0;
export default {
  methods: {
    tarnsmit() {
      count++;
      this.$emit("changeData", "给爷爷送值来了😄！第" + count + "次");
    }
  }
};
</script>

<style scoped>
</style>