import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../pages/login"
import { RegisterUser } from "../pages/registerUser"
import { Home } from "../pages/home"
import { PrivateRoute } from "./privateRoute"
import {CadastroCadeira} from "../pages/admin/cadastroCadeira"
import { HomeAdmin } from "../pages/admin/homeAdmin"
import { ConsultarCadeiras } from "../pages/admin/consultarCadeiras"


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
        <Route path="/cadastroCadeira" element={<CadastroCadeira/>} />
        <Route path="/homeAdmin" element={<HomeAdmin/>}/>
        <Route path="/consultarCadeira" element={<ConsultarCadeiras/>} />
    </Routes>

    </BrowserRouter>
    
    )


}