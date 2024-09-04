/*Import and use these components in your dashboard page (e.g., pages/dashboard.tsx*/
import React, { useEffect, useState } from 'react';
import { getCandlestickData, getLineChartData, getBarChartData, getPieChartData } from '../services/chartDataService';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

const Dashboard = () => {
    const [candlestickData, setCandlestickData] = useState(null);
    const [lineChartData, setLineChartData] = useState(null);
    const [barChartData, setBarChartData] = useState(null);
    const [pieChartData, setPieChartData] = useState(null);

    useEffect(() => {
        getCandlestickData().then(response => setCandlestickData(response.data));
        getLineChartData().then(response => setLineChartData(response.data));
        getBarChartData().then(response => setBarChartData(response.data));
        getPieChartData().then(response => setPieChartData(response.data));
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {lineChartData && <LineChart data={lineChartData} />}
            {barChartData && <BarChart data={barChartData} />}
            {pieChartData && <PieChart data={pieChartData} />}
        </div>
    );
};

export default Dashboard;
