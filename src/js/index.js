import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/ComponentHeader';

class Index extends React.Component{
    render() {
        return (
            <ComponentHeader/>
        );
    }
}

ReactDOM.render(
    <Index/>,document.getElementById("example")
);