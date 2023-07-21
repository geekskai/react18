# react18

从0到1实现react18的功能

## 初始化搭建整个项目的工程

### 在分支 release/init-project

1. 定义项目结构（monorepo）
2. 定义开发规范（lint、commit、tsc、代码风格）
3. 选择打包工具（rollup）

### 在分支 release/implement-JSX 实现JSX

1. 实现ReactElement 构造函数

- 新建 packages/shared/ReactSymbols.ts 用于存放独一无二的类型

2. 实现jsx方法和使用rollup打包
