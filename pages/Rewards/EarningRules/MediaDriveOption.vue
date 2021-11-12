<template>
  <div class="mediaDriveOption q-mt-md">
    <PageIntroLeading text="Reward your customers for engaging" />

    <div v-for="(url, index) in socialUrls" :key="index">
      <div class="row q-mt-md q-col-gutter-lg">
        <div class="col-md-7 col-lg-7 col-sm-12 col-xs-12">
          <AppInputBox :label="`${channel} URL`">
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
          <AppInputBox :label="`Points Earned (When user ${actionType})`">
            <AppInput placeholder="Enter number of earning points" />
          </AppInputBox>
        </div>
      </div>
    </div>
    <AppDialog class="q-pa-xl" :isActive="dialogActive" @close="dialogActive = false" :message="dialogMessage" />
  </div>
</template>

<script>
import { capitalize } from 'lodash';
import { mapGetters } from 'vuex';

export default {
  name: 'media-drive-option',
  data() {
    return {
      socialUrls: [1],
      status: 'active',
      dialogMessage: 'Campaign Saved',
      dialogActive: false,
    };
  },
  computed: {
    ...mapGetters('rules', [
      'socialOptions',
    ]),
    channel() {
      return capitalize(this.socialOptions[this.$route.params.id].channel);
    },
    actionType() {
      return `${this.socialOptions[this.$route.params.id].action}s`;
    },
  },
};
</script>
