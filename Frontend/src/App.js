// import Home from "./Components/Home";
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp";
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    {/* <Home/> */}
  
     <Routes>
      <Route element={<SignIn/>} path="/" />
     <Route element={<SignUp/>} path='/sign_up'/>
     </Routes>
    
    
    </BrowserRouter>


    </div>
  );
}

export default App;
