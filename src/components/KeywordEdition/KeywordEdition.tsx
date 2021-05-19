import React, { useState } from "react";

export type KeywordEditionProps = {
  keywords: string[];
  onNewKeywords: (keywords: string[]) => void;
};

/**
 * Component to manage all the logic and presentation of keyword edition.
 */
const KeywordEdition = ({ keywords, onNewKeywords }: KeywordEditionProps) => {
  /**
   * Draft state for the list of keywords.
   */
  const [keywordsDraft, setKeywordsDraft] = useState<string[]>(keywords);

  /**
   * Value of the field to add a new keyword.
   */
  const [newKeyword, setNewKeyword] = useState<string>("");

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

  const onKeywordAdd = (keywords: string[], newKeyword: string) => {
    let newKeywords = Array.from(keywords);
    newKeywords.push(newKeyword);
    setKeywordsDraft(newKeywords);
    setNewKeyword("");
  };

  const onKeywordDelete = (keywords: string[], keywordIndex: number) => {
    let newKeywords = Array.from(keywords);
    newKeywords.splice(keywordIndex, 1);
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
            <button type="button" onClick={() => onKeywordDelete(keywordsDraft, index)}>
              ❌
            </button>
          </div>
        ))}
        <div>
          <label htmlFor="new-keyword">New keyword: </label>
          <input
            name="new-keyword"
            type="text"
            value={newKeyword}
            onChange={(event) => setNewKeyword(event.target.value)}
          />
          <button type="button" onClick={() => onKeywordAdd(keywordsDraft, newKeyword)}>
            ✅
          </button>
        </div>
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default KeywordEdition;
