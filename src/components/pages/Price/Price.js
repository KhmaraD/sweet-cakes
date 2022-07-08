import React from 'react';
import style from './Price.module.scss';
import '../../../App.css';
import testImg from "../../../assets/images/img.png"

const Price = ({price}) => {

  return (
    <div className={style.priceWrapper}>
      <h1>Price</h1>
      <div className={style.card}>
        <ul className={style.ul}>
          <li>
            <i className="bx bx-drink"></i>
          </li>
          <li>
            <i className="bx bx-film"></i>
          </li>
          <li>
            <i className="bx bx-store-alt"></i>
          </li>
          <li>
            <i className="bx bx-map"></i>
          </li>
        </ul>
        <img src={testImg} alt=""/>
        <div className={style.conText}>
          <h2>Шоколадний з вишнею</h2>
          <p>Шоколадний бісквіт, крем на основі крем-сиру та збитих вершків або вершковий італійський
            сир Mascarpone, та яскрава вишня в прослойці
            <button>See  more</button>
          </p>
        </div>
      </div>
      <div className={style.price_list}>
        {price.map(item =>
          <div key={item.id} className={style.price_item}>
            <img src={item.img} alt={item.title}/>
            <h3 className={style.title}>{item.title}</h3>
            <p className={style.description}>{item.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Price;