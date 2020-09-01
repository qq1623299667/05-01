import React from 'react';
// const footerCss = require("../../css/footer.css"); //模块化导入css的方法

// 给外部使用的组件需要加上 export default
export default class Footer extends React.Component{
    render() {
        // 利用https://staxmanade.com/CssToReact/ 将css转换成js
        const footerConvertStyle = {
            "miniFooter": {
                "backgroundColor": "#333333",
                "color": "#ffffff",
                "paddingLeft": "20px",
                "paddingTop": "3px",
                "paddingBottom": "3px"
            },
            "miniFooter_h1": {
                "fontSize": "15px"
            }
        };
        return (
            <footer style={footerConvertStyle.miniFooter}>
                <h1 style={footerConvertStyle.miniFooter_h1}>这里是页脚，一般放置版权相关的信息</h1>
            </footer>
        )
    }
}