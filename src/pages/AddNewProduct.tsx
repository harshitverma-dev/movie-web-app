import React, { useRef, useState } from 'react'
import { Card } from "flowbite-react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect'
import { Toast } from 'primereact/toast';
import {ImageUploader} from 'react-image-upload'
import { RiDeleteRow } from 'react-icons/ri';
import { BsCamera } from 'react-icons/bs';

const AddNewProduct: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const toast = useRef<Toast>(null);
    const [totalSize, setTotalSize] = useState(0);

    function getImageFileObject(imageFile:any) {
        console.log({ imageFile })
    }

    function runAfterImageDelete(file:any) {
        console.log({ file })
    }

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
                                {/* <Toast ref={toast}></Toast>

                                <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                                <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                                <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

                                <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}
                                    onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                                    headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                                    chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} /> */}

                                <ImageUploader
                                    onFileAdded={(img: any) => getImageFileObject(img)}
                                    onFileRemoved={(img: any) => runAfterImageDelete(img)}
                                    style={{ height: 200, width: 200, background: 'rgb(0 182 255)' }}
                                    deleteIcon={<RiDeleteRow />}
                                    uploadIcon={<BsCamera />}
                                />
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
