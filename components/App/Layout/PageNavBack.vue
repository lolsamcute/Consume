<template>
  <div>
    <div class="row">
      <div class="text-h6 text-weight-bold cursor-pointer text-dark" @click="$router.back()">
        <q-icon name="chevron_left" class="q-mr-sm" size="30px" />
        {{ to }}
      </div>
      <q-space />
    </div>
    <slot name="action"></slot>
  </div>
</template>

<script>
export default {
  name: 'page-nav-back',
  props: {
    to: String,
  },
};
</script>
