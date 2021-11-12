<template>
  <div class="referralCampaign q-mt-md">
    <PageIntroLeading text="Your existing customer earns their reward upon sign up of their referral." />

    <div v-for="(url, index) in referralUrls" :key="index">
      <div class="row q-mt-md q-col-gutter-lg">
        <div class="col-md-7 col-lg-7 col-sm-12 col-xs-12">
          <AppInputBox label="Referral URL">
            <AppInput placeholder="Enter Your Referral URL" />
          </AppInputBox>
        </div>
        <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12">
          <AppInputBox label="Campaign Status">
            <div class="q-mt-sm">
              <q-radio class="app-text--light1 text-grey-1" dense v-model="status" val="active" color="primary" label="Active" />
              <q-radio class="app-text--light1 text-grey-1 q-ml-xl" dense v-model="status" val="disabled" color="primary" label="Disabled" />
            </div>
          </AppInputBox>
        </div>
      </div>

      <div class="row q-mt-md q-col-gutter-lg">
        <div class="col-md-7 col-lg-7 col-xl-7 col-sm-12">
          <AppInputBox label="Points Earned (When referral signs up)">
            <AppInput placeholder="Enter number of earning points" />
          </AppInputBox>
        </div>
      </div>
    </div>
    <AppDialog class="q-pa-xl" :isActive="dialogActive" @close="dialogActive = false" :message="dialogMessage" />
  </div>
</template>

<script>
import { EVENTS } from 'src/helpers/Events';

export default {
  name: 'referral-campaign',
  data() {
    return {
      status: 'active',
      dialogMessage: 'Referral Campaign saved!',
      dialogActive: false,
      referralUrls: [
        1,
      ],

    };
  },
  mounted() {
    window.$bus.$on(EVENTS.ADD_REF_LINK, () => {
      this.addNew();
    });
    window.$bus.$on(EVENTS.SHOW_DIALOG, (message) => {
      if (message) {
        this.dialogMessage = message;
      }
      this.dialogActive = true;
    });
  },
  methods: {
    addNew() {
      if (this.referralUrls.length < 3) {
        this.referralUrls.push(1);
      }
    },
  },
};
</script>
