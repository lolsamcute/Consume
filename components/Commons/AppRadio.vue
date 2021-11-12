<template>
  <q-radio class="app-text--light1 text-grey-1" dense v-model="value" :val="label.toLocaleLowerCase()" color="grey-1" :label="label" />
</template>

<script>
export default {
  name: 'app-radio',
  props: {
    label: String,
    model: String,
  },
  data() {
    return {
      value: '',
    };
  },
};
</script>
