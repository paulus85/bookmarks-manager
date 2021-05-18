import React from "react";
import { isVideoLink, Link } from "../../pages/types";

import "./Bookmark.css";

export type BookmarkProps = {
  link: Link;
};

const IntlDateTimeOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};

/**
 * Component to display a Bookmark.
 */
const Bookmark = ({ link }: BookmarkProps) => {
  const buildSubtitle = (link: Link): string => {
    const formattedDate = new Intl.DateTimeFormat("default", IntlDateTimeOptions).format(
      link.addDate
    );
    if (isVideoLink(link)) {
      return `${link.author} • ${formattedDate} • ${link.width}x${link.height} • ${link.duration} sec`;
    } else {
      return `${link.author} • ${formattedDate} • ${link.width}x${link.height}`;
    }
  };

  return (
    <div className={"Bookmark"}>
      <a
        className={"Bookmark-title"}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.title}
      </a>
      <div className={"Bookmark-subtitle"}>{buildSubtitle(link)}</div>
    </div>
  );
};

export default Bookmark;
