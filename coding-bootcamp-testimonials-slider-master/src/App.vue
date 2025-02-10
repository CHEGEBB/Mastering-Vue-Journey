<template>
<div class="main-container lg:flex lg:flex-row">
  <div class="left-section-container lg:flex lg:flex-col ">
    <h2>{{user[0].text}}</h2>
    <img :src="PatternQuotes" alt="Pattern Quotes" class="pattern-quotes" />
    <img :src="PatternCurve" alt="Pattern Curve" class="pattern-curve" />
  </div>
  <div class="right-section-container">
    <img :src=user[0].image  alt="User Image" class="user-image" />
    <img :src="PatternBg" alt="Pattern Background" class="pattern-bg" />
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
#app {
  
}
</style>
