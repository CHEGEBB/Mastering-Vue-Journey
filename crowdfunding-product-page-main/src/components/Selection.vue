<template>
  <div v-if="isModalOpen" class="backdrop" @click.self="closeModal">
    <div class="selection">
      <div class="modal-header">
        <h1>Back this project</h1>
        <button @click="closeModal" class="close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-line-join="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

      <div class="choices">
        <div 
          v-for="(option, index) in pledgeOptions" 
          :key="index" 
          class="choice"
          :class="{ 'selected': selectedPledge === index }"
          @click="selectPledge(index)"
        >
          <div class="radio">
            <input 
              type="radio" 
              :id="`pledge${index}`" 
              name="pledge" 
              :value="index"
              v-model="selectedPledge"
            >
          </div>
          <div class="content">
            <div class="option-header">
              <h2>{{ option.title }}</h2>
              <span v-if="option.price">Pledge ${{ option.price }} or more</span>
              <span v-if="option.remaining !== undefined">{{ option.remaining }} left</span>
            </div>
            <p>{{ option.description }}</p>

            <!-- Pledge input section -->
            <div v-if="selectedPledge === index" class="pledge-input">
              <div class="input-container">
                <span>$</span>
                <input 
                  type="number" 
                  :min="option.price || 1" 
                  placeholder="Enter your pledge"
                >
              </div>
              <button @click="continuePledge">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectionModal",
  data() {
    return {
      isModalOpen: true,
      selectedPledge: null,
      pledgeOptions: [
        {
          title: "Pledge with no reward",
          description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        },
        {
          title: "Bamboo Stand",
          price: 25,
          remaining: 101,
          description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
        },
        {
          title: "Black Edition Stand",
          price: 75,
          remaining: 64,
          description: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
        },
        {
          title: "Mahogany Special Edition",
          price: 200,
          remaining: 0,
          description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
        }
      ]
    };
  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    },
    selectPledge(index) {
      this.selectedPledge = index;
    },
    continuePledge() {
      // Implement continue pledge logic
      console.log('Continue pledge');
    }
  }
}
</script>

<style scoped>
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
  z-index: 1000;
  overflow-y: auto;
  padding: 2rem 0;
}

.selection {
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  width: 100%;
  max-width: 700px;
  margin: auto;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: gray;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color:red;
}

.choices {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.choice {
  border: 1px solid #B7C5D2;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.choice.selected {
  border-color: #3CB3C8;
  box-shadow: 0 0 0 2px #3CB3C8;
}

.choice .radio {
  display: flex;
  align-items: center;
}

.option-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.pledge-input {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #B7C5D2;
  border-radius: 20px;
  padding: 0.5rem;
}

.input-container span {
  margin-right: 0.5rem;
}

.input-container input {
  border: none;
  width: 100px;
  outline: none;
}

.pledge-input button {
  background-color: #3CB3C8;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
}
</style>