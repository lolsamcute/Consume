<template>
  <div class="row justify-between items-center">
    <div :class="titleClass" class="text-weight-bold">{{ title }}</div>
    <q-space />
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-head',
  props: {
    title: String,
    titleClass: {
      type: String,
      default: () => 'text-h6',
    },
  },
};
</script>
