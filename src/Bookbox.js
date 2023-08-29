import {useState, useRef} from 'react';
export default function Bookbox({functions}){
    const {removebox, divbox} = functions;
 let bookInputRef = useRef(null);
 let bookauthorRef = useRef(null);
 let bookpagesRef = useRef(null);
     
    let arr = [];
    function submit(){
        arr.push(bookInputRef.current.value);
        arr.push(bookauthorRef.current.value);
        arr.push(bookpagesRef.current.value);
        let allNotEmpty = arr.every(value => value !== '');
        
        if(allNotEmpty){
            divbox(arr);
            removebox();
        }
        
    }
    return(
        <div className="box">
        <input placeholder="Name of the book" type="name" name="input1" ref={bookInputRef} required ></input>
        <input placeholder="Name of the author" type="name" name="input2" ref={bookauthorRef} required ></input>
        <input placeholder="Number of Pages" type="number" name="input3" ref={bookpagesRef} required></input>
        <div>
           <button className="cancelBtn" onClick={removebox}>Cancel</button>        
           <button className="postBtn" onClick = {submit}>Post</button>        
        </div>
       </div>
    )

}