import React, { useContext, useEffect } from 'react'
import { Chart } from 'primereact/chart';
import { ProductContextData } from '../context/ContextData';
import { Card } from 'primereact/card';

const ProductAnalytics: React.FC = () => {
    const context = useContext(ProductContextData);
    if (!context) {
        throw new Error('MoviesList must be used within a MovieProvider');
    }
    const { chartData, setChartData, chartOptions } = context;
    const documentStyle = getComputedStyle(document.documentElement);
    useEffect(() => {
        setChartData({
            labels: ["Bollywood", "Hollywood", "South"],
            datasets: [
                {
                    data: [34, 67, 23],
                    backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--green-400')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--indigo-300'), documentStyle.getPropertyValue('--cyan-300'), documentStyle.getPropertyValue('--green-300')],
                }
            ]
        })
    }, [])
    return (
        <div className='movieAnalyticsContainer'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {/* <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" /> */}
                <Card title="Simple Card">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
                <Card title="Simple Card">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
                <Card title="Simple Card">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
                <Card title="Simple Card">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default ProductAnalytics
