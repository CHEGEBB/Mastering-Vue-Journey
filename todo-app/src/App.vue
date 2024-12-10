<template>

<body>

 
  <div class="header">
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
