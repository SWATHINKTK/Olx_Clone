import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

function ImageUpload({ files, setFile, setFileError }){


    const handleFile = (e) => {
        let file = e.target.files;
        setFileError('')
        if(file.length < 5 && files.length < 5){
            setFile([...files,...file]);
        }else{
            setFileError('*only 5 images can upload')
        }
        
    }; 

    const removeImage = (i) => {
        setFile(files.filter(x => x.name !== i));
     }


    return (
        <>
            <div className="rounded-lg shadow-xl  bg-gray-50 md:w-1/2 w-[360px]">
                <div className=" mt-0">
                    <div className="flex items-center justify-center w-full pt-2 px-2">
                        <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                        clip-rule="evenodd" />
                                </svg>
                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                    Select a photo</p>
                            </div>
                            <input type="file" onChange={handleFile} className="opacity-0" multiple="multiple" accept="image/*"/>
                        </label>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 pb-2 pl-1">

                        {files.map((file, key) => {
                            return (
                                <div key={key} className="overflow-hidden relative">
                                    <IoMdClose onClick={() => { removeImage(file.name) }} className="absolute right-1 hover:text-white cursor-pointer" />
                                    <img className="h-20 w-20 rounded-md" src={URL.createObjectURL(file)} />
                                </div>
                            )
                        })}



                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageUpload;