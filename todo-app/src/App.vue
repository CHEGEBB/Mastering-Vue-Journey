<template>
  <div class="min-h-screen w-full" :class="isDarkTheme ? 'bg-[#161722] text-[#fafafa] min-h-[150vh]' : 'bg-white text-[#494C6B]'">
    <div class="header relative w-full">
      <img src="@/assets/images/bg-desktop-dark.jpg" alt="header" class="hidden md:block w-full h-[200px] lg:h-[300px] object-cover" v-show="isDarkTheme">
      <img src="@/assets/images/bg-desktop-light.jpg" alt="header" class="hidden md:block w-full h-[200px] lg:h-[300px] object-cover" v-show="!isDarkTheme">
      <img src="@/assets/images/bg-mobile-dark.jpg" alt="header" class="block md:hidden w-full h-[150px] sm:h-[200px] object-cover" v-show="isDarkTheme">
      <img src="@/assets/images/bg-mobile-light.jpg" alt="header" class="block md:hidden w-full h-[150px] sm:h-[200px] object-cover" v-show="!isDarkTheme">
      
      <div class="absolute top-[50px] sm:top-[70px] w-[90%] sm:w-[80%] md:w-[70%] max-w-[540px] mx-auto left-1/2 transform -translate-x-1/2 px-4">
        <div class="flex justify-between items-center">
          <h1 class="uppercase text-2xl sm:text-3xl tracking-[8px] sm:tracking-[12px] font-bold text-white">Todo</h1>
          <button @click="toggleTheme" class="w-6 h-6 sm:w-8 sm:h-8">
            <img src="@/assets/images/icon-sun.svg" alt="sun" class="w-full h-full" v-show="isDarkTheme" />
            <img src="@/assets/images/icon-moon.svg" alt="moon" class="w-full h-full" v-show="!isDarkTheme" />
          </button>
        </div>

        <div class="mt-6 sm:mt-8 relative">
          <input 
            type="text" 
            v-model="newTodo" 
            placeholder="Create a new todo..." 
            class="w-full md:pl-12 pl-12 p-3 sm:p-4 text-sm sm:text-base rounded-md border-none focus:outline-none focus:ring-0"
            :class="isDarkTheme ? 'bg-[#25273c] text-[#fafafa]' : 'bg-white text-[#494C6B]'"
            @keyup.enter="addTodo"
          >
          <div 
            class="w-5 h-5 border-[1px] border-[#4d5066] rounded-full cursor-pointer flex items-center justify-center absolute top-3 sm:top-4 left-4"
            :class="{'bg-gradient-to-br from-[#57ddff] to-[#c058f3]': isChecked}"
            @click="toggleChecked"
          >
            <img v-if="isChecked" src="@/assets/images/icon-check.svg" alt="checkmark" class="w-3 h-3" />
          </div>
        </div>

        <div class="mt-4 rounded-md shadow-xl overflow-hidden text-sm sm:text-base"
          :class="isDarkTheme ? 'bg-[#25273c]' : 'bg-white'"
        >
          <draggable 
            v-model="filteredTodos"
            :animation="200"
            item-key="id"
            class="todo-list"
            @end="updateTodoOrder"
          >
            <template #item="{element: todo}">
              <div 
                class="group flex items-center p-3 sm:p-4 border-b cursor-move"
                :class="isDarkTheme ? 'border-[#393a4c] text-[#cacde8]' : 'border-[#E3E4F1] text-[#494C6B]'"
              >
                <div 
                  class="w-5 h-5 border-[1px] border-[#4d5066] rounded-full cursor-pointer flex items-center justify-center mr-4 flex-shrink-0"
                  :class="{'bg-gradient-to-br from-[#57ddff] to-[#c058f3]': todo.completed}"
                  @click="toggleTodoComplete(todo)"
                >
                  <img v-if="todo.completed" src="@/assets/images/icon-check.svg" alt="checkmark" class="w-3 h-3" />
                </div>
                <span class="flex-1 break-words" :class="{'line-through opacity-50': todo.completed}">{{ todo.content }}</span>
                <button @click="removeTodo(todo)" class="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity ml-2 flex-shrink-0">
                  <img src="@/assets/images/icon-cross.svg" alt="delete" class="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </template>
          </draggable>

          <div class="p-4 flex justify-between items-center text-xs sm:text-sm"
            :class="isDarkTheme ? 'text-[#5B5E7E]' : 'text-[#9495A5]'"
          >
            <span>{{activeTodosCount}} items left</span>
            <div class="hidden sm:block">
              <nav>
                <ul class="flex justify-center flex-row gap-3">
                  <li 
                    class="font-bold cursor-pointer" 
                    :class="[
                      filter === 'all' ? 'text-[#3a7bfd]' : '',
                      isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'
                    ]"
                    @click="setFilter('all')"
                  >All</li>
                  <li 
                    class="font-bold cursor-pointer" 
                    :class="[
                      filter === 'active' ? 'text-[#3a7bfd]' : '',
                      isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'
                    ]"
                    @click="setFilter('active')"
                  >Active</li>
                  <li 
                    class="font-bold cursor-pointer" 
                    :class="[
                      filter === 'completed' ? 'text-[#3a7bfd]' : '',
                      isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'
                    ]"
                    @click="setFilter('completed')"
                  >Completed</li>
                </ul>
              </nav>
            </div>
            <button 
              @click="clearCompleted" 
              class="font-bold cursor-pointer" 
              :class="isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'"
            >
              Clear Completed
            </button>
          </div>
        </div>

        <div 
          class="sm:hidden mt-4 p-4 rounded-md shadow-xl w-full text-sm"
          :class="isDarkTheme ? 'bg-[#25273c] text-[#5B5E7E]' : 'bg-white text-[#9495A5]'"
        >
          <nav>
            <ul class="flex justify-center flex-row gap-4">
              <li 
                class="font-bold cursor-pointer" 
                :class="[
                  filter === 'all' ? 'text-[#3a7bfd]' : '',
                  isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'
                ]"
                @click="setFilter('all')"
              >All</li>
              <li 
                class="font-bold cursor-pointer" 
                :class="[
                  filter === 'active' ? 'text-[#3a7bfd]' : '',
                  isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'
                ]"
                @click="setFilter('active')"
              >Active</li>
              <li 
                class="font-bold cursor-pointer" 
                :class="[
                  filter === 'completed' ? 'text-[#3a7bfd]' : '',
                  isDarkTheme ? 'hover:text-[#e4e5f1]': 'hover:text-[#d2d3db]'
                ]"
                @click="setFilter('completed')"
              >Completed</li>
            </ul>
          </nav>
        </div>

        <p class="text-center mt-8 sm:mt-12 mb-6 sm:mb-8 text-sm"
          :class="isDarkTheme ? ' text-[#5B5E7E]' : 'text-[#9495A5]'"
        >
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import draggable from 'vuedraggable';

export default defineComponent({
  name: 'App',
  components: {
    draggable
  },
  data() {
    return {
      isDarkTheme: true,
      isChecked: false,
      newTodo: '',
      filter: 'all',
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
  computed: {
    filteredTodos: {
      get() {
        switch (this.filter) {
          case 'active':
            return this.todo.filter(todo => !todo.completed);
          case 'completed':
            return this.todo.filter(todo => todo.completed);
          default:
            return this.todo;
        }
      },
      set(value) {
        this.todo = value;
      }
    },
    activeTodosCount() {
      return this.todo.filter(todo => !todo.completed).length;
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
          id: Date.now(), // Using timestamp for unique ID
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
    },
    setFilter(filterName) {
      this.filter = filterName;
    },
    clearCompleted() {
      this.todo = this.todo.filter(todo => !todo.completed);
    },
    updateTodoOrder() {
      // If we're in a filtered view, we need to preserve the order of non-visible items
      if (this.filter !== 'all') {
        const nonFilteredTodos = this.filter === 'completed' 
          ? this.todo.filter(todo => !todo.completed)
          : this.todo.filter(todo => todo.completed);
        
        // Merge the filtered and non-filtered todos
        const updatedTodos = [...this.filteredTodos];
        nonFilteredTodos.forEach(todo => {
          const index = this.todo.indexOf(todo);
          updatedTodos.splice(index, 0, todo);
        });
        
        this.todo = updatedTodos;
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
  cursor: move;
}

@media (max-width: 640px) {
  .todo-list > * {
    touch-action: none;
  }
}
</style>
