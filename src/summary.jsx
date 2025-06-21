import {useState} from "react";
export default function Summary({info,setinfo}){
    const[edit,setedit] = useState(true);


    function Handle(e){
        setinfo({...info,[e.target.name]:e.target.value});

    }

    return (
    <div className="info">
        <h3>Add the bio</h3>
        {
            edit ? (
                <>
                <textarea name="summary" value={info.summary} onChange={Handle} placeholder="enter your bio"/>
                <button className="edit" onClick= {()=>{setedit(false)}}> submit</button>
            
                
                
                </>
            ):(
                <div className="data">
                    <p><strong>Bio:</strong> {info.summary}</p>
                    <button onClick={()=>{setedit(true)}}>Edit</button>
                    </div>
            )




        }


    </div>
)

}
