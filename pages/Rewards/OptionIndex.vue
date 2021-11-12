<template>
  <div>
    <PageNavBack :to="upperFirst(getPageName($router.currentRoute.name))">
      <template slot="action" v-if="hasBtnPage()">
        <AppBtn @clicked="add" color="indigo-1" textColor="primary" label="Add more" class="q-mr-sm"></AppBtn>
        <AppBtn @clicked="save" label="Save"></AppBtn>
      </template>
    </PageNavBack>
    <router-view></router-view>
  </div>
</template>

<script>
import format from 'src/mixins/format';
import { EVENTS } from 'src/helpers/Events';
import { mapGetters } from 'vuex';

export default {
  name: 'earning-rules-base',
  mixins: [format],
  computed: {
    ...mapGetters('rules', [
      'socialOptions',
    ]),
  },
  methods: {
    getPageName(route) {
      if (route === 'media-option') {
        return this.socialOptions[this.$route.params.id - 1].label;
      }
      return route;
    },
    hasBtnPage() {
      const { name } = this.$router.currentRoute;
      if (name === 'referral-campaign' || name === 'media-option' || name === 'airtime-rules' || name === 'cash-rules' || name === 'discount-voucher') {
        return true;
      }
      return false;
    },
    add() {
      const { name } = this.$router.currentRoute;
      if (name === 'referral-campaign') {
        window.$bus.$emit(EVENTS.ADD_REF_LINK);
      }
      if (name === 'airtime-rules') {
        window.$bus.$emit(EVENTS.ADD_AIRTIME_RULE);
      }
      if (name === 'cash-rules') {
        window.$bus.$emit(EVENTS.ADD_CASH_RULE);
      }
    },
    save() {
      window.$bus.$emit(EVENTS.SHOW_DIALOG, '');
    },
  },
};
</script>
