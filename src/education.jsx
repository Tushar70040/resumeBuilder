import { useState } from "react";


export default function Education({ info, setinfo }) {
    const [edit, setedit] = useState(true);

    function Handle(e) {
        setinfo({ ...info, [e.target.name]: e.target.value });
    }

    function formatDate(dateStr) {
        if (!dateStr){ return ''}
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year}`;
    }


    return (
        <div className="info">
            <h3>Education</h3>
            {
                edit ? (
                    <>
                        <input name="university" placeholder="University name" value={info.university} onChange={Handle} />
                        <input name="title" value={info.title} onChange={Handle} placeholder="Title of course" />
                        <input name="field" placeholder="Feild of study" value={info.field} onChange={Handle} />
                        <input name="relevant_coursework" placeholder="Relevant coursework" value={info.relevant_coursework} onChange={Handle} />
                        <div className="date">
                            <label>FROM</label>
                            <input name="from_date" type="date" value={info.from_date} onChange={Handle} placeholder="" />

                            <label>TO</label>
                            <input name="to_date" type="date" value={info.to_date} onChange={Handle} placeholder="" />
                        </div>
                        <button className="edit" onClick={() => { setedit(false) }}>submit</button>
                    </>
                ) : (
                    <>
                        <div className="data">
                            <p><strong>University:</strong>{info.university}</p>
                            <p><strong>Course:</strong>{info.title}</p>
                            <p><strong>Feild:</strong>{info.field}</p>
                            <p><strong>Relevant coursework:</strong>{info.relevant_coursework}</p>
                            <p><strong>Date of Gradution :</strong>{formatDate(info.from_date)} To {formatDate(info.to_date)}</p>


                            <button className="edit" onClick={() => { setedit(true) }}>Edit</button>
                        </div>
                    </>
                )

            }

        </div>
    )
}