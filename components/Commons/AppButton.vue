<template>
  <q-btn
    padding="10px"
    :color="color"
    :text-color="textColor"
    unelevated
    class="app-btn app-rounded--7 text-weight-bold"
    no-caps
    :label="label"
    @click="$emit('clicked')"
  />
</template>

<script>
export default {
  name: 'app-button',
  props: {
    icon: {
      type: String,
      default: 'check',
    },
    label: {
      type: String,
      default: 'App Button',
    },
    color: {
      type: String,
      default: 'primary',
    },
    textColor: {
      type: String,
      default: 'white',
    },
  },
};
</script>

<style lang="scss" scoped>
.app-btn {
  min-width: 117px;
}
</style>
