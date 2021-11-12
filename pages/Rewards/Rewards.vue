<template>
  <div class="rewards">
    <PageIntroHead class="" :hasActions="false" />
    <div class="row">
      <div class="text-grey-1 text-subtitle1 text-weight-semibold app-text--light">Please select the reward component you wish to view</div>
    </div>
    <div class="row q-mt-lg q-col-gutter-xl">
      <div @click="$router.push({ name: ruleType.to })" v-for="(ruleType, i) in ruleTypes" :key="i" class="col-md-4 col-lg-4 col-xl-4 col-xs-12 col-sm-12">
        <InfoCard
          color="white"
          iconSize="55px"
          valueClass="text-h6"
          labelClass="text-body2 q-pl-md q-pr-md text-grey-1"
          v-bind="ruleType"
          class="cursor-pointer ruleTypes"
        />
      </div>
      <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
        <InfoCard
          color="green-1"
          iconSize="55px"
          valueClass="text-h6"
          labelClass="text-body2 q-pl-md q-pr-md text-grey-1"
          v-bind="{ textIcon: '₦', value: '0', label: 'Wallet Balance (N)' }"
        >
          <template slot="action">
            <q-btn
              class="q-mt-md full-width text-weight-bold app-rounded--6"
              unelevated
              color="primary"
              label="Top Up"
              no-caps
              @click="openRightSideTopUpDialog"
            />
          </template>
        </InfoCard>
      </div>
    </div>
    <div class="row q-mt-sm q-col-gutter-xl">
      <div class="col-md-8 col-lg-8">
        <RewardsRedeemed></RewardsRedeemed>
      </div>
      <div class="col-md-4 col-lg-4">
        <InfoCardHorizontal
          color="app-bg-orange-1"
          v-bind="{ icon: 'static/rewards-redeemed.svg', value: '250', label: 'Rewards redeemed', diffValue: '+23' }"
        ></InfoCardHorizontal>
        <q-space class="q-mt-lg" />
        <InfoCardHorizontal
          color="app-bg-green-2"
          v-bind="{ icon: 'static/money.svg', value: '1.1M', label: 'Spent on Rewards (N)', diffValue: '+500k' }"
        ></InfoCardHorizontal>
      </div>
    </div>
    <TopUpWalletDialog :isDialogActive="dialogActive" @close-dialog="closeRightSideTopUpDialog"/>
  </div>
</template>

<script>
import TopUpWalletDialog from 'src/components/TopUp/TopUpWalletDialog';
import InfoCard from 'components/Commons/InfoCard.vue';
import InfoCardHorizontal from 'components/Commons/InfoCardHorizontal';
import RewardsRedeemed from 'components/Rewards/RewardsRedeemed.vue';
import topUpWalletDialogMixin from 'src/mixins/topUpWalletDialog';

export default {
  name: 'rewards',
  mixins: [topUpWalletDialogMixin],
  components: {
    InfoCard,
    InfoCardHorizontal,
    RewardsRedeemed,
    TopUpWalletDialog,
  },
  data() {
    return {
      ruleTypeColor: 'white',
      ruleTypes: [
        {
          icon: 'static/earning-rules.svg', value: 'Earning Rules', label: 'View actions required for your customers to earn points', to: 'earning-rules',
        },
        {
          icon: 'static/earning-rules.svg', value: 'Spending Rules', label: 'Set up the amount of points needed to redeem rewards', to: 'spending-rules',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .ruleTypes:hover {
    background-color: $primary !important;
    color: white !important;
    .cardIcon {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(60deg) brightness(112%) contrast(300%);
    }
    .cardIconBg {
      background-color: $primary !important;
    }
    .cardLabel {
      color: white !important;
    }
  }
</style>
