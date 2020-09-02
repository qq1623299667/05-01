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
            /*history加了之后可以保证页面向前向后跳转的历史记录功能*/
            <Router history={hashHistory}>
                {/*route可以指定连接到对应的页面，还可以嵌套成子页面，但是需要在页面里面加入div配置this.props.children*/}
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