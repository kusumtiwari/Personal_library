import {useState} from 'react';
export default function Postboxdiv({postbox}){
    const [erase,seterase] = useState(false);
    function del(){
        seterase(true);
    }
     return ( 
        (erase === false) ?(
        <ul className="box2">
            {postbox.map((item,index) => (
              <li key={index}>{item}</li>
            ))}
            <button className="deletePost" onClick={del}>Delete</button>
        </ul>) : null 
     )
     
} 