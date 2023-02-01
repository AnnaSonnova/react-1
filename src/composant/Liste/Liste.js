
import React from 'react';
import './Liste.css';

export default class Liste extends React.Component {

  constructor(props){
    super(props);
    
  }
  // salutation(){
  //   this.message = "allo";
  //   return "salut toi";
  // }
  render(){
    let liste = "Liste";
    
    return (
    
      <div className="Liste">
        <h1>{ liste }</h1>
        <p>Compteur : {this.props.compteur}</p>

      </div>
    );
  }
}

// function Liste() {
//   let toto = "Allo Toto";
//   let paragraphe = <p>Allo</p>;
//   return (
//     // <div className="Liste">
//     //   <header className="Liste-header">
//     //     <img src={logo} className="Liste-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/Liste.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="Liste-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div className="Liste">
//         <h1>{ toto }</h1>
//         {paragraphe}
//   </div>
//   );
// }

//export default Liste;
