<template>
  <div>
     <RightSidebarDialog
      class="q-pa-sm"
      :isActive="isDialogActive"
      @close="$emit('close-dialog')"
      :primaryHeading="primaryHeading"
      :secondaryHeading="secondaryHeading"
    >
      <template #actions>
        <q-item-label class="text-grey-8 width-full q-mb-sm text-left">
          Enter Amount
        </q-item-label>
        <AppInput placeholder="Enter Amount to top up wallet with" :standout="true">
        </AppInput>
        <AppBtn class="q-pl-md q-pr-md q-mt-lg full-width" label="Proceed" />
      </template>
    </RightSidebarDialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primaryHeading: 'Top-up Wallet',
      secondaryHeading: 'Enter the amount you wish to top up your wallet with.',
      dialogActive: false,
    };
  },
  props: {
    isDialogActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
