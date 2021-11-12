import { capitalize } from 'lodash';

export default {
  methods: {
    upperFirst(value) {
      return value.split('-').map((x) => capitalize(x)).join(' ');
    },
    hasBtnPage() {
      const { name } = this.$router.currentRoute;
      if (name === 'referral-campaign' || name === 'media-option') {
        return true;
      }
      return false;
    },
  },
};
