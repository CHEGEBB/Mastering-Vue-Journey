<template>
  <div class="min-h-screen m-0">
    <div class="header mt-0 w-full h-96 flex-row flex justify-between p-24 pt-4">
      <div class="logo">
        <p>crowdfund</p>
      </div>
      <nav class="mt-6">
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </nav>
    </div>

    <div class="content">
      <div class="master h-60">
        <div class="logo-con">
          <img :src="logoCon" alt="logo" />
        </div>
        <h1 class="text-2xl font-bold text-black mt-6">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

        <div class="buttons flex flex-row justify-between mt-7">
          <button class="back bg-emerald-500 p-3 rounded-3xl text-white w-48">
            <p>Back this project</p>
          </button>
          <button class="mark flex flex-row rounded-3xl w-40">
            <span>
              <img :src="bookmark" alt="bookmark" />
            </span>
            <div class="text-block">
              <p>Bookmark</p>
            </div>
          </button>
        </div>
      </div>

      <div class="fact-section">
      <div class="facts h-48 flex flex-row">
        <div class="fact1">
          <div class="number">$89,914</div>
          <div class="detail">of $100,000 backed</div>
        </div>
        <div class="rectangle h-16 w-0.5 bg-[#ccc] rounded-3xl mt-8"></div>

        <div class="fact2">
          <div class="number">5,007</div>
          <div class="detail">total backers</div>
        </div>
        <div class="rectangle h-16 w-0.5 bg-[#ccc] rounded-3xl mt-8"></div>
        <div class="fact3">
          <div class="number">56</div>
          <div class="detail">days left</div>
        </div>
      </div>
      <div class="progressbar">
        <div class="progress w-[90%] bg-[#ccc] h-3 rounded-3xl mx-6 -mt-9">
          <div class="progress-bar bg-[#3CB4AC] h-3 w-[84%] rounded-3xl"></div>
        </div>

      </div>
    </div>
    <div class="about">
      <h2 class="text-left p-4 ">About this project</h2>
      <p class="text-left p-4">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
      platform that elevates your screen to a more comfortable viewing height. Placing
      your monitor at eye level has the potential to improve your posture and make you
      more comfortable while at work, helping you stay focused on the task at hand.
      </p>
       <p class="text-left p-4">
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space
      below your computer to allow notepads, pens, and USB sticks to be stored under the
      stand.
       </p>

      <div class="pledges flex flex-col">
        <div class="pledge1">
          <div class="titles flex flex-row justify-between">
            <h2>Bamboo Stand</h2>
            <p>Pledge $25 or more </p>
          </div>
          <div class="content-text">
            <p class="text-left"> You get an ergonomic stand made of natural
              bamboo. You've helped us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
          </div>
          <div class="actions flex flex-row justify-between">
            <div class="no-left flex flex-row">
              <h2>101</h2>
              <p>left</p>
            </div>
            <button>
              Select Reward
            </button>
          </div>
    </div>
    <div class="pledge2">
      <div class="titles flex flex-row justify-between">
        <h2>Black Edition Stand</h2>
        <p>Pledge $75 or more </p>
      </div>
      <div class="content-text">
        <p class="text-left"> You get a Black Special Edition computer stand and a personal
          thank you. You’ll be added to our Backer member list. Shipping is included.
        </p>
      </div>
      <div class="actions flex flex-row justify-between">
        <div class="no-left flex flex-row">
          <h2>64</h2>
          <p>left</p>
        </div>
        <button>
          Select Reward
        </button>
      </div>
    </div>
    <div class="pledge3">
      <div class="titles flex flex-row justify-between">
        <h2>Mahogany Special Edition</h2>
        <p>Pledge $200 or more </p>
      </div>
      <div class="content-text">
        <p class="text-left"> You get two Special Edition Mahogany stands, a Backer T-Shirt,
          and a personal thank you. You’ll be added to our Backer member list. Shipping is
          included.
        </p>
      </div>
      <div class="actions flex flex-row justify-between">
        <div class="no-left flex flex-row">
          <h2>0</h2>
          <p>left</p>
        </div>
        <button>
          Out of stock
        </button>
      </div>
    </div>

      <!-- Selection modal start -->
       <div class="hide hidden">

      Back this project Want to support us in bringing Mastercraft Bamboo Monitor Riser
      out in the world? Pledge with no reward Choose to support us without a reward if you
      simply believe in our project. As a backer, you will be signed up to receive product
      updates via email. Bamboo Stand Pledge $25 or more You get an ergonomic stand made
      of natural bamboo. You've helped us launch our promotional campaign, and you’ll be
      added to a special Backer member list. 101 left

      <!-- Selected pledge start -->
      Enter your pledge $25 Continue
      <!-- Selected pledge end -->

      Black Edition Stand Pledge $75 or more You get a Black Special Edition computer
      stand and a personal thank you. You’ll be added to our Backer member list. Shipping
      is included. 64 left

      <!-- Selected pledge start -->
      Enter your pledge $75 Continue
      <!-- Selected pledge end -->

      Mahogany Special Edition Pledge $200 or more You get two Special Edition Mahogany
      stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer
      member list. Shipping is included. 0 left
    </div>
    </div>
    </div>
    </div>

    <!-- Selected pledge  start -->
     <div class="start hidden">
    Enter your pledge $200 Continue
  </div>
    <!-- Selected pledge end -->

    <!-- Selection modal end -->

    <!-- Success modal start -->
     <div class="success hidden">

    Thanks for your support! Your pledge brings us one step closer to sharing Mastercraft
    Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
    Got it!
  </div>
  </div>
</template>

<script scoped>
export default {
  name: "App",
  data() {
    return {
      url: require("@/assets/images/image-hero-desktop.jpg"),
      logoCon: require("@/assets/images/logo-mastercraft.svg"),
      bookmark: require("@/assets/images/icon-bookmark.svg"),
    };
  },
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Commissioner:wght@100..900&display=swap");

#app {
  font-family: "Commissioner", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  background: url("./assets/images/image-hero-desktop.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}

body {
  background: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
}

nav ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 10px 0 0 45px;
}

nav ul li {
  margin-right: 20px;
  font-weight: 500;
  color: #ffffff;
}

.logo p {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 10px 0 0 45px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.content .master {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto;
  width: 52%;
  margin-top: -100px;
}
.content .fact-section {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto;
  width: 52%;
}
.content .about {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto;
  width: 52%;
}
.master p {
  font-size: 1rem;
  color: #6e8098;
  margin: 10px 0 0 0;
  font-weight: 500;
}
.master .logo-con {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -45px 0 0 0;
}
.master .logo-con img {
  width: 50px;
  height: 50px;
}
.buttons .mark {
  background: #ccc;
}
.buttons .back {
  background: hsl(176, 72%, 28%);
}
.back p {
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  font-size: 16px;
}
.mark p {
  font-weight: 700;
  color: #6e8098;
  margin: 15px 0 0 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
}
.facts{
  display: flex;
  gap: 50px;
  padding: 20px;
}
.fact1, .fact2, .fact3 {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 20px;
}
.fact1 .number, .fact2 .number, .fact3 .number {
  font-size: 2rem;
  font-weight: 700;
  color: hsl(0, 0%, 0%);
}
.fact1 .detail, .fact2 .detail, .fact3 .detail {
  font-size: 1rem;
  color:hsl(0, 0%, 48%);
  font-weight: 500;
}
.about h2{
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(0, 0%, 0%);
  margin: 20px 0 0 0;
}
.about p{
  font-size: 1rem;
  font-weight: 500;
  color: hsl(0, 0%, 48%);
  margin: 10px 0 0 0;
}
.pledge1, .pledge2, .pledge3 {
  margin-top: 20px;
  border: 2px solid #ccc;
  border-radius:8px;
  padding: 20px;
}
.titles h2{
  font-size: 1.2rem;
  font-weight: 700;
  color: hsl(0, 0%, 0%);
}
.titles p{
  font-size: 1rem;
  font-weight: 500;
  color:hsl(176, 50%, 47%);
  margin: 20px 0 0 0;
}
.actions button{
  background: hsl(176, 72%, 28%);
  color: #ffffff;
  padding: 10px;
  font-weight: 500;
}
</style>
