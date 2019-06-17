<template>
  <div class="backtop-pc" :class="{'backtop-pc-fadein':showFlag}" >
    <div class="backtop-pc-item" @mouseover="enterMethod(complaint)" @mouseout="outMethod(complaint)">
      <img v-show="!complaint.hoverFlag" src="./assets/img/complaint.png" alt="complaintIcon" class="backtop-pc-item-complaint">
      <img v-show="complaint.hoverFlag" src="./assets/img/complaint-hover.png" alt="complaintIcon" class="backtop-pc-item-complaint">
      <div>{{complaintText}}</div>
      <div class="backtop-pc-item-qrcode" :class="{'backtop-pc-item-qrcode-fadein':complaint.hoverFlag}" @mouseover.stop @mouseout.stop>
        <img class="backtop-pc-item-qrcode-img" src="./assets/img/qrcode.png" alt="qrcode">

        <div class="backtop-pc-item-qrcode-text">{{qrcodeText}}</div>
        <div class="backtop-pc-item-qrcode-right"></div>
      </div>
    </div>
    <div class="backtop-pc-item"  @click="backTopMethod" @mouseover="enterMethod(backTop)" @mouseout="outMethod(backTop)">
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
      qrcodeImg: 'qrcode.png',
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
          window.scrollTo(currentScrollY, targetY);
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
  watch: {
    qrcode: {
      handler(val) {
        this.qrcode = val;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
