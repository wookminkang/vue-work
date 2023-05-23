<template>
  <div class="join">
    <section class="login-wrap ">
      <div class="content-box dp-f justify-center">
        <div class="login-content-box ph-120 pv-92 bg-ffffff">
          <h3 class="container ta-c fs-34 fw-700 lh-12">Join</h3>
          <div class="container">
            <div class="form-field mt-28">
              <input type="email" placeholder="아이디 또는 이메일" v-model="email">
            </div>
            <div class="form-field mt-28">
              <input type="text" placeholder="이름을 입력해 주세요." v-model="name">
            </div>
            <div class="form-field password mt-20">
              <input type="password" placeholder="비밀번호" v-model="pwd">
              <button class="form-icon">
                <img class="wh-24" src="https://image.smartscore.kr/majesty/global/ic_eye.svg">
              </button>
            </div>
          </div>
          <div class="container pt-12">
            <label class="button-input" for="d1">
              <div class="checkbox">
                <input type="checkbox" id="d1">
                <span class="check-icon"></span>
              </div>
              <span class="text fc-767676 ml-4">로그인 계정 저장</span>
            </label>
          </div>
          <div class="container pt-32">
            <button class="button-rectangle lage size-100" @click="submit">로그인</button>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {userRegiset} from "@/api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name : "Join",
  data(){
    return{
      email:"",
      pwd: "",
      name: "",
    }
  },
  methods:{
    submit(){
      const payload = {
        email : this.email,
        pwd : this.pwd,
        name : this.name
      }
      userRegiset(payload);
    }
  }
}
</script>
