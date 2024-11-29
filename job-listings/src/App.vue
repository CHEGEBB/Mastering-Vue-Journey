<template>
  <div class="min-h-screen mb-6">
    <div class="header bg-[#5ba4a4] m-0">
      <img src="@/assets/images/bg-header-desktop.svg" alt="header" class="hidden md:block">
      <img src="@/assets/images/bg-header-mobile.svg" alt="header" class="block md:hidden">
    </div>
    <div class="content flex flex-col">
      <div v-for="job in jobs" :key="job.id"
        class="job md:flex md:flex-row sm:flex flex-col mx-auto my-0 mt-10 shadow-lg p-5 md:w-[78%] bg-white gap-8 rounded-sm cursor-pointer " @click="toggleChoice(job.id)"
  :style="{ borderLeft: activeJobId === job.id ? '8px solid #5ba4a4' : '8px solid transparent' }" >
        <div class="logo">
          <img :src="getImagePath(job.logo)" alt="company logo" class="w-20 h-20 md:ml-3" />
        </div>
        <div class="info flex flex-row flex-1 justify-between">
          <div class="details flex flex-col sm:flex sm:flex-col">
            <div class="badges flex flex-row gap-3">
              <p class="font-bold text-[#5ba4a4]">{{ job.company }}</p>
              <div class="new" v-if="job.new">
                <span class="badge bg-[#5ba4a4] w-12 h-5 rounded-2xl flex items-center justify-center">
                  <p class="text-white text-xs font-bold mt-1">NEW!</p>
                </span>
              </div>
              <div class="featured" v-if="job.featured">
                <span class="badge bg-[#2c3a3a] w-16 h-5 rounded-2xl flex items-center justify-center">
                  <p class="text-white text-xs font-bold mt-1">FEATURED</p>
                </span>
              </div>
            </div>
            <div class="position">
              <h2 class="text-[#2c3a3a] font-bold text-xl">{{ job.position }}</h2>
            </div>
            <div class="duration flex flex-row gap-3">
              <p class="text-[#7b8e8e] font-[600]">{{job.postedAt}}</p>
              <div class="dot-separator w-1 h-1 rounded-[50%] bg-[#7b8e8e] mx-0 my-auto"></div>
              <p class="text-[#7b8e8e] font-[600]">{{job.contract}}</p>
              <div class="dot-separator w-1 h-1 rounded-[50%] bg-[#7b8e8e] mx-0 my-auto"></div>
              <p class="text-[#7b8e8e] font-[600]">{{ job.location }}</p>
            </div>
          </div>
          <hr class="hidden sm:block md:hidden"/>
          <div class="entail flex flex-wrap items-center justify-end gap-2.5 ml-auto sm:flex sm:flex-wrap">
            <div class="role bg-[#5ba4a4]/20 inline-block px-2 py-1 rounded-[6px]">
              <h3 class="text-right font-bold text-[#5ba4a4] mt-1">{{ job.role }}</h3>
            </div>
            <div class="level bg-[#5ba4a4]/20 inline-block px-2 py-1 rounded-[6px]">
              <h3 class="text-right font-bold text-[#5ba4a4] mt-1">{{ job.level }}</h3>
            </div>
            <div class="languages bg-[#5ba4a4]/20 inline-block px-2 py-1 rounded-[6px]" v-for="language in job.languages" :key="language">
              <h3 class="text-right font-bold text-[#5ba4a4] mt-1">{{ language }}</h3>
            </div>
            <div class="tools bg-[#5ba4a4]/20 inline-block px-2 py-1 rounded-[6px]" v-for="tool in job.tools" :key="tool">
              <h3 class="text-right font-bold text-[#5ba4a4] mt-1">{{ tool }}</h3>
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
    };
  },
  mounted() {
    const jobIds = Array.from({ length: 10 }, (_, i) => i);
    Promise.all(
      jobIds.map((id) =>
        fetch(`http://localhost:3000/${id}`).then((response) => response.json())
      )
    )
      .then((data) => {
        this.jobs = data;
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  },
  methods: {
    getImagePath(imageFileName) {
      return require(`@/assets/images/${imageFileName}`);
    },
    toggleChoice (id) {
      this.activeJobId = this.activeJobId === id ? null : id;
    },
  },
};
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