 <template>
  <q-page padding>
    <div class="activities">
      <PageIntroHead class="" :hasActions="true" />
      <div class="row">
        <div class="text-grey-1 text-subtitle1 text-weight-semibold app-text--light">Here is a snapshot of your customer activity</div>
      </div>
      <div class="row q-mt-lg q-col-gutter-lg">
        <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
          <InfoCard
            color="green-1"
            iconSize="30px"
            valueClass="text-h3"
            labelClass="text-body1 q-pl-md q-pr-md text-grey-1"
            v-bind="{ icon: 'static/new-customer.svg', value: '10', label: 'New customers' }"
          >
          </InfoCard>
        </div>
        <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
          <InfoCard
            color="blue-1"
            iconSize="30px"
            valueClass="text-h3"
            labelClass="text-body1 q-pl-md q-pr-md text-grey-1"
            v-bind="{ icon: 'static/customers.svg', value: '1000', label: 'Wallet Balance (N)' }"
          >
          </InfoCard>
        </div>
        <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
          <InfoCard
            color="purple-1"
            iconSize="30px"
            valueClass="text-h3"
            labelClass="text-body1 q-pl-md q-pr-md text-grey-1"
            v-bind="{ icon: 'static/recent-activities.svg', value: '101', label: 'Recent activities' }"
          >
          </InfoCard>
        </div>
      </div>
      <div class="q-mt-md">
          <q-table
            class="my-sticky-header-table"
            title="Customers"
            :data="data"
            :columns="columns"
            row-key="name"
            flat
          >
            <template v-slot:top-right="">
              <q-input
                outlined
                dense
                debounce="300"
                v-model="filter"
                class="activities__search-input"
                placeholder="Search customers"
              >
              <template v-slot:append>
                <q-icon name="search" class="activities__search-icon" />
              </template>
              </q-input>
            </template>
            <template v-slot:top-left="">
              <h1 class="activities__customer-text">Customers</h1>
              <router-link to="/activities/customers" class="activities__view-all">View all</router-link>
            </template>
            <template #body-cell-name="props">
            <q-td :props="props">
                <router-link class="activities__customer-name" to="/activities/customer">{{props.row[props.col.name]}}</router-link>
            </q-td>
          </template>
          <template #body-cell-status="props">
            <q-td :props="props" class="row items-center">
                <StatusIndicator
                  outerCircleClass="activities__customer-status--outer"
                  :innerCircleClass="[props.row.status === 'Active' ? 'bg-green' : 'bg-red',
                   'activities__customer-status--inner']"
                />
                {{props.row[props.col.name]}}
            </q-td>
          </template>
          <template v-slot:bottom="">
            <PaginationFooter/>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import InfoCard from 'components/Commons/InfoCard.vue';

import PaginationFooter from './PaginationFooter';

export default {
  name: 'activities',
  components: {
    InfoCard,
    PaginationFooter,
  },
  computed: {
    ruleTypes() {
      return [
        {
          icon: 'static/earning-rules.svg', value: 'Earning Rules', label: 'View actions required for your customers to earn points', to: 'earning-rules',
        },
        {
          icon: 'static/earning-rules.svg', value: 'Spending Rules', label: 'Set up the amount of points needed to redeem rewards', to: 'spending-rules',
        },
      ];
    },
  },
  data() {
    return {
      today: 'today',
      filter: '',
      ruleTypeColor: 'white',
      data: [
        {
          name: 'Moshood Aremu',
          pointsEarned: 1000,
          completedActions: 99,
          lad: '14/01/2021',
          moneval: '₦100,000',
          status: 'Active',
        },
        {
          name: 'Emike Okoyomoh',
          pointsEarned: 1000,
          completedActions: 99,
          lad: '14/01/2021',
          moneval: '₦100,000',
          status: 'Active',
        },
        {
          name: 'Ayotunde Lanwo',
          pointsEarned: 1000,
          completedActions: 99,
          lad: '14/01/2021',
          moneval: '₦100,000',
          status: 'Active',
        },
        {
          name: 'Adedayo Awojobi',
          pointsEarned: 1000,
          completedActions: 99,
          lad: '14/01/2021',
          moneval: '₦100,000',
          status: 'Inactive',
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
        { name: 'moneval', label: 'Monetary Value(₦)', field: 'moneval' },
        { name: 'status', label: 'Status', field: 'status' },
      ],
    };
  },
};
</script>

<style src="./_activities.scss" lang="scss">
</style>
