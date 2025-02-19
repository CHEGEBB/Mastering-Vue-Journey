<template>
<div class="container bg-red-400">
  <div class="form-container">
    
  <!-- Form starts -->

  Your Journey to Coding Conf 2025 Starts Here!

  Secure your spot at next year's biggest coding conference.

  Upload Avatar
  Drag and drop or click to upload
  Upload your photo (JPG or PNG, max size: 500KB).

  Full Name

  Email Address
  example@email.com

  GitHub Username
  @yourusername

  Generate My Ticket

  <!-- Form ends -->
  </div>
  <div class="generated-token">
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

export default {
  name: 'App',
  data (){
    return {
      avatar: '',
      fullName: '',
      email: '',
      githubUsername: ''
    }
  },
  components: {
  }
}
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
