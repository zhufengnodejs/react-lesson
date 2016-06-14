var Panel = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <PanelHead head={this.props.head}/>
                <PanelBody body={this.props.body}/>
            </div>
        );
    }
});


var PanelHead = React.createClass({
    render: function () {
        return (
            <div className="panel-heading">
                {this.props.head}
            </div>
        );
    }
});


var PanelBody = React.createClass({
    render: function () {
        return (
            <div className="panel-body">
                {this.props.body}
            </div>
        );
    }
});

ReactDOM.render(
    <Panel
        head="头部"
        body="正文"
    />,
    document.getElementById('app')
);