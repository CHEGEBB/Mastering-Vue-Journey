<template>
  <div class="main-container">
    <div class="background-images">
      <img :src="DesktopBg" alt="Desktop" class="background-image desktop-bg" />
      <img :src="PatternLines" alt="lines" class="background-image pattern-lines" />
      <img :src="PatternSquigglyTop" alt="top" class="decorative-element squiggly-top" />
      <img :src="PatternSquigglyBottomDesktop" alt="bottom" class="decorative-element squiggly-bottom" />
      <img :src="PatternCircle" alt="circle" class="decorative-element circle" />
      <img :src="MobileBg" alt="Mobile" class="background-image mobile-bg" />
    </div>
    
    <div class="form-container text-white" v-show="showForm">
      <div class="header justify-center items-center flex flex-col">
        <div class="logo">
          <img :src="LogoFull" alt="logo" class="w-[150px] h-[50px]" />
        </div>
        <h1 class="text-4xl font-bold text-center lg:w-[550px] md:w-[550px]">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p class="text-[#8784a4]">Secure your spot at next year's biggest coding conference.</p>
      </div>

      <form @submit.prevent="submitForm" class="justify-center items-center flex flex-col  h-[450px]">
        <div class="form-group">
          <label for="avatar" class="font-medium text-[#d2d1d6] mb-1">Upload Avatar</label>
          <div class="upload-avatar border-dashed border-[2px] border-[#8784a4] rounded-md max-md:w-[400px] lg:w-[405px] h-[100px] p-6 flex flex-col items-center justify-center space-y-2 bg-[#4b486a]/20 text-white">
            <div class="flex justify-center my-2">
              <div class="bg-indigo-900/50 rounded-xl p-2 border-[1px] border-[#8784a4]">
                <img :src="IconUpload" alt="upload" class="w-6 h-6" />
              </div>
            </div>
            <p class="text-white text-sm text-center">Drag and drop or click to upload</p>
            <input 
              type="file" 
              id="avatar" 
              name="avatar" 
              accept="image/png, image/jpeg"
              @change="handleFileUpload"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
            />
          </div>
          <div class="image-type flex flex-row gap-2 mt-3">
            <img :src="IconInfo" alt="info" />
            <p class="text-gray-400 text-xs text-center">Upload your photo (JPG or PNG, max size: 500KB).</p>
          </div>
        </div>

        <div class="form-group flex flex-col">
          <label for="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="fullName"
            name="name" 
            class="border-solid border-[1.5px] border-[#8784a4] rounded-[12px] max-md:w-[400px] lg:w-[405px] h-[50px] p-6 flex flex-col items-center justify-center space-y-2 bg-[#4b486a]/20 text-white"
          />
        </div>

        <div class="form-group flex flex-col">
          <label for="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            v-model="email"
            name="email" 
            placeholder="example@email.com" 
            class="border-solid border-[1.5px] border-[#8784a4] rounded-[12px] max-md:w-[400px] lg:w-[405px] h-[50px] p-6 flex flex-col items-center justify-center space-y-2 bg-[#4b486a]/20 text-white"
          />
        </div>

        <div class="form-group flex flex-col">
          <label for="github">Github Username</label>
          <input 
            type="text" 
            id="github" 
            v-model="githubUsername"
            name="github" 
            placeholder="@yourusername" 
            class="border-solid border-[1.5px] border-[#8784a4] rounded-[12px] max-md:w-[400px] lg:w-[405px] h-[50px] p-6 flex flex-col items-center justify-center space-y-2 bg-[#4b486a]/20 text-white"
          />
        </div>

        <button 
          type="submit"
          class="bg-[#FF6844] hover:bg-[#FF8666] text-white font-bold py-3 px-6 rounded-[12px] mt-6 w-[405px]"
        >
          Generate My Ticket
        </button>
      </form>
    </div>

    <div :class="['generated-token text-white', !showTicket ? 'hidden' : '']">
      <div class="ticket-container max-w-[600px] mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Congrats, {{ fullName }}! Your ticket is ready.
        </h2>
        <p class="text-[#8784a4] mb-6">
          We've emailed your ticket to {{ email }} and will send updates in the run up to the event.
        </p>
        <div class="ticket">
         <img :src="PatternTicket" alt="tickets" class="w-[500px] h-[250px] ml-24 mt-20"/>
        </div>
        <div class="ticket-details flex flex-col absolute left-[36.5%] top-[46%] w-[260px]">
          <div class=" ">
            <img :src="LogoFull" alt="logo" class="w-[200px] h-[50px]" />
          </div>
          <div class="date">
          <p class="text-[#8784a4] absolute  font-semibold ml-12">Jan 31, 2025 / Austin, TX</p>
          </div>
          <div class="user-details absolute top-[100px] flex flex-row">
            <div class="avatar">
              <img :src="Avatar" alt="avatar" class="w-[60px] h-[60px] rounded-[12px] mr-4" />
            </div>
            <div class="details">
            <p>{{ fullName }}</p>
            <div class="github">
              <img :src="IconGithub" alt="github" class="w-6 h-6 mr-2" />
              <p>{{ githubUsername }}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DesktopBg from "./assets/images/background-desktop.png";
import MobileBg from "./assets/images/background-mobile.png";
import TabletBg from "./assets/images/background-tablet.png";
import IconGithub from "./assets/images/icon-github.svg";
import IconInfo from "./assets/images/icon-info.svg";
import IconUpload from "./assets/images/icon-upload.svg";
import Avatar from "./assets/images/image-avatar.jpg";
import LogoFull from "./assets/images/logo-full.svg";
import LogoMark from "./assets/images/logo-mark.svg";
import PatternCircle from "./assets/images/pattern-circle.svg";
import PatternLines from "./assets/images/pattern-lines.svg";
import PatternSquigglyBottomDesktop from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import PatternSquigglyBottomMobile from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import PatternSquigglyTop from "./assets/images/pattern-squiggly-line-top.svg";
import PatternTicket from "./assets/images/pattern-ticket.svg";

export default {
  name: 'App',
  data() {
    return {
      avatar: '',
      fullName: 'Jonat Kristof',
      email: 'jonatan@email.com',
      githubUsername: '@jonatankristof0101',
      showTicket: true,
      showForm:false,
      DesktopBg,
      MobileBg,
      TabletBg,
      IconGithub,
      IconInfo,
      IconUpload,
      Avatar,
      LogoFull,
      LogoMark,
      PatternCircle,
      PatternLines,
      PatternSquigglyBottomDesktop,
      PatternSquigglyBottomMobile,
      PatternSquigglyTop,
      PatternTicket,
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 500000) {
          alert('File size must be less than 500KB');
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          this.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    submitForm() {
      if (!this.fullName || !this.email || !this.githubUsername) {
        alert('Please fill in all fields');
        return;
      }
      this.showTicket = true;
      this.showForm = false;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap');

:root {
  --neutral-0: hsl(0, 0%, 100%);
  --neutral-300: hsl(252, 6%, 83%);
  --neutral-500: hsl(245, 15%, 58%);
  --neutral-700: hsl(245, 19%, 35%);
  --neutral-900: hsl(248, 70%, 10%);
  --orange-500: hsl(7, 88%, 67%);
  --orange-700: hsl(7, 71%, 60%);
  --gradient-text-start: hsl(7, 86%, 67%);
  --gradient-text-end: hsl(0, 0%, 100%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  font-family: 'Inconsolata', monospace;
  background-color: var(--neutral-900);
}

.main-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

.background-images {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.desktop-bg {
  display: none;
}

.pattern-lines {
  display: none;
  z-index: 10;
}

.decorative-element {
  position: absolute;
  z-index: 10;
}

.squiggly-top {
  right: 0;
  top: 0;
  width: 350px;
  height: 300px;
  object-fit: contain;
}

.squiggly-bottom {
  display: none;
  left: 0;
  bottom: 0;
  width: 40%;
  object-fit: contain;
}

.circle {
  right: 20%;
  bottom: 26%;
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.mobile-bg {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-container {
  position: relative;
  z-index: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.form-group {
  width: 100%;
  max-width: 405px;
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--neutral-300);
}

.upload-avatar {
  position: relative;
  cursor: pointer;
}

.generated-token {
  position: relative;
  z-index: 1;
  padding: 2rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .desktop-bg {
    display: block;
  }

  .pattern-lines {
    display: block;
  }

  .squiggly-bottom {
    display: block;
  }

  .mobile-bg {
    display: none;
  }

  .form-container {
    padding: 4rem;
  }
}

</style>