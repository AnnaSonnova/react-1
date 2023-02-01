
import React from 'react';
import './Entete.css';

export default class Entete  extends React.Component {

  constructor(){
    super();
   
  }
  
  render(){
    let entete = "Entete";
    
    return (
    
      <div className="Entete">
        <h1>{ entete }</h1>
        <ul>
          <li>
            
          </li>
        </ul>
        
       
      

      </div>
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
