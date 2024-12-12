<template>
  <div>
    <div class="header">
      <img src="@/assets/images/bg-desktop-dark.jpg" alt="header" class="hidden md:block" v-show="isDarkTheme">
      <img src="@/assets/images/bg-desktop-light.jpg" alt="header" class="hidden md:block" v-show="!isDarkTheme">
      <img src="@/assets/images/bg-mobile-dark.jpg" alt="header" class="block md:hidden w-full" v-show="!isDarkTheme">
      <img src="@/assets/images/bg-mobile-light.jpg" alt="header" class="block md:hidden w-full" v-show="isDarkTheme">
      <div class="top-[15%] absolute my-auto flex flex-row justify-between w-[37%] md:align-center left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="logo">
          <h1 class="uppercase text-3xl tracking-[12px] font-bold">Todo</h1>
        </div>
        <div class="theme-switcher">
          <img src="@/assets/images/icon-sun.svg" alt="sun" class="hidden md:block sm:block" @click="toggleTheme" v-show="isDarkTheme" />
          <img src="@/assets/images/icon-moon.svg" alt="moon" class="block sm:block" @click="toggleTheme" v-show="!isDarkTheme" />
        </div>
      </div>
    </div>
    <div class="todo-container top-[25%] absolute my-auto flex flex-col justify-between w-[37%] md:align-center left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div class="todo-input-container relative">
        <input type="text" v-model="newTodo" placeholder="Create a new todo..." class="w-[100%] pl-12 p-3 rounded-md border-none" :class="isDarkTheme ? 'bg-[#25273c] text-[#fafafa]' : 'bg-white text-[#494C6B]'" >
        <div class="w-5 h-5 border-2 border-[#4d5066] rounded-full cursor-pointer flex items-center justify-center absolute top-3 left-4 hover:border-[linear-gradient(hsl(192,_100%,_67%),_hsl(280,_87%,_65%))]" :class="{'bg-[linear-gradient(hsl(192,_100%,_67%),_hsl(280,_87%,_65%))]': isChecked}" @click="toggleChecked">
          <img v-if="isChecked" src="@/assets/images/icon-check.svg" alt="checkmark" class="w-3 h-3" />
        </div>
        <div class="todo-body absolute top-[80px] w-[100%] rounded-md" :class="isDarkTheme ? 'bg-[#25273c]' : 'bg-white'">
          <div v-for="todo in todo" :key="todo.id" class="todo-item flex flex-row justify-between w-[100%] p-4 focus:outline-none focus:ring-0 relative" :class="[
            isDarkTheme ? 'border-[#393a4c] text-[#fafafa]' : 'border-[#E3E4F1] text-[#494C6B]',
            'border-b-[1px]'
          ]">
            <div class="flex items-center w-full">
              <div class="w-5 h-5 border-2 border-[#4d5066] rounded-full cursor-pointer flex items-center justify-center mr-4 hover:border-[linear-gradient(hsl(192,_100%,_67%),_hsl(280,_87%,_65%))]" :class="{'bg-[linear-gradient(hsl(192,_100%,_67%),_hsl(280,_87%,_65%))]': todo.completed}" @click="toggleTodoComplete(todo)">
                <img v-if="todo.completed" src="@/assets/images/icon-check.svg" alt="checkmark" class="w-3 h-3" />
              </div>
              <div class="todo-content" :class="{'line-through': todo.completed}">{{ todo.content }}</div>
            </div>
            <div class="todo-delete" @click="removeTodo(todo)">
              <img src="@/assets/images/icon-cross.svg" alt="trash" class="w-4 h-4 ml-2" />
            </div>
          </div>
          <div class="bottom-nav p-4" :class="isDarkTheme ? 'text-[#5B5E7E]' : 'text-[#9495A5]'">
            {{todo.length}} items left
            All
            Active 
            Completed
            Clear Completed
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-8" :class="isDarkTheme ? 'text-[#5B5E7E]' : 'text-[#9495A5]'">
      Drag and drop to reorder list
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  data() {
    return {
      isDarkTheme: false,
      isChecked: false,
      newTodo: '',
      todo: [
        {
          content: 'Complete online JavaScript course',
          id: 1,
          completed: false
        },
        {
          content: 'Jog around the park 3x',
          id: 2,
          completed: false
        },
        {
          content: '10 minutes meditation',
          id: 3,
          completed: false
        },
        {
          content: 'Read for 1 hour',
          id: 4,
          completed: false
        },
        {
          content: 'Pick up groceries',
          id: 5,
          completed: false
        },
        {
          content: 'Complete Todo App on Frontend Mentor',
          id: 6,
          completed: false
        }
      ],
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
    },
    addTodo() {
      if (this.newTodo) {
        this.todo.push({
          content: this.newTodo,
          id: this.todo.length + 1,
          completed: this.isChecked
        });
        this.newTodo = '';
        this.isChecked = false;
      }
    },
    toggleChecked() {
      this.isChecked = !this.isChecked;
      this.addTodo();
    },
    toggleTodoComplete(todo) {
      todo.completed = !todo.completed;
    },
    removeTodo(todo) {
      const index = this.todo.indexOf(todo);
      if (index > -1) {
        this.todo.splice(index, 1);
      }
    }
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