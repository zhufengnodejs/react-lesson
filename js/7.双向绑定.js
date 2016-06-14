var Input = React.createClass({
    getInitialState: function() {//获取初始状态
        return {value: '珠峰培训'};
    },
    handleChange: function(event) { //处理改变事件
        this.setState({value: event.target.value});
    },
    render: function () {
        var value = this.state.value;
        return (
            <div>
                <input style={{color:'red'}} type="text" value={value} onChange={this.handleChange} />
                <p>{value}</p>
            </div>
        );
    }
});

ReactDOM.render(<Input/>, document.getElementById('app'));