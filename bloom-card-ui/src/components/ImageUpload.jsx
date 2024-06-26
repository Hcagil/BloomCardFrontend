import React, { useState, useEffect } from 'react';
import FileInput from './FileInput';
import ImageCropper from './ImageCropper';

export default function Homepage() {
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");

  // Sayfa yüklendiğinde localStorage'daki görüntüyü kontrol et
  useEffect(() => {
    const savedImage = localStorage.getItem("croppedImage");
    if (savedImage) {
      setImgAfterCrop(savedImage);
      setCurrentPage("img-cropped");
    }
  }, []);

  // Callback function when an image is selected
  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  // Callback function when cropping is done
  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

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
      localStorage.setItem("croppedImage", dataURL); // Save the image to localStorage
      setCurrentPage("img-cropped");
    };
  };

  // Callback function when cropping is canceled
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  return (
    <div className="flex flex-col">
      {currentPage === "choose-img" && (
        <FileInput onImageSelected={onImageSelected} />
      )}
      {currentPage === "crop-img" && (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      )}
      {currentPage === "img-cropped" && (
        <div className="flex flex-col items-center mr-[7.5rem]">
          <img
            src={imgAfterCrop}
            className="w-[10.5rem] h-[10.5rem] rounded-full"
            alt="Cropped"
          />
          <button
            className="mt-5 w-48 h-18 rounded-sm bg-green justify-center shadow-lg"
            onClick={() => {
              setCurrentPage("choose-img");
              setImage("");
            }}
          >
            Değiştir
          </button>
        </div>
      )}
    </div>
  );
}
