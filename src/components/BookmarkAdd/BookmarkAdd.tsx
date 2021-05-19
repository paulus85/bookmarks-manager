import React, { useState } from "react";
import { Link } from "../../pages/types";

export type BookmarkAddProps = { onNewBookmark: (link: Link) => void };

/**
 * Component to type the URL of a new bookmark, and to add it to the list.
 */
const BookmarkAdd = ({ onNewBookmark }: BookmarkAddProps) => {
  const [newUrl, setNewUrl] = useState<string>("");

  const addNewBookmark = (url: string) => {
    // TODO
    //  1. Validation step: check if the URL is correctly formed,
    //     and if it is a link about Flickr or Vimeo
    //  2. According to if it's a Flickr url or an Vimeo url, call the appropriate
    //     `bookmarksPropertiesProvider` method, and store the Link with the others
    //     via `onNewBookmark` (new reducer actions to create for that)
    //  3. If the url is not in the good format, or not related to Flickr or Vimeo,
    //     manage an error state.
    console.log(url);
  };

  return (
    <div>
      <form onSubmit={() => addNewBookmark(newUrl)}>
        <input
          type={"text"}
          placeholder={"New URL"}
          value={newUrl}
          onChange={(event) => setNewUrl(event.target.value)}
        />
        <input type={"submit"} value={"New bookmark (🚧)"} />
      </form>
    </div>
  );
};

export default BookmarkAdd;
