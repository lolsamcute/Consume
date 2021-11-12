<template>
  <q-page :class="$q.platform.is.desktop ? 'q-pa-xl' : 'q-pt-xl'">
    <div class="q-pl-lg q-pr-lg">
      <router-view></router-view>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'rewards-base',
};
</script>
