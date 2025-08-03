import { useState } from "react";

let id = 0;
export default function Projects() {
   const [form,setform] = useState({project:"",detils:"",date:""});
   const [data,setdata] = useState([]);


   function Handle(e){
    const{name,value} = e.target;
    setform(prev=>({
      ...prev,[name]:value
    }));
   }

   function Add(){
    if(setform ==="") return;
    setdata(prev=>[
      ...prev,{id:id++,...form}
    ])
    setform({project:"",detils:"",date:""});
   }


   return(
      <>
      <div className="info">
        <h3>Projects</h3>
      <input
        name="project"
        placeholder="Project name"
        value={form.project}
        onChange={Handle}
      />
      
      <input
        name="date"
        type="date"
        placeholder="Date"
        value={form.date}
        onChange={Handle}
      />
      <textarea
        name="detils"
        placeholder="Details"
        value={form.detils}
        onChange={Handle}
      />
      <button className="edit" onClick={Add}>Add</button>
      </div>
       <ul>
        {data.map(item => (
          <li key={item.id}>
             <div className="data">
              <h3>project{item.id}</h3>
                    <p><strong>Name:</strong>{item.project}</p>
                      <p><strong>Date:</strong>{item.date}</p>
                       <p><strong>details:</strong>{item.detils}</p>
                     
                   </div>
           
          </li>
        ))}
      </ul>




      </>
   )


 



}