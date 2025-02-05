<template>
  <div class="main-container bg-white">
    <div class="hero relative w-full min-h-[550px] sm:min-h-[450px] overflow-hidden">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-70 z-50">
        <div class="bg-white p-8 mt-20 mx-6">
          <div class="flex flex-row justify-end mb-6">
            <button @click="toggleMenu" class="text-2xl">&times;</button>
          </div>
          <nav class=" flex flex-row space-y-6 justify-between items-center -mt-[50px]">
            <a href="#" class="text-xl font-medium">home</a>
            <a href="#" class="text-xl font-medium">shop</a>
            <a href="#" class="text-xl font-medium">about</a>
            <a href="#" class="text-xl font-medium">contact</a>
          </nav>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row">
        <div class="relative w-full lg:w-[60%]">
          <img 
            :src="Images[currentIndex]" 
            :alt="words[currentIndex].title"
            class="hidden md:block w-full h-[550px] object-cover"
          />
          <img 
            :src="ImagesMobile[currentIndex]" 
            :alt="words[currentIndex].title"
            class="md:hidden w-full h-[360px] object-cover"
          />

          <nav class="absolute top-0 left-0 w-full p-8 flex items-center gap-x-8 z-20">
            <button @click="toggleMenu" class="md:hidden">
              <img :src="hamburger" alt="menu" class="w-6 h-6" />
            </button>
            <img :src="Logo" alt="logo" class="h-6" />
            <div class="hidden md:flex gap-x-8">
              <a href="#" class="text-white hover:border-b-2 border-white pb-1">home</a>
              <a href="#" class="text-white hover:border-b-2 border-white pb-1">shop</a>
              <a href="#" class="text-white hover:border-b-2 border-white pb-1">about</a>
              <a href="#" class="text-white hover:border-b-2 border-white pb-1">contact</a>
            </div>
          </nav>

          <div class="absolute bottom-0 right-0 lg:right-[-170px] flex bg-black z-20 lg:w-[170px]">
            <button 
              @click="previousImage" 
              class="p-6 hover:bg-gray-800 transition-colors"
            >
              <img :src="Previous" alt="Previous"/>
            </button>
            <button 
              @click="nextImage" 
              class="p-6 hover:bg-gray-800 transition-colors  lg:ml-12"
            >
              <img :src="Next" alt="Next" />
            </button>
          </div>
        </div>

        <div class="w-full lg:w-[40%] px-6 py-12 lg:px-16 lg:py-24">
          <h1 class="text-5xl lg:text-5xl font-bold mb-6 lg:w-[500px]">
            {{ words[currentIndex].title }}
          </h1>
          <p class="text-gray-500 mb-8 text-[18px] font-semibold">
            {{ words[currentIndex].content }}
          </p>
          <button class="flex items-center space-x-8 uppercase tracking-[0.8em] hover:text-gray-500 transition-colors font-semibold">
            <span>Shop now</span>
            <img :src="ArrowRight" alt="shop now" />
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 w-full">
      <div class=" lg:w-[400px]">
        <img :src="AboutImageDark" alt="dark furniture" class="w-full h-full object-cover" />
      </div>
      <div class="px-6 py-12 md:px-12 md:py-16 lg:w-[600px]">
        <h2 class="text-lg font-bold uppercase tracking-[0.5em] mb-4 lg:-ml-[35px]">
          About our furniture
        </h2>
        <p class="text-gray-500 lg:text-left lg:-ml-[40px]  w-[99%] font-semibold">
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>
      <div class=" lg:w-[400px] lg:ml-20">
        <img :src="AboutImageLight" alt="light furniture" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './assets/images/logo.svg'
import Image1 from './assets/images/desktop-image-hero-1.jpg'
import Image2 from './assets/images/desktop-image-hero-2.jpg'
import Image3 from './assets/images/desktop-image-hero-3.jpg'
import Image1Mobile from './assets/images/mobile-image-hero-1.jpg'
import Image2Mobile from './assets/images/mobile-image-hero-2.jpg'
import Image3Mobile from './assets/images/mobile-image-hero-3.jpg'
import ArrowRight from './assets/images/icon-arrow.svg'
import Previous from './assets/images/icon-angle-left.svg'
import Next from './assets/images/icon-angle-right.svg'
import AboutImageDark from './assets/images/image-about-dark.jpg'
import AboutImageLight from './assets/images/image-about-light.jpg'
import hamburger from './assets/images/icon-hamburger.svg'

export default {
  name: 'App',
  data() {
    return {
      Logo,
      Images: [Image1, Image2, Image3],
      ImagesMobile: [Image1Mobile, Image2Mobile, Image3Mobile],
      ArrowRight,
      Previous,
      Next,
      currentIndex: 0,
      AboutImageDark,
      AboutImageLight,
      hamburger,
      isMenuOpen: false,
      words: [{
        title: 'Discover innovative ways to decorate',
        content: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
      },
      {
        title: 'We are available all across the globe',
        content: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, were in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
      },
      {
        title: 'Manufactured with the best materials',
        content: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
      }]
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.Images.length
    },
    previousImage() {
      this.currentIndex = (this.currentIndex - 1 + this.Images.length) % this.Images.length
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style>
#app{
  font-family: 'League Spartan', sans-serif;
}
.main-container {
  overflow-x: hidden;
  width: 100%;
}
</style>