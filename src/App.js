import './App.css';
import Header from './Header.js';
import Bookbox from './Bookbox.js';
import Postboxdiv from './Postboxdiv.js';
import {useState} from 'react'

function App() {

  const[postbox, setpostbox] = useState([]);

  const [showBox, setshowBox] = useState(false);
  
  const displaybox= () => setshowBox(true);

  const removebox = () => setshowBox(false);

  const divbox = (arr) => {
    setpostbox(arr);
  }
  return (
    <div className="App">
     <Header displayBox = {displaybox}/>
     <div className='body-part'>
     {postbox.length > 0 && <Postboxdiv />}
     </div>
      {showBox && <Bookbox functions = {{removebox, divbox}}/>}
    </div>
  ); 
}

export default App;
