import {Route, Routes } from "react-router-dom";
import MoviesList from "../pages/MoviesList";
import BookmarkMovies from "../pages/BookmarkMovies";

const AppRoutes:React.FC = () => {
    const routesPath = [
        {
            path: "/",
            element: <MoviesList/>
        },
        {
            path: "/bookmark-movies",
            element: <BookmarkMovies/>
        }
    ]
    return (
            <Routes>
                {
                    routesPath?.map((items, index)=>{
                        return <Route key={index} path={items.path} element={items.element}/>
                    })
                }
                <Route />
            </Routes>
    )
}

export default AppRoutes;
