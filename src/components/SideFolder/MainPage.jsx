import React from 'react'
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdMapsHomeWork } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";
export const MainPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>{navigate('/user-profile')}} style={{borderRadius: "50%",cursor: "pointer" }}><CgProfile style={{fontSize: "5rem"}}/></button>
        <button onClick={()=>{navigate('/workspace')}} style={{borderRadius: "50%" ,cursor: "pointer" }}><MdMapsHomeWork style={{fontSize: "5rem"}}/></button>
        <button onClick={()=>{navigate('/side-folder')}} style={{borderRadius: "50%" ,cursor: "pointer" }}><FaFolderOpen style={{fontSize: "5rem"}} /></button>

    </div>
  )
}
