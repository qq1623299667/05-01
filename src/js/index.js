import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/ComponentHeader';
import ComponentFooter from './components/ComponentFooter';
import IndexBody from './components/IndexBody';

class Index extends React.Component{
    render() {
        /**
        *  组件化开发，把组件赋值给变量，动态加载dom
         *  if(用户已登录){componentHeader = <LoginComponent/>;}
         *  else{componentHeader = <UnLoginComponent/>;}
        * @author 石佳
        * @since 2020/8/26
        */
        const componentHeader = <ComponentHeader/>;
        return (
            // 组件的return 函数返回的html节点必须是一个
            <div>
                {componentHeader}
                <IndexBody/>
                <ComponentFooter/>
            </div>
        );
    }
}

// 入口的定义格式 ReactDOM.render(<Index/>,document.getElementById("example"));
ReactDOM.render(
    <Index/>,document.getElementById("example")
);