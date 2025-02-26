<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const descriptionMap: { [index: string]: string } = {
  '/': 'This project is a collection of mini-apps, each of which solves problems that will help you not only shine at an interview, but also master a bunch of new features and technologies before you forget how to write JavaScript!',
  '/countries':
    "Simple typeahead functionality which displays the list of countries as the user types in country's name. The UI consist of an input where the user types in a country name and a list of matching options returned by the API.",
}

const updateDescription = (newPath: string) => {
  description.value = descriptionMap[newPath] ?? descriptionMap['/']
}

const description = ref('')

watch(
  () => route.path,
  (newPath) => updateDescription(newPath),
)

updateDescription(route.path)
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="description" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/countries">Countries</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
