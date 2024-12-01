<template>
  <div class="min-h-screen mb-6">
    <div class="header bg-[#5ba4a4] m-0">
      <img src="@/assets/images/bg-header-desktop.svg" alt="header" class="hidden md:block">
      <img src="@/assets/images/bg-header-mobile.svg" alt="header" class="block md:hidden w-full">
    </div>

    <!-- Search Box -->
    <div v-if="showSearches" class="search md:w-[78%] sm:w-[70%] w-[78%] bg-white relative mx-auto -top-8 flex items-center rounded-[4px] shadow-xl p-4">
      <div class="filtered-searches flex-1 flex flex-wrap gap-4">
        <div v-for="filter in selectedFilters" :key="filter" class="flex items-center bg-[#5ba4a4]/20 rounded-[4px] overflow-hidden">
          <span class="px-2 py-1 text-[#5ba4a4] font-bold">{{ filter }}</span>
          <button @click="removeFilter(filter)" class="h-full px-2 bg-[#5ba4a4] hover:bg-[#2c3a3a] transition-colors">
            <span class="text-white font-bold">
              <img src="@/assets/images/icon-remove.svg" alt="remove icon" class="w-3 h-3">
            </span>
          </button>
        </div>
      </div>
      <button @click="clearFilters" class="font-bold text-[#5ba4a4] hover:underline ml-4">Clear</button>
    </div>

    <!-- Job Listings -->
    <div class="content flex flex-col">
      <div v-for="job in filteredJobs" :key="job.id"
        class="job md:flex md:flex-row sm:flex flex-col mx-auto my-0 mt-10 shadow-lg p-5 md:w-[78%] sm:w-[80%] w-[80%] bg-white gap-8 rounded-[4px] cursor-pointer"
        @click="toggleChoice(job.id)"
        :style="{ borderLeft: selectedJobIds.includes(job.id) ? '5px solid #5ba4a4' : '5px solid transparent' }">
        
        <div class="logo">
          <img :src="getImagePath(job.logo)" alt="company logo" class="w-16 h-16 md:ml-3 sm:-mt-7 -mt-12 md:w-25 md:h-25 md:mt-0">
        </div>

        <div class="info flex flex-col md:flex-row flex-1 justify-between">
          <div class="details flex flex-col">
            <div class="badges flex flex-row gap-3">
              <p class="font-bold text-[#5ba4a4]">{{ job.company }}</p>
              <div v-if="job.new" class="new">
                <span class="badge bg-[#5ba4a4] w-12 h-5 rounded-2xl flex items-center justify-center">
                  <p class="text-white text-xs font-bold mt-1">NEW!</p>
                </span>
              </div>
              <div v-if="job.featured" class="featured">
                <span class="badge bg-[#2c3a3a] w-16 h-5 rounded-2xl flex items-center justify-center">
                  <p class="text-white text-xs font-bold mt-1">FEATURED</p>
                </span>
              </div>
            </div>
            <div class="position">
              <h2 class="text-[#2c3a3a] font-bold text-xl hover:text-[#5ba4a4]">{{ job.position }}</h2>
            </div>
            <div class="duration flex flex-row gap-3">
              <p class="text-[#7b8e8e] font-[600]">{{job.postedAt}}</p>
              <div class="dot-separator w-1 h-1 rounded-[50%] bg-[#7b8e8e] mx-0 my-auto"></div>
              <p class="text-[#7b8e8e] font-[600]">{{job.contract}}</p>
              <div class="dot-separator w-1 h-1 rounded-[50%] bg-[#7b8e8e] mx-0 my-auto"></div>
              <p class="text-[#7b8e8e] font-[600]">{{ job.location }}</p>
            </div>
          </div>

          <hr class="my-4 md:hidden">

          <div class="entail flex flex-wrap items-center gap-2.5 md:ml-auto">
            <div class="role bg-[#5ba4a4]/20 px-2 py-1 rounded-[6px] hover:bg-[#5ba4a4] cursor-pointer"
                 @click.stop="addFilter(job.role)">
              <h3 class="font-bold text-[#5ba4a4] mt-1 hover:text-white">{{ job.role }}</h3>
            </div>
            
            <div class="level bg-[#5ba4a4]/20 px-2 py-1 rounded-[6px] hover:bg-[#5ba4a4] cursor-pointer"
                 @click.stop="addFilter(job.level)">
              <h3 class="font-bold text-[#5ba4a4] mt-1 hover:text-white">{{ job.level }}</h3>
            </div>
            
            <div v-for="language in job.languages" :key="language"
                 class="languages bg-[#5ba4a4]/20 px-2 py-1 rounded-[6px] hover:bg-[#5ba4a4] cursor-pointer"
                 @click.stop="addFilter(language)">
              <h3 class="font-bold text-[#5ba4a4] mt-1 hover:text-white">{{ language }}</h3>
            </div>
            
            <div v-for="tool in job.tools" :key="tool"
                 class="tools bg-[#5ba4a4]/20 px-2 py-1 rounded-[6px] hover:bg-[#5ba4a4] cursor-pointer"
                 @click.stop="addFilter(tool)">
              <h3 class="font-bold text-[#5ba4a4] mt-1 hover:text-white">{{ tool }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      jobs: [],
      selectedJobIds: [],
      showSearches: false,
      selectedFilters: [],
    }
  },
  computed: {
    filteredJobs() {
      if (this.selectedFilters.length === 0) return this.jobs;
      
      return this.jobs.filter(job => {
        return this.selectedFilters.every(filter => {
          return [
            job.role,
            job.level,
            ...(job.languages || []),
            ...(job.tools || [])
          ].includes(filter);
        });
      });
    }
  },
 mounted() {
  fetch('https://chegebb.github.io/Mastering-Vue-Journey/data.json')
    .then(response => response.json())
    .then(data => {
      this.jobs = data;
    })
    .catch(error => console.error('Error fetching jobs:', error));
},
  methods: {
    getImagePath(imageFileName) {
      return require(`@/assets/images/${imageFileName}`);
    },
    toggleChoice(id) {
      const index = this.selectedJobIds.indexOf(id);
      if (index === -1) {
        this.selectedJobIds.push(id);
      } else {
        this.selectedJobIds.splice(index, 1);
      }
    },
    addFilter(filter) {
      if (!this.selectedFilters.includes(filter)) {
        this.selectedFilters.push(filter);
        this.showSearches = true;
      }
    },
    removeFilter(filter) {
      const index = this.selectedFilters.indexOf(filter);
      if (index !== -1) {
        this.selectedFilters.splice(index, 1);
      }
      if (this.selectedFilters.length === 0) {
        this.showSearches = false;
      }
    },
    clearFilters() {
      this.selectedFilters = [];
      this.showSearches = false;
    }
  }
}
</script>

<style lang="scss">
$Desaturated-Dark-Cyan: hsl(180, 29%, 50%);
$Background: hsl(180, 52%, 96%);
$Filter-Tablets: hsl(180, 31%, 95%);
$Dark-Grayish-Cyan: hsl(180, 8%, 52%);
$Very-Dark-Grayish-Cyan: hsl(180, 14%, 20%);
$font-league-spartan: 'League Spartan', sans-serif;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font-league-spartan;
}

body {
  background: $Background;
  margin: 0;
  padding: 0;
}

.entail div {
  min-width: max-content;
  text-align: right;
}
</style>