import React, { useState } from 'react'
import pochette from '../Assets/Images/pochette_summer.png'
import array from '../Data/index'
import photo from '../Assets/Images/photo.png'
import gift from '../Assets/Images/gift.png'
import pdf from '../Assets/Download/pochette_summer.pdf';
//import insta from '../Assets/Images/insta.png'
import './style.css';


function App() {
  const [display, setDisplay] = useState(false);

  const handleReturn = (event) => {
    setDisplay(display => false)
  };
  const handleDisplay = (event) => {
    setDisplay(display => true);
  };

  return (
    <div className="app">
      <div className="linkgroup">
        <img className="circle"
          src={ photo }
          alt="Portrait"/>
        <p className="pseudo">@mes.ptits.bonheurs.diy</p>
        {display && 
        <>
          <div className="pdf">
            <p className='pdf-title'>Pochette summer</p>
            <img src={ pochette } alt="pochette summer" className='pdf-photo'/>
            <button className="download-button"><a href={ pdf } download>Télécharger le PDF</a></button>
          </div >
          <div className='return'>
          <button className='return-button' onClick={ handleReturn }>Retour</button>
          </div>
        </>
        }
          {!display && array.map(
            (arrayItem) => (
        <div className="link">
          <img className="resize" src={arrayItem.logo} alt="logo insta" />
          <a href={ arrayItem.link }>{ arrayItem.description }</a>
        </div>))}

        {!display && 
        <>
        <button className="button" onClick={ handleDisplay }><img className="resize" src={ gift } alt="logo insta" />Mes     patrons offerts</button>
        </>}
        
      </div>
    </div>
  );
}

export default App;
