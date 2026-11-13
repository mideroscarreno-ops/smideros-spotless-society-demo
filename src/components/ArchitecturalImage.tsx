import React, { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = '',
  caption,
  priority = false,
  width,
  height,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#123C4A] via-[#17262D] to-[#123C4A] text-[#FAFBFA] p-8 overflow-hidden ${className}`}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(250,251,250,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,251,250,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <Building2 className="w-8 h-8 text-[#B8A185] mb-3 relative z-10" strokeWidth={1.5} />
        <p className="text-xs tracking-wide text-[#E6EBEA] text-center max-w-xs relative z-10">
          {caption || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
