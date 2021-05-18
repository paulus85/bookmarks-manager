import React, { useState } from "react";
import { Link } from "../types";
import Bookmark from "../../components/Bookmark/Bookmark";
import Pagination from "../../components/Pagination/Pagination";

import "./BookmarkList.css";

/**
 * Size of a page
 */
const PAGE_LENGTH = 5;

export type BookmarkListProps = {
  bookmarksList: Link[];
};

/**
 * List of the bookmarks.
 */
const BookmarkList = ({ bookmarksList }: BookmarkListProps) => {
  const [page, setPage] = useState(0);
  const numberOfPages = Math.ceil(bookmarksList.length / PAGE_LENGTH);

  return (
    <div className={"BookmarkList"}>
      {bookmarksList.length === 0 ? (
        <div className={"BookmarkList-empty"}>Vide</div>
      ) : (
        <>
          <div className={"BookmarkList-list"}>
            {bookmarksList
              .slice(page * PAGE_LENGTH, (page + 1) * PAGE_LENGTH)
              .map((link) => (
                <Bookmark key={link.url} link={link} />
              ))}
          </div>
          <Pagination
            currentPage={page}
            numberOfPages={numberOfPages}
            setNewPage={setPage}
          />
        </>
      )}
    </div>
  );
};

export default BookmarkList;
