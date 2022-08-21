import './App.css';
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {setLangAction} from "./store/action/action";
import {useEffect, useState} from "react";
import {TestPhoto} from "./api/api";
// import {useEffect, useState} from "react";
// import {priceAPI} from "./api/api";

function App() {

  const dispatch = useDispatch();
  // const [language, setLanguage] = useState("");
  const language = useSelector(state => state.language);
  // const [links, setLinks] = useState([]);
  const links = useSelector(state => state.links);
  // const [priceItems, setPriceItems] = useState([]);
  const priceItems = useSelector(state => state.priceItem);
  const [img, setImg] = useState("");

  // useEffect( () => {
  //     priceAPI.getLanguage(setLanguage);
  //     // priceAPI.getLinks(setLinks);
  //     priceAPI.getPriceItems(setPriceItems);
  //
  // }, []);


  // тестовий запит інстаграм
  //
  // const getInfo = async () => {
  //   try {
  //     // const response = await TestInsta()
  //     // const response = await TestData()
  //     const response = await TestPhoto()
  //     console.log("resp", response.data.data[0].media_url);
  //     setImg(response.data.data[0].media_url)
  //   } catch (err) {
  //     console.log("error=====", err)
  //   }
  // }
  //
  // useEffect(() => {
  //   getInfo()
  //
  // }, [])

  const setLang = (lang) => {
    dispatch(setLangAction(lang));
    //    add to Local Storage?
  }

  return (
    <div className="App">
      <Header links={links} language={language} setLang={setLang}/>
      <main>
        <AppRouter price={priceItems} img={img}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
