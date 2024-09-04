/*Fetch Data from Django API: Create a service file in nextjs-dashboard*/
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',  // Replace with your Django backend URL
});

export const getCandlestickData = () => api.get('candlestick-data/');
export const getLineChartData = () => api.get('line-chart-data/');
export const getBarChartData = () => api.get('bar-chart-data/');
export const getPieChartData = () => api.get('pie-chart-data/');
