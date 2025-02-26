<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'

import { getCountries } from './getCountries.ts'
import Input from '@/components/Input.vue'

import type { Country } from './getCountries.ts'

const searchTerm = ref<string>('')
const countries = ref<Country[]>([])
const isLoading = ref<boolean>(false)
const error = ref<string | null>(null)

const debounceFn = useDebounceFn(async () => {
  await searchContries()
}, 500)

const searchContries = async () => {
  if (searchTerm.value.length < 3) {
    countries.value = []
    return
  }

  isLoading.value = true
  error.value = null

  try {
    const data = await getCountries(searchTerm.value)
    if (Object.hasOwn(data, 'status') && data['status'] === 404) {
      error.value = 'Error when request data'
    }
    countries.value = data as Country[]
  } catch (e) {
    error.value = 'Error when request data'
  } finally {
    isLoading.value = false
  }
}

watch(searchTerm, debounceFn)
</script>

<template>
  <div>
    <h1>Countries</h1>
    <Input v-model="searchTerm" />
    <div v-if="isLoading">Loading ...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="!isLoading && countries.length">
      <li v-for="country in countries" :key="country.name.official">{{ country.name.official }}</li>
    </ul>
    <div v-if="!isLoading && !error && !countries.length">No contries found</div>
  </div>
</template>

<style scoped></style>
