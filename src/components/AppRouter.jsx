import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Price from "./pages/Price/Price";
import MainPage from "./pages/MainPage/MainPage";
import Contacts from "./pages/Contacts/Contacts";
import Order from "./pages/Order/Order";

const AppRouter = ({price}) => {
    return (
        <Switch>
            <Route path="/main" component={MainPage} />
            <Route path="/price" render={ () => <Price price={price}/>} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/order" component={Order} />
            <Redirect to="/main" />
        </Switch>
    );
};

export default AppRouter;