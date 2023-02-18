import { useState, useEffect} from "react";
import Header1 from "../Components/Header1";
import { Link } from "react-router-dom";
function Myprofile(){
    let [projects,setProjects]=useState([]);
    const getProjects=()=>{
        // fetch statment for getting all projects for a specific user 
    };
    useEffect(
        ()=>{
            getProjects();
        }
    );
    return(<>
    <Header1/>
    <h1>My profile after login</h1>
    {/* momken a7ot sidebar fe gamb a7ot fe my projects aw ashof y3ni a7ot fehom eh yemen w shemal */}
    {/* Cards of projects  */}
    <div className="row">
          {projects.map((project) => {
            return (
              <div className="col-3" key={project.id}>
                <div className="card">
                    {/* Displaying cards for  project name , description, and button open project */}
                 <h2 className="card-title">{project.name}</h2>
                 <div className="card-body">
                    <p className="card-text">{project.description}</p>
                    <Link className="btn btn-primary" to={`/myprofile/${project.id}`}>
                         Open
                    </Link>
                 </div>
                 </div>
              </div>
            );
          })}
        </div>

    </>);
}
export default Myprofile;