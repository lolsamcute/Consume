<template>
  <q-page id="settings" :class="$q.platform.is.desktop ? 'q-pa-xl' : 'q-pt-xl'">
    <PageIntroHead message="Settings" class="q-pl-lg q-pr-lg" :hasActions="false" />

    <div class="row justify-start" :class="$q.platform.is.desktop ? 'q-pa-lg' : ''">
      <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 col-xl-12">
        <FlatCard class="app-rounded--5">
          <q-card-section class="row justify-start q-pb-none">
            <AppTabs
              class="settings-tab"
              @changed="(val) => currentTab = val"
              :tabs="['User Management', 'Wallet Management', 'Subscription & Billing']"
            />
          </q-card-section>
          <q-separator horizontal />
          <q-tab-panels v-model="currentTab" animated>
            <q-tab-panel name="User Management">
              <div class="q-pa-lg">
                <UserManagement />
              </div>
            </q-tab-panel>

            <q-tab-panel name="Wallet Management">
              <div class="q-pa-lg">
                <WalletsManagement></WalletsManagement>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Subscription & Billing">
              <div class="q-pa-lg">
                <SubscriptionAndBilling />
              </div>
            </q-tab-panel>
          </q-tab-panels>

        </FlatCard>
      </div>
    </div>
  </q-page>
</template>

<script>
import UserManagement from './UserManagement';
import WalletsManagement from './WalletsManagement';
import SubscriptionAndBilling from './SubscriptionAndBilling';

export default {
  name: 'settings',
  components: {
    UserManagement,
    WalletsManagement,
    SubscriptionAndBilling,
  },
  data() {
    return {
      model: '',
      text: '',
      currentTab: 'User Management',
    };
  },
};
</script>

<style lang="scss">
  #settings {
    .q-tab__content {
      margin-bottom: 10px;
      //align-items: flex-start;
      justify-content: start;
    }
  }
</style>
