var React = require("react");
var ReactDOM = require("react-dom");
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