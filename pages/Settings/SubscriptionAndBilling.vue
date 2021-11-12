<template>
  <div class="subscriptionAndBilling column">
    <CurrentPlan />
    <q-space class="q-mt-lg" />
    <AppAdBanner />
    <q-space class="q-mt-lg" />
    <SubscriptionHistory />
  </div>
</template>

<script>
import CurrentPlan from 'components/Settings/CurrentPlan';
import AppAdBanner from 'components/Commons/AppAdBanner';
import SubscriptionHistory from 'components/Settings/SubscriptionHistory';

export default {
  name: 'subscription-and-billing',
  components: {
    CurrentPlan,
    AppAdBanner,
    SubscriptionHistory,
  },
};
</script>
