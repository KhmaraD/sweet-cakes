import React from 'react';
import style from './Catalog.module.scss';
import photo from "../../../assets/images/catalog/photo.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Catalog = () => {
  const catalogItemsData = [
    {name: "Торти", img: photo, id: 1},
    {name: "Макарон", img: photo, id: 2},
    {name: "Капкейки", img: photo, id: 3},
    {name: "Карамель", img: photo, id: 4},
    {name: "Інші солодощі", img: photo, id: 5},
  ]

  const settings = {
    // className: "center",
    centerMode: true,
    // infinite: true,
    // centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    dots: true,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      {catalogItemsData.map((item) => {
        return (
          <div className={style.catalogItem} key={item.id}>
            <img src={item.img} alt="photo"/>
            <div className={style.nameWrapper}>
              <p>{item.name}</p>
            </div>
          </div>
        )
      })}
    </Slider>
  );
};
