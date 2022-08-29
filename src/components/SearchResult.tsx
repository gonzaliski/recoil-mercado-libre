import React, { useEffect, useState } from "react"
import { ProductItem } from "../components/ProductItem";

 function SearchResult(props) {
    let {results} = props
    return (
        <div className="search__content">
            {results.map((r) => (
                <ProductItem imageURL={r.thumbnail}
                productName={r.title}
                price={r.price}
                id={r.id}
                key={r.id}
                />
                ))}
          </div>
      );
    }

  export { SearchResult}
