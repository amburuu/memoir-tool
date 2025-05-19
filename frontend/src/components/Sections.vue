<template>
  <div>  
    <h1 class="heading-01 bg-primary">Sections</h1>
    <div v-for="section in sections" :key="section.id" class="section">
      <h2 class="subtitle-01 bg-secondary">{{ section.title }}</h2>
      <p v-if="section.subtitle" class="color-accent bg-accent">{{ section.subtitle }}</p>
      <p class="body-text">{{ section.content }}</p>
      <p v-if="section.keywords" class="keywords">{{ section.keywords }}</p>
    </div>
  </div>

</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const sections = ref([]);

const fetchSections = async () => {
    const response = await axios.get('http://localhost:3000/sections')
    .then((response) => {
      sections.value = response.data;
    })
    .catch((error) => {
      console.error('Error fetching sections:', error);
    });
};

onMounted(fetchSections);


</script>
<style scoped>
</style>
