import React from 'react'
import { Card } from "flowbite-react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from 'primereact/inputnumber';

const AddNewProduct: React.FC = () => {
    return (
        <div className='addNewProductContainer'>
            <Card title='Add New Product'>
                <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
                        <Card className='col-span-2'>
                            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>General Information</h5>
                            <div className="flex flex-col">
                                <label htmlFor="username">Product Name</label>
                                <InputText id="username" className="p-inputtext-sm" placeholder="Small" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="username">Description</label>
                                <InputTextarea autoResize rows={5} cols={30} />
                            </div>
                        </Card>
                        <Card className=''>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>

                        </Card>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <Card className='col-span-2'>
                            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Pricing</h5>
                            <div className="flex flex-col">
                                <label htmlFor="username">Product Name</label>
                                <InputNumber inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="username">Description</label>
                                <InputTextarea autoResize rows={5} cols={30} />
                            </div>
                        </Card>
                        <Card >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>

    )
}

export default AddNewProduct
