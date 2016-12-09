var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function () {
        return {count: 0};
    },
    handleSetCowntdown: function(seconds){
        this.setState({
            count: seconds
        });
    },
    render: function() {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown = {this.handleSetCowntdown}/>
            </div>
        );
    }
});

module.exports = Countdown;