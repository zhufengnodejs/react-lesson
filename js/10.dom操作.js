var Focus = React.createClass({
    handleClick: function() {
        this.refs.msg.focus();
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="msg" />
                <input type="button" value="获得焦点" onClick={this.handleClick} />
            </div>
        );
    }
});

ReactDOM.render(
    <Focus />,
    document.getElementById('app')
);