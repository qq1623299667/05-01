import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import {Router,Route,hashHistory} from "react-router";
import ComponentList from "./components/list";
import ComponentDetails from "./components/details";

export default class Root extends React.Component{
    render() {
        return (
            // 这里替代了之前的Index，变成了程序的入口
            <Router history={hashHistory}>
                <Route component={Index} path="/">
                    {/*访问/details可以查看首页里面嵌套的页面*/}
                    <Route component={ComponentDetails} path="/details"></Route>
                </Route>
                <Route component={ComponentList} path="/list"></Route>
            </Router>
        );
    };
}

ReactDOM.render(
    <Root/>,document.getElementById("example")
);