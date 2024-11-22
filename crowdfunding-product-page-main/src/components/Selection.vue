<template>
<div>
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] overflow-y-auto py-4 px-4 md:py-8">
        <div class="bg-white p-4 md:p-8 rounded-lg w-full max-w-[95%] md:max-w-[700px] relative">
            <div class="flex justify-between items-center mb-4">
                <h1 class="font-bold text-xl md:text-2xl text-black">Back this project</h1>
                <button @click="closeModal" class="hover:opacity-70 transition-opacity">
                    <img :src="closeCon" alt="Close modal" />
                </button>
            </div>
    
            <p class="text-left font-medium text-[#787878] my-4 md:my-8">Want to support us in bringing Mastercraft Bamboo Monitor
                Riser out in the world?</p>
    
            <div class="flex flex-col gap-4">
                <div v-for="(option, index) in pledgeOptions" 
                     :key="index" 
                     class="border rounded-lg p-4 flex flex-col md:flex-row gap-4"
                     :class="{
                         'border-[#3CB3C8] shadow-[0_0_0_2px_#3CB3C8]': selectedPledge === index && option.remaining !== 0,
                         'out-of-stock-fade': option.remaining === 0
                     }"
                     @click="option.remaining > 0 && selectPledge(index)">
                    <div class="flex-shrink-0">
                        <input type="radio" 
                               :id="`pledge${index}`" 
                               name="pledge" 
                               :value="index" 
                               v-model="selectedPledge"
                               :disabled="option.remaining === 0"
                               class="mt-[5px]">
                    </div>
                    <div class="flex-grow">
                        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <h2 class="font-bold text-base md:text-lg">{{ option.title }}</h2>
                            <span v-if="option.price" class="text-[#2EB8A8] font-bold text-base md:text-lg">
                                Pledge ${{ option.price }} or more
                            </span>
                            <span v-if="option.remaining !== undefined" class="md:ml-auto">
                                <span class="font-bold">{{ option.remaining }}</span>
                                <span class="text-[#787878]"> left</span>
                            </span>
                        </div>
                        <p class="text-left font-medium text-[#787878] text-sm md:text-base mt-2">
                            {{ option.description }}
                        </p>
    
                        <div v-if="selectedPledge === index && option.remaining > 0" 
                             class="pledge-input mt-4">
                            <hr class="border-t border-[#ccc] w-full my-4" />
                            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                                <label class="font-medium text-[#787878] text-center md:text-left">
                                    Enter your pledge
                                </label>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center border border-[#B7C5D2] rounded-full px-4 py-2">
                                        <span class="text-[#787878]">$</span>
                                        <input type="number" 
                                               :min="option.price || 1"
                                               v-model="pledgeAmount"
                                               class="w-20 outline-none ml-2">
                                    </div>
                                    <button @click="submitPledge"
                                            class="bg-[#3CB3C8] hover:bg-[#147b8c] text-white px-6 py-2 rounded-full transition-colors">
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div v-if="isShowSuccess" 
         class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-4">
        <div class="bg-white p-6 rounded-lg max-w-[400px] text-center">
            <img :src="checkIcon" alt="Success" class="mx-auto mb-4" />
            <h2 class="font-bold text-xl mb-4">Thanks for your support!</h2>
            <p class="text-[#787878] mb-6">
                Your pledge helps us bring this project to life. You'll receive an email confirmation shortly.
            </p>
            <button @click="closeSuccess"
                    class="bg-[#3CB3C8] hover:bg-[#147b8c] text-white px-8 py-3 rounded-full transition-colors">
                Got it!
            </button>
        </div>
    </div>
</div>
</template>

<script>
import SuccessModal from "./Modal.vue";

export default {
    name: "SelectionModal",
    components: {
        SuccessModal,
    },
    data() {
        return {
            isModalOpen: true,
            isShowSuccess: false,
            selectedPledge: null,
            pledgeAmount: null,
            closeCon: require("@/assets/images/icon-close-modal.svg"),
            checkIcon: require("@/assets/images/icon-check.svg"),
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
            this.resetForm();
        },
        selectPledge(index) {
            if (this.pledgeOptions[index].remaining > 0) {
                this.selectedPledge = index;
                this.pledgeAmount = this.pledgeOptions[index].price || null;
            }
        },
        submitPledge() {
            const selectedOption = this.pledgeOptions[this.selectedPledge];
            if (!selectedOption) return;
            
            if (selectedOption.price && this.pledgeAmount < selectedOption.price) {
                alert(`Minimum pledge amount is $${selectedOption.price}`);
                return;
            }
            
            this.isShowSuccess = true;
            this.isModalOpen = false;
            this.resetForm();
        },
        closeSuccess() {
            this.isShowSuccess = false;
        },
        resetForm() {
            this.selectedPledge = null;
            this.pledgeAmount = null;
        }
    }
};
</script>

<style scoped>
.out-of-stock-fade {
    opacity: 0.5;
    pointer-events: none;
}

.out-of-stock-fade h2,
.out-of-stock-fade p {
    color: #6b7280;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>