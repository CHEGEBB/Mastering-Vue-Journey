<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="success" v-show="showModal">
      <div class="icon">
        <img :src="checkCon" alt="check" />
      </div>
      <h1>Thanks for your support!</h1>
      <p>
        Your pledge brings us one step closer to sharing
        Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign
        is completed.
      </p>
      <button class="btn rounded-3xl" @click="handleGotIt">Got it!</button>
    </div>
    <div class="selection-class" v-if="isSelection">
      <Selection />
    </div>
  </div>
</template>

<script>
import Selection from "./Selection.vue";

export default {
  name: "Modal",
  data() {
    return {
      showModal: true, // Initially true to show the modal
      checkCon: require("@/assets/images/icon-check.svg"),
      isSelection: false, // Controls visibility of Selection
    };
  },
  components: {
    Selection,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    handleGotIt() {
      this.isSelection = true; 
      this.showModal = false; 
    },
  },
};
</script>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .success {
    background-color: white;
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
    margin: 0 auto;
  width: 38%;
  }
  .success .icon img {
    margin: 0 auto;
  }
  .hidden {
    display: none;
  }
  .success h1 {
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 700;
  }
  .success p {
    font-size: 1rem;
    font-weight: 500;
    color: #6e7f7f;
    margin: 1rem 0;
  }
  .btn {
    background-color:hsl(176, 50%, 47%);
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    margin: 1rem 0;
    font-size: 1rem;
  }
  .btn:hover {
    background-color: hsl(176, 72%, 28%);
    color: white;
  }
</style>
