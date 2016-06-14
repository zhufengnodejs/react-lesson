var Person = React.createClass({
    getInitialState: function() {
        return {happy: true};
    },

    getDefaultProps:function(){
        return {name:'无名氏'};
    },
    handleClick: function(event) {
        this.setState({happy: !this.state.happy});
    },
    render: function() {
        var heart = this.state.happy ? '开心' : '不开心';
        return (
            <p >
                 {this.props.name} {heart} <br/><button onClick={this.handleClick}>变心</button>
            </p>
        );
    }
});

ReactDOM.render(
    <Person name="林志玲" />,
    document.getElementById('app')
);