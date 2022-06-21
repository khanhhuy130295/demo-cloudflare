// components/Image.js
import NextImage, { ImageLoader, ImageLoaderProps } from "next/image";

// opt-out of image optimization, no-op
const customLoader = (loader:ImageLoaderProps ) => {
  return loader.src;
}

export default function Image(props: any) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}