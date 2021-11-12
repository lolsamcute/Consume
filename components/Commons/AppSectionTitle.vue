<template>
  <div class="appSectionTitle">
    <div class="text-subtitle1 text-dark text-weight-bold">{{ title }}</div>
    <div class="tex-subtitle2 text-grey-1 app-text--light">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'app-section-title',
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
