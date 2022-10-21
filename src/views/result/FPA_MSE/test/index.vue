<template>
  <div style="padding:30px;">
    <el-header>
      <el-select v-model="value" placeholder="请选择" @change="change">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-header>
    <br>
    <el-main>
      <div class="block" id="block" style="visibility: hidden">
        <el-image :src="src" />
      </div>
    </el-main>
    <el-footer>
      <div>
        <p>FPA为负的平均缺陷百分比，是前i (i:1到m) 个预测模块中实际缺陷比例的平均值。更大的FPA意味着更好的排名性能，并且可以在整体上帮助更好地分配测试资源。</p>
        <p>MSE为均方误差，更小的MSE意味着更好的预测精度</p>
        <p>NNZ为训练后非零值的数量，较小的NNZ意味着更稀疏的（更简单）的模型</p>
        <p>AAE为平均绝对误差，用来衡量模型的回归性能，AAE越小，模型的回归性能越好</p>
      </div>
    </el-footer>
  </div>
</template>

<script>
const constant = require('@/utils/CONSTANT')
const url_MSE_test = constant.url + 'FPA_MSE/test/'
export default {
  data() {
    return {
      src: '',
      options: constant.opt,
      value: ''
    }
  },
  methods: {
    change(label) {
      this.src = url_MSE_test + label + '.png'
      const k = document.getElementById('block')
      k.style.visibility = 'visible'
    }
  }
}
</script>
