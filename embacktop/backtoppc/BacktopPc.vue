<template>
  <div class="backtop-pc">
    <div class="backtop-pc-item" @mouseover="enterMethod(complaint)" @mouseout="outMethod(complaint)">
      <img v-show="!complaint.hoverFlag" src="./assets/img/complaint.png" alt="complaintIcon" class="backtop-pc-item-complaint">
      <img v-show="complaint.hoverFlag" src="./assets/img/complaint-hover.png" alt="complaintIcon" class="backtop-pc-item-complaint">
      <div>{{complaintText}}</div>
      <div class="backtop-pc-item-qrcode" :class="{'backtop-pc-item-qrcode-fadein':complaint.hoverFlag}" @mouseover.stop @mouseout.stop>
        <img class="backtop-pc-item-qrcode-img" v-if="!qrcodeImg" src="./assets/img/qrcode.png" alt="qrcode">
        <img class="backtop-pc-item-qrcode-img" v-if="qrcodeImg" :src="qrcodeImg" alt="qrcode">

        <div class="backtop-pc-item-qrcode-text">{{qrcodeText}}</div>
        <div class="backtop-pc-item-qrcode-right"></div>
      </div>
    </div>
    <div class="backtop-pc-itemtwo" :class="{'backtop-pc-itemtwo-fadein':showFlag}" @click="backTopMethod" @mouseover="enterMethod(backTop)" @mouseout="outMethod(backTop)">
      <img v-show="!backTop.hoverFlag" src="./assets/img/backtop.png" alt="backTopIcon" class="backtop-pc-item-backTop">
      <img v-show="backTop.hoverFlag" src="./assets/img/backtop-hover.png" alt="complaintIcon" class="backtop-pc-item-backTop">
      <div>{{topText}}</div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'WBacktopPc',
  data() {
    return {
      complaint: {
        hoverFlag: false,
      },
      backTop: {
        hoverFlag: false,
      },
      showFlag: false,
    };
  },
  props: {
    complaintText: {
      type: String,
      default: '投诉',
    },
    topText: {
      type: String,
      default: 'TOP',
    },
    qrcodeText: {
      type: String,
      default: '扫码前往移动端投诉',
    },
    qrcodeImg: {
      type: String,
      default: '',
    },
  },
  methods: {
    backTopMethod() {
      const currentY = document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollAnimation(currentY, 0);
    },
    enterMethod(item) {
      item.hoverFlag = true;
    },
    outMethod(item) {
      item.hoverFlag = false;
    },
    scrollAnimation(currentY, targetY) {
      const needScrollTop = targetY - currentY;
      let currentScrollY = currentY;
      setTimeout(() => {
        const dist = Math.ceil(needScrollTop / 10);
        currentScrollY += dist;
        window.scrollTo(currentScrollY, currentY);
        if (needScrollTop > 10 || needScrollTop < -10) {
          this.scrollAnimation(currentScrollY, targetY);
        } else {
          let timer = null;
          //window.scrollTo(currentScrollY, targetY);
          //感觉卡顿，再加一个过渡
          timer = setInterval(() => {
            const osTop = document.documentElement.scrollTop || document.body.scrollTop;
            const ispeed = Math.floor(-osTop / 7);
            window.scrollTo(osTop, (osTop + ispeed));
            if (osTop === 0) {
              clearInterval(timer);
            }
          }, 30);
        }
      }, 10);
    },
    watchScroll() {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        this.showFlag = true;
      } else {
        this.showFlag = false;
      }
    },
  },
  mounted() {
    this.watchScroll();
    window.onscroll = () => {
      this.watchScroll();
    };
  },
};
</script>
