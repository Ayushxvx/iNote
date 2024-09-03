import { useNavigate } from "react-router-dom"

export default function ShowNotes({note,setNote}){

    const navigate = useNavigate();

    function delNote(index){
        let notes = [...note]
        notes.splice(index,1)
        setNote(notes)
    }

    function editNote(index){
        navigate(`/edit/${index}`)
    }

    return(
        <>
        <div className="w-10/12 bg-[#212529] text-white mx-auto rounded-xl p-3 mt-12">
            <h1 className="text-center text-2xl">
                Show Notes
            </h1>
            {note.map((value,index)=>(
                <div key={index} >
                    <h1 className="p-2 m-2 overflow-ellipsis w-8/12 inline-block">
                        {value}
                    </h1>
                    <button className="bg-red-500 text-white hover:opacity-60 rounded-xl p-2 cursor-pointer inline-block m-2" onClick={()=>{delNote(index)}}>
                        Delete
                    </button>
                    <button className="bg-green-500 text-white hover:opacity-60 rounded-xl p-2 cursor-pointer inline-block m-2" onClick={()=>{editNote(index)}}>
                        Edit
                    </button>
                </div>
            ))}
        </div>
        <br /><br /><br /><br /><br />
        </>
    )
}