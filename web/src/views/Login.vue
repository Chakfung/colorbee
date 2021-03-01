<template>
  <!-- login-area start -->
  <!-- Content   ================================================== -->
  <div  class="loginbg">
    <img src="../assets/image/login/loginbg.jpg" alt="">
<!--    <login-panel></login-panel>-->
<!--    <login-card></login-card>-->
<!--    <slide-section></slide-section>-->
    <router-view></router-view>
  </div>
      <!-- /.row -->


  <!-- #content -->
  <!-- login-area end -->
</template>

<script>
  import $ from 'jquery'
   // import LoginPanel from '../components/Login/loginpanel'
  import RegisterCard from '../components/login/RegisterCard'
  import LoginCard from '../components/login/LoginCard'
  // import SlideSection from '../components/login/SlideSection'
  // $(function(){
  //
  //       $("#topbar2").css({"display":"none","position":"fixed","top":"0","transition":"0s"});
  //
  // });



  export default {
    name: "Login",
    components: {

       // LoginPanel,
      // SlideSection,
      LoginCard,
      RegisterCard
      // Register

    },
  }
</script>

<style scoped>
  @import '../assets/css/responsive.css';
  @import '../assets/css/style.css';
  @import '../assets/css/default.css';

</style>