<template>
  <FlatCard class="infoCard text-center mx-auto app-rounded--12">
    <q-card-section class="flex flex-center">
      <div :class="`cardIconBg bg-${color} mx-auto q-pa-md q-mt-md items-center justify-center app-icon-bg`">
        <q-icon class="cardIcon" v-if="icon" :size="iconSize" :name="`img:${icon}`" />
        <div v-if="textIcon" class="text-h5 text-green-2">{{ textIcon }}</div>
      </div>
    </q-card-section>
    <q-card-section>
      <div :class="valueClass" class="text-h4 text-weight-bold" >{{ value }}</div>
      <div :class="labelClass" class="text-grey-1 q-mt-sm text-subtitle1 app-text--light cardLabel">
        {{ label }}
      </div>
      <slot name="action"></slot>
    </q-card-section>
  </FlatCard>
</template>

<script>

export default {
  name: 'stats-card',
  props: {
    icon: {
      type: String,
      default: '',
    },
    textIcon: {
      type: String,
    },
    iconSize: {
      type: String,
      default: '25px',
    },
    color: {
      type: String,
      default: 'accent',
    },
    value: {
      type: String,
      default: '0',
    },
    label: {
      type: String,
      default: 'Details',
    },
    valueClass: {
      type: String,
    },
    labelClass: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  .infoCard {
    height: 250px;
  }
</style>
