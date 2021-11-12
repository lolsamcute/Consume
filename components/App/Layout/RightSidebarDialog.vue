<template>
  <q-dialog v-model="isDialogActive" persistent>
    <FlatCard classes="app-rounded--12 app-shadow-1 absolute-right q-pr-sm q-pl-lg" style="width: 370px">
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn icon="close" color="negative" size="md" flat round dense @click="$emit('close')" />
      </q-card-section>
      <q-card-section class="row">
        <h1 class="right-sidebar-dialog__primary-heading">{{ primaryHeading }}</h1>
        <h3 class="right-sidebar-dialog__secondary-heading">{{ secondaryHeading }}</h3>
      </q-card-section>
      <q-card-section class="text-center q-pb-xl text-body1">
        <slot name="actions">

        </slot>
      </q-card-section>
    </FlatCard>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      isDialogActive: false,
    };
  },
  props: {
    primaryHeading: {
      type: String,
      required: true,
    },
    secondaryHeading: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isActive(val) {
      this.isDialogActive = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.right-sidebar-dialog {
  &__primary-heading {
    font-size: 1.25rem;
    margin-bottom: 1.3rem;
    line-height: 1.4rem;
    font-weight: 600;
  }
  &__secondary-heading {
    color: $grey-1;
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.4rem;
    font-weight: 400;
  }
}
</style>
