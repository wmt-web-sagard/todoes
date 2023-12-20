
import './css/SingleBox.css'
export default function SingleBox(props){

    
    const style = {
       backgroundColor: props.stateColor ? 'white' : 'black'
    }

    return (
        <div className="display--box" style={style} onClick={()=>{props.toggleColor(props.id)}}>
            
        </div>
    )
}