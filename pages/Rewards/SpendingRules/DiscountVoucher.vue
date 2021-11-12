<template>
  <div class="discountVoucher q-mt-md">
    <PageIntroLeading text="Assign the number of points required to redeem airtime" />

    <div v-for="(rule, i) in airtimeRules" :key="i" class="row q-mt-md q-col-gutter-lg">
      <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
        <AppInputBox label="Points Required">
          <AppInput placeholder="Enter the number of points" />
        </AppInputBox>
      </div>
      <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
        <AppInputBox label="Discount Voucher (N)">
          <AppInput placeholder="Enter value of discount" />
        </AppInputBox>
      </div>
      <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
        <AppInputBox label="Campaign Status">
          <template slot="label">
            <div class="row items-center">
              <div class="text-body2 q-mb-sm text-dark">Campaign Status</div>
              <q-space />
              <q-btn v-if="i > 0" color="negative" flat dense label="Delete" no-caps @click="removeRule" />
            </div>
          </template>
          <div class="q-mt-sm">
            <q-radio class="app-text--light1 text-grey-1" dense v-model="status" val="active" color="primary" label="Active" />
            <q-radio class="app-text--light1 text-grey-1 q-ml-xl" dense v-model="status" val="disabled" color="primary" label="Disabled" />
          </div>
        </AppInputBox>
      </div>
      <div class="col-md-8 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
        <AppInputBox label="Redemption URL">
          <AppInput placeholder="Enter your voucher redemption URL" />
        </AppInputBox>
      </div>
      <div class="col">
        <AppInputBox label="Redemption URL">
          <AppInput placeholder="Enter your voucher redemption URL" />
        </AppInputBox>
      </div>
    </div>
    <AppDialog class="q-pa-xl" :isActive="dialogActive" @close="dialogActive = false" :message="dialogMessage" />
  </div>
</template>

<script>
import { EVENTS } from 'src/helpers/Events';

export default {
  name: 'rule-options',
  data() {
    return {
      status: 'active',
      airtimeRules: [1],
      dialogMessage: 'Airtime Rules Saved',
      dialogActive: false,
    };
  },
  mounted() {
    window.$bus.$on(EVENTS.ADD_AIRTIME_RULE, () => {
      this.airtimeRules.push(1);
    });
    window.$bus.$on(EVENTS.SHOW_DIALOG, (message) => {
      if (message) {
        this.dialogMessage = message;
      }
      this.dialogActive = true;
    });
  },
  methods: {
    removeRule() {
      if (this.airtimeRules.length > 1) {
        this.airtimeRules.pop();
      }
    },
  },
};
</script>
