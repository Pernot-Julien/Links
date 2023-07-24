import React, { useState } from 'react';
import pochette from '../Assets/Images/pochette_summer.png';
import ophelia from '../Assets/Images/ophelia.jpg';
import heart from '../Assets/Images/ptits_coeurs.png';
import array from '../Data/index';
import photo from '../Assets/Images/photo.png';
import gift from '../Assets/Images/gift.png';
import insta from '../Assets/Images/insta.png';
import portrait from '../Assets/Images/portrait.jpg';
import pinterest from '../Assets/Images/pinterest.png';
import book from '../Assets/Images/book.png';
import mail from '../Assets/Images/mail.png';
import pdfSummer from '../Assets/Download/pochette_summer.pdf';
import pdfCoeur from '../Assets/Download/ptits_coeurs.pdf';
import pdfOphelia from '../Assets/Download/Ophelia.pdf';
//import insta from '../Assets/Images/insta.png'
import './style.css';


function App() {
  const [display, setDisplay] = useState(false);
  const [story, setStory] = useState(false)

  const handleReturn = (event) => {
    setDisplay(display => false)
  };
  const handleDisplay = (event) => {
    setDisplay(display => true);
  };

  const handleStory = (event) => {
   setStory(story => !story);
  };

  return (
    <div className="app">
      <div className="linkgroup">
        { !story &&
        <div>
        <img className="circle"
          src={ photo }
          alt="Portrait"/>
        <p className="pseudo">@mes.ptits.bonheurs.diy</p>
        </div>
}
        {display && 
        <>
          <div className="pdf">
            <div className="pdf-display">
              <p className='pdf-title'>Pochette summer</p>
              <img src={ pochette } alt="pochette summer" className='pdf-photo'/>
              <button className="download-button"><a href={ pdfSummer } download>Télécharger le PDF</a></button>
            </div>
            <div className="pdf-display">
            <p className='pdf-title'>Mes ptits coeurs</p>
              <img src={ heart } alt="mes ptits coeurs" className='pdf-photo'/>
              <button className="download-button"><a href={ pdfCoeur } download>Télécharger le PDF</a></button>
            </div>
            <div className="pdf-display">
            <p className='pdf-title'>Poupée Ophélia</p>
              <img src={ ophelia } alt="mes ptits coeurs" className='pdf-photo'/>
              <button className="download-button"><a href={ pdfOphelia } download>Télécharger le PDF</a></button>
            </div>
          </div >
          <div className='return'>
          <button className='return-button' onClick={ handleReturn }>Retour</button>
         </div>
        </>
        }
        {!story && !display &&
        <>
          <button className="button" onClick={ handleStory }><img className="resize" src={ book } alt="logo insta" />Le début de l'histoire</button>
          </>}
            {!display && !story && array.map(
              (arrayItem) => (
          <div className="link">
            <img className="resize" src={arrayItem.logo} alt="logo insta" />
            <a href={ arrayItem.link }>{ arrayItem.description }</a>
          </div>))}
          {
            story && 
            <>
            < div className="story">
            <img className='portrait'
          src={ portrait }
          alt="Portrait"/>
              <p>
                En quelques mots j'ai envie de vous expliquer comment  'mes.ptits.bonheurs.diy' est né...
                Depuis mon adolescence les travaux manuels m'intriguent... pâte à sel, scoobidous, bijoux de Swarovski mais je n'ai jamais osé sauter le pas des travaux d'aiguilles ...ça fait un peu peur non?🤔<br></br><br></br>
             </p>
             <p>
                En 2019, une amie m'initie pourtant au tricot qu'elle venait elle -même de découvrir. Cette nouvelle activité m'a toute suite conquise.  Voici donc que les bonnets n'avaient plus de secret pour moi, les pulls me donnaient encore un peu de fil à retordre mais quelques uns eurent la chance (ou pas 😅) de voir le jour 😉.<br></br>
                Puis, pendant le confinement, les magnifiques créations de poupées que je découvrais sur certains réseaux sociaux, me firent rêver. A force de persévérance et moultes visionnages youtube du 'cercle magique' une licorne est née (quelle fierté ce fût!) et depuis... je ne me suis plus arrêtée! 
            </p><br></br><br></br>
            <p>
                Fin 2021, la création me fait de l'oeil, (comme beaucoup d'entre nous) et c'est ainsi que Roxane pris forme dans mon imaginaire puis, vie d'abord, sous mon crochet puis, sous quelques uns des vôtres.
                Alors c'est vrai, ce n'est pas toujours facile d'allier vie de maman, vie de femme active et  vie de passion. Alors c'est souvent le soir, quand les enfants sont couchés, que je peux me consacrer à cette passion.
                Pour l'instant, je ne suis qu'au début de l'aventure mais j'espère que, grâce à vous, elle se poursuivra.<br></br><br></br>
                Merci de m'avoir lue et merci d'être là ❤️❤️❤️.
                Je vous souhaite un doux moment crochet.
              </p>
          </div>  
          <div className='return'>
          <button className='return-button' onClick={ handleStory }>Retour</button>
         </div>
         </>
          }
        {!display && !story && 
        <>
        <button className="button" onClick={ handleDisplay }><img className="resize" src={ gift } alt="logo insta" />Mes patrons offerts</button>
        </>}
      
      </div>
      { !story &&
        <div className='footer'>
        <a className="acenter" href= 'https://instagram.com/stories/mes.ptits.bonheurs.diy/2936014811337409041?utm_source=ig_story_item_share&igshid=MDJmNzVkMjY=' ><img className='footer-logo' src={ insta } alt="lien Instagram" /></a>
        <a className="acenter" href='https://www.pinterest.fr/stephaniesegui0529/' ><img className='footer-logo' src={ pinterest } alt="lien Pinterest" /></a>
        <span className="acenter tooltip"><p className="tooltiptext">mes.ptits.bonheurs.diy@gmail.com</p><img className='footer-logo' src={mail} alt="Mon email" /></span>
      </div>
      }
    </div>
  );
}

export default App;
