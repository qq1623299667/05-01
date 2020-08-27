import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/ComponentHeader';
import ComponentFooter from './components/ComponentFooter';
import BodyIndex from './components/bodyIndex';

class Index extends React.Component{
    // 最终的打印是：Index - componentWillMount BodyIndex - componentWillMount BodyIndex - componentDidMount Index - componentDidMount
    // 通过上述的打印信息获取组件加载流程

    // 内置函数：页面将要加载
    componentWillMount() {
        console.log('Index - componentWillMount');
    }

    // 内置函数：页面已经加载
    componentDidMount() {
        console.log('Index - componentDidMount');
    }

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
                <BodyIndex userId={1} username={"nick"}/>
                <ComponentFooter/>
            </div>
        );
    }
}

// 入口的定义格式 ReactDOM.render(<Index/>,document.getElementById("example"));
ReactDOM.render(
    <Index/>,document.getElementById("example")
);