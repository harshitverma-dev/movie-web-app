import { Route, Routes } from "react-router-dom";
import BookmarkProducts from "../pages/BookmarkProducts";
import ProductAnalytics from "../pages/ProductAnalytics";
import ProductsList from "../pages/ProductsList";
import ProductDetails from "../pages/ProductDetails";
import AddNewProduct from "../pages/AddNewProduct";

const AppRoutes: React.FC = () => {
    const routesPath = [
        {
            path: "/",
            element: <ProductAnalytics />
        },
        {
            path: "/product-list",
            element: <ProductsList />
        },
        {
            path: "/bookmark-products",
            element: <BookmarkProducts />
        },
        {
            path: "/product-detail/:id",
            element : <ProductDetails/>
        },
        {
            path: "/add-product",
            element : <AddNewProduct/>
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
