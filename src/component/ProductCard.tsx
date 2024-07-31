import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge'
import { ProductsDataType } from '../data/ProductsData';
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';

interface ProductProps {
    productItem: ProductsDataType,
    id: number,
    index: number,
    productListState: ProductsDataType[],
    setProductListState: React.Dispatch<React.SetStateAction<ProductsDataType[]>>
}

const ProductCard: React.FC<ProductProps> = (props) => {
    const { productItem, id, index, productListState, setProductListState } = props
    const header = (
        <>
            <img alt="Card" src={productItem.image} />
            <div className='bookmarkIcon absolute top-1 right-1'>
                <CiBookmark size={30} />
            </div>
        </>
    );
    const footer = (
        <>
            <Link to={`/product-detail/${productItem.productLink}`}>
                <Button icon="pi pi-external-link" label="Go to full detail" link />
            </Link>
            {/* {console.log(id, 'ddd', index, productListState, setProductListState)} // details */}
        </>
    );
    return (
        <Card title={productItem.title} subTitle={productItem.description} footer={footer} header={header} className="md:w-25rem">
            {/* <div className='flex'>
                <p>Director :</p>
                <p className='ms-2'>{productItem.director}</p>
            </div> */}
            {/* <div className=''>
                {productItem?.genre?.split(',').map((items) => {
                    return (
                        <Badge value={items} severity="info" className='mr-1' />
                    )
                })
                }
            </div> */}
            <p className="m-0">
                {productItem.description}
            </p>
        </Card>
    )
}

export default ProductCard
