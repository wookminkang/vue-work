<template>
  <div id="app">
    <Header />
    <perfect-scrollbar class="body-wrapper">
      <ul>
        <li v-for="(lists,index) in imgData" :key="index">
          {{lists.author}}
          <img :src="lists.download_url" width="110px" height="40px"  loading="lazy" />
        </li>
      </ul>


      <ul>
        <li v-for="(lists,index) in userData" :key="index">
          {{lists.author}}
          <br>
          {{lists.download_url}}
        </li>
      </ul>
      <router-view/>
    </perfect-scrollbar>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
import {userList} from "@/api";



export default {
  name: 'App',
  data(){
    return{
      imgData : [],
      userData : [],
    }
  },
  components: {Footer, Header},
  mounted() {
    userList()
        .then(({data})=>{
          console.log(data)
          this.userData = data;
        });
  }
}
</script>

<style>

</style>
