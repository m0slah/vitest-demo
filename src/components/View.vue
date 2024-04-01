<template>
  <component
      :is="element"
      :aria-label="ariaLabel"
      :disabled="isDisabled">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
defineProps<{
  element: string,
  ariaLabel?: string,
  isDisabled?: boolean,
}>();
</script>

