<template>
  <q-dialog v-model="isDialogActive" persistent>
    <FlatCard classes="app-rounded--12 app-shadow-1 q-pr-lg q-pl-lg" style="width: 400px">
      <q-card-section class="row items-center q-pb-none q-pr-none">
        <q-space />
        <q-btn icon="close" color="negative" size="sm" flat round dense @click="$emit('close')" />
      </q-card-section>
      <q-card-section class="row q-pa-none">
        {{ primaryMessage }}
      </q-card-section>
      <q-card-section class="row items-center q-pa-none">
        <q-item class="q-pb-md q-pt-md q-pl-none q-pr-none">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" class="customer__activity-avatar">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <p class="q-ma-none">
              Emike Okoyomoh
            </p>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section class="q-pr-none q-pl-none">
        {{ secondaryMessage }}
        <span
          style="color: #FF0000"
          class="q-ml-sm"
          v-if="confirmationDialogType === 'DELETE'">
          There is no undo
        </span>
      </q-card-section>
      <q-card-section class="q-pa-none">
        <q-item class="q-pb-md q-pt-md q-pl-none q-pr-none">
          <q-item-section>
            <AppBtn
              :label="affirmationButtonMessage"
              @clicked="affirmUserSelection"
              class="confirmation-dialog__affirmation-btn"
              color="#FF0000"
            >
            </AppBtn>
          </q-item-section>
          <q-item-section>
            <AppBtn
              class="confirmation-dialog__cancellation-btn"
              :label="cancellationButtonMessage"
              @clicked="cancelUserSelection"
              color="#F6F7FD"
            >
            </AppBtn>
          </q-item-section>
        </q-item>
      </q-card-section>
    </FlatCard>
  </q-dialog>
</template>

<script>
import dialogMixins from 'src/mixins/dialog';

export default {
  name: 'confirmation-dialog',
  mixins: [dialogMixins],
  data() {
    return {
      primaryMessage: '',
      secondaryMessage: '',
      affirmationButtonMessage: '',
      cancellationButtonMessage: '',
    };
  },
  props: {
    icon: {
      type: String,
      default: () => 'static/success.svg',
    },
    confirmationDialogType: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    determineMessage(blockMessage, deleteMessage) {
      let message;
      if (this.confirmationDialogType === 'BLOCK') {
        message = blockMessage;
      } else {
        message = deleteMessage;
      }
      return message;
    },
    affirmUserSelection() {
      const message = this.determineMessage(
        'User suspended!',
        'User deleted!',
      );
      this.$emit('affirm-selection', message);
    },
    cancelUserSelection() {
      this.$emit('close-confirmation-dialog');
    },
  },
  watch: {
    confirmationDialogType() {
      this.primaryMessage = this.determineMessage(
        'Are you sure you want to suspend this user?',
        'Are you sure you want to delete this user?',
      );
      this.secondaryMessage = this.determineMessage(
        'You can always undo this',
        'All associated data will also be deleted!',
      );
      this.affirmationButtonMessage = this.determineMessage(
        'Yes, suspend this user',
        'Yes, delete this user',
      );
      this.cancellationButtonMessage = this.determineMessage(
        'No, cancel',
        'No, keep this user',
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.confirmation-dialog {
  &__affirmation-btn {
    background-color: $negative;
    color: $primary-white;
  }
  &__cancellation-btn {
    background-color: #F6F7FD;
    color: $primary !important;
  }
}
</style>
