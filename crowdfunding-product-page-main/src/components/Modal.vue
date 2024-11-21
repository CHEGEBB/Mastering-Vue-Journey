<template>
  <div class="backdrop" @click="closeModal">
    <div class="success">
      Thanks for your support! Your pledge brings us one step closer to sharing
      Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign
      is completed. Got it!
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
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
  }
  .hidden {
    display: none;
  }
</style>
