<!--
 * @Author: nieloong@aliyun.com
 * @Date: 2020-03-14 11:14:10
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-03-17 00:06:52
 * @FilePath: /StateGridKms/base-lear/src/views/Parent.vue
 * @Descripttion:
 * @version:
 -->
<template>
  <div>
    <h1 style="color:#f88f88">+Parent</h1>
    <h5>
      <span style="color:#ccc;">{{msg}}</span>
    </h5>
    <n-child v-bind:msg="'父亲给儿子传值'" @showMsg="showMsg" v-bind="$attrs"></n-child>
    <n-childb :msg="'父亲给二儿子值'" ref="childb"></n-childb>
    <n-grandson v-on="$listeners"></n-grandson>
  </div>
</template>

<script>
import NChild from "./Child";
import NChildb from "./Childb";
import NGrandson from "./Grandson";

export default {
  components: {
    NChild,
    NChildb,
    NGrandson
  },
  data() {
    return {
      msg: "",
      count: 0
    };
  },
  methods: {
    showMsg(val) {
      this.msg = val;
    }
  },
  mounted() {
    // 通过 $parent/$children 方法父子间传值 [方法二]
    console.log("$parent:", this.$parent);
    console.log("$children", this.$children);
    // ref 方法传值 [方法三]
    console.log("ref", this.$refs);
  }
};
</script>

<style scoped>
</style>