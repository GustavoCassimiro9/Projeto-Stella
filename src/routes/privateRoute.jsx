import React from "react"
import { Navigate } from "react-router-dom"
import { isAuthenticated } from "../../services/auth"

export function PrivateRoute({children}){

   return isAuthenticated() ? children : <Navigate to="/login" />


}