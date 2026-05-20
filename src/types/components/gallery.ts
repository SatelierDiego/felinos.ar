import type { ImageMetadata } from 'astro';

export interface GalleryItem {
  src: ImageMetadata;
  alt: string;
  author: string;
  position?: 'top' | 'left' | 'bottom' | 'right' | 'center';
}

export interface GalleryProps {
  items: GalleryItem[];
  title?: string;
  speciesName?: string;
}
