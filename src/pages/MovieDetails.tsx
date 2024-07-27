import React, { useContext, useEffect, useState } from 'react'
import { MoviesDataType } from '../data/MoviesData'
import { useLocation } from 'react-router-dom';
import { MovieContextData } from '../context/ContextData';

const MovieDetails: React.FC = () => {
    const [storeMovieDetail, setStoreMovieDetail] = useState<MoviesDataType | null>(null);
    const context = useContext(MovieContextData);
    if (!context) {
        throw new Error('MoviesList must be used within a MovieProvider');
    }
    const { movieListState } = context;
    let location = useLocation();

    const getMovieData = () => {
        let getMovieLink = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
        let storeObjOFMovieDetail = movieListState.filter((items) => {
            return items.movieLink === getMovieLink;
        })
        console.log(storeObjOFMovieDetail[0])
        setStoreMovieDetail(storeObjOFMovieDetail[0]);
    }
    useEffect(() => {
        getMovieData();
    }, [])
    return (
        <div className='movieDetailsContainer'>
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
                <img src={storeMovieDetail?.img ?? '../src/assets/dummy-img.webp'} alt={storeMovieDetail?.title} className="w-full md:w-1/3 rounded-lg" />
                <div className="md:ml-6 mt-4 md:mt-0 w-full">
                    <h1 className="text-3xl font-bold">{storeMovieDetail?.title}</h1>
                    <p className="text-gray-700 mt-2">{storeMovieDetail?.description}</p>
                    <div className="mt-4">
                        <p><strong>Director:</strong> {storeMovieDetail?.director}</p>
                        <p><strong>Year:</strong> {storeMovieDetail?.year}</p>
                        <p><strong>Genre:</strong> {storeMovieDetail?.genre}</p>
                        <p><strong>Rating:</strong> {storeMovieDetail?.rating}</p>
                        <p><strong>Duration:</strong> {storeMovieDetail?.duration} min</p>
                        <p><strong>Language:</strong> {storeMovieDetail?.language}</p>
                        <p><strong>Country:</strong> {storeMovieDetail?.country}</p>
                        <p><strong>Box Office:</strong> {storeMovieDetail?.boxOffice}</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Cast</h2>
                        <ul className="list-disc list-inside">
                            {storeMovieDetail?.cast.map((actor, index) => (
                                <li key={index}>
                                    <strong>{actor.name}</strong> as {actor.role}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Awards</h2>
                        <ul className="list-disc list-inside">
                            {storeMovieDetail?.awards?.map((award, index) => (
                                <li key={index}>{award}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;
