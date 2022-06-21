// components/Image.js
import NextImage, {  ImageLoaderProps, ImageProps } from "next/image";

// opt-out of image optimization, no-op
const customLoader = (loader:ImageLoaderProps ) => {
  return loader.src;
}

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}