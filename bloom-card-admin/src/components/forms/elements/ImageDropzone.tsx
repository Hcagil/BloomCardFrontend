import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface ImageDropzoneProps {
  onImageUpload: (file: string) => void;
  label: string;
  isCover?: boolean;
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({ onImageUpload, label, isCover }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        onImageUpload(base64String); 
      };

      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg transition-all duration-200 ease-in-out ${
        isDragActive ? 'border-green ' : ''
      } hover:border-green hover:bg-gray-500 ${isCover ? 'w-40 h-40' : 'w-40 h-40'}`}
    >
      <input {...getInputProps()} className="hidden" />
      <svg
        className={`w-12 h-12 mb-2 text-gray-400 ${isCover ? 'w-20 h-20' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 16V7a2 2 0 012-2h6a2 2 0 012 2v9m-7 4h6a2 2 0 002-2v-5a2 2 0 00-2-2h-6a2 2 0 00-2 2v5a2 2 0 002 2z"
        />
      </svg>
      <p className="text-gray-300 text-center text-sm">
        {isDragActive ? 'Bırakın dosyayı...' : `${label} yüklemek için tıklayın!`}
      </p>
    </div>
  );
};

export default ImageDropzone;
