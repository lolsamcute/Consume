<template>
  <FlatCard class="infoCardHorizontal app-rounded--12 row items-center">
    <q-card-section class="q-pa-sm col-12" horizontal>
      <q-card-section class="flex flex-center col-5">
        <div :class="color" class="app-icon-bg mx-auto q-pa-md">
          <q-icon :name="`img:${icon}`" :size="iconSize" />
        </div>
      </q-card-section>
      <q-card-section class="col-7 column justify-center">
        <div class="text-h4 text-weight-bold">{{ value }}</div>
        <div class="text-caption text-grey app-text--light">{{ label }}</div>
        <div class="text-caption text-green-3 text-weight-bold">{{ diffValue }}</div>
      </q-card-section>
    </q-card-section>
  </FlatCard>
</template>

<script>

export default {
  name: 'info-card-horizontal',
  props: {
    iconSize: {
      type: String,
      default: '25px',
    },
    color: {
      type: String,
      default: 'bg-grey-1',
    },
    icon: String,
    value: String,
    label: String,
    diffValue: String,
  },
};
</script>

<style lang="scss" scoped>
  .infoCardHorizontal {
    height: 150px;
  }
</style>
