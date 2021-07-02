// import { Image } from 'react-native';

// export default function getImageWidth(currentImage, imageHeight){
//   // let currentSourceWidth  = 360
//   // let currentSourceHeight = 202;

//   let currentSourceWidth  = Image.resolveAssetSource(currentImage).width;
//   let currentSourceHeight = Image.resolveAssetSource(currentImage).height;

//   return currentSourceWidth / currentSourceHeight * imageHeight;
// }


import { Image } from 'react-native';

export default function getImageWidth(currentImage, imageHeight, photoFrom){

  let currentSourceWidth;
  let currentSourceHeight;

  if(photoFrom === "local"){
    currentSourceWidth  = Image.resolveAssetSource(currentImage).width;
    currentSourceHeight = Image.resolveAssetSource(currentImage).height;
  }
  else{
    // currentSourceWidth = Image.getSize(
    //   currentImage,
    //   (width, height) => {width},
    //   // (error) => console.error(error)
    // );
    // currentSourceHeight = Image.getSize(
    //   currentImage,
    //   (width, height) => {height},
    //   // (error) => console.error(error)
    // );
  }

  // return imageWidth / (currentSourceWidth / currentSourceHeight);
  return (currentSourceWidth / currentSourceHeight) * imageHeight;
}