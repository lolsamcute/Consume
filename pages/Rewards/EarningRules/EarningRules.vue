<template>
  <div class="row q-col-gutter-xl q-mt-lg">
    <div v-for="(option, index) in options" :key="index" class="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12">
      <div @click="$router.push({ name: option.to })">
        <InfoCard
          valueClass="text-h6"
          labelClass="text-body2 q-pl-md q-pr-md text-grey-1"
          v-bind="option"
          class="q-mx-auto cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from 'components/Commons/InfoCard';

export default {
  name: 'earning-rules',
  components: {
    InfoCard,
  },
  data() {
    return {
      options: [
        {
          icon: 'static/person-arrow.svg',
          color: 'accent',
          value: 'Referral Campaign',
          label: 'Reward your customers for referring friends to your brand',
          to: 'referral-campaign',
        },
        {
          icon: 'static/connect.svg', color: 'accent', value: 'Social Media Drive', label: 'Set up rewards for customers who engage on social media', to: 'social-media-drive',
        },
      ],
    };
  },
};
</script>
