<template>
  <div class="userManagement">
    <div class="">
      <InviteUser />
    </div>

    <div class="q-mt-xl">
      <ManageUsers />
    </div>
  </div>
</template>

<script>
import InviteUser from 'components/Settings/InviteUser';
import ManageUsers from 'components/Settings/ManageUsers';

export default {
  name: 'user-management',
  components: {
    InviteUser,
    ManageUsers,
  },
};
</script>
