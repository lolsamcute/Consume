<template>
  <q-dialog v-model="isDialogActive" persistent>
    <FlatCard classes="app-rounded--12 app-shadow-1" style="width: 400px">
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn icon="close" color="negative" size="sm" flat round dense @click="$emit('close')" />
      </q-card-section>
      <q-card-section class="row justify-center">
        <q-icon size="120px" :name="`img:${icon}`" />
      </q-card-section>
      <q-card-section class="text-center q-pb-xl text-body1">
        {{ message }}
      </q-card-section>
    </FlatCard>
  </q-dialog>
</template>

<script>
import dialogMixins from 'src/mixins/dialog';

export default {
  name: 'app-dialog',
  mixins: [dialogMixins],
  props: {
    icon: {
      type: String,
      default: () => 'static/success.svg',
    },
    message: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>
