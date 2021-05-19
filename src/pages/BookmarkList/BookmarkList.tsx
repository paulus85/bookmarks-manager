import React, { useState } from "react";
import { Link } from "../types";
import Bookmark from "../../components/Bookmark/Bookmark";
import Pagination from "../../components/Pagination/Pagination";
import { ACTION_TYPE } from "../../App";
import BookmarkAdd from "../../components/BookmarkAdd/BookmarkAdd";

import "./BookmarkList.css";

/**
 * Size of a page
 */
const PAGE_LENGTH = 5;

export type BookmarkListProps = {
  bookmarksList: Link[];
  dispatchToList: (action: ACTION_TYPE) => void;
};

/**
 * List of the bookmarks.
 */
const BookmarkList = ({ bookmarksList, dispatchToList }: BookmarkListProps) => {
  const [page, setPage] = useState(0);
  const numberOfPages = Math.ceil(bookmarksList.length / PAGE_LENGTH);

  return (
    <div className={"BookmarkList"}>
      <BookmarkAdd
        onNewBookmark={() => {
          //TODO
        }}
      />
      {bookmarksList.length === 0 ? (
        <div className={"BookmarkList-empty"}>Vide</div>
      ) : (
        <>
          <div className={"BookmarkList-list"}>
            {bookmarksList
              .slice(page * PAGE_LENGTH, (page + 1) * PAGE_LENGTH)
              .map((link) => (
                <Bookmark
                  key={link.url}
                  link={link}
                  onDelete={(linkToDelete) =>
                    //TODO Deal with changing page when deleting the last item of a page.
                    dispatchToList({ type: "DELETE", payload: linkToDelete })
                  }
                />
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
