<template>
  <div class="select-modal-container" v-if="modalOpen">
    <div class="dim"></div>
    <div class="select-content up">
      <div class="container hp-10 pt-05 ta-c lh-00 fs-00"><button class="layer-line-close" @click="sendParentCloseModal"></button></div>
      <div class="container bd-f5-b01">
        <div class="ta-c fs-17 bold lh-14 pv-15 ph-35">{{ modalTitle }}</div>
        <button class="layer-close"><img src="//image.smartscore.kr/majesty/global/mobile/newicon/ic_gnb_close_pop_big.svg" /></button>
      </div>
      <div class="container max-hp-80">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name : "Sselect",
  props: {
    modalOpen: {
      type: Boolean,
      default: false
    },
    modalTitle:{
      type: String,
      default: ""
    }
  },
  methods :{
    sendParentCloseModal(){
      this.$emit("closeModal");
    }
  }
}
</script>
<style lang="scss" scoped>
.select-modal-container{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  .dim{
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 0;
    top: 0;
    left: 0;
    z-index: 300;
    background:rgba(0,0,0,.4);
  }
  .select-content{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 301;
    .layer-line-close{
      height:3px;
      width:35px;
      border-radius: 4px;
      background: #BBBBBB;
      margin-top: 3px;
    }
    .layer-close{
      position: absolute;
      right:15px;
      top:20px;
    }
  }
}

</style>
