export default function InputComponent({data,handleChange}){
    return(
        <div>
            <input type="text" value={data} onChange={handleChange} className="w-100" />
        </div>
    )
}