import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => (
  <Bar data={{
    labels: data.labels,
    datasets: [{ data: data.data, label: 'Bar Chart' }]
  }} />
);

export default BarChart;
