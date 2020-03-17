<!--
 * @Author: nieloong@aliyun.com
 * @Date: 2020-03-14 11:15:07
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-03-16 23:31:06
 * @FilePath: /StateGridKms/base-lear/src/views/Child.vue
 * @Descripttion:
 * @version:
 -->
<template>
  <div>
    <h3 style="color:#f88f88">+Child</h3>
    <p>
      <span style="color:#f00;">父传子1：</span>
      {{msg}}
    </p>
    <button @click="passMsg">儿子给父亲传值</button>
    <p>
      <span style="color:#f00;">bus传值：</span>
      {{NchildeMsg}}
    </p>
  </div>
</template>

<script>
import bus from "../util/bus";
export default {
  // 接收父亲值 props [方法一]
  props: {
    // 定义
    msg: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      NchildeMsg: "looong child"
    };
  },
  // click钩子
  created() {
    // 通过 $listeners【监听所以子组件大自定义事件】 获取
    console.log(this.$listeners);
  },
  methods: {
    passMsg() {
      // 给儿子给父亲传值 $emit [方法一]
      this.$emit("showMsg", "大儿子给你传值了");
    }
  },
  // 渲染完成后 监听事件
  mounted() {
    // 通过$attrs获取
    console.log("attrs", this.$attrs);
    // 监听msg 返回函数
    bus.$on("msg", val => {
      this.NchildeMsg = val;
    });
  }
};
</script>

<style scoped>
</style>