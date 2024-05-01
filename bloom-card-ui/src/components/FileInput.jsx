import React, { useRef } from 'react'

export default function FileInput({onImageSelected}) {

    const inputRef = useRef();

    //Handle change event when a file is selected

    const handleOnChange = (event) => {
        if (event.target.files && event.target.files.length > 0){
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (e) {
                onImageSelected(reader.result);
            };
        }
    }
    const onChooseImg = () =>{
        inputRef.current.click();
    };
  return (
    <div className='flex flex-col items-center'>
        <input
            type='file'
            accept='image/*'
            ref={inputRef}
            onChange={handleOnChange}
            style = {{display: "none"}}
        />

        <button className='w-48 h-18 rounded-sm bg-green flex items-center justify-center'
            onClick={onChooseImg}
        >
            Fotoğraf Yükle!
        </button>
    </div>
  )
}
