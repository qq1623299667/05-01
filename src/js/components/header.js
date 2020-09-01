import React from 'react';

// 给外部使用的组件需要加上 export default
export default class Header extends React.Component{
    constructor() {
        super();
        this.state={
            miniHeader : false
        }
    }
    switchHeader(){
        this.setState({
            miniHeader:!this.state.miniHeader
        });
    }
    render() {
        const styleComponentHeader = {
            header:{
                backgroundColor:"#333333", // react中的css的样式
                color:"#FFFFFF",
                "padding-top":this.state.miniHeader?"3px":"15px",  // 原生css的样式
                paddingBottom:this.state.miniHeader?"3px":"15px"
            },
            // 还可以定义其他的样式
        };

        return (
            <header style={styleComponentHeader.header} className="smallFontSize" onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
            </header>
        )
    }
}