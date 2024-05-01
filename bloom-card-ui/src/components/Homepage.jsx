import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import File from './form/File'
import FileUploader from './FileUploader'
import FileInput from './FileInput';
import ImageCropper from './ImageCropper';


export default function Homepage() {
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("")

  // Callback function when an image is selected
  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img")
  }

  // Callback function when cropping is done

  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width
    canvasEle.height = imgCroppedArea.height

    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      // Convert to canvas content to a data URL (Jpeg Format)
      const dataURL = canvasEle.toDataURL("image/jpeg");

      setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    }
    }

  // Callback function when cropping is canceled

  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");

  }

  return (
    <div className='flex flex-col items-center'>
    
        {currentPage === "choose-img" ? (
          <FileInput onImageSelected={onImageSelected} />
         ) : currentPage === "crop-img" ? (
          <ImageCropper image = {image}
            onCropDone = {onCropDone}
            onCropCancel = {onCropCancel}
          /> 
         ) : (
          <div className="">

            <div>
              <img src={imgAfterCrop} className='w-[30vw] h-[30vw] rounded-full flex items-center justify-center' />
            </div>

            <div className="">
            <button
            onClick={()=> {
              setCurrentPage("crop-img");
            }}
            className='w-48 h-18 rounded-sm bg-green flex items-center justify-center'
            >
              Crop
            </button>
            <button
            className= 'w-48 h-18 rounded-sm bg-green flex items-center justify-center'
            onClick={() => {
              setCurrentPage("choose-img");
              setImage("")
            }}
            >
              Değiştir
            </button>
            </div>
          </div>
         )
        }
        
        
       
    </div>
  )
}