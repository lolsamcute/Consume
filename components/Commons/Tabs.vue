<template>
  <q-tabs
    v-model="tab"
    class="text-dark"
    indicator-color="primary"
    active-color="primary"
    dense
    @input="$emit('changed', tab)"
  >
    <q-tab v-for="tab in tabs" :key="tab" :name="tab" no-caps :label="tab" />
  </q-tabs>
</template>

<script>
export default {
  name: 'card-tabs',
  props: {
    tabs: {
      type: Array,
    },
  },
  data() {
    return {
      tab: '',
    };
  },
  mounted() {
    [this.tab] = this.tabs;
  },
};
</script>
