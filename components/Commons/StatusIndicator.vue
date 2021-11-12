<template>
  <div :class="outerCircleClass">
    <div :class="innerCircleClass">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    innerCircleClass: {
      type: [Array, String],
      required: true,
    },
    outerCircleClass: {
      type: [Array, String],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
