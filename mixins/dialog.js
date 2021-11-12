const dialogMixin = {
  watch: {
    isActive(val) {
      this.isDialogActive = val;
    },
  },
  data() {
    return {
      isDialogActive: false,
    };
  },
  props: {
    isActive: {
      type: Boolean,
      default: () => false,
    },
  },
};

export default dialogMixin;
