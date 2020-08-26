import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/ComponentHeader';

class Index extends React.Component{
    render() {
        return (
            // 组件的return 函数返回的html节点必须是一个
            <div>
                <ComponentHeader/>
                <h2>页面的主体内容</h2>
            </div>
        );
    }
}

// 入口的定义格式 ReactDOM.render(<Index/>,document.getElementById("example"));
ReactDOM.render(
    <Index/>,document.getElementById("example")
);