import React, { createContext, ReactNode, useState } from 'react'
import { MoviesData, MoviesDataType } from '../data/MoviesData';
import { IChartData, IChartOptions } from '../interfaces/Analytics/IChart';

export interface createContextType {
    movieListState: MoviesDataType[],
    setMovieListState: React.Dispatch<React.SetStateAction<MoviesDataType[]>>
    chartData : IChartData,
    chartOptions : IChartOptions,
    setChartData : React.Dispatch<React.SetStateAction<IChartData>>,
    setChartOptions : React.Dispatch<React.SetStateAction<IChartOptions>>
}



interface props {
    children: ReactNode
}


export const MovieContextData = createContext<createContextType | null>(null);

const ContextData: React.FC<props> = ({ children }) => {
    const documentStyle = getComputedStyle(document.documentElement);
    const [movieListState, setMovieListState] = useState<MoviesDataType[]>(MoviesData)
    const [chartData, setChartData] = useState<IChartData>({
        labels : [],
        datasets: [
            {
                data: [],
                backgroundColor: [documentStyle.getPropertyValue('--indigo-500'),  documentStyle.getPropertyValue('--cyan-500'),  documentStyle.getPropertyValue('--green-400')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--indigo-300'),  documentStyle.getPropertyValue('--cyan-300'),  documentStyle.getPropertyValue('--green-300')],
            }
        ]
    });
    const [chartOptions, setChartOptions] = useState<IChartOptions>({
        cutout : '60%'
    });
    return (
        <MovieContextData.Provider value={{ movieListState, setMovieListState, chartData, chartOptions, setChartData, setChartOptions }}>
            {children}
        </MovieContextData.Provider>
    )
}

export default ContextData;
