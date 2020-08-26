import React from 'react';

// 给外部使用的组件需要加上 export default
export default class BodyIndex extends React.Component{
    // 内置函数：页面将要加载
    componentWillMount() {
        console.log('BodyIndex - componentWillMount');
    }

    // 内置函数：页面已经加载
    componentDidMount() {
        console.log('BodyIndex - componentDidMount');
    }

    render() {
        const userName = "Parry";
        const boolInput = true;
        return (
            <div>
                <h2>页面的主体内容</h2>
                {/* 注释需要加花括号，里面放入注释块 */}
                {/* 传参在属性里面用{}，去掉'' */}
                {/* 传参的时候可以调用三元表达式 */}
                <p>{userName==""?"用户未登录":"用户名："+userName}</p>
                <p><input type="button" value="默认按钮" disabled={boolInput}/></p>
            </div>
        )
    }
}