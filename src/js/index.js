var React = require("react");
var ReactDOM = require("react-dom");

var ExampleApplication = React.createClass({
    render:function () {
        var elapsed = Math.round(this.props.elapsed / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ?'':'.0');
        var message = 'React has bean successfully running for '+seconds+' seconds.';
        return React.DOM.p(null,message);
    }
});

var ExampleApplicationFactory = React.createFactory(ExampleApplication);

var start = new Date().getTime();
setInterval(function () {
    ReactDOM.render(
        ExampleApplicationFactory({elapsed:new Date().getTime()-start}),
        document.getElementById("example")
    );
},50);