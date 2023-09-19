

import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/Login/ForgotPassword";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import ChangePassword from "./components/Login/ChangePassword";
import UpdateProfile from "./components/Login/UpdateProfile";
import Construtor from "./components/Constructor/Construtor";
import UserPage from "./components/Login/UserPage";
import Header from "./components/Header/Header";
import EditAssessment from "./components/Assessment/EditAssessment";
import './App.css';

function App() {
  return (
    

    
    <div className="App">
     
      <AuthProvider>
      {/* <Container className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}> */}
          
          {/* <div className="w-100" style={{maxWidth: '400px'}}> */}
                <Header/>              
                <Routes>
                  
                  <Route path="/" element={<PrivateRoute Component={Dashboard}/>} />
                  {/* PROFILE ROUTES START */}
                  <Route path='/change-password' element={<PrivateRoute Component={ChangePassword}/>} />
                  <Route path='/update-profile' element={<PrivateRoute Component={UpdateProfile}/>} />
                  <Route path='/signup' element={<Signup/>}></Route>
                  <Route path='/login' element={<Login/>}></Route>
                  <Route path='/reset' element={<ForgotPassword/>}></Route>
                  <Route path='/profile' element={<UserPage/>}></Route>
                  {/* PROFILE ROUTES END */}
                  <Route path='/edit/:id' element={<EditAssessment/>}></Route>
                 {/* <Route path='/constructor' element={<Construtor/>}></Route> */}
                </Routes>
              
              
          {/* </div> */}
          
      {/* </Container> */}
      </AuthProvider>
    </div>
    
  );
}

export default App;
