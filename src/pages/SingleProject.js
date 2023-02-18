import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header1 from "../Components/Header1";

function SingleProject(){
    let [project,setProject]=useState({});
    let params=useParams();
    const getSingleProject=()=>{
        // fetch or axios stat for getting project info from params then setting it with setProject
    }
    useEffect(()=>{
        getSingleProject();
    });
    return(<>
    <Header1/>
    <h1>
        Single project Page 
    </h1>
    {/* table for project name , docs, and diagrams (buttons and links for diagram if exists) */}
    
    </>);
}
export default SingleProject;