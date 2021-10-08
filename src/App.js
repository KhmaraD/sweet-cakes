import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header links={props.state.links} language={props.state.language}/>
                <main>
                    <AppRouter price={props.state.priceItem}/>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
