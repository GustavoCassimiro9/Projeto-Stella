import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Login } from "../pages/Login"
import { RegisterUser } from "../pages/UserRegister"
import { Home } from "../pages/Home"
import { PrivateRoute } from "./privateRoute"
import { Trails } from "../pages/Trails"
import { Subjects } from "../pages/Subjects"
import { Simulator } from "../pages/Simulator"
import { Information } from "../pages/Information"


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

    <Route 
        path="/trilhas" 
        element={
        <PrivateRoute>  
            <Trails /> 
        </PrivateRoute>
        } 
    />

    <Route 
        path="/simulator" 
        element={
        <PrivateRoute>  
            <Simulator /> 
        </PrivateRoute>
        } 
    />

    <Route 
        path="/subjects" 
        element={
        <PrivateRoute>  
            <Subjects /> 
        </PrivateRoute>
        } 
    />

    <Route 
        path="/info" 
        element={
        <PrivateRoute>  
            <Information /> 
        </PrivateRoute>
        } 
    />




    </Routes>

    </BrowserRouter>
    
    )


}