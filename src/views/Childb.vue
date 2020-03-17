<!--
 * @Author: nieloong@aliyun.com
 * @Date: 2020-03-14 11:37:00
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-03-14 11:39:00
 * @FilePath: /StateGridKms/base-lear/src/views/Childb.vue
 * @Descripttion:
 * @version:
 -->
<template>
  <div>
    <h3 style="color:#f88f88">+Child Two</h3>
    <p>
      <span style="color:#ff0;">父传子2:</span>
      {{msg}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
</style>