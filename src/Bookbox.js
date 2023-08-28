export default function Bookbox({removeBox}){
    return(
        <div className="box">
        <input placeholder="Name of the book" type="name" required></input>
        <input placeholder="Name of the author" type="name" required></input>
        <input placeholder="Number of Pages" type="number" required></input>
        <div>
           <button className="cancelBtn" onClick={removeBox}>Cancel</button>        
           <button className="postBtn">Post</button>        
        </div>
       </div>
    )

}