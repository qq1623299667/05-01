import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import {Router,Route,hashHistory} from "react-router";
import ComponentList from "./components/list";

export default class Root extends React.Component{
    render() {
        return (
            // 这里替代了之前的Index，变成了程序的入口
            <Router history={hashHistory}>
                <Route component={Index} path="/"></Route>
                <Route component={ComponentList} path="/list"></Route>
            </Router>
        );
    };
}

ReactDOM.render(
    <Root/>,document.getElementById("example")
);