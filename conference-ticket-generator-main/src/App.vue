<template>
  <div class="main-container  w-full">
    <div class="background-images absolute inset-0 z-[-1]">
      <img :src="DesktopBg" alt="Desktop" class="hidden md:block md:w-full md:h-[100vh] object-fit" />
      <img :src="PatternLines" alt="lines"
        class="hidden md:block md:w-[100vw] md:h-[100vh] object-cover absolute inset-0 z-[10]" />
      <img :src="PatternSquigglyTop" alt="top"
        class="absolute right-0 top-0 z-[10] object-fit md:w-[350px] md:h-[300px]" />
      <img :src="PatternSquigglyBottomDesktop" alt="bottom"
        class="hidden md:block absolute left-0 bottom-0 z-[10] object-contain md:w-[40%]" />
      <img :src="PatternCircle" alt="cirlce"
        class="absolute right-[20%] bottom-[26%] z-[10] object-fit md:w-[150px] md:h-[150px]" />
      <img :src="MobileBg" alt="Mobile" class="block md:hidden" />
    </div>
    <div class="form-container text-white ">
  
      <!-- Form starts -->
      <div class="header justify-center items-center flex flex-col">
        <div class="logo">
          <img :src="LogoFull" alt="logo" class="" />
        </div>
        <h1 class="text-4xl font-bold text-center w-[398px]"> Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p class="text-[#8784a4]">Secure your spot at next year's biggest coding conference.</p>
  
  
      </div>
      <form action="" class="justify-center items-center flex flex-col">
  
        <div class="form-group">
          <label for="avatar" class="font-medium text-[#d2d1d6] mb-1">Upload Avatar</label>
  
          <div
            class="upload-avatar border-dashed border-2 border-[#8784a4] rounded-md max-md:w-[400px] h-[100px] p-6 flex flex-col items-center justify-center space-y-2 bg-[#4b486a]/20 text-white">
            <div class="flex justify-center my-2">
              <div class="bg-indigo-900/50 rounded-full p-2">
                <img :src="IconUpload" alt="upload" class="w-6 h-6" />
              </div>
            </div>
            <p class="text-white text-sm text-center">Drag and drop or click to upload</p>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
          </div>
          <div class="image-type flex flex-row gap-2 mt-3">
          <img :src="IconInfo" alt="info" class=""/>
          <p class="text-gray-400 text-xs text-center">Upload your photo (JPG or PNG, max size: 500KB).</p>
          </div>
        </div>
  
  
        Full Name
  
        Email Address
        example@email.com
  
        GitHub Username
        @yourusername
  
        Generate My Ticket
  
        <!-- Form ends -->
      </form>
    </div>
    <div class="generated-token text-white">
      <!-- Generated tickets starts -->
  
      Congrats, <!-- Full Name -->! Your ticket is ready.
  
      We've emailed your ticket to <!-- Email Address --> and will send updates in the run up to the event.
  
      Coding Conf
      Jan 31, 2025 / Austin, TX
  
      <!-- Generated tickets ends -->
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
      DesktopBg: DesktopBg,
      MobileBg: MobileBg,
      TabletBg: TabletBg,
      IconGithub: IconGithub,
      IconInfo: IconInfo,
      IconUpload: IconUpload,
      Avatar: Avatar,
      LogoFull: LogoFull,
      LogoMark: LogoMark,
      PatternCircle: PatternCircle,
      PatternLines: PatternLines,
      PatternSquigglyBottomDesktop: PatternSquigglyBottomDesktop,
      PatternSquigglyBottomMobile: PatternSquigglyBottomMobile,
      PatternSquigglyTop: PatternSquigglyTop,
      PatternTicket: PatternTicket,

    }
  },
  components: {
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

}

#app {
  display: flex;
  height: 100vh;
  font-family: 'Inconsolata', monospace;

}
</style>
