## 1. ʲô��react
React ��һ�����ڹ����û������JavaScript��

[react����](https://facebook.github.io/react)
[react������](http://reactjs.cn)
[react������](http://react-china.org)
[react������](http://ant.design)
[githup](https://github.com/facebook/react)

## 2. ��װreact
```sh
$ bower install react babel --save
```

## 3. ֱ�����������ʹ��React
```javascript
  <script src="../bower_components/react/react.js"></script>
  <script src="../bower_components/react/react-dom.js"></script>
  <script src="../bower_components/babel/browser.js"></script>
  <script type="text/babel" src="index.js"/>
```

* react.js �� React ��*����*��
* react-dom.js ���ṩ��*DOM*��صĹ���,����window������`ReactDOM`����
* browser.js �������ǽ�`JSX`�﷨תΪ`JavaScript`�﷨

> `script`�е�`type`����Ϊ`text/babel`,��ΪReact���е�JSX�﷨,��JavaScript������

## 4. ReactDOM.render
`ReactDOM.render` �� `React` �����������,���ڽ���ǩģ��תΪHTML���ԣ�������ָ����DOM�ڵ�
### 4.1. index.html

```diff
+   <div id="app"></div>
+   <script type="text/babel" src="js/1.react.js"/>
```

### 4.2. js/1.react.js

```javascript
    ReactDOM.render(
    <h1>�����ѵ</h1>,
        document.getElementById('app')
    );
```
> ������뽫һ��h1���⣬����appԪ���ڲ�

## 5. JSX �﷨
��һ��JS��HTML��ϵ��﷨,�������*�ṹ*��*����*����*��ʽ*���ۺ���һ�������,��������ͨ��Javascript��
* ����HTML��ǩ(�� < ��ͷ)������*HTML*�������
* ���������(�� { ��ͷ)������*JavaScript*�������
* ʹ����ʽʱ������style����һ����ʽ����
* ʹ����ʽ��ʱֻ��ʹ��`className=����`,��Ϊclass��Javascript�ؼ���

```javascript
var persons = ['���»�', '������', '��Ծ'];
var style = {color:'red'};
ReactDOM.render(
  <div>
  {
    persons.map(function (person) {
      return <div style={style}>Hello, {person}!</div>
    })
  }
  </div>,
  document.getElementById('app')
);
```


## 6. �������
���ǿ��Ժ�ֱ�۵Ľ�һ�����ӵ�ҳ��ָ�����ɸ��������,ÿ����������Լ����߼�����ʽ  
�ٽ���Щ�������������һ�����ӵ�ҳ�档  
�����ȼ������߼����Ӷȣ���ʵ���˴��������
- ����ϣ�һ��������Ժ����������һ��ʹ�û��߿���ֱ��Ƕ������һ������ڲ�
- �����ã�ÿ��������Ǿ��ж������ܵģ������Ա�ʹ���ڶ��������
- ��ά����ÿ��С�������������������߼��������ױ�����ά��

### 6.1 �������
React���������װ�������Ȼ���������ͨHTML��ǩһ��������ҳ�в���������

* �����ĵ�һ����ĸ����*��д*
* �����*����ֻ��*����һ��*�����ǩ* 

```javascript
var Message = React.createClass({
    render: function() {
        return <h1>Hello</h1>;
    }
});
ReactDOM.render(
    <Message/>,
    document.getElementById('app')
);
```

### 6.2 ���������
* ÿ������������Լ�������,һ��������������ʼ�󲻱������,�����˵��Ա�������
* ����һ���������������Դ��һ���ɸ��������,�����������һ�������㸸ĸȡ��
* ���Կ���ͨ��`this.props`��ȡ��
* *propTypes*�����������崫��������Ե����ƺ�����
* `getDefaultProps`�������������������������Ĭ������

```javascript
 var Person = React.createClass({
     propTypes: { //������Լ����һ���ӿ��ĵ�,����������֤���ݸ���������ԣ�
         name: React.PropTypes.string.isRequired, //����msg����������Ϊ�ַ��������봫��
         gender: React.PropTypes.number.isRequired
     },
     getDefaultProps:function(){ //����Ĭ�����ԣ�����ϼ����������ʹ��Ĭ��ֵ
         return {name:'������',age:0}
     },
     render: function() {
         return (<h1> {this.props.name} {this.props.gender}</h1>);//���Կ���ͨ�����Զ���this.props��ȡ��
     }
 });
 
 ReactDOM.render(
     <Person gender="��" />,//���Կ�����ʹ�����ʱ����
     document.getElementById('app')
 );
```

### 6.3 this.props.children
`this.props`��������������ʵ��������һһ��Ӧ,��`this.props.children`���Ա�ʾ����������ӽڵ�
`React.Children.map`��һ�����߷���������ʵ�ֶ�����Ԫ�ص�ӳ��
```javascript
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
        <span>��ë</span>
        <span>��ë</span>
        <span>��ë</span>
    </Person>,
    document.getElementById('app')
);
```

### 6.4 state״̬
- �����״̬�����˵����飬�ᾭ���仯������ֻ�����Լ����ı�  
- ���һ��ʼ��һ����ʼ״̬,Ȼ���û�����,����״̬�仯���Ӷ���������������Ⱦ
* `getInitialState`���������ʼ״̬
- ���Ը���ť���¼������¼�������ʱ����ö�Ӧ�ķ����ı������״̬

```javascript
var Person = React.createClass({
    getInitialState: function() {
        return {happy: true};
    },

    getDefaultProps:function(){
        return {name:'������'};
    },
    handleClick: function(event) {
        this.setState({happy: !this.state.happy});
    },
    render: function() {
        var heart = this.state.happy ? '����' : '������';
        return (
            <p >
                 {this.props.name} {heart} <br/><button onClick={this.handleClick}>����</button>
            </p>
        );
    }
});

ReactDOM.render(
    <Person name="��־��" />,
    document.getElementById('app')
);
```

���õ��¼�
```javascript
�������¼� onKeyDown onKeyPress onKeyUp
�����¼� onFocus onBlur
�����¼� onChange onInput onSubmit
����¼� onClick onDoubleClick onMouseDown onMouseEnter onMouseLeave
```

### 6.5 ��Ԫ��˫�����ݰ�
```javascript
var Input = React.createClass({
    getInitialState: function() {//��ȡ��ʼ״̬
        return {value: '�����ѵ'};
    },
    handleChange: function(event) { //����ı��¼�
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
```
> ע��: �������Ԫ��������`value`���ԣ������ָ��`onChange`�¼������������� ���ֶλ���ֻ��״̬ 
 
## 7. �������
����򵥵����Ƕ�ף��ɹ���һ�����ӵĸ���������Ӷ���ɸ��ӵĽ����߼�
```javascript
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
        head="ͷ��"
        body="����"
    />,
    document.getElementById('app')
);
```


## 8. �������������
React�п���ָ����������������ڵĲ�ͬ�׶�ִ�еĺ���
- ��Ⱦǰ
    - getDefaultProps  ������ഴ����ʱ�����һ��,��˴����صĶ����е���Ӧ���Խ���ϲ���`this.props`
    - getInitialState ���������֮ǰ����һ�Ρ�����ֵ������Ϊ`this.state`�ĳ�ʼֵ��
    - componentWillMount ���״���Ⱦ֮ǰ����
- ��Ⱦ    
    - render �����õ�ʱ�򣬻���`this.props`��`this.state`������һ�����
- ��Ⱦ��    
    - componentDidMount �ڳ�ʼ����Ⱦִ��֮�����̵���һ��
    - shouldComponentUpdate �ڽ��յ��µ�`props`����`state`����Ҫ��Ⱦ֮ǰ����,����`false`�򲻸������
    - componentWillUpdate ��һЩ����֮ǰ��׼������
    - componentDidUpdate ����֮�󴥷�
    - componentWillReceiveProps ��������յ��µ�`props`��ʱ�����  
- �Ƴ�    
    - componentWillUnmount �������DOM���Ƴ���ʱ�����̱�����
    - componentDidUnmount ����Ƴ�֮�����
 
```javascript
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
                <h1 > ������ {this.state.count}</h1>
                <button onClick={this.killMySelf}>ж�ص�������</button>
                <button onClick={this.doUpdate}>�ֶ�����һ������������������</button>
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
            <h3>��ǰ�����ǣ�{this.props.count}</h3>
        )
    }
});

ReactDOM.render(<MessageBox/>, document.getElementById('app'));
```

> ReactDOM.unmountComponentAtNode ��DOM���Ƴ��Ѿ����ص�React���

## 9. DOM����
���������`ref="xxx"`�󣬿��ڸ������ͨ��`this.refs.xxx`��ȡ��DOMԪ��
```javascript
var Focus = React.createClass({
    handleClick: function() {
        this.refs.msg.focus();
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="msg" />
                <input type="button" value="��ý���" onClick={this.handleClick} />
            </div>
        );
    }
});

ReactDOM.render(
    <Focus />,
    document.getElementById('app')
);
```

## 10.ͨ��Ajax��ȡ����
```
var Suggestion = React.createClass({
    getInitialState:function(){
      return {}
    },
    handleChange: function () {
        var value = this.refs.input.value;
        $.ajax({
            url: 'http://www.baidu.com/su',
            type: 'get',
            jsonp: 'cb',
            dataType: 'jsonp',
            data: {wd: value},
            processDate: true,
            context:this,
            success: function (result) {
                var data = result.s;
                data = data.map(function(item){
                    return <li>{item}</li>
                });
                this.setState({content:data});
            }
        })
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="input" onChange={this.handleChange}/>
                <ul>
                    {this.state.content}
                </ul>
            </div>
        )
    }
});

ReactDOM.render(<Suggestion></Suggestion>, document.getElementById('app'));
```


## 11. mixin
���ó�ȡ����,�ò�ͬ���������ͬһ�����߼���ʵ�ִ�������
```javascript
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
               <button onClick={this.handleClick}>����</button>
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
                <button onClick={this.handleClick}>����</button>
            </div>
        )
    }
});
ReactDOM.render(<div>
  <Counter1/>
  <Counter2/>
</div>,document.getElementById('app'));
```