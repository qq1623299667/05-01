import React from 'react';

export default class ComponentList extends React.Component{
    render() {
        return (
            <div>
                <h2>列表页面 Id:{this.props.params.id}</h2>
            </div>
        );
    };
}