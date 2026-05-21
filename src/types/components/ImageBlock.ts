import type { ImageMetadata } from 'astro';

export interface ImageData {
  src: ImageMetadata;
  alt: string;
  author?: string;
}

export interface ImageBlockProps {
  images: ImageData[];
  position?: 'left' | 'right';
  widths?: number[];
  sizes?: string;
  aspectRatio?: string;
  imageClass?: string;
}
