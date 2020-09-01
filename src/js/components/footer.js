import React from 'react';
const footerCss = require("../../css/footer.css");

// 给外部使用的组件需要加上 export default
export default class Footer extends React.Component{
    render() {
        console.log(footerCss);
        return (
            <footer class={footerCss.miniFooter}>
                <h1>这里是页脚，一般放置版权相关的信息</h1>
            </footer>
        )
    }
}