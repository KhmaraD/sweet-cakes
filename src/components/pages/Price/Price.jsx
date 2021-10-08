import React from 'react';
import style from './Price.module.css';
import '../../../App.css';

const Price = ({price}) => {

    return (
        <div className={style.priceWrapper}>
            <h1>Price</h1>
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