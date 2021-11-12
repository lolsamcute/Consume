<template>
  <div class="row intro q-mb-lg">
    <div class="text-h5 text-weight-bold">Welcome Moshood 👋🏼</div>
    <q-space />
    <div style="width: 8rem" v-if="hasActions">
      <slot name="actions">
        <AppSelect default="Today" :options="['Today', 'Yesterday']" />
      </slot>
    </div>
  </div>
</template>

<script>
import AppSelect from 'components/App/Form/Select';

export default {
  name: 'page-intro-head',
  data() {
    return {
      left: false,
      dataUser: this.$q.localStorage.getItem('token'),
    };
  },
  props: {
    hasActions: {
      type: Boolean,
      default: true,
    },
    // message: {
    //   type: String,
    //   default: () => 'Welcome   👋🏼',
    // },
  },
  components: {
    AppSelect,
  },
};
</script>
