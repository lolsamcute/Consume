<template>
  <q-item
    :clickable="clickable"
    tag="a"
    :to="link"
    class="text-grey-6 q-pa-md app-rounded--5"
    :class="addClass()"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon class="link-icon" :name="`img:${icon}`" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption v-if="caption">
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>

export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
    icon: {
      type: String,
      default: '',
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    addClass() {
      const currentRoute = this.$router.currentRoute.fullPath;
      if (this.title === 'Rewards' && currentRoute.includes('rewards')) {
        return 'q-router-link--exact-active';
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
.q-router-link--exact-active {
  background-color: $accent;
  font-weight: 700 !important;
  color: $dark !important;
  .link-icon {
    filter: invert(46%) sepia(57%) saturate(5239%) hue-rotate(219deg) brightness(86%) contrast(84%);
  }
}
</style>
