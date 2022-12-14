import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { RegisterUser } from "../pages/UserRegister"
import { Home } from "../pages/Home"
import { PrivateRoute } from "./privateRoute"
import { RegisterSubject } from "../pages/admin/RegisterSubject"
import { Management } from "../pages/admin/Management"
import { Trails } from "../pages/Trails"
import { Subjects } from "../pages/Subjects"
import { Simulator } from "../pages/Simulator"
import { Information } from "../pages/Information"
import { SistemasMultimidia } from "../pages/Trails/SistemasMultimidia"
import { Jogos } from "../pages/Trails/Jogos"
import { AudioVisual } from "../pages/Trails/AudioVisual"
import { DesignInterativo } from "../pages/Trails/DesignInterativo"


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

    <Route 
        path="/management" 
        element={
        <PrivateRoute>  
            <Management /> 
        </PrivateRoute>
        } 
    />


    <Route 
        path="/cadastrar_cadeira" 
        element={ 
            <PrivateRoute>  
            <RegisterSubject />
        </PrivateRoute>
        } 
    />

    <Route 
        path="/sistemas_multimidia" 
        element={ 
            <PrivateRoute>  
            <SistemasMultimidia />
        </PrivateRoute>
        } 
    />

    <Route 
        path="/jogos" 
        element={ 
            <PrivateRoute>  
            <Jogos />
        </PrivateRoute>
        } 
    />

    <Route 
        path="/design_interativo" 
        element={ 
            <PrivateRoute>  
            <DesignInterativo />
        </PrivateRoute>
        } 
    />

    <Route 
        path="/audiovisual" 
        element={ 
            <PrivateRoute>  
            <AudioVisual />
        </PrivateRoute>
        } 
    />

    </Routes>

    </BrowserRouter>
    
    )


}