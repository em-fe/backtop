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
  :domainName="domainName"
 />
```

``` js
import WBacktopPc from './BacktopPc';

export default {
  data() {
    return {
      complaintText: '投诉二维码',
      domainName:'http:baidu.com'
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
  :domainName="domainName"
 />
 </div>


## API

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|complaintText|投诉文案。|String|否|投诉|
|topText|返回顶部文案。|String|否|TOP|
|qrcodeText|二维码文案。|String|否|扫码前往移动端投诉|
|qrcodeImg|投诉二维码图片。|String|否|-|
|domainName|域名。如果传了域名，按照域名及下面参数生成二维码|String|否|-|
|orgId|主办ID|Number|否|-|
|userId|用户ID|Number|否|-|
|productType|类型|String|否|-|
|productId|产品id|Number|否|-|


## 需要的环境

- node.js >= 9.0.0
- npm >= 5.0.0

## 说明

本仓库是用脚手架 [fecli](https://github.com/fe6/fecli)，结合 [component-template](https://github.com/fe6/component-template) 模板生成的。
