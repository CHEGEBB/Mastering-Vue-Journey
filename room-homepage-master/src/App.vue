<template>
<div class="main-container bg-white">
  <div class="hero  w-[100vw] h-[400px] overflow-hidden sm:flex sm:flex-col md:flex md:flex-row flex flex-row bg-red-600 ">
    <div class="left flex  relative z-[0]">
      <img :src=Images[currentIndex] alt="hero image" class="md:w-[80vw]" v-show="scrollInterval"/>
    <div class="nav flex flex-row absolute z-10 left-5 top-5  gap-5 md:ml-8 md:flex sm:hidden ">
      <div class="hamburger sm:block md:hidden">
        <img :src=hamburger alt="hamburger" class="p-4"/>

      </div>
      <div class="logo">
        <img :src=Logo alt="logo"  class="justify-center items-center mt-1"/>
      </div>
      <div class="nav-links gap-5 justify-between ">
        <a href="#" class="lowercase text-[#ffffff] font-semibold">Home</a>
        <a href="#" class="lowercase text-[#ffffff] font-semibold">Shop</a>
        <a href="#" class="lowercase text-[#ffffff] font-semibold">About</a>
        <a href="#" class="lowercase text-[#ffffff] font-semibold">Contact</a>
      </div>

    </div>
    </div>
    <div class="scroll bg-black md:w-[200px] md:h-[60px] relative md:mt-[340px] ">
      <div class="scroll-content flex flex-row justify-between items-center">
        <div class="scroll-back">
          <img :src=Previous alt="arrow left" class="p-4" @click="previousImage"/>
        </div>
        <div class="scroll-next">
          <img :src=Next alt="arrow right" class="p-4" @click="nextImage" />
        </div>

      </div>

    </div>
    <div class="right w-[50%] justify-center items-center m-12 overflow-hidden -mt-4">
      <h1 class="text-5xl font-bold md:w-[450px]">
       {{words[currentIndex].title}}
      </h1>
      <p class="text-[16px] font-semibold text-[#a1a1a1] md:w-[440px]">
        {{words[currentIndex].content}}
      </p>

      <span class="uppercase tracking-[12px] flex flex-row gap-3 font-bold text-[#454545] mt-3 text-left">
        Shop now <span class="mt-1">
          <img :src=ArrowRight alt="arrow right" class=""/>
        </span>
      </span>
  

    </div>

  </div>
  <div class="about-section  flex flex-row w-[100%] lg:flex lg:flex-row">
    <div class="left-about ">
      <img :src=AboutImageDark alt="about image dark" class="h-[100%]"/>
    </div>
    <div class="center-about w-[800px] items-center justify-center p-10 ">
      <h2 class="text-lg font-bold uppercase tracking-[7px] text-left">About our furniture</h2>
      <p class="text-left text-[#a1a1a1] font-semibold w-[91%]">
        Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.
      </p>
      
    </div>
    <div class="right-about">
      <img :src=AboutImageLight alt="about image light" class="h-[100%]"/>
    </div>
  </div>

 
</div>

</template>

<script>
import Logo from './assets/images/logo.svg';
import Image1 from './assets/images/desktop-image-hero-1.jpg';
import Image2 from './assets/images/desktop-image-hero-2.jpg';
import Image3 from './assets/images/desktop-image-hero-3.jpg';
import ArrowRight from './assets/images/icon-arrow.svg';
import Previous from './assets/images/icon-angle-left.svg';
import Next from './assets/images/icon-angle-right.svg';
import AboutImageDark from './assets/images/image-about-dark.jpg';
import AboutImageLight from './assets/images/image-about-light.jpg';
import hamburger from'./assets/images/icon-hamburger.svg';
export default {
  name: 'App',
  data() {
    return {
      Logo: Logo,
      Images: [Image1, Image2, Image3],
      ArrowRight: ArrowRight,
      Previous: Previous,
      Next: Next,
      scrollInterval: [0],
      currentIndex: 0,
      AboutImageDark: AboutImageDark,
      AboutImageLight: AboutImageLight,
      hamburger: hamburger,
      words :[{
        title: 'Discover innovative ways to decorate',
        content: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        shopNow: 'Shop now',

      },
      {
        title: 'We are available all across the globe',
        content: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
        shopNow: 'Shop now',
      },
      {
        title: 'Manufactured with the best materials',
        content: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
        shopNow: 'Shop now',
      }
      ]
    }
  },
  components: {
  },
  methods:{
    nextImage() {
          this.currentIndex = (this.currentIndex + 1) % this.Images.length;
    },
    previousImage() {
      this.currentIndex= (this.currentIndex - 1 && this.currentIndex >=0) % this.Images.length;
    },
  },
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  font-family: 'League Spartan', sans-serif;
}
.nav-links{
  display: flex;
  justify-content: space-between;
}
.right{
  text-align: left;
  padding: 60px 50px;
  margin-left: -50px !important;
}


</style>
