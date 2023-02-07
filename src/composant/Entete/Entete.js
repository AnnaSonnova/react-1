import React from 'react';
import './Entete.css';

export default class Entete extends React.Component{
  constructor(props){
    super(props);
    //this.state = {estConnecte : false}
    //this.connection = this.connection.bind(this)
  }

 /* connection() {
    this.setState({
      estConnecte : !this.state.estConnecte
    });
  }*/

  render(){
    let entete = "Biero";
    let btnConnecter = (this.props.estConnecte ? "Se déconnecter": "Se connecter")
    return (
      <header className="entete">
        <h1>{ entete }</h1>
        <button onClick={this.props.seConnecter}>{btnConnecter}</button>
        <nav>
          <ul>
            <li>Nav 1</li>
            <li>Nav 2</li>
            <li>Nav 3</li>
          </ul>
        </nav>
      </header>
    );
  }
}

// function Entete() {
//   let toto = "Allo Toto";
//   let paragraphe = <p>Allo</p>;
//   return (
//     // <div className="Entete">
//     //   <header className="Entete-header">
//     //     <img src={logo} className="Entete-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/Entete.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="Entete-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div className="Entete">
//         <h1>{ toto }</h1>
//         {paragraphe}
//   </div>
//   );
// }

//export default Entete;


