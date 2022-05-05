import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {setLangAction} from "./store/action/action";
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

    const setLang = (lang) => {
        dispatch(setLangAction(lang));
    //    add to Local Storage?
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header links={links} language={language} setLang={setLang}/>
                <main>
                    <AppRouter price={priceItems}/>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
