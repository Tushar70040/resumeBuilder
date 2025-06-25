import { useState } from "react";

export default function Projects({ info, setinfo }) {
    const [edit, setedit] = useState(true);
    const [project, setproject] = useState({ experience: "", details: "", date: "" });

    function Handle(e) {
        setproject({ ...project, [e.target.name]: e.target.value });
    }

    function format(dateStr) {
        if (!dateStr) return '';
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year}`;
    }

    function Add() {
        const updated = [...(info.projects || []), project];
        setinfo({ ...info, projects: updated });
        setproject({ experience: "", details: "", date: "" });
        setedit(false);
    }

    return (
        <div className="info">
            <h3>Add Your Projects</h3>

            {edit ? (
                <>
                    <input
                        name="experience"
                        value={project.experience}
                        onChange={Handle}
                        placeholder="Project name"
                    />
                    <textarea
                        name="details"
                        value={project.details}
                        onChange={Handle}
                        placeholder="About it"
                    />
                    <input
                        name="date"
                        type="date"
                        value={project.date}
                        onChange={Handle}
                    />
                    <button className="edit" onClick={Add}>Submit</button>
                </>
            ) : (
                <>
                    <div className="pro">
                        {(info.projects || []).map((proj, idx) => (
                            <div className="data" key={idx}>
                                <h3>Project: {idx + 1}</h3>
                                <p><strong>Name:</strong> {proj.experience}</p>
                                <p><strong>Details:</strong> {proj.details}</p>
                                <p><strong>Date:</strong> {format(proj.date)}</p>
                            </div>
                        ))}
                    </div>
                    <button className="edit" onClick={() => setedit(true)}>Add</button>
                    <button className="edit" onClick={Handle}>edit</button>
                </>
            )}
        </div>
    );
}
