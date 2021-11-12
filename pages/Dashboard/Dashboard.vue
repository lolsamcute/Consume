<template>
  <q-page :class="$q.platform.is.desktop ? 'q-pa-xl' : 'q-pt-xl'">
    <PageIntroHead class="q-pl-lg q-pr-lg" />
    <div class="row q-col-gutter-xl q-pl-lg q-pr-lg">
      <div v-for="(stat, index) in stats" :key="index" class="col-md-4 col-lg-4 col-xl-4 col-xs-12 col-sm-12">
        <InfoCard v-bind="stat" class="q-mx-auto"></InfoCard>
      </div>
    </div>
    <div class="row q-mt-sm q-col-gutter-xl q-pl-lg q-pr-lg">
      <div class="col-md-8 col-lg-8 col-xl-8 col-xs-12 col-sm-12">
        <PerformanceReport class="app-rounded--12" />
      </div>
      <div class="col-md-4 col-lg-4 col-xl-4 col-xs-12 col-sm-12">
        <InfoCard v-bind="{ icon: 'static/ref-completed.svg', color: 'deep-purple-3', value: '25', label: 'Referrals Completed' }" class="q-mx-auto"></InfoCard>
        <div class="q-mt-lg">
          <TopMembers class="app-rounded--12" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PerformanceReport from 'components/Dashboard/PerformanceReport';
import TopMembers from 'components/Dashboard/TopMembers';
import InfoCard from 'components/Commons/InfoCard.vue';
import { mapState } from 'vuex';

export default {
  name: 'Dashboard',
  components: {
    InfoCard,
    PerformanceReport,
    TopMembers,
  },
  computed: {
    ...mapState('auth', [
      'user',
    ]),
  },
  data() {
    return {
      stats: [
        {
          icon: 'static/new-members.svg', color: 'light-green-1', value: '10', label: 'New members',
        },
        {
          icon: 'static/point-earned.svg', color: 'accent', value: '1001', label: 'Points Earned',
        },
        {
          icon: 'static/point-earned.svg', color: 'accent', value: '101', label: 'Points Redeemed',
        },
      ],
    };
  },
};
</script>
