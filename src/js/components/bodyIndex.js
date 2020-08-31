import React from 'react';
import BodyChild from "./bodyChild";

const defaultProps = {
  username:'默认用户名'
};
// 给外部使用的组件需要加上 export default
export default class BodyIndex extends React.Component{
    constructor() {
        super();
        this.state = {username:"parry",age:20};
    }

    changeUserInfo(){
        this.setState({age:50});
    }

    // 通过event事件的方式将子组件的变动传递到父组件
    handleChildValueChange(event){
        this.setState({age:event.target.value})
    }

    render() {
        // setTimeout(()=>{
        //     // state设置时通过类似json的格式赋值
        //     this.setState({username:"shijia"});
        // },1000);
        return (
            <div>
                <h2>页面的主体内容</h2>
                {/* state组件自身属性  prop组件接收外面传入的属性*/}
                <p>接收到的父页面的属性： userId: {this.props.userId} username: {this.props.username}</p>
                <p>{this.state.username} {this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
                <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}

BodyIndex.propTypes ={
    userId:React.PropTypes.number.isRequired
};

BodyIndex.defaultProps = defaultProps;