import React, { useContext } from 'react'
import MovieCard from '../component/MovieCard'
import { MovieContextData } from '../context/ContextData'


const MoviesList: React.FC = () => {
    const context = useContext(MovieContextData)
    if (!context) {
        throw new Error('MoviesList must be used within a MovieProvider');
    }
    const { movieListState, setMovieListState } = context;
    return (
        <div className='allMovieContainer'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    movieListState?.map((items, index) => {
                        return (
                            <MovieCard
                                movieItem={items}
                                id={items.id}
                                key={items.id}
                                index={index}
                                movieListState={movieListState}
                                setMovieListState={setMovieListState}

                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MoviesList
