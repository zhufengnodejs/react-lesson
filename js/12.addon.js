var Input = React.createClass({
    mixins:[React.addons.LinkedStateMixin],
    getInitialState: function() {//获取初始状态
        return {msg: '珠峰培训'};
    },
    render: function () {
        var msg = this.state.msg;
        return (
            <div>
                <input type="text" valueLink={this.linkState('msg')} />
                <p>{msg}</p>
            </div>
        );
    }
});

ReactDOM.render(<Input/>, document.getElementById('app'));