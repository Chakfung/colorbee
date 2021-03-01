<template>
  <div class="main-body">

    <slide-section></slide-section>

    <service-section></service-section>

    <photo-section></photo-section>

    <theme-section></theme-section>

    <blog-section></blog-section>
    <front-bottom></front-bottom>
  </div>
</template>

<script>
// @ is an alias to /src

  import SlideSection from '../components/home/SlideSection'
  import ServiceSection from '../components/home/ServiceSection'
  import PhotoSection from '../components/home/PhotoSection'
  import ThemeSection from '../components/home/ThemeSection'
  import BlogSection from '../components/home/BlogSection'
  import FrontBottom from  '../components/home/FrontButtom'


export default {
  name: 'Home',
  components: {

    SlideSection,
    ServiceSection,
    PhotoSection,
    FrontBottom,
    ThemeSection,
    BlogSection

  }
}
</script>
<style scoped lang="scss">
  @import '../assets/css/icofont/icofont.min.css';
  @import '../assets/css/style.css';
  @import '../assets/css/bootstrap.css';

</style>