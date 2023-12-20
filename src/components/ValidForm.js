import {useState,useEffect, useRef,useContext} from 'react';
import { ThemeContext,ToggleContext } from '../App.js'

export default function ValidForm() {
    const theme = useContext(ThemeContext);

    const toggle = useContext(ToggleContext);


    const style = {
      backgroundColor:theme?"black":"white",
      color:theme?"white":"black"
    }

    const [formData,setformData]=useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",birthDate:"",state:"",term:false})
    const [error,setError]=useState({});
    const [submit,setSubmit]=useState(false);
    const filename=useRef();

    const handleChange = (event)=>{
        const {type,name,checked,value} = event.target;

        setformData((prevData)=>{
            return {...prevData,[name]: type === "checkbox" ? checked : value }
        })
    }
   
    const handleSubmit = (event)=>{
        event.preventDefault()
        // console.log(filename.current.files[0].name+' '+filename.current.files[0].size)
        setError(handleError(formData));
        setSubmit(true);
       

    } 

    useEffect(() => {
        if (Object.keys(error).length === 0 && submit) {
          console.log(formData);
        }
      }, [error]);

    const handleError = (value)=>{
        const errors={}
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i 

        if(value.firstName.length < 2){
            errors.firstName="* Enter First Name is too short."
        }
        if(value.lastName.length < 2){
            errors.lastName="* Enter Last Name is too short."
        }


        if(!emailPattern.test(value.email)){
            errors.email="* Enter email is not match pattern."
           
        }
        if(value.password.length < 3){
            errors.password="* Enter to Short."
            
        }

        if(value.password !== value.confirmPassword){
            errors.confirmPassword="* Enter Password is Not Matched."
            
        }
        if(value.birthDate.length < 1){
            errors.birthDate="* Select Date";  
        }else{

            const currDate = new Date()
            const selectDate = new Date(value.birthDate);
            const dateDiff = currDate.getFullYear() - selectDate.getFullYear();
            if(dateDiff < 10){
                errors.birthDate="* You are age is under 10. ";
            }
        }
        if(value.state.length < 1){
            errors.state="* Please Select State"
            
        }
        if(!value.term){
          errors.term = "*   Please Read and check terms and condition."
        }
        
        return errors
    }


  return (
    <div className={`container `} >
    
      <form className="row g-3" onSubmit={handleSubmit}>

      <div className="col-md-12">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" name='firstName' onChange={handleChange} value={formData.firstName} id="firstName" />
        </div>
        <div className="col-md-12 text-danger">
        { error.firstName}
        </div>
        <div className="col-md-12">
          <label htmlFor="lastName" className="form-label">
          Last Name
          </label>
          <input type="text" className="form-control" name='lastName' onChange={handleChange} value={formData.lastName} id="lastName" />
        </div>
        <div className="col-md-12 text-danger">
        { error.lastName}
        </div>






        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name='email' onChange={handleChange} value={formData.email} id="email" autoComplete='email' />
        </div>
        <div className="col-md-12 text-danger">
        { error.email}
        </div>
        
        <div className="col-md-12">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" name='password' onChange={handleChange} value={formData.password} id="password" />
        </div>
        <div className="col-md-12 text-danger">
        {error.password}
        </div>
        <div className="col-md-12">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" name='confirmPassword' onChange={handleChange} value={formData.confirmPassword} id="confirmPassword" />
        </div>
        <div className="col-md-12 text-danger">
        {error.confirmPassword}
        </div>
        
        <div className="col-md-12">
          <label htmlFor="birthDate" className="form-label">
          Birth of Date
          </label>
          <input type="date" className="form-control" name='birthDate' onChange={handleChange} value={formData.birthDate} id="birthDate" />
        </div>
        <div className="col-md-12 text-danger">
        { error.birthDate}
        </div>

        <div className="col-md-12">
        <label htmlFor="State" className="form-label">
              State
            </label>
            <select id="State" className="form-select" onChange={handleChange} name="state" value={formData.state} >
              <option value="">Choose...</option>
              <option value="Gujarat" >Gujarat</option>
              <option value="Maharashtra" >Maharashtra</option>
              <option value="Rajasthan" >Rajasthan</option>
              <option value="Delhi" >Delhi</option>
            </select>  
        </div>
        <div className="col-md-12 text-danger">
        { error.state}
        </div>

        <div className="col-md-12">
        <label htmlFor="files" className="form-label">
              Select File
            </label>
            <input 
              type='file'
              className='form-control'
              ref={filename}
              id='files'
            />
              
        </div>

        <div className="col-md-12 d-flex justify-content-center">
        <input
            className="form-check-input me-1"
            type="checkbox"
            name="term"
            onChange={handleChange}
            id="term"
            value={formData.term}
          />
          <label className="form-check-label" htmlFor="term">
            Terms and Condition
          </label>
        </div>
        <div className="col-md-12 text-danger text-center">
        { error.term}
        </div>







        <div className='row  mb-5'>
        <div className='col-12 text-center'>
        <button className=' btn btn-primary'>Submit</button>

        </div>
        </div>
      </form>
      
    </div>
  );
}
