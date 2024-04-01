<script setup lang="ts">
import { ref, computed } from 'vue';
import { sum } from '@/components/useSum';

const firstNumber = ref(0);
const secondNumber = ref(0);
const total = computed(() => sum(firstNumber.value, secondNumber.value));
</script>

<template>
  <div>Hello! The sum is: {{ total }}
    <input v-model.number="firstNumber" type="number" />
    <input v-model.number="secondNumber" type="number" />
  </div>
</template>
