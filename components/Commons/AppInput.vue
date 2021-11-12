<template>
  <q-input input-class="app-input app-text--light" v-model="text" :standout="standout ? standoutClass : standout" type="text" :outlined="outlined" dense bg-color="info" :placeholder="placeholder">
    <template slot="prepend">
      <slot name="prepend"></slot>
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'app-input',
  props: {
    placeholder: String,
    outlined: {
      type: Boolean,
      defualt: () => true,
    },
    standout: {
      type: Boolean,
      default: () => false,
    },
    standoutClass: {
      type: String,
      default: 'bg-dark',
    },
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style lang="scss">
  .app-input::placeholder {
    color: $grey-4;
    margin-left: 2rem;
  }
</style>
