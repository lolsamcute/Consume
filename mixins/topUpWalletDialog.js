const topUpWalletDialogMixin = {
  data() {
    return {
      dialogActive: false,
    };
  },
  methods: {
    openRightSideTopUpDialog() {
      this.dialogActive = true;
    },
    closeRightSideTopUpDialog() {
      this.dialogActive = false;
    },
  },
};

export default topUpWalletDialogMixin;
