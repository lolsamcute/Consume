<template>
  <div class="walletManagements">
    <div class="row justify-end">
      <AppBtn color="indigo-1" textColor="primary" label="+ New Debit Card" class="q-mr-sm q-pl-lg q-pr-lg"></AppBtn>
      <AppBtn label="Top-up Wallet" class="q-pl-lg q-pr-lg" @clicked="openRightSideTopUpDialog"/>
    </div>
    <div class="row q-mt-lg q-col-gutter-lg">
      <div class="col">
        <FlatCard style="height: 194px" :bordered="true" class="row items-center q-pa-sm q-pt-lg q-pb-lg app-rounded--8">
          <q-card-section class="row q-gutter-lg">
            <img width="85" src="/static/wallet.png">
            <div class="column">
              <div class="text-subtitle1 text-weight-bold">Wallet Balance</div>
              <q-space />
              <div class="text-dark text-h4 text-weight-bold">₦ 50,000.00</div>
            </div>
          </q-card-section>
        </FlatCard>
      </div>
      <div class="col">
        <FlatCard style="height: 194px" :bordered="true" class="q-pa-md q-pt-lg q-pb-lg bg-primary flex-start app-rounded--8">
          <q-card-section class="text-white row items-center">
            <span class="q-mr-md text-h2">....</span> <span class="q-mr-md text-h2">....</span> <span class="q-mr-md text-h2">....</span> <span class="text-h5 self-end">9090</span>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-white">Debit Card</div>
          </q-card-section>
        </FlatCard>
      </div>
    </div>
    <div class="column q-mt-xl">
      <TransactionHistory />
    </div>
    <TopUpWalletDialog :isDialogActive="dialogActive" @close-dialog="closeRightSideTopUpDialog"/>
  </div>
</template>

<script>
import TransactionHistory from 'components/Settings/TransactionHistory';
import TopUpWalletDialog from 'src/components/TopUp/TopUpWalletDialog';
import topUpWalletDialogMixin from 'src/mixins/topUpWalletDialog';

export default {
  name: 'wallets-management',
  mixins: [topUpWalletDialogMixin],
  components: {
    TransactionHistory,
    TopUpWalletDialog,
  },
};
</script>
