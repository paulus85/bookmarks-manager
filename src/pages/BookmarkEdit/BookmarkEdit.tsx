import React from "react";
import { useHistory, useParams } from "react-router-dom";
import KeywordEdition from "../../components/KeywordEdition/KeywordEdition";
import { Link } from "../types";

export type BookmarkEditProps = {
  bookmarksMap: Map<string, Link>;
  onEditLink: (link: Link) => void;
};

const BookmarkEdit = ({ bookmarksMap, onEditLink }: BookmarkEditProps) => {
  // Params given to the route.
  // With the route configuration we know that a parameter is provided
  // (if not, the default route is used).
  const { encodedUrl } = useParams<{ encodedUrl: string }>();
  const history = useHistory();
  const url = decodeURIComponent(encodedUrl);
  const editedLink = bookmarksMap.get(url);
  return (
    <div className={"BookmarkEdit"}>
      {editedLink ? (
        <div>
          <h3>Edition of "{editedLink.title}"</h3>
          <KeywordEdition
            keywords={editedLink.keywords}
            onNewKeywords={(keywords) => {
              onEditLink({ ...editedLink, keywords });
              history.push("/");
            }}
          />
        </div>
      ) : (
        <span>URL not in bookmarks</span>
      )}
    </div>
  );
};

export default BookmarkEdit;
