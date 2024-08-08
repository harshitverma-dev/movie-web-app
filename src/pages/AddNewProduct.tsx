import React, { useState } from 'react'
import { Card } from "flowbite-react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import {MultiSelect} from 'primereact/multiselect'

const AddNewProduct: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    
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
                        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Product Media</h5>
                            <div>
                                <span>Photo Product</span>
                            </div>

                        </Card>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <Card className='col-span-2'>
                            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Pricing</h5>
                            <div className="flex flex-col">
                                <label htmlFor="currency-us" className="font-bold block mb-2">United States</label>
                                <InputNumber className="p-inputtext-sm" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
                            </div>
                            <div className='flex'>
                                <div className='flex flex-col w-[50%]'>
                                    <label htmlFor="username">Discount Precentage (%)</label>
                                    <InputNumber className='p-inputtext-sm' prefix="%" />
                                </div>
                                <div className='flex flex-col w-[50%] ms-6'>
                                    <label htmlFor="username">Discount Precentage (%)</label>
                                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                        showClear placeholder="Select a City" className="p-inputtext-sm w-full md:w-14rem" />
                                </div>
                            </div>
                        </Card>
                        <Card >
                            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Pricing</h5>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="username">Product Category</label>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    showClear placeholder="Select a City" className="p-inputtext-sm w-full md:w-14rem" />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="username">Product Tags</label>
                                <MultiSelect value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" display="chip"
                                    placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>

    )
}

export default AddNewProduct
