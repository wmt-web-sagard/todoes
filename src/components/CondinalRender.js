import ValidForm from "./components/ValidForm";
import Generatebox from './components/GenerateBox';
import ExClassComponent from './components/ExClassComponent'


export default function CondinalRender(){
    let state='12 ';
  let data;
  if(state==="12"){
    data=<ExClassComponent />
  }else if(state===12){
    data=<ValidForm/>;

  }else{
    data=<Generatebox/>;
  }
    return(
        <div>
             {data}
        </div>
    )
}