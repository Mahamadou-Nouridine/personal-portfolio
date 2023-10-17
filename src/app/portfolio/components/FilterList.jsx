import React from "react";

const FilterList = ({tags, selected, selectTag}) => {

  return (
    <ul
      className="filter-list has-scrollbar py-2"
      style={{
        // maxWidth: 250,
        width: "100%",
        // overflowX: "hidden",
        scrollBehavior: "smooth",
        overscrollBehaviorInline: "contain",
        scrollSnapType: "inline mandatory",
        boxShadow: "inset 1px 1px 3px, inset 1px 1px 3px"
      }}
    >
      <li className="filter-item">
        <button onClick={() => selectTag(null)}  className={`w-auto notranslate ${!selected? "active": ""}`} data-filter-btn>
          All
        </button>
      </li>

      {tags.map((tag, index) => (
        <li className="filter-item" key={index}>
          <button onClick={() => selectTag(tag)} className={`notranslate ${selected?.toLowerCase() == tag.toLowerCase()? "active": ""}`} data-filter-btn>{tag}</button>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
