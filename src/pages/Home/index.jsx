import { getUser, isAuthenticated } from "../../../services/auth";
import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar";
import Lottie from 'lottie-react';
import studentAnimation from '../../assets/images/welcome_student.json';
import { Col, Container, Row } from "react-bootstrap";


export function Home() {

    
    const [user,setUser] = useState()
    
    const body = 
    <Container className="d-flex justify-content-center flex-column" style={{height:'90vh'}} >
  
    <Row >
       

    <Col className='d-flex flex-column justify-content-center align-items-left jusitify-items-center' >
        <h1 style={{textAlign:'left' }}>Bem-vindo(a) ao Projeto Stella 🌟 </h1>
        <p style={{textAlign:'left'}}> <b> Aqui você pode ficar por dentro das trilhas, simular um plano de formação no SMD e construir seu futuro como SMDiano!  </b> </p>
    </Col>
     

     <Col className='d-flex flex-row' >
        

    
            <Lottie 
                style={{height: "500px"}}
                animationData={studentAnimation}
                loop={true}
            />

     </Col>   


    </Row>

</Container>

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

            {  user && <Sidebar sidebarTitle={`Olá, ${user.username}!` } content={body} />  }



        </>
  
  
    )
  }
  