const getCroppedImg = async (imageSrc: string, crop: any): Promise<string> => {
    const createImage = (url: string): Promise<HTMLImageElement> =>
      new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', (error) => reject(error));
        image.setAttribute('crossOrigin', 'anonymous'); // CORS sorunlarını önlemek için
        image.src = url;
      });
  
    const image = await createImage(imageSrc);
  
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    if (!ctx) {
      throw new Error('Canvas context bulunamadı.');
    }
  
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
  
    canvas.width = crop.width;
    canvas.height = crop.height;
  
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  
    return new Promise<string>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const fileUrl = URL.createObjectURL(blob);
          resolve(fileUrl); // Kırpılan resmi Blob formatında döndür
        } else {
          reject(new Error('Resim işleme başarısız oldu.'));
        }
      }, 'image/jpeg');
    });
  };
  
  export default getCroppedImg;
  