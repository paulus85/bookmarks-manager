import { PhotoLink, VideoLink } from "../pages/types";
import { GetPhotoPropertiesWSOutput, GetVideoPropertiesWSOutput } from "./types";

/**
 * Fetch the properties of a photo from Flickr.
 */
export const getPhotoProperties = async (
  url: string,
  addDate: Date = new Date()
): Promise<PhotoLink> => {
  const response = await window.fetch(`https://noembed.com/embed?url=${url}`);
  if (response.ok) {
    const payload: GetPhotoPropertiesWSOutput = await response.json();
    return {
      url: payload.web_page,
      title: payload.title,
      author: payload.author_name,
      addDate,
      height: payload.height,
      width: payload.width,
      keywords: [],
    };
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Fetch the properties of a video from Vimeo.
 */
export const getVideoProperties = async (
  url: string,
  addDate: Date = new Date()
): Promise<VideoLink> => {
  const response = await window.fetch(`https://noembed.com/embed?url=${url}`);
  if (response.ok) {
    const payload: GetVideoPropertiesWSOutput = await response.json();
    return {
      url: payload.url,
      title: payload.title,
      author: payload.author_name,
      addDate,
      height: payload.height,
      width: payload.width,
      duration: payload.duration,
      keywords: ["Hey", "Hey2"],
    };
  } else {
    throw new Error(response.statusText);
  }
};
