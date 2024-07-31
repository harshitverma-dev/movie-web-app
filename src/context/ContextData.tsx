import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { ProductsData, ProductsDataType } from '../data/ProductsData';
import { IChartData, IChartOptions } from '../interfaces/Analytics/IChart';
export interface createContextType {
    productListState: ProductsDataType[],
    setProductListState: React.Dispatch<React.SetStateAction<ProductsDataType[]>>
    chartData: IChartData,
    chartOptions: IChartOptions,
    setChartData: React.Dispatch<React.SetStateAction<IChartData>>,
    setChartOptions: React.Dispatch<React.SetStateAction<IChartOptions>>,
    lightDarkMode: Boolean,
    setLightDarkMode: React.Dispatch<React.SetStateAction<Boolean>>
}

interface props {
    children: ReactNode
}

export const ProductContextData = createContext<createContextType | null>(null);

const ContextData: React.FC<props> = ({ children }) => {
    const documentStyle = getComputedStyle(document.documentElement);
    const [productListState, setProductListState] = useState<ProductsDataType[]>(ProductsData)
    const [chartData, setChartData] = useState<IChartData>({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--green-400')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--indigo-300'), documentStyle.getPropertyValue('--cyan-300'), documentStyle.getPropertyValue('--green-300')],
            }
        ]
    });
    const [chartOptions, setChartOptions] = useState<IChartOptions>({
        cutout: '60%'
    });
    const [lightDarkMode, setLightDarkMode] = useState<Boolean>(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });
    useEffect(() => {
        lightDarkMode ?
            document.body.classList.add('darkModeEnable')
            : document.body.classList.remove('darkModeEnable')

        localStorage.setItem('darkMode', JSON.stringify(lightDarkMode));
    }, [lightDarkMode]);

    return (
        <ProductContextData.Provider value={{ productListState, setProductListState, chartData, chartOptions, setChartData, setChartOptions, lightDarkMode, setLightDarkMode }}>
            {children}
        </ProductContextData.Provider>
    )
}

export default ContextData;
