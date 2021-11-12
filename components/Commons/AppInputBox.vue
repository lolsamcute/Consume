<template>
  <FlatCard class="appInputBox column justify-center app-bordered-1 app-bordered-grey q-pa-lg app-rounded--6">
    <slot name="label">
      <div class="text-body2 q-mb-sm text-dark">{{ label }}</div>
    </slot>
    <slot></slot>
  </FlatCard>
</template>

<script>
export default {
  name: 'app-input-box',
  props: {
    label: {
      type: String,
      default: () => 'Enter Details',
    },
  },
};
</script>

<style lang="scss" scoped>
  .appInputBox {
    min-height: 125.5px;
  }
</style>
