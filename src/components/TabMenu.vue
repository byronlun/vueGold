<template>
  <div id="tabMenu">
    <el-tree :data="menuData" :props="defaultProps" @node-click="handleNodeClick" highlight-current="true"></el-tree>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuData: [{
          label: '专栏',
          children: [{
            label: '全部'
          }, {
            label: '前端'
          }, {
            label: '后端'
          }, {
            label: 'Android'
          }, {
            label: 'iOS'
          }, {
            label: '设计'
          }, {
            label: '产品'
          }, {
            label: '工具资源'
          }, {
            label: '阅读'
          }]
        }, {
          label: '收藏集',
          children: [{
            label: '编辑推荐'
          }, {
            label: '全部'
          }]
        }, {
          label: '发现',
          children: [{
            label: '全部'
          }, {
            label: '前端'
          }, {
            label: '后端'
          }, {
            label: 'Android'
          }, {
            label: 'iOS'
          }, {
            label: '设计'
          }, {
            label: '产品'
          }, {
            label: '工具资源'
          }, {
            label: '阅读'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data)
      }
    }
  }
</script>

<style>
  .el-tree {
    border: 0px;
    text-align: left;
  }
</style>