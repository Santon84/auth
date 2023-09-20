

import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/Login/ForgotPassword";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import ChangePassword from "./components/Login/ChangePassword";
import UpdateProfile from "./components/Login/UpdateProfile";
import UserPage from "./components/Login/UserPage";
import Header from "./components/Header/Header";
import AssessmentPage from "./pages/AssessmentPage";
import './App.css';

function App() {
  return (
    

    
    <div className="App">
     
      <AuthProvider>
     
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
                  <Route path='/edit/:id' element={<AssessmentPage/>}></Route>
                 {/* <Route path='/constructor' element={<Construtor/>}></Route> */}
                </Routes>
              
              
        
      </AuthProvider>
    </div>
    
  );
}

export default App;
