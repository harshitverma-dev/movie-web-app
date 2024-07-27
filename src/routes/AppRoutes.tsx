import { Route, Routes } from "react-router-dom";
import MoviesList from "../pages/MoviesList";
import BookmarkMovies from "../pages/BookmarkMovies";
import MovieDetails from "../pages/MovieDetails";
import MovieAnalytics from "../pages/MovieAnalytics";

const AppRoutes: React.FC = () => {
    const routesPath = [
        {
            path: "/",
            element: <MovieAnalytics />
        },
        {
            path: "/movie-list",
            element: <MoviesList />
        },
        {
            path: "/bookmark-movies",
            element: <BookmarkMovies />
        },
        {
            path: "movie-detail/:id",
            element : <MovieDetails/>
            
        }
    ]
    return (
        <Routes>
            {
                routesPath?.map((items, index) => {
                    return <Route key={index} path={items.path} element={items.element} />
                })
            }
            <Route />
        </Routes>
    )
}

export default AppRoutes;
