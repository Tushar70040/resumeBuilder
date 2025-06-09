import { useState } from "react";
import Info from "./info";
import Education from "./education";

export default function App(){
    const[general,setgenral] = useState({name:"",email:"",linkedin:"",github:"",contact:""});
    const[education,seteducation] = useState ({
        university:"", 
        title:"",
        field:"",
        from_date:"",
         to_date:"",
         relevant_coursework:""
        });

   return (
    <div>
        <Info info ={general} setinfo={setgenral} />
        <Education info={education} setinfo={seteducation}/>


    </div>
   )

}