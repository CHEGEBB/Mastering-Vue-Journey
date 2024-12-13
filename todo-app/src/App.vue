<template>
  <div class="min-h-screen" :class="isDarkTheme ? 'bg-[#161722] text-[#fafafa]' : 'bg-white text-[#494C6B]'">
    <div class="header relative">
      <img src="@/assets/images/bg-desktop-dark.jpg" alt="header" class="hidden md:block w-full h-[300px] object-cover" v-show="isDarkTheme">
      <img src="@/assets/images/bg-desktop-light.jpg" alt="header" class="hidden md:block w-full h-[300px] object-cover" v-show="!isDarkTheme">
      <img src="@/assets/images/bg-mobile-dark.jpg" alt="header" class="block md:hidden w-full h-[200px] object-cover" v-show="isDarkTheme">
      <img src="@/assets/images/bg-mobile-light.jpg" alt="header" class="block md:hidden w-full h-[200px] object-cover" v-show="!isDarkTheme">
      
      <div class="absolute top-[70px] w-full max-w-[540px] mx-auto left-1/2 transform -translate-x-1/2 px-4">
        <div class="flex justify-between items-center">
          <h1 class="uppercase text-3xl tracking-[12px] font-bold text-white">Todo</h1>
          <button @click="toggleTheme">
            <img src="@/assets/images/icon-sun.svg" alt="sun" v-show="isDarkTheme" />
            <img src="@/assets/images/icon-moon.svg" alt="moon" v-show="!isDarkTheme" />
          </button>
        </div>

        <!-- Todo Input -->
        <div class="mt-8 relative">
          <input 
            type="text" 
            v-model="newTodo" 
            placeholder="Create a new todo..." 
            class="w-full pl-12 p-4 rounded-md border-none focus:outline-none focus:ring-0"
            :class="isDarkTheme ? 'bg-[#25273c] text-[#fafafa]' : 'bg-white text-[#494C6B]'"
            @keyup.enter="addTodo"
          >
          <div 
            class="w-5 h-5 border-[1px] border-[#4d5066] rounded-full cursor-pointer flex items-center justify-center absolute top-4 left-4"
            :class="{'bg-gradient-to-br from-[#57ddff] to-[#c058f3]': isChecked}"
            @click="toggleChecked"
          >
            <img v-if="isChecked" src="@/assets/images/icon-check.svg" alt="checkmark" class="w-3 h-3" />
          </div>
        </div>

        <!-- Todo List -->
        <div class="mt-4 rounded-md shadow-xl overflow-hidden"
          :class="isDarkTheme ? 'bg-[#25273c]' : 'bg-white'"
        >
          <draggable 
            v-model="todo"
            :animation="200"
            item-key="id"
            class="todo-list"
          >
            <template #item="{element: todo}">
              <div 
                class="group flex items-center p-4 border-b cursor-move"
                :class="isDarkTheme ? 'border-[#393a4c] text-[#cacde8]' : 'border-[#E3E4F1] text-[#494C6B]'"
              >
                <div 
                  class="w-5 h-5 border-[1px] border-[#4d5066] rounded-full cursor-pointer flex items-center justify-center mr-4"
                  :class="{'bg-gradient-to-br from-[#57ddff] to-[#c058f3]': todo.completed}"
                  @click="toggleTodoComplete(todo)"
                >
                  <img v-if="todo.completed" src="@/assets/images/icon-check.svg" alt="checkmark" class="w-3 h-3" />
                </div>
                <span class="flex-1" :class="{'line-through opacity-50': todo.completed}">{{ todo.content }}</span>
                <button @click="removeTodo(todo)" class="opacity-0 group-hover:opacity-100 transition-opacity">
                  <img src="@/assets/images/icon-cross.svg" alt="delete" class="w-4 h-4" />
                </button>
              </div>
            </template>
          </draggable>

          <!-- List Footer -->
          <div class="p-4 flex justify-between text-sm"
            :class="isDarkTheme ? 'text-[#5B5E7E]' : 'text-[#9495A5]'"
          >
            <span>{{todo.length}} items left</span>
            <div class="flex flex-row gap-6">
              <nav>
                <ul class="flex flex-row gap-3">
                  <li class="font-bold cursor-pointer" :class="isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'">All</li>
                  <li class="font-bold cursor-pointer" :class="isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'">Active</li>
                  <li class="font-bold cursor-pointer" :class="isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'">Completed</li>
                </ul>
              </nav>
              <span>
                <ul>
                  <li class="font-bold cursor-pointer" :class="isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'">Clear Completed</li>
                </ul>
              </span>
            </div>
          </div>
        </div>

        <!-- Mobile Filters -->
        <div class="md:hidden mt-4 p-4 rounded-md flex justify-center gap-4"
          :class="isDarkTheme ? 'bg-[#25273c] text-[#5B5E7E]' : 'bg-white text-[#9495A5]'"
        >
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>

        <!-- Drag & Drop Text -->
        <p class="text-center mt-12 mb-8"
          :class="isDarkTheme ? 'text-[#5B5E7E]' : 'text-[#9495A5]'"
        >
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import draggable from 'vuedraggable';

export default defineComponent({
  name: 'App',
  components: {
    draggable
  },
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

.todo-list > * {
  cursor:move;
}
</style>