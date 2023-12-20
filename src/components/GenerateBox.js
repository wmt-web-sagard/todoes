import {useState} from 'react';
import box from './BoxesComponent/Boxes'
import SingleBox from './BoxesComponent/SingleBox';
export default function Generatebox(){
    const [data, setdata] = useState(box)
 // toggle 

    const toggleColor = (id)=>{
        // const newData= data.map((item)=>{
        //     if(item.id===id){
        //         item.stateColor=!item.stateColor;
        //     }
        //     return item
        // })
        // setdata((prev)=>{ return newData})
        setdata((prevData)=>{
            return  data.map((item)=>{
                return item.id===id?{...item,stateColor:!item.stateColor}:item;
            })
        })
           
    }   

    const formatedBoxes=data.map((item)=>{
        
        return <SingleBox key={item.id} id={item.id} stateColor={item.stateColor}   toggleColor={toggleColor} />
    })

    return (
        <div className='vh-100 container w-75'>
            {formatedBoxes}
        </div>
    )
}