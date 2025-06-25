import { useState } from "react";
import Info from "./info";
import Education from "./education";
import Summary from "./summary";
import Projects from "./projects";
export default function App() {
    const [general, setgenral] = useState({ name: "", email: "", linkedin: "", github: "", contact: "" });
    const [education, seteducation] = useState({
        university: "",
        title: "",
        field: "",
        from_date: "",
        to_date: "",
        relevant_coursework: ""
    });

    const [sum , setsum]= useState({summary:""});
    const[project,setproject] = useState({experience:"" , details:"" ,date:""});

    return (
        <div>
            <div id="wrapper">
                <Info class=" informmation" info={general} setinfo={setgenral} />
                <Education class="information" info={education} setinfo={seteducation} />
                  <Summary class="information" info = {sum} setinfo={setsum}/>
                 <Projects class="information" info={project} setinfo={setproject}/>
              

            </div>

        </div>
    )

}