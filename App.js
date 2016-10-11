// import React from 'react';
// import ReactDOM from 'react-dom';

// // this can have state in the class 
// // class App extends React.Component {
// //   render(){
// //     return  <h1> Hello Guys </h1>// React.createElement('h1', null, 'Hello Guys')
// //   }
// // }

// // this is a stateless way of writing the same thing as above
// // const App = () => <h1>Hello Eggheads</h1>

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {red: 0, green: 0, blue:0}
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({
//       red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//       green: ReactDOM.findDOMNode(this.refs.green.  refs.inp).value,
//       blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
//     })
//   }

//   render (){
//       return (
//         <div>
        
//         <hr />
//           <Slider ref= 'red' update = {this.update} />
//           {this.state.red}
//           <Slider ref= 'green' update = {this.update} />
//           {this.state.green}
//           <Slider ref = 'blue' update = {this.update} />
//           {this.state.blue}
//         </div>
//       );
//   }
// }
// class Slider extends React.Component {
//   render(){
//       return(
//         <div>
//         <input ref = "inp"  type= "range"
//         min='0'
//         max= '255'
//         onChange = {this.props.update} />
//         </div>
//     );
//   }
// }
// //  destroyed this due to addig the slider class for refs

// // const Widget = (props) => {
// //   return(
// //             <div>
// //         <input type= "text"
// //         onChange = {props.update} />
// //         <h1>{props.txt}</h1>
// //         </div>
// //     );
// // }

// // props are ment to be passed into our component as static values or methods,
// //states are collection of values ment to be managed by our component itself
// //Refs are a way to reference an instance of a component from within a react application
// //Refs wont work with stateless components 

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: 'this is the default txt'
// }

// // export default App

// ReactDOM.render(
//   <App cat = {5} txt="this is the props value" />,
//   document.getElementById('app')
// );

// up to lession 8
// Accessing Child Properties
// import React from 'react';
// class App extends React.Component {
//   render(){
//     return <Button>I </Heart> React</Button>
//   }
// }

// class Button extends React.Component {
//   render(){
//     return <button>{this.props.children}</button>
//   }
// }

// const Heart = () => <span className = "glyphicon glyphicon-heart">heart</span>

// export default App



//lession 9 Mounting lifecycle of component
// this has has a mount button that brings up the value 
// that can be incremented and 

// import React from 'react';
// import ReactDOM from 'react-dom';


// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {val:0};
//     this.update = this.update.bind(this);
//   }
//   update(){
//     this.setState({val: this.state.val +1 })
//   }
//   componentWillMount(){
//     console.log('mounting')
//   }
//   render(){
//     console.log('rendering!')
//     return <button onClick= {this.update}>{this.state.val}</button>
//   }
//   componentDidMount(){
//     console.log('mounted')
//   }
//   componentWillUnmount(){
//     console.log('bye!')
//   }
// }

// // wrapper component to interact with the dom
// class Wrapper extends React.Component {
//   constructor (){
//     super();
//   }
//   mount(){
//     ReactDOM.render(<App/>, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id='a'></div>
//       </div>
//       )
//   }
// }

// export default Wrapper

// lession 10 mounting usage 

// import React from 'react';
// import ReactDOM from 'react-dom';


// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {val:0};
//     this.update = this.update.bind(this);
//   }
//   update(){
//     this.setState({val: this.state.val +1 })
//   }
//   componentWillMount(){
//     this.setState({m: 2})
//   }
//   render(){
//     console.log('rendering!')
//     return <button onClick= {this.update}>{this.state.val * this.state.m}</button>
//   }
//   componentDidMount(){
//     // console.log(ReactDOM.findDOMNode(this))
//     this.inc = setInterval(this.update,500)
//   }
//   componentWillUnmount(){
//     // console.log('bye!')
//     clearInterval(this.inc)
//   }
// }

// // wrapper component to interact with the dom
// class Wrapper extends React.Component {
//   constructor (){
//     super();
//   }
//   mount(){
//     ReactDOM.render(<App/>, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id='a'></div>
//       </div>
//       )
//   }
// }

// export default Wrapper



//lession 11 updating component lifecycle
import React from 'react'
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    super();
    this.update = this.update.bind(this);
  }
  update(){
    reactDOM.render(
      <App val = {this.props.val+1} />,
      document.getElementById('app')
      );
  }
}
App.defaultProps = { val: 0}

export default App










