import './App.css';
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {setLangAction} from "./store/action/action";
import {useEffect} from "react";
import {TestInsta} from "./api/api";
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

  // useEffect( () => {
  //     priceAPI.getLanguage(setLanguage);
  //     // priceAPI.getLinks(setLinks);
  //     priceAPI.getPriceItems(setPriceItems);
  //
  // }, []);



  const getInfo = async () => {
    try {
      const response = await TestInsta()
      console.log("resp", response);
    } catch (err) {
      console.log("error=====", err)
    }
  }

  useEffect(() => {
    getInfo()
  }, [])

  const setLang = (lang) => {
    dispatch(setLangAction(lang));
    //    add to Local Storage?
  }

  return (
    <div className="App">
      <Header links={links} language={language} setLang={setLang}/>
      <main>
        <AppRouter price={priceItems}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
