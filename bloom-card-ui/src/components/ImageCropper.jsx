import React, { useState } from 'react'
import Cropper from "react-easy-crop"

const ImageCropper = ({image, onCropDone, onCropCancel}) => {
    const [crop, setCrop] = useState({x: 0, y:0});
    const [zoom, setZoom] = useState(1);

    const [croppedArea, setCroppedArea ] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(4/3);

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels)
    }

    

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
     <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <Cropper
        image = {image}
        crop = {crop}
        ratio = {aspectRatio}
        zoom = {zoom}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
        
        />
        </div>

        <div className='flex flex-row items-center gap-4'>
            <button className='block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-darkgrey shadow-sm hover:bg-darkgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={onCropCancel}>
                İptal
            </button>
            
            <button className='block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-darkgrey shadow-sm hover:bg-darkgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 '
            onClick={() => {
                onCropDone(croppedArea);
            }}>
                Kaydet
            </button>
        </div>
    </div>
    </div>
  )
}

export default ImageCropper