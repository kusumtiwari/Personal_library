export default function Postboxdiv({postbox}){
    
    return(
        <ul className="box2">
            {postbox.map((item,index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
    )
} 