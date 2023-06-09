export const saveImage = (file) => {
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const imageContent = event.target.result;
      const imageBlob = dataURLToBlob(imageContent);
  
      const imageFileName = file.name;
      const imageFilePath = `assets/${imageFileName}`;
  
      saveBlobAsFile(imageBlob, imageFilePath);
    };
  
    reader.readAsDataURL(file);
    console.log("foo1")

  };
  
  const dataURLToBlob = (dataURL) => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
  
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
  
    return new Blob([u8arr], { type: mime });
  };
  
  const saveBlobAsFile = (blob, filePath) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filePath;
    link.click();
    console.log("foo")
  };