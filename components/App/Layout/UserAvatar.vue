<template>
  <q-avatar size="30px" class="cursor-pointer">
    <img src="https://www.gannett-cdn.com/presto/2020/09/02/USAT/12c0076e-e79a-455a-9b50-b02bbc48daf8-poe.png">
    <q-menu>
      <q-list style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section>Profile</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Settings</q-item-section>
        </q-item>
        <q-separator />

        <q-item clickable v-close-popup
        @click="logoutUser()"
        >
          <q-item-section>Logout</q-item-section>
        </q-item>

      </q-list>
    </q-menu>
  </q-avatar>
</template>

<script>
export default {
  name: 'user-avatar',

  methods: {
    logoutUser() {
      this.$q.localStorage.clear();
      this.$router.push('/');
    },
  },
};
</script>
