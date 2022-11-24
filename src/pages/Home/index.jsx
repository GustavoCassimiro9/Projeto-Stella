import { getUser, isAuthenticated } from "../../../services/auth";
import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar";


export function Home() {

    const [user,setUser] = useState()

    useEffect(() => {

        async function getUsarData () {
            
            if (isAuthenticated()) {
                const user = await getUser();
          
                if (user) {
    
                    console.log("*-*",user)
                    setUser(user)
    
                } 
    
              }
        }
        
        getUsarData ()

    }, [])


    return (

        <>

            {  user && <Sidebar />  }



        </>
  
  
    )
  }
  