import React from "react";
import { Link } from "../types";
import Bookmark from "../../components/Bookmark/Bookmark";

import "./BookmarkList.css";

export type BookmarkListProps = {
  bookmarksList: Link[];
};

/**
 * List of the bookmarks.
 */
const BookmarkList = ({ bookmarksList }: BookmarkListProps) => {
  return (
    <div className={"BookmarkList"}>
      {bookmarksList.map((link) => (
        <Bookmark key={link.url} link={link} />
      ))}
    </div>
  );
};

export default BookmarkList;
