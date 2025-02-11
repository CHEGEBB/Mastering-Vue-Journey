<template>
  <div class="main-container lg:flex lg:flex-row w-full min-h-screen relative">
    <div class="left-section-container max-lg:order-2 lg:flex lg:flex-col lg:w-[600px] lg:h-[400px] lg:absolute lg:top-[30%] lg:left-[19.9%] 
                max-lg:relative max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:text-center max-lg:px-4 max-lg:mt-20 
                max-sm:absolute max-sm:top-[55%] max-sm:mt-0 max-sm:px-6
                max-md:absolute max-md:top-[50%]">
      <h2 class="absolute z-50 lg:w-[550px] text-[30px] font-light text-[#202046] 
                 max-lg:relative max-lg:text-[18px] max-lg:leading-[24px] max-lg:w-full max-lg:mb-4 
                 max-sm:text-[20px] max-sm:leading-[24px] max-sm:w-full max-sm:mb-6">
        "{{user[userIndex].text}}"
      </h2>
      <p class="absolute z-50 lg:bottom-32 font-bold text-[#202046] 
                max-lg:relative max-lg:flex max-lg:flex-col max-lg:text-[15px] max-lg:mt-6 
                max-sm:text-[18px] max-sm:mt-4">
        {{user[userIndex].name}}
        <span class="font-semibold text-[#babacf] max-lg:block max-lg:mt-1 max-sm:text-[16px]">
          {{user[userIndex].position}}
        </span>
      </p>
      <img :src="PatternQuotes" alt="Pattern Quotes"
        class="pattern-quotes lg:h-[78px] lg:w-[107px] lg:-mt-10 lg:ml-20 
                                                           max-sm:absolute max-sm:-top-16 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:w-20 max-sm:h-auto" />
    </div>
  
    <img :src="PatternCurve" alt="Pattern Curve" class="pattern-curve absolute bottom-0 left-0 w-full max-sm:w-full lg:w-[40%]" />
  
    <div class="right-section-container max-lg:order-1 max-lg:mt-12 max-lg:flex max-lg:flex-col max-lg:items-center
                max-sm:mt-0 max-sm:h-[50vh]">
      <img :src=user[userIndex].image alt="User Image"
        class="user-image absolute shadow-2xl z-10 w-full lg:w-[450px] lg:h-[450px] lg:top-[10.5%] lg:right-[12%] rounded-[6px] 
                                                            max-lg:relative max-lg:w-[300px] max-lg:h-auto max-lg:top-0 max-lg:right-0 
                                                            max-sm:absolute max-sm:top-[10%] max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:w-[80%] max-sm:h-auto" />
       <img :src="PatternBg" alt="Pattern Background" class="pattern-bg absolute z-0 lg:w-[45%] lg:h-[90%] top-[2%] right-[6%] max-lg:w-[300px] max-lg:h-[300px] max-lg:-mt-16 max-lg:right-0 max-sm:top-[15%] max-sm:right-[12%] max-sm:w-[450px] max-sm:h-[500px]" />
    </div>
  
    <div
      class="navigation bg-white absolute z-50 flex flex-row shadow-xl rounded-[24px] p-4
                lg:right-[34.2%] lg:bottom-[10%] lg:w-[100px] lg:h-[50px] lg:gap-[42px]
                max-lg:relative max-lg:mx-auto max-lg:top-8 max-lg:right-0 max-lg:gap-8 max-lg:bottom-0 
                max-sm:absolute max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:top-[45%] max-sm:h-14 max-sm:w-32 max-sm:gap-12">
      <img :src=IconPrev alt="prev" class="w-[15px] h-[20px] cursor-pointer" @click="nextUser" />
      <img :src=IconNext alt="next" class="w-[15px] h-[20px] cursor-pointer" @click="prevUser" />
    </div>
  </div>
</template>

<script>
import ImageJohn from "./assets/images/image-john.jpg";
import ImageTanya from "./assets/images/image-tanya.jpg";
import IconNext from "./assets/images/icon-next.svg";
import IconPrev from "./assets/images/icon-prev.svg";
import PatternBg from "./assets/images/pattern-bg.svg";
import PatternCurve from "./assets/images/pattern-curve.svg";
import PatternQuotes from "./assets/images/pattern-quotes.svg";

export default {
  name: 'App',
  data() {
    return {
      PatternBg,
      PatternCurve,
      PatternQuotes,
      IconNext,
      IconPrev,
      user: [
        {
          image: ImageTanya,
          name: 'Tanya Sinclair',
          position: 'UX Engineer',
          text: "I've been interested in coding for a while but never took the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."
        },
        {
          image: ImageJohn,
          name: 'John Tarkpor',
          position: 'Junior Front-end Developer',
          text: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."
        }
      ],
      userIndex: 0,
    }
  },
  methods: {
    nextUser() {
      this.userIndex = (this.userIndex + 1) % this.user.length;
    },
    prevUser() {
      this.userIndex = this.userIndex === 0
        ? this.user.length - 1
        : this.userIndex - 1;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

#app {
  font-family: 'Inter', sans-serif;
}

@media screen and (max-width: 768px) {
  .main-container {
    display: flex;
    flex-direction: column;
  }

  .navigation {
    position: absolute ! important;
    left: 0;
    width: 120px ! important;
    height: 60px !important;
  }
}
</style>