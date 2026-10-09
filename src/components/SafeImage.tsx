import { useState } from 'react';
import { ImageConfig } from '../images.ts';

interface SafeImageProps {
  image: ImageConfig;
  className?: string;
  isHero?: boolean;
  style?: React.CSSProperties;
  rounded?: boolean;
  priority?: boolean;
}

export function SafeImage({
  image,
  className = '',
  isHero = false,
  style = {},
  rounded = true,
  priority = false,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-[#f4f4f4] w-full h-full flex items-center justify-center ${rounded ? 'rounded-[8px]' : ''} ${className}`}
        style={{
          aspectRatio: `${image.width} / ${image.height}`,
          ...style,
        }}
        aria-hidden={image.alt === '' ? 'true' : undefined}
      >
        <span className="font-label text-[#767676]">{image.alt || '[Image]'}</span>
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={isHero || priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setHasError(true)}
      style={{
        objectPosition: image.objectPosition || 'center',
        ...style,
      }}
      className={`w-full h-full object-cover ${rounded ? 'rounded-[8px]' : ''} ${className}`}
    />
  );
}
