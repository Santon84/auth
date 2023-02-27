import { Container } from "react-bootstrap";

import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/Login/ForgotPassword";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import ChangePassword from "./components/Login/ChangePassword";


function App() {
  return (
    

    
    <div className="App">
     
      <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
          
          <div className="w-100" style={{maxWidth: '400px'}}>
              
                <Routes>
                  <Route path="/" element={<PrivateRoute Component={Dashboard}/>} />
                  <Route path='/change-password' element={<PrivateRoute Component={ChangePassword}/>} />
                  <Route path='/signup' element={<Signup/>}></Route>
                  <Route path='/login' element={<Login/>}></Route>
                  <Route path='/reset' element={<ForgotPassword/>}></Route>
          
                </Routes>
              
              
          </div>
      </Container>
      </AuthProvider>
    </div>
    
  );
}

export default App;
