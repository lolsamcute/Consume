<template>
  <FlatCard class="bg-white q-pr-md q-pl-md">
    <q-card-section>
      <CardHead title="Performance Report">
        <AppSelectCheckbox class="text-primary" default="Select Graph" :options="campaignSpendingsOptions"></AppSelectCheckbox>
      </CardHead>
    </q-card-section>
    <q-card-section class="row justify-center">
      <AppTabs
        style="width: 60%"
        :tabs="['Day', 'Week', 'Month', 'Year']"
      />
    </q-card-section>
    <q-card-section class="q-pa-lg">
      <LineBoundaries :chartData="data" :options="options" />
    </q-card-section>
  </FlatCard>
</template>

<script>
import charts from 'src/mixins/charts';
import LineBoundaries from 'components/App/Charts/Line/lineBoundaries.vue';

export default {
  name: 'performance-report',
  mixins: [charts],
  components: { LineBoundaries },
  data() {
    return {
      data: null,
      options: null,
    };
  },
  mounted() {
    this.fillData();
  },
  computed: {
    campaignSpendingsOptions() {
      return [
        {
          label: 'Campaign Spendings',
          value: '1',
        },
        {
          label: 'Customer Growth',
          value: '2',
        },
        {
          label: 'Sign up progress',
          value: '3',
        },
        {
          label: 'Engagement rate',
          value: '4',
        },
      ];
    },
  },
  methods: {
    fillData() {
      const ctx = document.getElementById('line-chart').getContext('2d');
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 170);
      gradientFill.addColorStop(0, 'rgba(80, 100, 192, 0.5)');
      gradientFill.addColorStop(1, 'rgba(255,255,255, 0.2)');

      this.options = this.lineChartOptions;
      this.data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
          {
            label: 'Performance Report',
            data: [80, 59, 60, 50, 56, 55, 40, 43, 38],
            fill: true,
            borderColor: 'rgb(80, 100, 204)',
            pointBackgroundColor: 'rgb(80, 100, 204)',
            pointHoverBackgroundColor: 'rgb(80, 100, 204)',
            pointHoverBorderColor: 'rgb(80, 100, 204)',
            pointHoverBorderWidth: 5,
            lineTension: 0.5,
            // backgroundColor: gradientFill || 'rgb(191, 190, 236, 0.1)',
            backgroundColor: 'rgb(191, 190, 236, 0.1)',
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>
