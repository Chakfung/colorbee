<template>
<div>
  <div  class="col-md-4"  style="margin-bottom: 20px" v-for="(item) in photos" :key="item._id">
    <div class="col-md-12 portfolio">
      <div class="portfolio-wrap  mb-40">
        <img :src="item.imgurl" class="img-fluid" alt="">
        <div class="portfolio-info">
          <h4>{{item.name}}</h4>
          <p>{{item.sort}}</p>
          <div class="portfolio-links">
            <a href="#" data-toggle="modal"  data-target="#productModal"><i class="icofont-eye"></i></a>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="margin-right: 10px"><span aria-hidden="true">x</span></button>
          </div>
          <div class="modal-body">
            <div class="modal-img">
              <img src="../../assets/image/home/slide1.jpg" alt=""/>
            </div>
            <div class="modal-pro-content">
              <h3>Phasellus Vel Hendrerit</h3>
              <div class="pro-rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <span>(2 customer reviews)</span>
              <div class="price">
                <span>$70.00</span>
                <span class="old">$80.11</span>
              </div>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.</p>
              <form action="#">
                <input type="number" value="1" />
                <button>Add to cart</button>
              </form>
              <div class="product_meta">
                <span class="posted_in">类别: <a rel="tag" href="#">风景</a>, <a rel="tag" href="#">Music</a></span> <span class="tagged_as">Tags: <a rel="tag" href="#">Albums</a>, <a rel="tag" href="#">Music</a></span>
              </div>
              <div class="social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import '../../assets/js/counterup/counterup.min'
  import '../../assets/js/venobox/venobox.min'
  import '../../assets/js/jquery-sticky/jquery.sticky'
  export default {
    props: ['photos'],
    name: "PhotoProduct",
    data(){
      return{
        tphotos:this.photos,

      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/shortcode/modal.css';
  @import '../../assets/css/font-awesome.min.css';
</style>