<template>
  <div class="column" id="manageUsers">
    <AppSectionTitle title="Role Management" subtitle="Manage team members and assign access as you wish" />

    <q-table
      title="Teams"
      :data="data"
      flat
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="none"
      :selected.sync="selected"
    >
    <template v-slot:header-cell="props">
      <q-th :props="props">
        <!-- <q-icon name="lock_open" size="1.5em" />
        {{ props.col.label }} -->
      </q-th>
    </template>
      <template v-slot:top>
        <div class="row full-width q-pl-none">
          <div class="col-md-4">
            <q-checkbox size="sm" color="grey-1" class="text-grey-1" v-model="selectAll" label="Select all" />
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-3">
            <q-select
              v-model="visibleColumns"
              multiple
              outlined
              dense
              options-dense
              :display-value="$q.lang.table.columns"
              emit-value
              map-options
              :options="columns"
              option-value="name"
              options-cover
              class="q-mr-md"
              style="min-width: 150px"
            />
          </div>
          <div class="col-md-4">
            <AppInput :outlined="false" placeholder="Search team" :standout="true">
              <template #prepend>
                <q-icon color="primary" name="search" />
              </template>
            </AppInput>
          </div>
        </div>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td style="padding-left: 0" key="selected" :props="props">
            <q-checkbox size="sm" color="grey-1" class="text-grey-1" v-model="props.row.selected" />
          </q-td>
          <q-td class="text-grey-1"  key="fullname" :props="props">
            <div class="row items-center">
              <img width="30" height="30" class="app-rounded--full q-mr-sm" :src="props.row.avatar">
              {{ props.row.fullname }}
            </div>
          </q-td>
          <q-td></q-td>
          <q-td class="text-grey-1" key="email" :props="props">
            {{ props.row.email }}
          </q-td>
          <q-td></q-td>
          <q-td class="text-grey-1" key="role" :props="props">
            {{ props.row.role }}
          </q-td>
          <q-td class="actions">
            <q-btn
              flat
              round
              color="primary"
              size="sm"
              icon="img:static/edit.svg"
            />
            <q-btn
              flat
              round
              color="negative"
              size="sm"
              icon="block"
              @click="openConfirmationDialog('BLOCK')"
            />
            <q-btn
              flat
              round
              color="negative"
              size="sm"
              icon="img:static/trash.svg"
              @click="openConfirmationDialog('DELETE')"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <AppDialog class="q-pa-xl" :isActive="dialogActive" @close="dialogActive = false" :message="dialogMessage" />
    <ConfirmationDialog
      class="q-pa-xl"
      :isActive="confirmationDialogActive"
      @close="confirmationDialogActive = false"
      :confirmationDialogType="confirmationDialogType"
      @close-confirmation-dialog="confirmationDialogActive = false"
      @affirm-selection="affirmSelection"
    />
  </div>
</template>

<script>
export default {
  name: 'manage-users',
  data() {
    return {
      selected: [],
      visibleColumns: [],
      selectAll: false,
      dialogActive: false,
      confirmationDialogActive: false,
      dialogMessage: '',
      confirmationDialogType: 'EDIT',
      columns: [
        {
          name: 'selected', align: 'left', label: '', field: 'selected',
        },
        {
          name: 'avatar', align: 'center', label: '', field: 'avatar',
        },
        {
          name: 'fullname', label: '', field: 'fullname',
        },
        { name: 'email', label: '', field: 'email' },
        {
          name: 'role', label: '', field: 'role', align: 'left',
        },
      ],
      data: [
        {
          selected: false,
          avatar: 'https://img.freepik.com/free-photo/inspired-caucasian-female-model-with-short-haircut-looking-away-with-shy-smile-purple-wall-photo-lovable-brown-haired-woman-sweater-relaxing-photoshoot_197531-7990.jpg?size=626&ext=jpg',
          fullname: 'Emike Okoyomoh',
          email: 'Eokoyomoh@bmafrica.com',
          role: 'Administrator',
        },
        {
          selected: false,
          avatar: 'https://img.freepik.com/free-photo/inspired-caucasian-female-model-with-short-haircut-looking-away-with-shy-smile-purple-wall-photo-lovable-brown-haired-woman-sweater-relaxing-photoshoot_197531-7990.jpg?size=626&ext=jpg',
          fullname: 'Emike Okoyomoh',
          email: 'Eokoyomoh@bmafrica.com',
          role: 'Publisher',
        },
        {
          selected: false,
          avatar: 'https://img.freepik.com/free-photo/inspired-caucasian-female-model-with-short-haircut-looking-away-with-shy-smile-purple-wall-photo-lovable-brown-haired-woman-sweater-relaxing-photoshoot_197531-7990.jpg?size=626&ext=jpg',
          fullname: 'Emike Okoyomoh',
          email: 'Eokoyomoh@bmafrica.com',
          role: 'Administrator',
        },
        {
          selected: false,
          avatar: 'https://img.freepik.com/free-photo/inspired-caucasian-female-model-with-short-haircut-looking-away-with-shy-smile-purple-wall-photo-lovable-brown-haired-woman-sweater-relaxing-photoshoot_197531-7990.jpg?size=626&ext=jpg',
          fullname: 'Emike Okoyomoh',
          email: 'Eokoyomoh@bmafrica.com',
          role: 'Administrator',
        },

      ],
    };
  },
  methods: {
    getSelectedString() {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`;
    },
    openConfirmationDialog(dialogType) {
      this.confirmationDialogType = dialogType;
      this.$nextTick(() => {
        this.confirmationDialogActive = true;
      });
    },
    affirmSelection(message) {
      this.dialogMessage = message;
      this.confirmationDialogActive = false;
      this.$nextTick(() => {
        this.dialogActive = true;
      });
    },
  },
};
</script>

<style lang="scss">
  .q-table__top {
    padding-left: 0;
  }
</style>
