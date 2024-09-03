import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
export default function EditNote({note,setNote}){
    const {index} = useParams();
    const navigate = useNavigate();
    const [curr,setCurr] = useState('');

    function setCurrentNote(event){
        setCurr(event.target.value)
    }

    function editNote(event){
        event.preventDefault();
        curr.trim()
        if(curr!="")
        note[index] = curr
        setCurr('')
        navigate('/')
        
    }

    return(
        <>
        <form className="bg-gradient-to-r from-blue-900 to-blue-400 border-2 border-solid border-white rounded-xl p-2 w-10/12 md:w-8/12 mx-auto mt-12 text-white text-center">
            <label htmlFor="note">
                Enter The Note :- 
            </label><br />
            <input value={curr} placeholder={note[index]} type="text" onChange={(e)=>{
                setCurrentNote(e)
            }} className="p-2 m-2 rounded-xl text-gray-800 text-right w-10/12 overflow-clip"/>
            <button className="p-2 m-2 text-white bg-green-500 cursor-pointer hover:opacity-60 rounded-xl" onClick={(e)=>{editNote(e)}}>
                Edit Note
            </button>
        </form>
        <br /><br /><br /><br /><br />
        </>
    )
}