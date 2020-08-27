import React from 'react';

// 给外部使用的组件需要加上 export default
export default class BodyIndex extends React.Component{
    constructor() {
        super();
        this.state = {username:"parry",age:"20"};
    }
    render() {
        setTimeout(()=>{
            // state设置时通过类似json的格式赋值
            this.setState({username:"shijia"});
        },1000);
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{this.state.username} {this.state.age}</p>
            </div>
        )
    }
}