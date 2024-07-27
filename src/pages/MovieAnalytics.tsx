import React, { useContext, useEffect } from 'react'
import { Chart } from 'primereact/chart';
import { MovieContextData } from '../context/ContextData';

const MovieAnalytics: React.FC = () => {
    const context = useContext(MovieContextData);
    if (!context) {
        throw new Error('MoviesList must be used within a MovieProvider');
    }
    const { chartData, setChartData, chartOptions } = context;
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        setChartData({
            labels: ["Bollywood", "Hollywood", "South"],
            datasets: [
                {
                    data: [34,67,23],
                    backgroundColor: [documentStyle.getPropertyValue('--indigo-500'),  documentStyle.getPropertyValue('--cyan-500'),  documentStyle.getPropertyValue('--green-400')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--indigo-300'),  documentStyle.getPropertyValue('--cyan-300'),  documentStyle.getPropertyValue('--green-300')],
                }
            ]
        })
    }, [])
    return (
        <div className='movieAnalyticsContainer'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
            </div>
        </div>
    )
}

export default MovieAnalytics
