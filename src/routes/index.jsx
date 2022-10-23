import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Login } from "../pages/login"
import { RegisterUser } from "../pages/registerUser"
import { Home } from "../pages/home"
import { PrivateRoute } from "./privateRoute"


export function Rotas() {

   return( 
   
    <BrowserRouter>

    <Routes>

    <Route path="/" element={<Login />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/register" element={<RegisterUser />} /> 
    
    <Route 
        path="/home" 
        element={
        <PrivateRoute>  
            <Home /> 
        </PrivateRoute>
        } 
    />

    </Routes>

    </BrowserRouter>
    
    )


}