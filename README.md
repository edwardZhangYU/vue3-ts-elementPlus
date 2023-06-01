# 准备

1.  必须要有 node 本脚手架基于 node 18.16.0 构建
2.  如果没有 pnpm 先安装 pnpm ： npm i -g pnpm

# 启动

安装依赖包： pnpm install 运行开发环境 npm run dev

如果需要： 测试打包 npm run build:test 生产打包 npm run build:pro

# 配置插件（vscode 编辑器）

vue3 支持 -------【Volar】 vue-ts 支持 -------【TypeScript Vue Plugin】 （Volar） Prettier -------【Prettier】 - Code formatter

在目标文件内右键选择【使用...格式化文档】配置默认格式化程序选择 Prettier

# 开发说明

1.图标使用 查看 element 内图标得英文如用户 user，，，则在系统中 自动注册 <i-ep-user /> 图表组件 可用<el-icon>组件包裹设置其他属性
