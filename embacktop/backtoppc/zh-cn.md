# 返回顶部
> 基于Vue.js 的 前端业务组件。

## 返回顶部实例
滚动到第二屏时显示组件


```` html
<w-backtop-pc />
````


<div class="backtop-pc-demo">
 <w-backtop-pc
  :complaintText="complaintText"
 />
    <p>这是一段文字</p>
 		<p>这是一段文字</p>
 		<p>这是一段文字</p>
 		<p>这是一段文字</p>
 		<p>这是一段文字</p>
 		<p>这是一段文字</p>
 		<p>这是一段文字</p>
 		<p>这是一段文字</p>
 		<p>这是一段文字</p>
 		<p>这是一段文字</p>
 </div>

## API

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|complaintText|投诉文案。|string|否|投诉|
|topText|返回顶部文案。|string|否|TOP|
|qrcodeText|二维码文案。|string|否|扫码前往移动端投诉|

<script>
import WBacktopPc from './BacktopPc';

export default {
  data() {
    return {
      complaintText: '投诉二维码',
    }
  },
  components: {
    WBacktopPc,
  },
  mounted() {
    
  },
  beforeDestroy() {
  },
  methods: {
  },
}
</script>
<style lang="scss" scope>
@import './assets/style/backtoppc.scss';
</style>
