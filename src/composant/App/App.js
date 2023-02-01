
import React from 'react';
import Entete from '../Entete/Entete';
import Liste from '../Liste/Liste';
import './App.css';

export default class App extends React.Component {

  constructor(){
    super();
    this.message = "cest un message";
    //this.compteur = 0;
    this.state = {
      compteur : 0
    };

    this.augmenteCompte = this.augmenteCompte.bind(this);
  }
  

  augmenteCompte(){

    this.setState({
      compteur : this.state.compteur+1
    })
    //this.compteur++;
    console.log(this.state.compteur);
  }

  render(){
    
    return (
    
      <div className="App">
        <Entete/>
          
          
          <button onClick={this.augmenteCompte}>
            Clique({this.state.compteur}) 
          </button>
          <Liste compteur={this.state.compteur}/>
      </div>
    );
  }
}

// salutation(){
  //   this.compteur = 0;
  //   return "salut toi";
  // }
// render(){
//   let toto = "Allo Toto";
//   let paragraphe = <p>Allo</p>;
//   return (
  
//     <div className="App">
//       <h1>{ toto }</h1>
//       {paragraphe}
//       {this.message}
//     {this.salutation()}
//       {this. message}
// <Entete/>
// <Liste/>

//     </div>
//   );
// }
// }

// function App() {
//   let toto = "Allo Toto";
//   let paragraphe = <p>Allo</p>;
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div className="App">
//         <h1>{ toto }</h1>
//         {paragraphe}
//   </div>
//   );
// }

//export default App;
