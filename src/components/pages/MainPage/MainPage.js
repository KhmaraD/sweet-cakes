import React from 'react';
import style from './MainPage.module.scss';
import '../../../App.css';
// import photo from '../../../assets/images/owner/photo1.jpg'
import photo from '../../../assets/images/owner/photo_01.png'
import {Catalog} from "../Catalog/Catalog";

const MainPage = ({img}) => {
  return (
    <div className={style.mainWrapper}>
      <h3>Привіт! Мене звати Лєна</h3>
      <h5>Я готую найсмачніші тортики та десерти для вашого свята 😘</h5>
      {/*<img src={photo} alt="photo" style={{width: "100%"}}/>*/}
      <p>Якщо Ви хочете замовити смачний і красивий торт, який стане чудовим доповненням до вашого свята - я завжди тут, для Вас ❤️</p>

      <Catalog />
      {/*<img src={img} alt="img" style={{width: "150px", borderRadius: "20px", margin: "5px"}}/>*/}
      {/*<img src={img} alt="img" style={{width: "150px", borderRadius: "20px", margin: "5px"}}/>*/}
      {/*<img src={img} alt="img" style={{width: "150px", borderRadius: "20px", margin: "5px"}}/>*/}
      {/*<img src={img} alt="img" style={{width: "150px", borderRadius: "20px", margin: "5px"}}/>*/}
    </div>
  );
};

export default MainPage;