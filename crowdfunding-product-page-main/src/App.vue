<template>
  <div class="min-h-screen m-0">
    <!-- Responsive Header -->
    <div class="relative">
      <div class="header w-full h-[300px] md:h-96 px-4 md:px-24 pt-4">
        <div class="flex justify-between items-center">
          <div class="logo">
            <p class="text-2xl md:text-3xl font-bold text-white">crowdfund</p>
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:block mt-6">
            <ul class="flex space-x-8">
              <li class="text-white hover:text-gray-200 cursor-pointer">About</li>
              <li class="text-white hover:text-gray-200 cursor-pointer">Discover</li>
              <li class="text-white hover:text-gray-200 cursor-pointer">Get Started</li>
            </ul>
          </nav>

          <!-- Mobile Hamburger -->
          <button @click="toggleMenu" class="md:hidden z-50">
            <img 
              :src="isMenuOpen ? closeIcon : hamburgerIcon" 
              alt="menu" 
              class="w-6 h-6"
            />
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          v-if="isMenuOpen" 
          class="absolute top-16 left-4 right-4 bg-white rounded-lg shadow-lg md:hidden z-40"
        >
          <ul class="py-4">
            <li class="px-6 py-3 text-gray-800 hover:bg-gray-100 cursor-pointer border-b">
              About
            </li>
            <li class="px-6 py-3 text-gray-800 hover:bg-gray-100 cursor-pointer border-b">
              Discover
            </li>
            <li class="px-6 py-3 text-gray-800 hover:bg-gray-100 cursor-pointer">
              Get Started
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content px-4 md:px-0">
      <!-- Master Section -->
      <div class="master bg-white rounded-lg shadow-md px-6 py-8 md:w-[52%] mx-auto -mt-20 relative">
        <div class="logo-con absolute -top-7 left-1/2 transform -translate-x-1/2">
          <img :src="logoCon" alt="logo" class="w-14 h-14" />
        </div>
        <h1 class="text-xl md:text-2xl font-bold text-black mt-6">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p class="text-gray-500 text-sm md:text-base mt-4">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>

        <div class="flex flex-col sm:flex-row justify-between gap-4 mt-7">
          <button class="back bg-[#2EB8A8] hover:bg-[#116F68] p-3 rounded-full text-white w-full sm:w-48">
            Back this project
          </button>
          <button class="mark flex items-center justify-center rounded-full w-full sm:w-40 bg-gray-200">
            <span>
              <img :src="bookmark" alt="bookmark" class="w-12 h-12" />
            </span>
            <p class="hidden sm:block text-gray-700 ml-2">Bookmark</p>
          </button>
        </div>
      </div>

      <!-- Facts Section -->
      <div class="fact-section bg-white rounded-lg shadow-md mt-6 px-6 py-8 md:w-[52%] mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div class="fact1 border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0">
            <div class="text-3xl font-bold">$89,914</div>
            <div class="text-gray-500 text-sm mt-2">of $100,000 backed</div>
          </div>

          <div class="fact2 border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0">
            <div class="text-3xl font-bold">5,007</div>
            <div class="text-gray-500 text-sm mt-2">total backers</div>
          </div>

          <div class="fact3">
            <div class="text-3xl font-bold">56</div>
            <div class="text-gray-500 text-sm mt-2">days left</div>
          </div>
        </div>

        <div class="mt-8">
          <div class="bg-gray-200 h-3 rounded-full">
            <div class="bg-[#2EB8A8] h-3 rounded-full w-[84%]"></div>
          </div>
        </div>
      </div>

      <!-- About Section -->
      <div class="about bg-white rounded-lg shadow-md mt-6 px-6 py-8 md:w-[52%] mx-auto">
        <h2 class="text-xl md:text-2xl font-bold text-left">About this project</h2>
        <p class="text-gray-500 mt-4 text-left">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
          elevates your screen to a more comfortable viewing height. Placing your monitor
          at eye level has the potential to improve your posture and make you more
          comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p class="text-gray-500 mt-4 text-left">
          Featuring artisan craftsmanship, the simplicity of design creates extra desk
          space below your computer to allow notepads, pens, and USB sticks to be stored
          under the stand.
        </p>

        <!-- Pledges -->
        <div class="mt-8 space-y-6">
          <!-- Pledge 1 -->
          <div class="pledge1 border rounded-lg p-6">
            <div class="flex flex-col sm:flex-row justify-between gap-4">
              <h2 class="text-lg font-bold">Bamboo Stand</h2>
              <p class="text-[#2EB8A8] font-bold">Pledge $25 or more</p>
            </div>
            <p class="text-gray-500 mt-4 text-left">
              You get an ergonomic stand made of natural bamboo. You've helped us launch
              our promotional campaign, and you'll be added to a special Backer member
              list.
            </p>
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6">
              <div class="flex items-center">
                <h2 class="text-3xl font-bold">101</h2>
                <p class="text-gray-500 ml-2">left</p>
              </div>
              <button 
                class="bg-[#2EB8A8] hover:bg-[#116F68] text-white rounded-full px-6 py-3 mt-4 sm:mt-0"
                @click="openModal"
              >
                Select Reward
              </button>
            </div>
          </div>

          <!-- Pledge 2 -->
          <div class="pledge2 border rounded-lg p-6">
            <div class="flex flex-col sm:flex-row justify-between gap-4">
              <h2 class="text-lg font-bold">Black Edition Stand</h2>
              <p class="text-[#2EB8A8] font-bold" >Pledge $75 or more</p>
            </div>
            <p class="text-gray-500 mt-4 text-left">
              You get a Black Special Edition computer stand and a personal thank you.
              You'll be added to our Backer member list. Shipping is included.
            </p>
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6">
              <div class="flex items-center">
                <h2 class="text-3xl font-bold">64</h2>
                <p class="text-gray-500 ml-2">left</p>
              </div>
              <button 
                class="bg-[#2EB8A8] hover:bg-[#116F68] text-white rounded-full px-6 py-3 mt-4 sm:mt-0"
                @click="openModal"
              >
                Select Reward
              </button>
            </div>
          </div>

          <!-- Pledge 3 (Out of Stock) -->
          <div class="pledge3 border rounded-lg p-6 opacity-50">
            <div class="flex flex-col sm:flex-row justify-between gap-4">
              <h2 class="text-lg font-bold">Mahogany Special Edition</h2>
              <p class="text-[#2EB8A8] font-bold">Pledge $200 or more</p>
            </div>
            <p class="text-gray-500 mt-4 text-left">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
              personal thank you. You'll be added to our Backer member list. Shipping is
              included.
            </p>
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6">
              <div class="flex items-center">
                <h2 class="text-3xl font-bold">0</h2>
                <p class="text-gray-500 ml-2">left</p>
              </div>
              <button 
                class="bg-gray-400 text-white rounded-full px-6 py-3 mt-4 sm:mt-0 cursor-not-allowed"
                disabled
              >
                Out of stock
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Selection Modal -->
    <SelectionComponent v-if="isOpenModal" />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import SelectionComponent from "./components/Selection.vue";

export default {
  name: "App",
  data() {
    return {
      url: require("@/assets/images/image-hero-desktop.jpg"),
      logoCon: require("@/assets/images/logo-mastercraft.svg"),
      bookmark: require("@/assets/images/icon-bookmark.svg"),
      hamburgerIcon: require("@/assets/images/icon-hamburger.svg"),
      closeIcon: require("@/assets/images/icon-close-menu.svg"),
      isOpenModal: false,
      isMenuOpen: false,
      selectedPledge: null,
    };
  },
  components: {
    Modal,
    SelectionComponent,
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Commissioner:wght@100..900&display=swap");

#app {
  font-family: "Commissioner", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-white;
}

.header {
  background: url("./assets/images/image-hero-desktop.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .header {
    background: url("./assets/images/image-hero-mobile.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>