import {useState} from 'react';
import InputComponent from './SubComponents/InputComponent';


export default function LiftingState(){
const [data,setData] =  useState('');
const handleChange = (e)=>{
    setData(e.target.value)

}
    return(
        <div>
            <InputComponent data={data} handleChange={handleChange} />
            <InputComponent data={data} handleChange={handleChange} />
            <h1> text of Two input :{data}</h1>
        </div>
    )
}