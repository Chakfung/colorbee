<template>
  <div><section id="services" class="services">
    <div class="container">

      <div class="section-title">
        <h2>服务</h2>
      </div>

      <div class="row">
        <div class="icon-box" data-aos="fade-up" @click="goGallery()">
          <div class="icon"><i class="icofont-image"></i></div>
          <h4 class="title"><a >图片销售</a></h4>
          <p class="description">你可以从这里买到各种类型的图片素材</p>
        </div>
        <div class="icon-box" data-aos="fade-up" @click="goBlog()" data-aos-delay="100">
          <div class="icon"><i class="icofont-tasks-alt"></i></div>
          <h4 class="title"><a >查看博客</a></h4>
          <p class="description">查看关于摄影的博客，学习摄影知识</p>
        </div>
        <div class="icon-box" data-aos="fade-up" @click="goAppoint()" data-aos-delay="100">
          <div class="icon"><i class="icofont-camera-alt"></i></div>
          <h4 class="title"><a >预约摄影</a></h4>
          <p class="description">查看关于摄影的博客，学习摄影知识</p>
        </div>

        <div class="icon-box" data-aos="fade-up" @click="goMe()" data-aos-delay="200">
          <div class="icon"><i class="icofont-settings"></i></div>
          <h4 class="title"><a >个人中心</a></h4>
          <p class="description">对个人信息进行修改和管理</p>
        </div>

      </div>

    </div>
  </section></div>
</template>

<script>
  export default {
    name: "ServiceSection",
    methods:{
      goGallery(){
        this.$router.push('/gallery')
        this.path = this.$route.path
      },
      goAppoint(){
        this.$router.push('/appoint')
        this.path = this.$route.path
      },
      goMe(){
        this.$router.push('/me')
        this.path = this.$route.path
      },
      goBlog(){
        this.$router.push('/blog')
        this.path = this.$route.path
      },
    }
  }
</script>

<style scoped lang="scss">

  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
</style>