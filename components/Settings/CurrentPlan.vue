<template>
  <div class="column">
    <AppSectionTitle title="Current plan" subtitle="" />

    <div class="row q-mt-sm q-col-gutter-lg">
      <div class="col-md-6 col-lg-6 col-xs-6 col-xl-12 col-sm-12 col-xs-12">
        <FlatCard style="height: 194px" :bordered="true" class="q-pa-md app-rounded--8 row items-center full-width">
          <q-card-section class="row full-width">
            <div class="text-subtitle1 text-weight-bold">Basic Plan</div>
            <q-space />
            <div class="text-h5 text-weight-bold">₦ 50,000<small class="text-grey-1 text-h6 app-text--light">/month</small></div>
          </q-card-section>
          <q-card-section class="row full-width q-pb-none">
            <div class="col-md-6 col-lg-6 col-xs-6 col-xl-12 col-sm-12 col-xs-12">
              <div class="text-weight-bold">Day 16 of 30 days</div>
              <q-linear-progress track-color="deep-purple-1" size="10px" :value="progress" class="q-mt-md rounded-borders" />
            </div>
            <q-space />
            <div class="col-md-6 col-lg-6 col-xs-6 col-xl-12 col-sm-12 col-xs-12 text-right">
              <AppBtn class="q-pl-md q-pr-md" label="Change Plan" />
            </div>
          </q-card-section>
        </FlatCard>
      </div>
      <div class="col-md-6 col-lg-6 col-xs-6 col-xl-12 col-sm-12 col-xs-12">
        <FlatCard style="height: 194px" :bordered="true" class="q-pa-md app-rounded--8 row items-center">
          <q-card-section class="column">
            <div class="text-subtitle1 text-weight-light text-grey-1">Next Payment</div>
            <q-space />
            <div class="text-h6 text-weight-bold">January 30th 2021</div>
          </q-card-section>
          <q-card-section>
            <AppBtn color="indigo-1" textColor="primary" label="Manage Payments" class="q-mr-sm q-pl-lg q-pr-lg"></AppBtn>
          </q-card-section>
        </FlatCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'current-plan',
  data() {
    return {
      progress: 0.4,
    };
  },
};
</script>
