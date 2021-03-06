import React from 'react'
import { Bar } from 'react-chartjs-2';
/* import figs from './Figures';
 */

const data = {
    labels: ["Пішки", "Офіцери", "Коні", "Тури", "Королеви", "Королі"],
  datasets: [
    {
      label: 'Figures',
      data: [8, 1, 2, 2, 2, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ]
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const BarChart = () => (
    <Bar data={data} options={options} />
)

export default BarChart;