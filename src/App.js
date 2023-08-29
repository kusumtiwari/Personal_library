import './App.css';
import Header from './Header.js';
import Bookbox from './Bookbox.js';
import Postboxdiv from './Postboxdiv.js';
import {useState,useRef} from 'react'

function App() {
  const header = useRef(null);
  const bodyPart = useRef(null);
  const[postbox, setpostbox] = useState([]);

  const [showBox, setshowBox] = useState(false);
  
  const displaybox = () => {
    setshowBox(true);
    bodyPart.current.classList.add('opacity');
    header.current.classList.add('opacity');
  };  
  const removebox = () => {
    setshowBox(false);
    bodyPart.current.classList.remove('opacity');
    header.current.classList.remove('opacity');
  };

  const divbox = (arr) => {
    let value = [...postbox, arr];
    console.log(value);
    setpostbox([...postbox, arr]);
  }
  return (
    <div className="App">
      <div className='header' ref={header}>
     <Header displayBox = {displaybox}/></div>
     <div className='body-part' ref={bodyPart}>
        {postbox.map((item, index) => (
          <Postboxdiv key={index} postbox={item} />
        ))}
      </div>
      {showBox && <Bookbox functions = {{removebox, divbox}}/>}
    </div>
  ); 
}

export default App;
