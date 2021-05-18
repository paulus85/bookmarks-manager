import React from "react";

import "./Pagination.css";

export type PaginationProps = {
  numberOfPages: number; // Number of pages according to the number of elements
  currentPage: number; // ID of the displayed page
  setNewPage: (newPage: number) => void; // Handler when the user wants to go back or forth in the pages
};

const Pagination = ({ currentPage, numberOfPages, setNewPage }: PaginationProps) => {
  return (
    <div className={"Pagination"}>
      <button disabled={currentPage <= 0} onClick={() => setNewPage(currentPage - 1)}>
        {"<"}
      </button>
      <span>
        {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((value, index) => (
          <button
            key={value}
            disabled={index === currentPage}
            onClick={() => setNewPage(index)}
          >
            {value}
          </button>
        ))}
      </span>
      <button
        disabled={currentPage >= numberOfPages - 1}
        onClick={() => setNewPage(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
