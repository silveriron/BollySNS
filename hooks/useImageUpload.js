import { useState } from "react";

const useImageUpload = () => {
  const [image, setImage] = useState();

  const imageUploadHandler = (e) => {
    const {
      target: { files },
    } = e;
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = (fileEvent) => {
        setImage(fileEvent.currentTarget.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return [image, setImage, imageUploadHandler];
};

export default useImageUpload;
