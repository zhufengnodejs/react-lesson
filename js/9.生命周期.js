var MessageBox = React.createClass({
    getInitialState: function () {
        console.log('MessageBox.getInitialState');
        return {
            count: 0,
        }
    },
    getDefaultProps: function () {
        console.log('MessageBox.getDefaultProps');
    },
    componentWillMount: function () {
        console.log('MessageBox.componentWillMount');
    },
    componentDidMount: function () {
        console.log('MessageBox.componentDidMount');
    },
    componentWillUnmount: function () {
        console.log('MessageBox.componentWillUnmount');
    },
    shouldComponentUpdate: function (nextProp, nextState) {
        console.log('MessageBox.shouldComponentUpdate');
        if (nextState.count > 10) return false;
        return true;
    },
    componentWillUpdate: function (nextProp, nextState) {
        console.log('MessageBox.componentWillUpdate');
    },
    componentDidUpdate: function () {
        console.log('MessageBox.componentDidUpdate');
    },
    killMySelf: function () {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    },
    doUpdate: function () {
        this.setState({
            count: this.state.count + 1,
        });
    },
    render: function () {
        return (
            <div>
                <h1 > 计数： {this.state.count}</h1>
                <button onClick={this.killMySelf}>卸载掉这个组件</button>
                <button onClick={this.doUpdate}>手动更新一下组件（包括子组件）</button>
                <Submessage count={this.state.count}/>
            </div>
        )
    }
});

var Submessage = React.createClass({
    componentWillReceiveProps: function (nextProp) {
        console.log('Submessage.componentWillReceiveProps');
    },
    shouldComponentUpdate: function (nextProp, nextState) {
        console.log('Submessage.shouldComponentUpdate');
        if (nextProp.count > 5) return false;
        return true;
    },
    render: function () {
        return (
            <h3>当前计数是：{this.props.count}</h3>
        )
    }
});

ReactDOM.render(<MessageBox/>, document.getElementById('app'));