import { Image } from 'react-native';

export default function getImageHeight(currentImage, imageWidth, photoFrom){
  // console.log("photoFrom", photoFrom);
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

  return imageWidth / (currentSourceWidth / currentSourceHeight);
}