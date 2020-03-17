<!--
 * @Author: nieloong@aliyun.com
 * @Date: 2020-03-14 10:44:57
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-03-16 23:27:03
 * @FilePath: /StateGridKms/base-lear/src/App.vue
 * @Descripttion:
 * @version:
 -->
<template>
  <div id="app">
    <button @click="passMsg">bus传值</button>
    <!--
      @changeData 监听器在 Parent【父亲】中定义
      @sendData 监听器在 Grandson【孙子】中定义
    -->
    <n-parent :msga="msga" :msgb="msgb" :msgc="msgc" @changeData="changeData" @sendData="sendData"></n-parent>
    <div>{{changeMsg}}</div>
    <div>{{sendMsg}}</div>
  </div>
</template>

<style>
</style>

<script>
import bus from "./util/bus";

import NParent from "./views/Parent";

export default {
  data() {
    return {
      msga: "msg a",
      msgb: "msg b",
      msgc: "msg c",
      changeMsg: "",
      sendMsg: ""
    };
  },
  components: {
    NParent
  },
  // 遍历 bind
  methods: {
    passMsg() {
      bus.$emit("msg", "坐着bug.js传数据");
    },
    changeData(msg) {
      console.log("AppChangData" + msg);
      this.changeMsg = msg;
    },
    sendData(msg) {
      console.log("AppSendData" + msg);
      this.sendMsg = msg;
    }
  }
};
</script>