<template>
  <div class="subscriptionHistory">
    <div class="text-subtitle1 text-weight-bold">Subscription History</div>

    <div class="transactions q-mt-md">
      <AppLogEntry v-for="(item, i) in 3" :key="i" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'subscription-history',
};
</script>
