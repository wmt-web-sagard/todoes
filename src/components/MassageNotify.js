import { useState } from "react"
import useCustomHook from "./useCustomHook"

export default function MassageNotify(){
    
    const [message,setMessage]=useState([1,2,3,4])

    const custombutton=useCustomHook();
    return (
        <>

            {message.length <1 && <h2>You have read all Message</h2>}
            {message.length >0 && <h2>You have {message.length} Message{message.length >1 && 's'}</h2>}

            {custombutton}
        </>
    )
}