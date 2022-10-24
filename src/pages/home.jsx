import { useEffect, useState } from "react";
import { getUser, isAuthenticated } from "../../services/auth";


export function Home() {

    const [user,setUser] = useState()

    useEffect(() => {

        async function teste () {
            
            if (isAuthenticated()) {
                const user = await getUser();
          
                if (user) {
    
                    console.log("*-*",user)
                    setUser(user)
    
                } 
    
              }
        }
        
        teste ()

    }, [])


    return (

        <>

            {   user &&
                        
                <div>

                    <h1 className="m2">Projeto Stella</h1>
                    <h1 className="m2">Bem vindo, {user.username}!</h1>
                    <h1 className="m2">Seu nome de usuário é : {user.username}!</h1>
                    <h1 className="m2">Seu email é : {user.email}!</h1>
                    <h1 className="m2">Seu id é : {user.user_id}!</h1>

                </div>

             }

        </>
  
  
    )
  }
  