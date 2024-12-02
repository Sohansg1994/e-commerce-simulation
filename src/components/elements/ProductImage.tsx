import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

const ProductImage = ({
  src,
  alt,
  className,
  height,
  width,
}: ProductImageProps) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = "/images/product-placeholder.png";

  return (
    <div
      className={`${
        imageError ? "bg-gray" : "bg-white"
      } w-min-content aspect-square bg-opacity-10 rounded-lg flex items-center justify-center relative`}
    >
      <img
        src={imageError ? fallbackImage : src}
        alt={alt}
        width={width}
        height={height}
        onError={() => setImageError(true)}
        className={className}
      />
    </div>
  );
};

export default ProductImage;
