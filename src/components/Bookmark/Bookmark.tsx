import React from "react";
import { useHistory } from "react-router-dom";
import { isVideoLink, Link } from "../../pages/types";

import "./Bookmark.css";

export type BookmarkProps = {
  link: Link;
  onDelete: (link: Link) => void;
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
const Bookmark = ({ link, onDelete }: BookmarkProps) => {
  const history = useHistory();

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

  const goToEdit = (link: Link) => {
    history.push(`edit/${encodeURIComponent(link.url)}`);
  };

  return (
    <div className={"Bookmark"}>
      <div className={"Bookmark-body"}>
        <a
          className={"Bookmark-title"}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.title}
        </a>
        <div className={"Bookmark-subtitle"}>{buildSubtitle(link)}</div>
        <div className={"Bookmark-subtitle"}>Keywords: {link.keywords.join(" • ")}</div>
      </div>
      <div className={"Bookmark-actions"}>
        <button onClick={() => goToEdit(link)}>🖊️️</button>
        <button onClick={() => onDelete(link)}>🗑️</button>
      </div>
    </div>
  );
};

export default Bookmark;
