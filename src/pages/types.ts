type PropertiesBase = {
  url: string;
  title: string;
  author: string;
  addDate: Date;
  keywords: string[];
};

export type VideoLink = PropertiesBase & {
  width: number;
  height: number;
  duration: number;
};

export type PhotoLink = PropertiesBase & {
  width: number;
  height: number;
};

export type Link = PhotoLink | VideoLink;

export function isVideoLink(pet: PhotoLink | VideoLink): pet is VideoLink {
  return (pet as VideoLink).duration !== undefined;
}
