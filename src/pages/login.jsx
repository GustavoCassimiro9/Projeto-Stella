import homeSplash from "../assets/images/student.json"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Lottie from 'lottie-react';
import { useNavigate } from "react-router-dom"
import api from "../../services/api";
import { login } from "../../services/auth"

export function Login() {

    let navigate = useNavigate();

    async function loginUser () {
      preventDefault()
      console.log("aaaa")
     const { data: user, token } = api.post('/auth/login', {
      email:'jacksonpontes@gmail.com',
      password:'jackson852'
     })

    //  if(token){
    //   console.log("bbbb")
    //   await login(token, user)
    //  }

    }

    return (

      

        <div>
  
          <div style={{display:"flex", justifyContent:"space-evenly", alignItems: "center", height:"100 %"}} >
  
          <Lottie 
                style={{height: "500px"}}
                animationData={homeSplash}
                loop={true}
          />
      
          <Form>
              <h1 className="mb-5">Projeto Stella</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
  
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <div style={{width:"100%", display:"flex", justifyContent: "space-between"}} >
           
                <Button variant="outline-primary" onClick={ () =>  navigate("/register") }  >
                  CADASTRAR
                </Button>

                <Button variant="outline-primary" type="submit" onClick={ () => loginUser()  }>
                  ENTRAR
                </Button>
              </div>
 
          </Form>
          
          </div>
  
  
        </div>
  
    )
  }
  