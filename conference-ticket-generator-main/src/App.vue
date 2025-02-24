<template>
  <div class="main-container min-h-screen w-full relative overflow-x-hidden">
    <div class="background-images fixed inset-0 w-full h-full">
      <!-- Desktop background (hidden on mobile) -->
      <img :src="DesktopBg" alt="Desktop" class="background-image hidden lg:block absolute inset-0 w-full h-full object-cover" />
      <!-- Mobile background -->
      <img :src="MobileBg" alt="Mobile" class="background-image block lg:hidden absolute inset-0 w-full h-full object-cover" />
      <!-- Decorative elements -->
      <img :src="PatternLines" alt="lines" class="background-image hidden lg:block absolute inset-0 w-full h-full object-cover z-10" />
      <img :src="PatternSquigglyTop" alt="top" class="decorative-element absolute right-0 top-0 w-[250px] md:w-[350px] h-[200px] md:h-[300px] object-contain z-10" />
      <img :src="PatternSquigglyBottomDesktop" alt="bottom" class="decorative-element hidden lg:block absolute left-0 bottom-0 w-[40%] object-contain z-10" />
      <img :src="PatternCircle" alt="circle" class="decorative-element absolute right-[20%] bottom-[26%] w-[100px] md:w-[150px] h-[100px] md:h-[150px] object-contain z-10" />
    </div>
    
    <!-- Registration Form -->
    <div class="form-container relative z-20 text-white px-4 py-8 md:px-8 lg:px-0" v-show="showForm">
      <div class="header flex flex-col items-center max-w-[550px] mx-auto text-center mb-8">
        <div class="logo mb-6">
          <img :src="LogoFull" alt="logo" class="w-[120px] md:w-[150px] h-[40px] md:h-[50px]" />
        </div>
        <h1 class="text-2xl md:text-4xl font-bold mb-4">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p class="text-[#8784a4] text-sm md:text-base">
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>

      <form @submit.prevent="submitForm" class="max-w-[405px] mx-auto space-y-6">
        <!-- Avatar Upload -->
        <div class="form-group">
          <label for="avatar" class="block font-medium text-[#d2d1d6] mb-2">Upload Avatar</label>
          <div class="upload-avatar border-dashed border-2 border-[#8784a4] rounded-md w-full h-[100px] p-4 flex flex-col items-center justify-center space-y-2 bg-[#4b486a]/20 relative">
            <div class="flex justify-center my-2">
              <div class="bg-indigo-900/50 rounded-xl p-2 border border-[#8784a4]">
                <img :src="IconUpload" alt="upload" class="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <p class="text-white text-xs md:text-sm text-center">Drag and drop or click to upload</p>
            <input 
              type="file" 
              id="avatar" 
              name="avatar" 
              accept="image/png, image/jpeg"
              @change="handleFileUpload"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
            />
          </div>
          <div class="image-type flex items-center gap-2 mt-2">
            <img :src="IconInfo" alt="info" class="w-4 h-4" />
            <p class="text-gray-400 text-xs">Upload your photo (JPG or PNG, max size: 500KB).</p>
          </div>
        </div>

        <!-- Form Fields -->
        <div class="space-y-4">
          <div class="form-group">
            <label for="name" class="block font-medium text-[#d2d1d6] mb-2">Full Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="fullName"
              name="name" 
              class="w-full h-[50px] px-4 rounded-xl border-[1.5px] border-[#8784a4] bg-[#4b486a]/20 text-white"
            />
          </div>

          <div class="form-group">
            <label for="email" class="block font-medium text-[#d2d1d6] mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              v-model="email"
              name="email" 
              placeholder="example@email.com" 
              class="w-full h-[50px] px-4 rounded-xl border-[1.5px] border-[#8784a4] bg-[#4b486a]/20 text-white"
            />
          </div>

          <div class="form-group">
            <label for="github" class="block font-medium text-[#d2d1d6] mb-2">Github Username</label>
            <input 
              type="text" 
              id="github" 
              v-model="githubUsername"
              name="github" 
              placeholder="@yourusername" 
              class="w-full h-[50px] px-4 rounded-xl border-[1.5px] border-[#8784a4] bg-[#4b486a]/20 text-white"
            />
          </div>
        </div>

        <button 
          type="submit"
          class="w-full bg-[#FF6844] hover:bg-[#FF8666] text-white font-bold py-3 px-6 rounded-xl transition-colors"
        >
          Generate My Ticket
        </button>
      </form>
    </div>

    <!-- Generated Ticket -->
    <div :class="['generated-token text-white relative z-20 px-4 py-8 md:px-8 lg:px-0', !showTicket ? 'hidden' : '']">
      <div class="ticket-container max-w-[600px] sm:-mt-4 mx-auto lg:mt-[120px] max-md:mt-[150px] md:mt-[220px] md:h-[600px]">
        <h2 class="text-2xl md:text-4xl font-bold text-center mb-4">
          Congrats, {{ fullName }}! Your ticket is ready.
        </h2>
        <p class="text-[#8784a4] text-sm md:text-base text-center mb-8 max-w-[350px] mx-auto font-semibold">
          We've emailed your ticket to <span class="text-[#FF8666]">{{ email }}</span> and will send updates in the run up to the event.
        </p>
        
        <div class="ticket relative max-w-[500px] mx-auto">
          <img :src="PatternTicket" alt="tickets" class="w-full h-auto" />
          
          <div class="ticket-details absolute inset-0 flex flex-col p-6">
            <div class="logo mb-2">
              <img :src="LogoFull" alt="logo" class="w-[150px] md:w-[200px] h-auto" />
            </div>
            
            <p class="text-[#8784a4] text-sm md:text-base font-semibold mb-8">
              Jan 31, 2025 / Austin, TX
            </p>
            <div class="user-details flex items-start gap-4 -mt-[10px] sm:mt-0 md:mt-[30px] lg:mt-[40px]">
              <img :src="Avatar" alt="avatar" class="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-xl" />
              <div class="-mt-1 sm:-mt-4 md:mt-2 lg:mt-2">
                <p class="font-bold mb-1">{{ fullName }}</p>
                <div class="flex items-center gap-2">
                  <img :src="IconGithub" alt="github" class="w-5 h-5" />
                  <p class="text-sm">{{ githubUsername }}</p>
                </div>
              </div>
            </div>
            
            <div class="ticket-number absolute  md:top-[120px] max-md:top-[100px]  lg:top-[150px]  right-6 rotate-90 origin-top-right">
              <p class="text-[#8784a4] font-semibold">#01609</p>
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
      fullName: '',
      email: '',
      githubUsername: '',
      showForm: true,
      showTicket: false,
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
      if (!file) return;
      
      if (file.size > 500000) {
        alert('File size must be less than 500KB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        this.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitForm() {
      if (!this.fullName || !this.email || !this.githubUsername) {
        alert('Please fill in all fields');
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        alert('Please enter a valid email address');
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

body {
  font-family: 'Inconsolata', monospace;
  background-color: var(--neutral-900);
  min-height: 100vh;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--neutral-900);
}

::-webkit-scrollbar-thumb {
  background: var(--neutral-700);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--neutral-500);
}

/* Input placeholder styles */
input::placeholder {
  color: var(--neutral-500);
  opacity: 0.7;
}

/* Focus styles */
input:focus {
  outline: none;
  border-color: var(--orange-500);
}

/* Transition for hover effects */
.upload-avatar,
button,
input {
  transition: all 0.2s ease-in-out;
}

/* Hover effects */
.upload-avatar:hover {
  border-color: var(--orange-500);
  background-color: rgba(75, 72, 106, 0.3);
}

/* Media Queries */
@media (max-width: 640px) {
  .ticket-details {
    padding: 4vw;
  }
  
  .ticket-number {
    font-size: 0.875rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .ticket-details {
    padding: 5vw;
  }
}

@media (min-width: 1025px) {
  .main-container {
    display: flex;
    min-height: 100vh;
  }
  
  .form-container,
  .generated-token {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>