 <template>
  <q-page padding>
    <PageNavBack to="Moshood Aremu">
      <template slot="action">
         <div class="customer__btn-container">
          <div class="customer__status-indicator-container row items-center">
            <StatusIndicator
              outerCircleClass="customer__status--outer"
              :innerCircleClass="[userStatus === 'Active' ? 'bg-green' : 'bg-red',
                'customer__status--inner']"
            />
            {{userStatus}}
          </div>
          <q-btn
            flat
            dense
            label="Send reminder"
            class="customer__btn"
            aria-label="Menu"
            no-caps
            @click="sendReminderToCustomer"
          />
        </div>
        <div class="customer q-mt-md">
          <FlatCard>
            <div class="row justify-between q-pa-lg">
              <div class="row items-center">
                <div class="customer__icon-container q-mr-md customer__bg-blue">
                 <q-icon name="img:static/coins.svg" class="customer__icon"/>
                </div>
                <div class="column">
                  <p class="customer__text">Total Points Earned</p>
                  <strong class="customer__number">10,000</strong>
                </div>
              </div>
              <div class="row items-center">
                <div class="customer__icon-container q-mr-md customer__bg-blue">
                  <q-icon name="img:static/coins.svg" class="customer__icon"/>
                </div>
                <div class="column">
                  <p class="customer__text">Total Points Redeemed</p>
                  <strong class="customer__number">10,000</strong>
                </div>
              </div>
              <div class="row items-center">
                <div class="customer__icon-container q-mr-md customer__bg-green">
                  <q-icon name="img:static/money.svg" class="customer__icon"/>
                </div>
                <div class="column">
                  <p class="customer__text">Monetary Value (NGN)</p>
                  <strong class="customer__number">10,000</strong>
                </div>
              </div>
            </div>
          </FlatCard>
          <div class="customer__activity-section q-mt-lg">
            <FlatCard>
              <div class="customer__activity-container">
                <h1 class="customer__activity-heading">What has Moshood Aremu been up to?</h1>

                 <q-list class="rounded-borders">
                  <q-item class="q-pb-md q-pt-md">
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" class="customer__activity-avatar">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <p class="customer__activity"><strong class="customer__activity-name">
                        Moshood Aremu</strong><span class="customer__activity-action">referred</span>a friend
                      </p>
                      <p class="customer__activity-time">2:20pm</p>
                    </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item class="q-pb-md q-pt-md">
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" class="customer__activity-avatar">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <p class="customer__activity"><strong class="customer__activity-name">
                        Moshood Aremu</strong><span class="customer__activity-action">followed</span>on Facebook
                      </p>
                      <p class="customer__activity-time">2:20pm</p>
                    </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item class="q-pb-md q-pt-md">
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" class="customer__activity-avatar">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <p class="customer__activity"><strong class="customer__activity-name">
                        Moshood Aremu</strong><span class="customer__activity-action">redeemed</span>a voucher
                      </p>
                      <p class="customer__activity-time">2:25pm</p>
                    </q-item-section>
                  </q-item>

                  <q-separator />

                   <q-item class="q-pb-md q-pt-md">
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" class="customer__activity-avatar">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <p class="customer__activity"><strong class="customer__activity-name">
                        Moshood Aremu</strong><span class="customer__activity-action">referred</span>a friend
                      </p>
                      <p class="customer__activity-time">2:20pm</p>
                    </q-item-section>
                  </q-item>

                  <q-separator />
                </q-list>
              </div>
            </FlatCard>
          </div>
        </div>
        <AppDialog class="q-pa-xl" :isActive="dialogActive" @close="dialogActive = false" :message="dialogMessage" />
      </template>
    </PageNavback>
  </q-page>
</template>

<script>
// import InfoCardHorizontal from 'components/Commons/InfoCardHorizontal';

export default {
  name: 'activities',
  // components: {
  //   InfoCardHorizontal,
  // },
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
      userStatus: 'Active',
      dialogActive: false,
      dialogMessage: '',
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
  methods: {
    sendReminderToCustomer() {
      this.dialogActive = true;
      this.dialogMessage = 'Message sent to Moshood!';
    },
  },
};
</script>

<style src="./_customer.scss" lang="scss">
</style>
