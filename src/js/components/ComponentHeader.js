import React from 'react';

// 给外部使用的组件需要加上 export default
export default class ComponentHeader extends React.Component{
    render() {
        return (
            <header>
                <h1>这里是头部</h1>
            </header>
        )
    }
}