import React from "react"
import { MySlider } from "../components/Slider";
import { useItemResult } from "../hooks";

 function Item() {
    const product = useItemResult()
    console.log(product);
    
    return (
       <div className="item__slider-container">
        { product ? <MySlider pictures={product.pictures} title={product.title} price={product.price}/> : null}
       </div>
      );
    }

  export { Item }

