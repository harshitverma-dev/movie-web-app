import React, { createContext, ReactNode, useState } from 'react'
import { MoviesData, MoviesDataType } from '../data/MoviesData';

export interface createContextType {
    movieListState: MoviesDataType[],
    setMovieListState: React.Dispatch<React.SetStateAction<MoviesDataType[]>>
}

interface props {
    children: ReactNode
}


export const MovieContextData = createContext<createContextType | null>(null);

const ContextData: React.FC<props> = ({ children }) => {
    const [movieListState, setMovieListState] = useState<MoviesDataType[]>(MoviesData)
    return (
        <MovieContextData.Provider value={{ movieListState, setMovieListState }}>
            {children}
        </MovieContextData.Provider>
    )
}

export default ContextData;
