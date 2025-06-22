import { useState } from "react";

export default function Projects({ info, setinfo }) {

    const [edit, setedit] = useState(true);

    function Handle(e) {
        return setinfo({ ...info, [e.target.name]: e.target.value });
    }
       function format(dateStr) {
        if (!dateStr){ return ''}
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year}`;
    }


    return (
        <div className="info">
            <h3>projects</h3>
            {
                edit ? (
                    <>
                        <input name="experience" value={info.experience} placeholder="project name" onChange={Handle} />
                        <textarea name="details" value={info.details} placeholder="about it" onChange={Handle} />
                        <input name="date" value={info.date} type="date" onChange={Handle}></input>
                        <button className="edit" onClick={() => { setedit(false) }}>submit</button>
                    </>

                ) : (
                    <>
                        <div className="data">
                            <p> <strong>Name:</strong> {info.experience}</p>
                            <p><strong>details:</strong>{info.details}</p>
                            <p>{format(info.date)}</p>
                            <button className="edit" onClick={() => { setedit(true) }}>edit</button>
                        </div>
                    </>
                )
            }


        </div>
    )


}