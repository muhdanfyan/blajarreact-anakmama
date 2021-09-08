import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Materi video ke 2 react Sekolah Koding
// function Biodata(props) {
//   return <span> umurnya : {props.age}</span>  
// }

// function Salam(props){
//   return <h3>Assalamualaykum {props.nama}  - <Biodata age={props.age} /></h3>
// }

// class Timer extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       time : props.start
//     }
//   }

//   componentDidMount(){
//     this.addInterval = setInterval(() => this.increase(), 1000);
//   }

//   componentWillUnmount(){
//     clearInterval(this.addInterval);
//   }

//   increase(){
//     // update state time setiap detik
//     this.setState((state, props) => ({
//       time : parseInt(state.time) + 1
//     })
//     )
//   }

//   render(){
//     return (
//       <div> {this.state.time} detik </div>
//     )
//   }

// }


// function App() {
//   return (
//     <div className="App">
      
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
        
//         {/* <Timer start="0" /> */}
//         {/* <Salam nama="La Ege" age="12" /> */}
//       </header>
//     </div>
//   );
// }


function Clicker(){
  function handleClick(e){
    alert ('Mantap!')
    e.preventDefault()
  }

  return(
    <a href="#" onClick={handleClick}>Klik</a>
  )
}


class App extends Component{
  render (){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <Clicker />
      </div>
    );

  }
}


export default App;
