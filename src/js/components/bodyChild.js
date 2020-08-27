import React from 'react';

export default class BodyChild extends React.Component{
    render() {
        return (
            <div>
                {/* prop不但可以把外面的属性传到子组件，还可以通过prop调用外部的方法，将子组件的属性传到外面 */}
                <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
            </div>
        )
    }
}