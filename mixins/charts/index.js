const fontFamily = 'Product Sans';
const easing = 'easeInOutBack';
const legend = false;
const tooltipDefaults = {
  backgroundColor: 'rgb(80, 100, 204)',
  xPadding: 40,
  yPadding: 12,
  titleAlign: 'center',
  displayColors: false,
  titleFontFamily: fontFamily,
  bodyFontFamily: fontFamily,
  titleFontSize: 13,
  bodyFontSize: 15,
};

const TICKS_STYLE = {
  fontFamily,
  fontColor: 'rgba(0,0,0,0.3)',
  fontStyle: 'normal',
};
export default {
  data() {
    return {
      pieChartOptions: {
        legend,
        easing,
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          ...tooltipDefaults,
        },
        elements: {
          center: {
            text: 'Red is 2/3 the total numbers',
          },
        },
      },
      lineChartOptions: {
        legend,
        easing,
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          ...tooltipDefaults,
          callbacks: {
            label(tooltipItem /* data */) {
              // let label = data.datasets[tooltipItem.datasetIndex].label || '';

              // if (label) {
              //   label += ': ';
              // }
              // label += Math.round(tooltipItem.yLabel * 100) / 100;
              // return label;
              return `N ${Math.round(tooltipItem.yLabel * 100) / 100}`;
            },
          },
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false,
              display: true,
            },
            ticks: TICKS_STYLE,
          }],
          yAxes: [{
            gridLines: {
              zeroLineColor: 'transparent',
              drawOnChartArea: true,
              drawTicks: false,
            },
            ticks: {
              padding: 20,
              callback: (value) => `${value}M`,
              ...TICKS_STYLE,
            },
          }],
        },
      },
    };
  },
};
