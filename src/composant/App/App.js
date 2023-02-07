import React from 'react';
import Entete from '../Entete/Entete';
import ListeProduit from '../ListeProduit/ListeProduit';
import './App.css';

export default class App extends React.Component{
  constructor(){
    super();  // Appel explicite au constructeur de la classe React.Component
    this.message = "Ceci est un message";
     //this.compteur = 0;
    this.state = { 
      
      estConnecte : false
    };

    //this.augmenteCompte = this.augmenteCompte.bind(this);
    this.connection = this.connection.bind(this);
  }

  connection() {
    this.setState({
      estConnecte : !this.state.estConnecte
    });
  }

  // augmenteCompte(){
  //   //this.state.compteur++;
  //   this.setState({
  //     compteur : this.state.compteur+1
  //   })
    
  //   //this.compteur++;
  //   console.log(this.state.compteur);
   
  // }

  render(){
    return (
      <section className='App'>
        <Entete seConnecter={this.connection} estConnecte={this.state.estConnecte} />
        {/* <button onClick={this.augmenteCompte}>Clique ({this.state.compteur})</button> */}
        <ListeProduit estConnecte={this.state.estConnecte}  />
  

      </section>
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


