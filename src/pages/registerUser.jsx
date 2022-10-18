import registerAnimation from "../assets/images/register-student.json"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Lottie from 'lottie-react';
import { useNavigate } from "react-router-dom"

export function RegisterUser() {

    let navigate = useNavigate();

    return (

  
        <div>
  
          <div style={{display:"flex", justifyContent:"space-evenly", alignItems: "center", height:"100 %"}} >
  
          <Lottie 
                style={{height: "500px"}}
                animationData={registerAnimation}
                loop={true}
          />
      
          <Form>
              <h1 className="mb-4 p-2">Cadastrar Usuário</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Usuário</Form.Label>
                <Form.Control type="text" placeholder="Digite seu usuário" />
              </Form.Group> 
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label> Confirmar senha </Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha novamente" />
              </Form.Group>

              <div  className="d-grid gap-2" style={{width:"100%", }} >


                <Button  variant="outline-primary" type="submit" >
                  Finalizar
                </Button>

                <Button  variant="outline-primary" type="submit" onClick={ () =>  navigate("/login")} >
                  Voltar
                </Button>

              </div>

          </Form>
          
          </div>
  
  
        </div>
  
    )
  }
  