export default function Header({displayBox}){
    return(
        <div className="header">
            <h1>Personal Library</h1>
            <button className="add-btn" onClick={displayBox}>Add Book</button>
        </div>
    )
}