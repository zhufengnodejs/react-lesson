var counterMix = {
    getInitialState:function(){
        return {count:0};
    },
    componentWillUpdate:function(){
        console.log('componentWillUpdate');
    },
    handleClick:function(){
        this.setState({count:this.state.count+1});
    }
}
var Counter1 = React.createClass({
   mixins: [counterMix],
   render:function(){
       return (
           <div>
               {this.state.count}
               <button onClick={this.handleClick}>增加</button>
           </div>
       )
   }
});
var Counter2 = React.createClass({
    mixins: [counterMix],
    render:function(){
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleClick}>增加</button>
            </div>
        )
    }
});
ReactDOM.render(<div>
  <Counter1/>
  <Counter2/>
</div>,document.getElementById('app'));