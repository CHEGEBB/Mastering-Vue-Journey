<template>

<body>

 
  <div class="header bg-slate-600">
     <img src="@/assets/images/bg-desktop-dark.jpg" alt="header" class="hidden md:block">
      <img src="@/assets/images/bg-mobile-dark.jpg" alt="header" class="block md:hidden w-full">
     Todo
  </div>
  <div class="bottom-nav">
     <!-- Add dynamic number --> items left

  All
  Active 
  Completed

  Clear Completed
  </div>

 

  Drag and drop to reorder list
</body>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  data(){
    return{
    }
    
  },
  components: {
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
