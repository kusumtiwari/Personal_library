export default function Header({displayBox}){
    return(
        <>
            <h1>Personal Library</h1>
            <button className="add-btn" onClick={displayBox}>Add Book</button>
        </>
    )
}