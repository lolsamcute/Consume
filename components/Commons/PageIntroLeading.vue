<template>
  <div class="text-grey-1 text-subtitle1 text-weight-semibold app-text--light">{{ text }}</div>
</template>

<script>
export default {
  name: 'page-intro-leading',
  props: {
    text: String,
  },
};
</script>
