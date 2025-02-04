<template>
<div class="main-container bg-white">
  <div class="hero flex flex-row w-[100vw]">
    <div class="left flex  relative z-[0]">
      <img :src=Images[0] alt="hero image" class="md:w-[80vw]"/>
    <div class="nav flex flex-row absolute z-10 left-5 top-5  gap-5">
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
    <div class="right w-[60%] justify-center items-center m-12 ">
      <h1 class="text-4xl font-bold md:w-[370px]">
        Discover innovative ways to decorate
      </h1>
      <p class="text-[16px] font-semibold text-[#a1a1a1] md:w-[440px]">
        We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.
      </p>

      <span class="uppercase tracking-[12px] flex flex-row gap-3 font-bold text-[#454545] mt-7">
        Shop now <span class="mt-1">
          <img :src=ArrowRight alt="arrow right" class=""/>
        </span>
      </span>
  

    </div>

  </div>

  We are available all across the globe

  With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.

  Shop now

  Manufactured with the best materials

  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.

  Shop now

  About our furniture

  Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.
</div>

</template>

<script>
import Logo from './assets/images/logo.svg';
import Image1 from './assets/images/desktop-image-hero-1.jpg';
import Image2 from './assets/images/desktop-image-hero-2.jpg';
import Image3 from './assets/images/desktop-image-hero-3.jpg';
import ArrowRight from './assets/images/icon-arrow.svg';
export default {
  name: 'App',
  data() {
    return {
      Logo: Logo,
      Images: [Image1, Image2, Image3],
      ArrowRight: ArrowRight,
    }
  },
  components: {
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
</style>
