var Person = React.createClass({
    propTypes: { //类似于约定了一个接口文档,用于这是验证传递给组件的属性，
        name: React.PropTypes.string.isRequired, //定义msg的属性类型为字符串，必须传入
        gender: React.PropTypes.number.isRequired
    },
    getDefaultProps:function(){
        return {name:'无名氏',age:0}
    },
    render: function() {
        return (<h1> {this.props.name} {this.props.gender}</h1>);//属性可以通过属性对象this.props中取出
    }
});

ReactDOM.render(
    <Person gender="男" />,//属性可以在使用组件时传入
    document.getElementById('app')
);