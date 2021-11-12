<template>
  <div class="column">
    <AppSectionTitle title="Invite Team Members" subtitle="Add your team members and collaborate" />

    <div class="row q-mt-sm q-col-gutter-lg">
      <div class="col-md-4 col-lg-4 col-xs-4 col-xl-12 col-sm-12 col-xs-12">
        <q-input v-model="form.email" label="Email Address" dense />
      </div>
      <div class="col-md-4 col-lg-4 col-xs-4 col-xl-4 col-sm-12 col-xs-12">
        <q-input v-model="form.fullName" label="Full Name" dense />
      </div>
      <div class="col-md-4 col-lg-4 col-xs-4 col-xl-4 col-sm-12 col-xs-12">
        <q-select v-model="form.role" outlined :options="['Administrator', 'Publisher']" label="Role" dense />
      </div>
    </div>
    <div class="q-mt-lg">
      <AppBtn class="text-weight-light" @clicked="sendInvitationToUser" label="Invite"></AppBtn>
    </div>
    <AppDialog class="q-pa-xl" :isActive="dialogActive" @close="dialogActive = false" :message="dialogMessage" />
  </div>
</template>

<script>
export default {
  name: 'invite-user',
  data() {
    return {
      dialogActive: false,
      dialogMessage: '',
      form: {
        email: '',
        fullName: '',
        role: '',
      },
    };
  },
  methods: {
    sendInvitationToUser() {
      this.dialogMessage = 'Invitation sent!';
      this.$nextTick(() => {
        this.dialogActive = true;
      });
    },
  },
};
</script>
