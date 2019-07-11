# 返回顶部组件

> Vue.js 2.x C端的业务组件。


## 安装

```
$ yarn add embacktop
```

## 返回顶部实例


``` vue
<w-backtop-pc
  :complaintText="complaintText"
  :qrcodeImg="qrcodeImg"
 />
```

``` js
export default {
  data() {
    return {
      complaintText: '投诉二维码',
      qrcodeImg:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3245994356,1314206822&fm=27&gp=0.jpg'
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


## 需要的环境

- node.js >= 9.0.0
- npm >= 5.0.0

## 说明

本仓库是用脚手架 [fecli](https://github.com/fe6/fecli)，结合 [component-template](https://github.com/fe6/component-template) 模板生成的。
