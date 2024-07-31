import React, { useContext, useEffect, useState } from 'react'
import { ProductsDataType } from '../data/ProductsData'
import { useLocation } from 'react-router-dom';
import { ProductContextData } from '../context/ContextData';

const ProductDetails: React.FC = () => {
    const [storeProductDetail, setStoreProductDetail] = useState<ProductsDataType | null>(null);
    const context = useContext(ProductContextData);
    if (!context) {
        throw new Error('something went wrong!');
    }
    const { productListState } = context;
    let location = useLocation();

    const getProductData = () => {
        let getProductLink = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
        let storeObjOFProductDetail = productListState.filter((items) => {
            return items.productLink === getProductLink;
        })
        setStoreProductDetail(storeObjOFProductDetail[0]);
    }
    useEffect(() => {
        getProductData();
    }, [])
    return (
        <div className='movieDetailsContainer'>
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
                <img src={storeProductDetail?.image ?? '../src/assets/dummy-img.webp'} alt={storeProductDetail?.title} className="w-full md:w-1/3 rounded-lg" />
                <div className="md:ml-6 mt-4 md:mt-0 w-full">
                    <h1 className="text-3xl font-bold">{storeProductDetail?.title}</h1>
                    <p className="text-gray-700 mt-2">{storeProductDetail?.description}</p>
                    {/* <div className="mt-4">
                        <p><strong>Director:</strong> {storeProductDetail?.director}</p>
                        <p><strong>Year:</strong> {storeProductDetail?.year}</p>
                        <p><strong>Genre:</strong> {storeProductDetail?.genre}</p>
                        <p><strong>Rating:</strong> {storeProductDetail?.rating}</p>
                        <p><strong>Duration:</strong> {storeProductDetail?.duration} min</p>
                        <p><strong>Language:</strong> {storeProductDetail?.language}</p>
                        <p><strong>Country:</strong> {storeProductDetail?.country}</p>
                        <p><strong>Box Office:</strong> {storeProductDetail?.boxOffice}</p>
                    </div> */}
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Cast</h2>
                        <ul className="list-disc list-inside">
                            {storeProductDetail?.tags.map((tag, index) => (
                                <li key={index}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <div className="mt-4">
                        <h2 className="text-xl font-bold">Awards</h2>
                        <ul className="list-disc list-inside">
                            {storeProductDetail?.awards?.map((award, index) => (
                                <li key={index}>{award}</li>
                            ))}
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
