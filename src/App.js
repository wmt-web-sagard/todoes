import {createContext,useState} from 'react'
import { BrowserRouter, Router, Routes,Route } from "react-router-dom";
// import ExClassComponent from './components/ExClassComponent'
// import FormDemo from './components/FormDemo';
import Generatebox from './components/GenerateBox';
// import MassageNotify from './components/MassageNotify';
import TodoList from './components/TodoList';

// import Composition from "./components/Composition";

// import LiftingState from "./components/LiftignState";

import Calculator from "./components/Calculator";
import ValidForm from "./components/ValidForm";
import Home from './components/Home';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Layout from './Layout';

export const ThemeContext = createContext();
export const ToggleContext = createContext();

function App() {
  const [theme,setTheme]=useState(false);
  
  const handleToggle = ()=>{
    setTheme((prev)=>{
      return !prev;
    })
  }
  return (
    <BrowserRouter>
    <ThemeContext.Provider value={theme}>
    <ToggleContext.Provider value={handleToggle}>
     <Routes >
            <Route path='/'   element=<Layout/> >    
            <Route path='/' index   element=<Home/> />         
            <Route path='calculator' element=<Calculator/>  />
            <Route path='form' element=<ValidForm/>  />
            <Route path='todolist' element=<TodoList/>  />
            <Route path='generatebox' element=<Generatebox/>  />
            </Route>
            <Route path='*' element=<NotFound/>  />
          
        </Routes>
      
   
   
      {/* <Composition>
        <h1>hello world this is Composition</h1>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
          <li>five</li>
          <li>six</li>
        </ul>
      </Composition> */}
      {/* <Composition 
        top=<Calculator/>
        bottom=<ValidForm/>
       /> */}
       
   
    </ToggleContext.Provider>
    </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
