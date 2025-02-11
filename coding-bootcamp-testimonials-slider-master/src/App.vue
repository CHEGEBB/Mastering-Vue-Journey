<template>
<div class="main-container lg:flex lg:flex-row  w-full flex flex-row">
  <div class="left-section-container lg:flex lg:flex-col lg:w-[600px] lg:h-[400px] absolute lg:top-[30%] lg:left-[19.9%]">
    <h2 class=" absolute z-50 lg:w-[550px] text-[30px] font-light text-[#202046]">"{{user[userIndex].text}}"</h2>
    <p class="absolute z-50 lg:bottom-32 font-bold text-[#202046] ">{{user[userIndex].name}} <span class="font-semibold text-[#babacf]">{{user[0].position}}</span></p>
    <img :src="PatternQuotes" alt="Pattern Quotes" class="pattern-quotes lg:h-[78px] lg:w-[107px] lg:-mt-10 lg:ml-20" />
  </div>
      <img :src="PatternCurve" alt="Pattern Curve" class="pattern-curve absolute bottom-0 left-0 " />

  <div class="right-section-container ">
    <img :src=user[userIndex].image  alt="User Image" class="user-image absolute shadow-2xl z-10 w-full lg:w-[450px] lg:h-[450px] top-[10.5%] right-[12%] rounded-[6px]" />
    <img :src="PatternBg" alt="Pattern Background" class="pattern-bg absolute z-0 lg:w-[45%] lg:h-[90%] top-[2%] right-[6%]" />
  </div> 
  <div class="navigation bg-white absolute right-[34.2%] bottom-[10%] z-40 flex flex-row  gap-[42px] shadow-xl lg:w-[100px] lg:h-[50px] rounded-[24px] p-4">
    <img :src=IconPrev alt="prev" class="w-[15px] h-[20px]" @click="nextUser"/>
    <img :src=IconNext alt="next" class="w-[15px] h-[20px]" @click="prevUser"/>
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
  data () {
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
          text: 'I’ve been interested in coding for a while but never took the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.'
        },
        {
          image: ImageJohn,
          name: 'John Tarkpor',
          position: 'Junior Front-end Developer',
          text: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.'
        }
      ],
      userIndex: 0,
      
    }
  },
  methods:{
    nextUser(){
      if(this.userIndex < this.user.length - 1){
        this.userIndex++
      }
    },
    prevUser(){
      if(this.userIndex > 0){
        this.userIndex--
      }
    }
  },
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

#app {
  font-family: 'Inter', sans-serif;
  
}
</style>
