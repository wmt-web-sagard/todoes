import React ,{useContext} from 'react'
import Header from './components/Header'
import { Outlet,useLocation } from 'react-router-dom'
import { ThemeContext,ToggleContext } from './App.js'

function Layout() {
    const theme = useContext(ThemeContext);

    const toggle = useContext(ToggleContext);


    const style = {
      backgroundColor:theme?"black":"white",
      color:theme?"white":"black"
    }

const location=useLocation()
console.log(location);
  return (
    <div className='container g-0' style={style}>
        <Header/>
        <div style={style}>

        
        <Outlet context={{str:"this is context by react router dom"}}  />
        </div>
    </div>
  )
}

export default Layout
