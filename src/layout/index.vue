<template>
  <el-container style="height: 100%">
    <el-header style="background-color: red">Header</el-header>
    <el-container>
      <el-aside width="200px" style="background-color: var(--zwj-color-menuBg)">
        <el-scrollbar max-height="calc(100vh - 60px)">
          <el-menu
            class="el-menu-wrap"
            default-active="3-1"
            active-text-color="#ffd04b"
            background-color="#545c64"
            text-color="#fff"
          >
            <el-menu-item index="1">
              <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <span>用户管理</span>
              </template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-1">item one</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <span>xx管理</span>
              </template>
              <el-menu-item index="3-1">item one</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <span>pp管理</span>
              </template>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container style="background-color: aqua">
        <el-main>
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </el-main>
        <el-footer style="background-color: pink">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.el-menu-wrap {
  width: $menu-width;
  height: 100%;
}
</style>
