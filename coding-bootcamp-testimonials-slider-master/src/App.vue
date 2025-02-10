<template>
<div class="main-container lg:flex lg:flex-row  w-full flex flex-row">
  <div class="left-section-container lg:flex lg:flex-col lg:w-[600px] lg:h-[300px]  bg-red-500">
    <h2 class=" absolute z-50 lg:w-[600px]">{{user[0].text}}</h2>
    <img :src="PatternQuotes" alt="Pattern Quotes" class="pattern-quotes lg:h-[70px] lg:w-[100px]" />
  </div>
      <img :src="PatternCurve" alt="Pattern Curve" class="pattern-curve absolute bottom-0 left-0 " />

  <div class="right-section-container ">
    <img :src=user[0].image  alt="User Image" class="user-image absolute z-10 w-full lg:w-[450px] lg:h-[450px] top-[10.5%] right-[10%] rounded-[6px]" />
    <img :src="PatternBg" alt="Pattern Background" class="pattern-bg absolute z-0 lg:w-[45%] lg:h-[90%] top-[2%] right-14" />
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
      ]
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
