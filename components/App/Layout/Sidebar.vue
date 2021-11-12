<template>
    <q-drawer
      v-model="isActive"
      show-if-above
      bordered
      content-class="bg-white q-pa-md"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8 width-full q-mb-md"
        >
          <AppLogo></AppLogo>
        </q-item-label>

        <sidebar-link class="text-grey q-mb-lg text-weight-semibold" v-bind="{ title: 'Moshood', clickable: false }"></sidebar-link>
        <SidebarLink
          v-for="link in menu"
          :key="link.title"
          v-bind="link"
        />
        <sidebar-link class="text-grey q-mb-lg text-weight-semibold logout"  v-bind="{ title: 'Logout', icon: 'static/log-out.svg' }"></sidebar-link>
      </q-list>
    </q-drawer>
</template>

<script>
import AppLogo from 'components/App/Layout/Logo';
import SidebarLink from './SidebarLink.vue';

export default {
  name: 'app-sidebar',
  props: {
    isActive: {
      type: Boolean,
      default: true,
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    AppLogo,
    SidebarLink,
  },
  data() {
    return {
      left: false,
      dataUser: this.$q.localStorage.getItem('datauser'),
    };
  },
  methods: {
    logoutUser() {
      this.$q.localStorage.clear();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
  .logout {
    margin-top: 4rem;
  }
</style>
