import './App.css';
import Header from './Header.js';
import Bookbox from './Bookbox.js';
import {useState} from 'react'

function App() {

  const [showBox, setshowBox] = useState(false);
  
  const displaybox= () => setshowBox(true);

  const removebox = () => setshowBox(false);

  return (
    <div className="App">
     <Header displayBox = {displaybox}/>
     <div className='body-part'></div>
      {showBox && <Bookbox removeBox = {removebox}/>}
    </div>
  );
}

export default App;
