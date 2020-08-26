import React from 'react';

// 给外部使用的组件需要加上 export default
export default class ComponentFooter extends React.Component{
    render() {
        return (
            <footer>
                <h1>这里是页脚，一般放置版权相关的信息</h1>
            </footer>
        )
    }
}