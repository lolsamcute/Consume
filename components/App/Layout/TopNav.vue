<template>
  <div class="row justify-between items-center q-mr-lg">
    <p @click="openRightSideTopUpDialog" class="q-mr-lg" style="font-size: 1rem; margin-bottom: 0; color: #000; cursor: pointer">
      Wallet Balance: <span style="font-weight: bold">&#8358;0.00</span></p>
    <q-icon class="q-mr-md cursor-pointer" style="font-size: 1.3rem;">
      <img src="~assets/icons/search.svg" />
    </q-icon>

    <q-icon
      class="q-mr-md cursor-pointer"
      color="grey-4"
      style="font-size: 1.3rem;"
      name="notifications"
    />
    <user-avatar></user-avatar>
     <TopUpWalletDialog :isDialogActive="dialogActive" @close-dialog="closeRightSideTopUpDialog"/>
  </div>
</template>

<script>
import TopUpWalletDialog from 'src/components/TopUp/TopUpWalletDialog';
import topUpWalletDialogMixin from 'src/mixins/topUpWalletDialog';
import UserAvatar from 'components/App/Layout/UserAvatar.vue';

export default {
  name: 'app-header',
  mixins: [topUpWalletDialogMixin],
  components: {
    UserAvatar,
    TopUpWalletDialog,
  },
};
</script>
