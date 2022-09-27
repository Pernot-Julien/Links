import array from '../Data/index'
import photo from '../Assets/Images/photo.png'
//import insta from '../Assets/Images/insta.png'
import './style.css';

function App() {
  return (
    <div className="app">
      <div className="linkgroup">
      <img className="circle"
        src={ photo }
        alt="Portrait"/>
        <p className="pseudo">@Steph</p>
        {array.map(
          (arrayItem) => (
        <div className="link">
         <img className="resize" src={arrayItem.logo} alt="logo insta" />
         <a href={ arrayItem.link }>{ arrayItem.description }</a>
        </div>))}
      </div>
    </div>
  );
}

export default App;
