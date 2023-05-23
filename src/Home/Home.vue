<template>
  <div class="home">

    <div class="dp-f flex-column gap-15 pa-50">
      <div>
        <p @click="openModal">Select</p>
        <div class="form-field">
          <Sselect :modalOpen="isModalOpen" :modalTitle="'select'" @closeModal="closeModal" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Sselect from "@/components/Sselect.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {Sselect},
  data(){
    return{
      isModalOpen : false,
    }
  },
  methods:{
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
}
</script>

<style lang="scss">

.m-main-ft-banner-wrap{
  .slide-content-foot-pager{
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    gap: 6px;
    span{
      display: inline-flex;
      width: 40px;
      height: 2px;
      background: #E6E6EC;
      &.active{
        background: #111111;
      }
    }
  }
}


.m-main-customer-scroll-wrap{
  overflow-x:scroll;
  white-space:nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div{
    display: inline-block;
    width: 95vw;
  }
}


.m-main-banner-container{
  position: relative;
  height: 100vh;
  .slide{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: unset;
    background: url(https://image.smartscore.kr/majesty/global/mobile/main/main_visual_banner-img.jpg);
    background-size: cover;
  }
  .paging-bar{
    position: absolute;
    left:50%;
    bottom:90px;
    transform: translateX(-50%);
    width:210px;
    height: 2px;
    background:#767676;
    span.active{
      background: #b5a371;
      height: 100%;
      width:33.3333%;
    }
  }
  .main-scrolldown{
    position: absolute;
    left:50%;
    bottom: 20px;
    transform: translateX(-50%);
  }
}

.m-main-craft-area{
  .m-craft-txt-box{
    position: absolute;
    z-index:6;
    left:32px;
    bottom: 116px;
  }
  .video-box .video-box-play{
    top:25%;
    transform: translate(-50%, -25%)
  }
}

.m-main-majesty-slide-wrap{
  .slide-item{
    position: relative;
    z-index:2;
  }
  &:before{
    position: absolute;
    content: "";
    display: block;
    clear: both;
    width: calc(100% + 60px);
    height: 50%;
    bottom:0;
    left: -30px;
    z-index: 0;
    background: #aa9868;
  }
}


.m-main-majesty-paging{
  padding-left:30px;
  ul{
    margin-top:16px;
    overflow-x:auto;
    white-space:nowrap;
    font-size:0;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar{
      display: none;
    }
    li{
      display:inline-block;
      width:85px;
      height:120px;
      margin-right: 8px;
    }
  }
}

</style>


