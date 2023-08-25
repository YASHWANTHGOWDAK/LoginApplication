
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TodoList from "./Components/TodoList";


function App() {
  return (
    <div className="App">
    <BrowserRouter> 
   
  
     <Routes>
      <Route element={<SignIn/>} path="/" />
      <Route element={<TodoList/>} path='/tasklist'/>
     <Route element={<SignUp/>} path='/sign_up'/>
     </Routes>
    
     
    
    </BrowserRouter>


    </div>
  );
}

export default App;
