<template>
  <div class="zhuanlan">
    <div class="header">
      <div class="header-title">原创文章</div>
      <div class="header-action">
        <div class="action"><span>热门</span></div>
        <div class="action"><span>最新</span></div>
        <div class="action"><span>评论</span></div>
      </div>
    </div>
    <ul class="entries">
      <li class="entry-item">
        <div class="user-row">作者</div>
        <div class="screenshot">图片</div>
        <div class="abstract-row">标题简介</div>
        <div class="footer-row">footer</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    // data () {

    // },
    props: ['parentRoute'],
    watch: {
      parentRoute: function (val) {
        // 获取到当前的路由，请求相应的数据
        console.log(val)
      }
    }
  }
</script>

<style lang="scss">
  .zhuanlan {
    .header {
      padding: 0 0.5em;
      border-bottom: 1px solid #f1f1f1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-title {
        padding-left: 1em;
      }
      .header-action {
        display: flex;
        .action:first-child {
          border: none;
        }
        .action {
          padding: 1em;
          cursor: pointer;
          position: relative;
          // 原网站设置字体用的是opacity
          opacity: 0.4;
          // 这里不可以直接对span设置:not(:last-child)，应该是只能对类或者id
          &:not(:last-child):after {
            position: absolute;
            width: 1px;
            height: 1em;
            top: 50%;
            margin-top: -0.5em;
            left: 100%;
            background-color: #ddd;
            content: ''
          }
        }
      }
    }
    .entries {
      .entry-item {
        padding: 1.5em;
      }
    }
  }
</style>