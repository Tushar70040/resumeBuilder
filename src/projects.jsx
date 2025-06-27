import { useState } from "react";

export default function Projects({ info, setinfo }) {
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
            <h3>Projects</h3>
            {edit ? (
                <>
                    <input
                        value={info.experience}
                        name="experience"
                        placeholder="Project name"
                        onChange={Handle}
                    />
                    <input type="date" value={info.date} placeholder="Date"  onChange={Handle}name="date"/>
                    <textarea placeholder="About it" value={info.details} name="details" onChange={Handle} />
                    <button
                        className="edit"
                        onClick={() => {
                            setedit(false);
                        }}
                    >
                        submit
                    </button>
                </>
            ) : (
                <div className="data">
                    <p>
                        <strong>project name:</strong>
                        {info.experience}
                    </p>
                    <p><strong>Date:</strong> {formatDate(info.date)}</p>
                    <p><strong>About it:</strong>{info.details}</p>
                    <button
                        className="edit"
                        onClick={() => {
                            setedit(true);
                        }}
                    >
                        edit
                    </button>
                </div>
            )}
        </div>
    );
}
