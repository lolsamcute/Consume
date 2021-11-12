<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-info text-primary" >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="mobile-only"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>

        </q-toolbar-title>

        <TopNav></TopNav>
      </q-toolbar>
    </q-header>

    <Sidebar :isActive="leftDrawerOpen" :menu="essentialLinks"></Sidebar>

    <q-page-container class="bg-info">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Sidebar from 'components/App/Layout/Sidebar.vue';
import Menu from 'components/App/Menu';
import TopNav from 'components/App/Layout/TopNav.vue';

export default {
  name: 'MainLayout',
  components: { Sidebar, TopNav },
  data() {
    return {
      leftDrawerOpen: true,
      essentialLinks: Menu,
    };
  },
};
</script>
