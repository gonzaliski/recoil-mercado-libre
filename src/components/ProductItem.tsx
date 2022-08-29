import React from "react"
import { Link } from "react-router-dom";

 function ProductItem(props) {
      return (
        <div className="card">
            <div className="card__item-container">
                <img className="card__item-img" src={props.imageURL} alt={"No image found"}></img>
                <div className="card__item-information">
                    <h2 className="card__item-information-title">{props.productName}</h2>
                    <span>$ {props.price}</span>
                <Link to={`/item/${props.id}`}>Ver más</Link>
                </div>
            </div>
        </div>
      );
    }

  export { ProductItem}