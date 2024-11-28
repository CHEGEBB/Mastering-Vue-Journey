<template>
  <div class="min-h-screen">
    <div class="header bg-[#5ba4a4] m-0">
      <!-- Conditionally render an image depending on screen size -->
      <img src="@/assets/images/bg-header-desktop.svg" alt="header" class="hidden md:block">
      <img src="@/assets/images/bg-header-mobile.svg" alt="header" class="block md:hidden">
    </div>
    <div class="content flex flex-col">
      <div v-for="job in jobs" :key="job.id"
        class="job md:flex md:flex-row sm:flex sm:flex-col mx-auto my-0 mt-10 shadow-lg p-5 md:w-[70%] bg-white">
        <div class="logo">
          <img :src="getImagePath(job.logo)" alt="company logo" class="w-10 h-10" />
        </div>
        <div class="details flex flex-col">
          <div class="badges flex flex-row">
            <div class="new" v-if="job.new">
              <span class="badge">New</span>
            </div>
            <div class="featured" v-if="job.featured">
              <span class="badge">Featured</span>
            </div>
          </div>
          <div class="position">
            <h2>{{ job.position }}</h2>
          </div>
          <div class="duration flex flex-row">
            <p>{{job.postedAt}}</p>
            <div class="dot-separator w-1 h-1 rounded-[50%] bg-slate-400">
          </div>
          </div>
        </div>
        <p>{{ job.company }}</p>
        <p>Location: {{ job.location }}</p>
        <ul class="flex flex-row">
          <li v-for="language in job.languages" :key="language">{{ language }}</li>
        </ul>
        <ul>
          <li v-for="tool in job.tools" :key="tool">{{ tool }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      jobs: [], // Array to store all fetched jobs
    };
  },
  mounted() {
    const jobIds = Array.from({ length: 10 }, (_, i) => i);

    // Fetch each job by ID
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
</style>
