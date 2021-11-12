<template>
  <q-select class="custom-select" bg-color="white" standout="bg-primary text-dark" dense v-model="selectedOption" :options="options" label="">
    <template v-slot:option="scope">
      <q-item
        v-bind="scope.itemProps"
        v-on="scope.itemEvents"
      >
        <q-item-section>
          <q-item-label v-html="scope.opt" />
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
export default {
  name: 'app-select',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    default: {
      type: String,
    },
  },
  data() {
    return {
      selectedOption: '',
    };
  },
  beforeMount() {
    this.selectedOption = this.default;
  },
};
</script>

<style lang="scss">
  .custom-select {
    .q-field__control-container {
      padding-top: 4px !important;
    }
  }
</style>
