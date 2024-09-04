import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => (
  <Line data={{
    labels: data.labels,
    datasets: [{ data: data.data, label: 'Line Chart', fill: false }]
  }} />
);

export default LineChart;
