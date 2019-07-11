# 返回顶部
> 基于Vue.js 的 前端业务组件。

## 返回顶部实例
滚动到第二屏时显示组件


```` html
<w-backtop-pc
  :complaintText="complaintText"
  :qrcodeImg="qrcodeImg"
 />
````

``` js
export default {
  data() {
    return {
      complaintText: '投诉二维码',
      qrcodeImg:'https://www.baidu.com/'
    }
  },
  components: {
    WBacktopPc,
  },
}
```


<div class="backtop-pc-demo">
 <w-backtop-pc
  :complaintText="complaintText"
  :qrcodeImg="qrcodeImg"
 />
 </div>

## API

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|complaintText|投诉文案。|String|否|投诉|
|topText|返回顶部文案。|String|否|TOP|
|qrcodeText|二维码文案。|String|否|扫码前往移动端投诉|
|qrcodeImg|投诉二维码图片。|String|否|-|

<script>
import WBacktopPc from './BacktopPc';

export default {
  data() {
    return {
      complaintText: '投诉二维码',
      qrcodeImg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3245994356,1314206822&fm=27&gp=0.jpg'
    }
  },
  components: {
    WBacktopPc,
  },
}
</script>
<style lang="scss" scope>
@import './assets/style/backtoppc.scss';
</style>
