import React from 'react';
import Chart from 'react-apexcharts';

const HourChart = ({ data }) => {
  const loadChartData = {
    series: [
      {
        name: 'Temperature (&deg;c)',
        data: data.map((hour) => hour.temp_c)
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: true
        }
      },
      forecastDataPoints: {
        count: 11
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'TEMPERATURE OF THE DAY',
        align: 'left',
        style: {
          fontSize: '20px',
          color: '#666',
          fontWeight: 'normal',
          borderBottom: '1px solid #e6e6e6'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      grid: {
        borderColor: '#f1f1f1',

        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: data.map((hour) => hour.time.split(' ')[1])
      }
    }
  };
  return (
    <div className="basic-weather chart">
      <Chart
        options={loadChartData.options}
        series={loadChartData.series}
        type="line"
        height={250}
      />
    </div>
  );
};

export default HourChart;
