<script>
import { Line, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'lineBoundaries',
  extends: Line,
  mixins: [reactiveProp],
  props: ['options', 'chartData'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  created() {
  },
};
</script>
