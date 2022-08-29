import React, { useEffect, useState } from "react"
import { SearchResult } from "../components/SearchResult";
import { useSearchResults } from "../hooks";

 function Search() {
    const searchResults = useSearchResults()

    return (
        <div className="search__content">
            <SearchResult results={searchResults}></SearchResult>
          </div>
      );
    }

  export { Search}