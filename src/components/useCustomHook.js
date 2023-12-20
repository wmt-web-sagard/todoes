import { useState } from 'react';
export default function useCustomHook(){
    const [data, setData] = useState(0);
    return (
        <div>
            <button onClick={()=>{setData((prev)=>{return prev+1})}}>Click Here</button>
            <h1>Button Clicks {data}</h1>
        </div>
    )
}