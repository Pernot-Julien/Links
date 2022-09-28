import array from '../Data/index'
import photo from '../Assets/Images/photo.png'
import shop from '../Assets/Images/shop.png'
//import insta from '../Assets/Images/insta.png'
import './style.css';

function App() {
  return (
    <div className="app">
      <div className="linkgroup">
        <img className="circle"
          src={ photo }
          alt="Portrait"/>
        <p className="pseudo">Mes.ptits.bonheurs.diy</p>
          {array.map(
            (arrayItem) => (
        <div className="link">
          <img className="resize" src={arrayItem.logo} alt="logo insta" />
          <a href={ arrayItem.link }>{ arrayItem.description }</a>
        </div>))}
        <p className="advise"><span>&darr;</span> BIENTÔT DISPONIBLE <span>&darr;</span> </p>
        <button className="button" onClick=""> <img className="resize" src={ shop } alt="logo insta" />Mes patrons offerts</button>
      </div>
    </div>
  );
}

export default App;
