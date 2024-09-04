import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => (
  <Pie data={{
    labels: data.labels,
    datasets: [{ data: data.data, label: 'Pie Chart' }]
  }} />
);

export default PieChart;
