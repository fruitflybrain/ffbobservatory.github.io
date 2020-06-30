export interface GalleryItem {
  title: string;
  desc?: string;
  tag_url?: string; // tag
  cols?: number;
  rows?: number;
  dataset: 'flycircuit' | 'hemibrain' | 'l1em' | '7col' | 'na' | string;
  species: 'adult' | 'larva' | 'na' | string;
  component: 'nlp' | 'gfx' | 'fbl' | 'neuroarch' | 'na' | string;
  img: string;
}
