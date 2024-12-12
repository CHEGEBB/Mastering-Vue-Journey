<template>

<div>

 
  <div class="header">
     <img src="@/assets/images/bg-desktop-dark.jpg" alt="header" class="hidden md:block" v-show="isDarkTheme">
     <img src="@/assets/images/bg-desktop-light.jpg" alt="header" class="hidden md:block" v-show="!isDarkTheme">
      <img src="@/assets/images/bg-mobile-dark.jpg" alt="header" class="block md:hidden w-full" v-show="!isDarkTheme">
      <img src="@/assets/images/bg-mobile-light.jpg" alt="header" class="block md:hidden w-full" v-show="isDarkTheme">
        <div class="top-[15%] absolute my-auto flex flex-row justify-between  w-[37%] md:align-center left-1/2  transform -translate-x-1/2 -translate-y-1/2">
      <div class="logo">
        <h1 class="uppercase text-3xl tracking-[12px] font-bold">
           Todo
        </h1>
            
      </div>
       <div class="theme-switcher">
    <img
      src="@/assets/images/icon-sun.svg"
      alt="sun"
      class="hidden md:block sm:block"
      @click="toggleTheme"
      v-show="isDarkTheme"
    />
    <img
      src="@/assets/images/icon-moon.svg"
      alt="moon"
      class="block sm:block"
      @click="toggleTheme"
      v-show="!isDarkTheme"
    />
  </div>
  </div>
  </div>
  <div class="bottom-nav">
     <!-- Add dynamic number --> items left

  All
  Active 
  Completed

  Clear Completed
  </div>

 

  Drag and drop to reorder list
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  data(){
    return{
      isDarkTheme:true,
      todo :[
        {
          content: 'Jog around the park 3x',
          id: 1
        },
        {
          content: '10 minutes meditation',
          id: 2
        },
        {
          content: 'Read for 1 hour',
          id: 3
        },
        {
          content: 'Pick up groceries',
          id: 4
        },
        {
          content: 'Complete Todo App on Frontend Mentor',
          id: 5
        }
      ],
    }
    
  },
  methods:{
    toggleTheme(theme){
      this.isDarkTheme =!this.isDarkTheme;
      document.documentElement.setAttribute('data-theme', this.isDarkTheme? 'dark' : 'light');
      
    }
  },
  components: {
  }
});
</script>


<style>

:root {
	--color-background-primary: #fff;
	--color-background-secondary: #f5f5f5;
	--color-accent: #2196f3;
	--color-border: #e0e0e0;
	--color-text-primary: #212121;
}
  
[data-theme="dark"] {
	--color-background-primary: #1a1e24;
	--color-background-secondary: #121219;
	--color-accent: #2196f3;
	--color-border: #2e2e2e;
	--color-text-primary: #fff;
}
</style>
