<template>
  <FlatCard class="q-pa-lg">
    <q-card-section>
      <CardHead titleClass="text-body1" title="Breakdown of Rewards Redeemed"></CardHead>
    </q-card-section>
    <q-card-section class="row items-center">
      <div class=" col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
        <DoughnutChart class="chart-section" :chartData="data" :options="options"></DoughnutChart>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 q-pa-lg" v-if="data">
        <div class="row items-center q-mb-md" v-for="(label, index) in data.labels" :key="index">
          <span class="dot" :style="`background-color: ${getColor(index)}`"></span>
          <div class="q-ml-sm text-grey-2 app-text--light">{{ label }}</div>
          <q-space />
          <div class="text-weight-bold" :style="`color: ${getColor(index)}`">100</div>
        </div>
      </div>

    </q-card-section>
  </FlatCard>
</template>

<script>
import charts from 'src/mixins/charts';
import DoughnutChart from '../App/Charts/Doughnut/Doughnut.vue';

export default {
  name: 'rewards-redeemed',
  mixins: [charts],
  components: {
    DoughnutChart,
  },
  data() {
    return {
      data: null,
      options: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.options = this.pieChartOptions;
      this.data = {
        labels: ['Airtime', 'Cash', 'Discount Voucher'],
        datasets: [
          {
            label: 'Rewards Redeemed',
            data: [100, 80, 70],
            backgroundColor: ['#440A9F', '#5064CC', '#01B944'],
          },
        ],
      };
    },
    getColor(index) {
      return this.data.datasets[0].backgroundColor[index];
    },
  },
};
</script>

<style lang="scss">
.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}
.chart-section {
  height: 190px;
}
</style>
