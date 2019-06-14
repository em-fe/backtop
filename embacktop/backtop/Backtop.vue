<template>
  <div class="backtop-pc" :class="{'backtop-pc-fadein':showFlag}" >
    <div class="backtop-pc-item" @mouseover="enterMethod(complaint)" @mouseout="outMethod(complaint)">
      <img v-show="!complaint.hoverFlag" :src="require(`assets/img/${complaint.icon}`)" alt="complaintIcon" class="backtop-pc-item-complaint">
      <img v-show="complaint.hoverFlag" :src="require(`assets/img/${complaint.hoverIcon}`)" alt="complaintIcon" class="backtop-pc-item-complaint">
      <div>{{complaintText}}</div>
      <div class="backtop-pc-item-qrcode" :class="{'backtop-pc-item-qrcode-fadein':complaint.hoverFlag}" @mouseover.stop @mouseout.stop>
        <img v-if="!qrcode" class="backtop-pc-item-qrcode-img" :src="require(`assets/img/${qrcodeImg}`)" alt="qrcode">
        <img v-if="qrcode" class="backtop-pc-item-qrcode-img" :src="qrcode" alt="qrcode">
        <div class="backtop-pc-item-qrcode-text">{{qrcodeText}}</div>
        <div class="backtop-pc-item-qrcode-right"></div>
      </div>
    </div>
    <div class="backtop-pc-item"  @click="backTopMethod" @mouseover="enterMethod(backTop)" @mouseout="outMethod(backTop)">
      <img v-show="!backTop.hoverFlag" :src="require(`assets/img/${backTop.icon}`)" alt="backTopIcon" class="backtop-pc-item-backTop">
      <img v-show="backTop.hoverFlag" :src="require(`assets/img/${backTop.hoverIcon}`)" alt="complaintIcon" class="backtop-pc-item-backTop">
      <div>{{topText}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WBacktop',
  data() {
    return {
      complaint:  {
        icon: 'complaint.png',
        hoverIcon: 'complaint-hover.png',
        hoverFlag: false,
      },
      backTop:  {
        icon: 'backtop.png',
        hoverIcon: 'backtop-hover.png',
        hoverFlag: false,
      },
      showFlag:false,
      qrcodeImg: 'qrcode.png',
    };
  },
  props: {
    complaintText:{
      type: String,
      default: '投诉',
    },
    topText:{
      type: String,
      default: 'TOP',
    },
    qrcode: {
      type: String,
    },
    qrcodeText: {
      type: String,
      default: '扫码前往移动端投诉',
    },
  },
  methods: {
    backTopMethod() {
      let currentY =document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollAnimation(currentY, 0)
    },
    enterMethod(item) {
      item.hoverFlag = true;
    },
    outMethod(item) {
      item.hoverFlag = false;
    },
    scrollAnimation(currentY, targetY) {
      let needScrollTop = targetY - currentY;
      let _currentY = currentY;
      setTimeout(() => {
        const dist = Math.ceil(needScrollTop / 10);
        _currentY += dist;
        window.scrollTo(_currentY, currentY);
        if (needScrollTop > 10 || needScrollTop < -10) {
          this.scrollAnimation(_currentY, targetY);
        } else {
          window.scrollTo(_currentY, targetY);
        }
      }, 10)
    },
    watchScroll() {
      let scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
      if (scrollTop>0){
        this.showFlag=true;
      }else{
        this.showFlag=false;
      }
    }
  },
  mounted() {
    this.watchScroll();
    window.onscroll=()=>{
     this.watchScroll();
    }
  },
  watch:{
    qrcode: {
      handler(val) {
        this.qrcode = val;
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
