# 返回顶部
> 基于Vue.js 的 前端业务组件。

## 返回顶部实例
滚动到第二屏时显示组件


```` html
<w-backtop />
````


<div class="backtop-demo">
 <w-backtop
  :complaintText="complaintText"
  :qrcode="qrcode"
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
|qrcode|投诉二维码。|string|否|默认二维码|
|qrcodeText|二维码文案。|string|否|扫码前往移动端投诉|

<script>
import WBacktop from './Backtop';

export default {
  data() {
    return {
      complaintText: '投诉二维码',
      qrcode: 'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560495268534&di=0006d51997ddfb49493a58f47edf68aa&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F54ebececeda0217648263cc944d6cfd413a17cdf2cc6-MGHS0y_fw658',
    }
  },
  components: {
    WBacktop,
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
@import './assets/style/backtop.scss';
</style>
