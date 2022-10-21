<template xmlns="http://www.w3.org/1999/html">
  <el-container>
    <el-aside width="200px" />
    <el-main>
      <h1 align="center">多目标方法软件缺陷预测</h1>
      <vue-markdown>{{ content }}</vue-markdown>
    </el-main>
    <el-aside width="0px" />
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import VueMarkdown from 'vue-markdown'
import md from '/src/views/dashboard/软件缺陷预测.md'
export default {
  name: 'Dashboard',
  components: {
    VueMarkdown
  },
  data() {
    return {
      content: md
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
