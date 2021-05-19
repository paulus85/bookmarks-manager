import React, { useState } from "react";

export type KeywordEditionProps = {
  keywords: string[];
  onNewKeywords: (keywords: string[]) => void;
};

/**
 * Component to manage all the logic and presentation of keyword edition.
 */
const KeywordEdition = ({ keywords, onNewKeywords }: KeywordEditionProps) => {
  const [keywordsDraft, setKeywordsDraft] = useState<string[]>(keywords);

  const onKeywordChange =
    (
      keywords: string[],
      keywordIndex: number
    ): React.ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      let newKeywords = Array.from(keywords);
      newKeywords[keywordIndex] = event.target.value;
      setKeywordsDraft(newKeywords);
    };

  return (
    <div className={"KeywordEdition"}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onNewKeywords(keywordsDraft);
        }}
      >
        {keywordsDraft.map((keyword, index) => (
          <div key={index}>
            <input
              type="text"
              value={keyword}
              onChange={onKeywordChange(keywordsDraft, index)}
            />
          </div>
        ))}
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default KeywordEdition;
