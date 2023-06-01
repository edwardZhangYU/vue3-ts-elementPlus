<script setup lang="ts" name="Hello">
import logo from '@/assets/a.jpg'
import { useDemoStore } from '@/stores/modules/demo'

const store = useDemoStore()
</script>

<template>
  <div class="card a w-200px"> 你好{{ store.a }}<span class="b">asdasdasdasd</span></div>
  <el-image style="width: 100px; height: 100px" :src="logo" fit="fill" />
  <HelloWorld msg="hi" />
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
.a {
  color: red;
  background-clip: text;
  .b {
    color: green;
  }
}
</style>
