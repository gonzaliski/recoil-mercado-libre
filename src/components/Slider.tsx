import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-elastic-carousel";

type ItemProps = {
  title: string;
  price: number;
  pictures: any;
};

function MySlider(props: ItemProps) {
  // console.log("props:",props);
  const product = props;
  console.log(product);

  return (
    <div className="item__container">
      <Carousel isRTL>
        {product.pictures.map((r) => (
          <img key={r.id} src={r.secure_url} alt="item image" />
        ))}
        
      </Carousel>
      <div className="card__item-information">
        <h2 className="card__item-information-title">{product.title}</h2>
        <span>$ {product.price}</span>
      </div>
    </div>
  );
}

export { MySlider };
