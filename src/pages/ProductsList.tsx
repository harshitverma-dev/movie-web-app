import React, { useContext } from 'react'
import { ProductContextData } from '../context/ContextData'
import ProductCard from '../component/ProductCard';


const ProductsList: React.FC = () => {
    const context = useContext(ProductContextData);
    if (!context) {
        throw new Error('ProductsList must be used within a ProductProvider');
    }
    const { productListState, setProductListState } = context;
    return (
        <div className='allProductContainer'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    productListState?.map((items, index) => {
                        return (
                            <ProductCard productItem={items}
                                id={items.id}
                                key={items.id}
                                index={index}
                                productListState={productListState}
                                setProductListState={setProductListState}

                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductsList
