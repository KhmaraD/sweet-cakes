import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {setLangAction} from "./store/langReducer";

function App() {
    const dispatch = useDispatch();
    const language = useSelector(state => state.language);
    const links = useSelector(state => state.links);
    const priceItem = useSelector(state => state.priceItem);

    const setLang = (lang) => {
        dispatch(setLangAction(lang))
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header links={links} language={language} setLang={setLang}/>
                <main>
                    <AppRouter price={priceItem}/>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
