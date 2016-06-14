var Person = React.createClass({
    render: function() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
});

ReactDOM.render(
    <Person>
        <span>大毛</span>
        <span>二毛</span>
        <span>三毛</span>
    </Person>,
    document.getElementById('app')
);