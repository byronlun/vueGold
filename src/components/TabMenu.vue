<template>
  <div id="tabMenu">
    <el-menu :default-active="dynamicRouter" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose" unique-opened router>
      <template v-for="(item, index) in menuData">
        <el-submenu :index="index+''" v-if="!item.leaf">
          <template slot="title">{{ item.label }}</template>
            <el-menu-item v-for="(childItem, childIndex) in item.children" :index="item.path+childItem.path">{{ childItem.value }}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuData: [{
          label: '专栏',
          path: '/zhuanlan',
          children: [{
            path: '/all',
            value: '全部'
          }, {
            path: '/frontend',
            value: '前端'
          }, {
            path: '/backend',
            value: '后端'
          }, {
            path: '/android',
            value: 'Android'
          }, {
            path: '/ios',
            value: 'iOS'
          }, {
            path: '/design',
            value: '设计'
          }, {
            path: '/product',
            value: '产品'
          }, {
            path: '/freebie',
            value: '工具资源'
          }, {
            path: '/article',
            value: '阅读'
          }]
        }, {
          label: '收藏集',
          path: '/collections',
          children: [{
            path: '/recommended',
            value: '编辑推荐'
          }, {
            path: '/all',
            value: '全部'
          }]
        }, {
          label: '发现',
          path: '/explore',
          children: [{
            path: '/all',
            value: '全部'
          }, {
            path: '/frontend',
            value: '前端'
          }, {
            path: '/backend',
            value: '后端'
          }, {
            path: '/android',
            value: 'Android'
          }, {
            path: '/ios',
            value: 'iOS'
          }, {
            path: '/design',
            value: '设计'
          }, {
            path: '/product',
            value: '产品'
          }, {
            path: '/freebie',
            value: '工具资源'
          }, {
            path: '/article',
            value: '阅读'
          }]
        }],
        dynamicRouter: ''
      }
    },
    //
    mounted () {
      this.$router.replace(this.dynamicRouter)
    },
    watch: {
      dynamicRouter: function (val) {
        console.log(val)
        // 触发routeChange并且传递当前附录给父组件
        this.$emit('routeChange', val)
      }
    },
    methods: {
      handleSelect (path) {
        console.log(path)
        this.dynamicRouter = path
        console.log(this.$router)
      },
      handleOpen (data) {
        // 打开菜单栏，默认选中第一个item，同时修改路由
        this.dynamicRouter = `${this.menuData[data].path}${this.menuData[data].children[0].path}`
        this.$router.replace(this.dynamicRouter)
      },
      handleClose (data) {
        console.log(data)
      }
    }
  }
</script>

<style>
  #tabMenu .el-tree {
    border: 0px;
  }
  #tabMenu .el-submenu .el-menu-item {
    padding: 0 20px;
  }
</style>