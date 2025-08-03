import { useState } from "react";

export default function Info({ info, setinfo }) {

    const [edit, setedit] = useState(true);

    function Handle(e) {
        setinfo({ ...info, [e.target.name]: e.target.value });
    }

    return (
        <div className="info">
            <h3>General info</h3>
            {
                edit ? (<>
                    <input name="name" value={info.name} onChange={Handle} placeholder="Name"/>
                    <input name="email" placeholder="Email" type="email" value={info.email} onChange={Handle}/>
                    <input name="linkedin" placeholder="Linkedin" value={info.linkedin} onChange={Handle}/>
                    <input name="github" placeholder="Github" value={info.github} onChange={Handle}/>
                    <input name="contact" type="number" placeholder="Contact no" value={info.contact} onChange={Handle}/>
                    <button className="edit" onClick={()=>{setedit(false)}}>submit</button>
                </>
                ):(
                    <div className="data">
                    <p><strong>Name:</strong>{info.name}</p>
                     <p><strong>Email:</strong>{info.email}</p>
                      <p><strong>Linkedin:</strong>{info.linkedin}</p>
                       <p><strong>Github:</strong>{info.github}</p>
                       <p><strong>Contact no:</strong>{info.contact}</p>
                    <button className="edit" onClick={()=>{setedit(true)}}>edit</button>
                   </div>
                )
            }
            
        </div>
    )

}