import React, { useEffect, useState } from "react";
import { Link } from "./pages/types";
import {
  getPhotoProperties,
  getVideoProperties,
} from "./providers/bookmarksPropertiesProvider";
import BookmarkList from "./pages/BookmarkList/BookmarkList";
import "./App.css";

function App() {
  const [bookmarks, setBookmarks] = useState<Link[]>([]);

  /**
   * Setup when starting the app.
   * Fetch the info for 2 links to populate the app.
   */
  useEffect(() => {
    Promise.allSettled([
      getVideoProperties("https://vimeo.com/357730516"),
      getPhotoProperties("http://www.flickr.com/photos/onement/48141921432/"),
      getPhotoProperties("http://www.flickr.com/photos/onement/50657247681/"),
      getPhotoProperties("https://www.flickr.com/photos/jeanmarieshelton/51185337390"),
      getVideoProperties("https://vimeo.com/64760211"),
      getPhotoProperties("https://www.flickr.com/photos/31389821@N08/51183641755/"),
      getVideoProperties("https://vimeo.com/64768911"),
      getPhotoProperties("https://www.flickr.com/photos/ssimonecba/5328468055"),
      getPhotoProperties("https://www.flickr.com/photos/111683772@N02/14932941709"),
      getPhotoProperties("https://www.flickr.com/photos/gregor158/49215568802"),
      getPhotoProperties("https://www.flickr.com/photos/kjkmep/28113299557"),
      getVideoProperties("https://vimeo.com/249675407"),
    ])
      .then((results) =>
        results
          .map((result) => (result.status === "fulfilled" ? result.value : undefined))
          .reduce<Link[]>(
            (previousValue, currentValue) =>
              currentValue !== undefined
                ? [...previousValue, currentValue]
                : previousValue,
            []
          )
      )
      .then((links) => {
        setBookmarks(links);
      });
  }, []);

  return (
    <div className={"App"}>
      <h1>Bookmark Manager</h1>
      <BookmarkList bookmarksList={bookmarks} />
    </div>
  );
}

export default App;
