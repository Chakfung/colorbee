<template>
  <div>
    <section id="hero">
      <div class="hero-container">
        <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

          <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

          <div class="carousel-inner" role="listbox">

            <!-- Slide 1 -->
            <div class="carousel-item active carousel-img">
              <img src="../../assets/image/home/slide1.jpg" alt="" class="carousel-img">
              <div class="carousel-container">
                <div class="carousel-content container">
                  <h2 class="animated fadeInDown">欢迎来到 <span>彩蜂摄影综合平台！</span></h2>
                  <p class="animated fadeInUp">如果你是一名摄影师，欢迎联系我们并加入我们为图库作出贡献.<br>If you are a photographer, welcome to join us and donate to the galley.</p>
                  <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <img src="../../assets/image/home/slide3.jpg" alt="" class="carousel-img">
              <div class="carousel-container">
                <div class="carousel-content container">
                  <h2 class="animated fadeInDown" style="color: rgba(64,49,40,0.92)">步进灵感的天堂！</h2>
                  <p class="animated fadeInUp" style="color: rgba(64,49,40,0.92)">如果你是一名设计师或者对素材感兴趣，欢迎购买我们的素材.<br>If you are a designer or interested in material, welcome to buy our material.</p>
                  <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
                </div>
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="carousel-item">
              <img src="../../assets/image/home/slide2.jpg" alt="" class="carousel-img">
              <div class="carousel-container">
                <div class="carousel-content container">
                  <h2 class="animated fadeInDown" style="color: rgba(63,108,111,0.92)">一起学习摄影技术！</h2>
                  <p class="animated fadeInUp" style="color: rgba(63,108,111,0.92)">如果你对摄影感兴趣，相信你在这能学到你想学的知识.<br>If you are interested in photography, I believe you can learn what you want to learn here.</p>
                  <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
                </div>
              </div>
            </div>

          </div>

          <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "SlideSection"
  }
</script>

<style scoped>

</style>