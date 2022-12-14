import homeSplash from "../../assets/images/student.json"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Lottie from 'lottie-react';
import { Link, useNavigate } from "react-router-dom"
import api from "../../../services/api";
import Swal from "sweetalert2";
import { login } from "../../../services/auth"
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import logo from '../../assets/images/LogoStella.svg'



export function Login() {
 
  const [emailUser, setEmailUser] = useState('')
  const [passwordUser, setPasswordUser] = useState('')
  const [passwordInputEmpty, setPasswordInputEmpty] = useState('')
  const [emptyPasswordFeedback, setEmptyPasswordFeedback] = useState('')
  const [emailInputEmpty, setEmailInputEmpty] = useState('')
  const [emptyEmailFeedback, setEmptyEmailFeedback] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  


    let navigate = useNavigate();

    async function loginUser () {
      setLoading(true)


      if (!emailUser || emailUser == "") {
        setEmptyEmailFeedback("Digite o email!")
        setEmailInputEmpty(true)
        setLoading(false)
      } else {
        setEmailInputEmpty(false)
      }

      if (!passwordUser || passwordUser == "") {
        setEmptyPasswordFeedback("Digite a senha!")
        setPasswordInputEmpty(true)
        setLoading(false)
      } else {
        setPasswordInputEmpty(false)
      }

      if( emailUser && passwordUser ) {

        console.log(emailUser,passwordUser)
        const { data: {msg, user, token }, AxiosError } = await api.post('/auth/login', {
          email: emailUser,
          password: passwordUser
        }).catch((error) => {
          
          Swal.fire({
            grow: "row",
            timerProgressBar: true,
            iconColor: "red",
            title: error.response.data.msg,
            showConfirmButton: false,
            timer: 1600
            , toast: true,
            position: "top-end",
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          })

          setLoading(false)
          
         } )

    
        if(token){

          await login(token, user)
    
          navigate("/home")

          
        } 
        
        setLoading(false)

      } else {
        Swal.fire({
          grow: "row",
          timerProgressBar: true,
          iconColor: "red",
          title: 'Preencha todos os campos!',
          showConfirmButton: false,
          timer: 1600
          , toast: true,
          position: "top-end",
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        })
        setLoading(false)

      }

      setLoading(false)

    }

    return (
      <Container fluid>
  
        <Row className="d-flex justify-content-center flex-row" style={{height:'100vh'}}>
         
          <Col xs={6} className="d-flex justify-content-center flex-column" style={{backgroundColor:'#EEEEEE'}}>
              <Lottie 
                    style={{height: "500px"}}
                    animationData={homeSplash}
                    loop={true}
              />
          </Col>

          <Col xs={6}  className="d-flex justify-content-center flex-column p-5" style={{backgroundColor:'#2A2356'}} >
              <Form >


                  <ReactSVG src={logo} className='d-flex justify-content-center' />

                  <h1 className="mt-4 text-light d-flex justify-content-center">Bem-vindo</h1>

                  <Form.Group className="mt-4 px-5 text-light" controlId="formBasicEmail">

                      <Form.Control 
                          type="email" 
                          className="p-3"
                          style={{backgroundColor:'#EEEEEE'}}
                          placeholder="Email" 
                          isInvalid={emailInputEmpty}
                          onChange={
                            (e) => setEmailUser(e.target.value)
                          }
                      />

                      <Form.Control.Feedback type='invalid'>
                          {emptyEmailFeedback}
                      </Form.Control.Feedback>

                  </Form.Group>
      
                  <Form.Group className="mt-3 px-5 text-light"  >

                      <Form.Control 
                        style={{backgroundColor:'#EEEEEE'}}
                        type="password" 
                        className="p-3"
                        placeholder="Senha" 
                        id="password"
                        onKeyDown={ (e) => {
                            if(e.keyCode === 13){
                                loginUser()
                            }
                        } }
                        isInvalid={passwordInputEmpty}
                        onChange={
                          (e) => setPasswordUser(e.target.value)
                        }
                      />
                    
                      <Form.Control.Feedback type='invalid'>
                        {emptyPasswordFeedback}
                      </Form.Control.Feedback>

                    <div className="d-flex justify-content-end ">

                          <i onClick={() => {
                                if (showPassword === true) {
                                  setShowPassword(false)
                                } else if (showPassword === false) {
                                  setShowPassword(true)
                                }

                                let input = document.querySelector('#password');
                                if (input.getAttribute('type') == 'password') {
                                  input.setAttribute('type', 'text');
                                } else {
                                  input.setAttribute('type', 'password');
                                }
                              }}  style={{ display: "flex", justifyContent: "flex-end", cursor: "pointer", margin: 5 }}>

                                {showPassword === true ?  <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                          
                          </i>

                      </div>



                  </Form.Group>

                  <div className="px-5 mt-2  d-grid gap-2"  >
              
                    {/* <Button variant="primary" size="lg" onClick={ () =>  navigate("/register") }  >
                      CADASTRO
                    </Button> */}

                    <Button className="p-3" style={{color:'white', backgroundColor:'#6FCAF6', }} size="lg" onClick={ () => loginUser()  }>
                      { !loading ? "Acessar" : "Carregando..."}
                    </Button>

                  </div>

                  <div className="px-5 mt-3 text-light  d-grid gap-2"  >
       
                    <div className="d-flex justify-content-center">
                      <p> Não tem uma conta? <Link to='/register' className='text-decoration-none '> <b className='text-light'>Cadastre-se</b> </Link>  </p>
                    </div>


                  </div>
    
              </Form>
          </Col>    
          </Row>
  
  
          </Container>
  
    )
  }
  