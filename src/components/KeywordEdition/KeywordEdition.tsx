import React, { useState } from "react";

export type KeywordEditionProps = {
  keywords: string[];
  onNewKeywords: (keywords: string[]) => void;
};

/**
 * Component to manage all the logic and presentation of keyword edition.
 */
const KeywordEdition = ({ keywords, onNewKeywords }: KeywordEditionProps) => {
  const onKeywordChange =
    (
      keywords: string[],
      keywordIndex: number
    ): React.ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      console.log(keywordIndex, event.target.value);
      let newKeywords = Array.from(keywords);
      newKeywords[keywordIndex] = event.target.value;
      onNewKeywords(newKeywords);
    };

  return (
    <div className={"KeywordEdition"}>
      {keywords.map((keyword, index) => (
        <div key={index}>
          <input
            type="text"
            value={keyword}
            onChange={onKeywordChange(keywords, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default KeywordEdition;
