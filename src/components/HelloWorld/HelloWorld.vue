<script setup lang="ts">
import { getUser } from '@/apis/user/index'

defineProps<{ msg: string }>()
let count = ref({})
const open = () => {
  ElMessage('hahaha')
}
async function init() {
  count = await getUser(
    '/sugrec',
    {},
    {
      headers: {
        'X-Custom-Header': 'foobar'
      }
    }
  )
  console.log('hRES:', count)
}
init()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <el-button type="primary" @click="open">
      <span>count is {{ count }}</span>
      <el-icon><i-ep-loading /></el-icon>
      <el-icon><i-ep-user /></el-icon>
      <el-icon><i-ep-fullScreen /></el-icon>
      <i-ep-refresh />
    </el-button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
    official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
