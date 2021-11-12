 <template>
  <q-page padding>
    <PageNavBack to="Customers">
      <template slot="action">
        <div class="customers">
          <div class="q-mt-md">
            <q-table
              class="my-sticky-header-table"
              title="Customers"
              :data="data"
              :columns="columns"
              row-key="name"
              flat
              selection="multiple"
              :selected.sync="selected"
            >

            <template v-slot:top-right="">
              <q-btn
                flat
                dense
                label="Send reminder"
                class="customers__btn"
                aria-label="Menu"
                no-caps
                @click="sendReminderToCustomer"
              />
              <q-input
                outlined
                dense
                debounce="300"
                v-model="filter"
                class="customers__search-input"
                placeholder="Search customers"
              >
              <template v-slot:append>
                <q-icon name="search" class="customers__search-icon" />
              </template>
              </q-input>
            </template>
            <template v-slot:top-left="">
                <AppTabs
                style="width: 100%"
                :tabs="['All', 'Active', 'Inactive']"
              />
            </template>
            <template #body-cell-name="props">
              <q-td :props="props">
                  <router-link class="customers__customer-name" :to="{ name: 'customer' }">{{props.row[props.col.name]}}</router-link>
              </q-td>
              </template>
              <template #body-cell-status="props">
                <q-td :props="props" class="row items-center">
                  <div class="customers__customer-status--outer">
                    <div :class="[props.row.status === 'Active' ? 'bg-green' : 'bg-red',
                    'customers__customer-status--inner']"
                    >

                    </div>
                  </div>
                  {{props.row[props.col.name]}}
                </q-td>
              </template>
              <template v-slot:bottom="">
                <PaginationFooter/>
              </template>
            </q-table>
          </div>
          <AppDialog class="q-pa-xl" :isActive="dialogActive" @close="dialogActive = false" :message="dialogMessage" />
        </div>
      </template>
    </PageNavBack>
  </q-page>
</template>

<script>
import format from 'src/mixins/format';

import PaginationFooter from './PaginationFooter';

export default {
  name: 'customers',
  mixins: [format],
  components: {
    PaginationFooter,
  },
  data() {
    return {
      filter: '',
      selected: [],
      dialogActive: false,
      dialogMessage: 'Reminder sent to customer',
      data: [
        {
          name: 'Moshood Aremu',
          pointsEarned: 1000,
          completedActions: 99,
          lad: '14/01/2021',
          moneval: '₦100,000',
        },
        {
          name: 'Emike Okoyomoh',
          pointsEarned: 1000,
          completedActions: 99,
          lad: '14/01/2021',
          moneval: '₦100,000',
        },
        {
          name: 'Ayotunde Lanwo',
          pointsEarned: 1000,
          completedActions: 99,
          lad: '14/01/2021',
          moneval: '₦100,000',
        },
        {
          name: 'Adedayo Awojobi',
          pointsEarned: 1000,
          completedActions: 99,
          lad: '14/01/2021',
          moneval: '₦100,000',
        },
      ],
      columns: [
        {
          name: 'name', label: 'Name', field: 'name', sortable: true,
        },
        {
          name: 'pointsEarned', label: 'Points Earned', field: 'pointsEarned', sortable: true,
        },
        {
          name: 'completedActions', label: 'Completed Actions', field: 'completedActions', sortable: true,
        },
        { name: 'lad', label: 'Last Active Date', field: 'lad' },
        { name: 'moneval', label: 'Value(₦)', field: 'moneval' },
      ],
    };
  },
  methods: {
    sendReminderToCustomer() {
      this.dialogActive = true;
    },
  },
};
</script>

<style src="./_customers.scss" lang="scss">
</style>
