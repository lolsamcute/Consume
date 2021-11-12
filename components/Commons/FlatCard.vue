<template>
  <q-card :bordered="bordered" class="flat-card shadow-0" :class="classes" >
    <slot></slot>
  </q-card>
</template>

<script>
export default {
  name: 'flat-card',
  props: {
    classes: String,
    bordered: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.absolute-right {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 3rem
}
</style>
