import registerAnimation from "../../assets/images/register-student.json"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from "../../../services/api";
import Lottie from 'lottie-react';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"
import logo from '../../assets/images/LogoStella.svg'
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";

export function RegisterUser() {

    let navigate = useNavigate();
    
    const [emailUser, setEmailUser] = useState('')
    const [emailInputEmpty, setEmailInputEmpty] = useState('')
    const [emptyEmailFeedback, setEmptyEmailFeedback] = useState('')


    const [user, setUser] = useState('')
    const [userInputEmpty, setUserInputEmpty] = useState('')
    const [emptyUserFeedback, setEmptyUserFeedback] = useState('')

    const [passwordUser, setPasswordUser] = useState('')
    const [confirmPasswordUser, setConfirmPasswordUser] = useState('')
    const [passwordInputEmpty, setPasswordInputEmpty] = useState('')
    const [emptyPasswordFeedback, setEmptyPasswordFeedback] = useState('')
    const [confirmPasswordInputEmpty, setConfirmPasswordInputEmpty] = useState('')
    const [emptyConfirmPasswordFeedback, setEmptyConfirmPasswordFeedback] = useState('')


    const [showPassword, setShowPassword] = useState(false)


    async function registerUser () {
   


        if (!emailUser || emailUser == "") {
          setEmptyEmailFeedback("Digite o email!")
          setEmailInputEmpty(true)
        } else {
          setEmailInputEmpty(false)
        }

        if (!user || user == "") {
          setEmptyUserFeedback("Digite o nome de usuário!")
          setUserInputEmpty(true)
        } else {
          setUserInputEmpty(false)
        }

        if (!passwordUser || passwordUser == "") {
          setEmptyPasswordFeedback("Digite a senha!")
          setPasswordInputEmpty(true)
        } else {
          setPasswordInputEmpty(false)
        }

        if (!confirmPasswordUser || confirmPasswordUser == "") {
          setEmptyConfirmPasswordFeedback("Digite a senha!")
          setConfirmPasswordInputEmpty(true)
        } else {
          setConfirmPasswordInputEmpty(false)
        }

      if( emailUser && user &&  passwordUser && confirmPasswordUser ) {

        await api.post('/auth/register', {
          email: emailUser,
          name: user,
          password: passwordUser,
          confirmPassword: confirmPasswordUser
        }).then((res) => 

            Swal.fire({
              grow: "row",
              timerProgressBar: true,
              icon: 'success',
              iconColor: "green",
              title: res.data.msg,
              showConfirmButton: false,
              timer: 1600
              , toast: true,
              position: "top-end",
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            })
    
        ).catch((error) => {
          
            Swal.fire({
              grow: "row",
              timerProgressBar: true,
              icon: 'error',
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

         } )

        } else {
            Swal.fire({
              grow: "row",
              timerProgressBar: true,
              icon: 'error',
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
        }


    }


    return (

  
        <Container fluid >
  
         <Row className="d-flex justify-content-center flex-row" style={{height:'100vh'}}>

         <Col xs={6} className="d-flex justify-content-center flex-column" style={{backgroundColor:'#EEEEEE'}}>
              <Lottie 
                    style={{height: "500px"}}
                    animationData={registerAnimation}
                    loop={true}
              />
          </Col>
          <Col xs={6}  className="d-flex justify-content-center flex-column p-5" style={{backgroundColor:'#2A2356'}} >
          <Form>

          <ReactSVG src={logo} className='d-flex justify-content-center' />

            <h1 className="mt-4 text-light d-flex justify-content-center"> Crie sua conta  </h1>

              <Form.Group className="mt-4 px-5 text-light" controlId="formBasicEmail">
                
                <Form.Control 
                    type="email" 
                    className="p-3"
                    style={{backgroundColor:'#EEEEEE'}}
                    placeholder="Digite seu email"
                    isInvalid={emailInputEmpty}
                    onChange={
                      (e) => setEmailUser(e.target.value)
                    }
                />

                <Form.Control.Feedback type='invalid'>
                    {emptyEmailFeedback}
                </Form.Control.Feedback>


              </Form.Group>

              <Form.Group className="mt-4 px-5 text-light" controlId="formBasicUser">
   
                <Form.Control 
                    type="text" 
                    className="p-3"
                    style={{backgroundColor:'#EEEEEE'}}
                    placeholder="Digite seu usuário"
                    isInvalid={userInputEmpty}
                    onChange={
                      (e) => setUser(e.target.value)
                    }
                    />

                <Form.Control.Feedback type='invalid'>
                    {emptyUserFeedback}
                </Form.Control.Feedback>

              </Form.Group> 
  
            <div>

                <Form.Group className="mt-4 px-5 text-light" >
           
                  <Form.Control 
                      type="password"
                      className="p-3"
                      style={{backgroundColor:'#EEEEEE'}} 
                      id="password" 
                      placeholder="Digite sua senha"
                      isInvalid={passwordInputEmpty}
                      onChange={
                        (e) => setPasswordUser(e.target.value)
                      }
                  />
                           
                  <Form.Control.Feedback type='invalid'>
                    {emptyPasswordFeedback}
                   </Form.Control.Feedback>

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

                                  let confirmPassword = document.querySelector('#confirmPassword');
                                  if (confirmPassword.getAttribute('type') == 'password') {
                                    confirmPassword.setAttribute('type', 'text');
                                  } else {
                                    confirmPassword.setAttribute('type', 'password');
                                  }
                                  
                                }}  style={{ display: "flex", justifyContent: "flex-end", cursor: "pointer", margin: 5 }}>

                                  {showPassword === true ?  <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            
                    </i>

                </Form.Group>

            </div>
               
              <div>

                    <Form.Group className="mt-4 px-5 text-light" >

                      <Form.Control 
                          type="password" 
                          className="p-3"
                          style={{backgroundColor:'#EEEEEE'}}
                          id="confirmPassword" 
                          placeholder="Digite sua senha novamente"
                          isInvalid={confirmPasswordInputEmpty}
                          onChange={
                            (e) => setConfirmPasswordUser(e.target.value)
                          }
                      />
                      
                      <Form.Control.Feedback type='invalid'>
                        {emptyConfirmPasswordFeedback}
                      </Form.Control.Feedback>

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


                                      let confirmPassword = document.querySelector('#confirmPassword');
                                      if (confirmPassword.getAttribute('type') == 'password') {
                                        confirmPassword.setAttribute('type', 'text');
                                      } else {
                                        confirmPassword.setAttribute('type', 'password');
                                      }

                                    }}  style={{ display: "flex", justifyContent: "flex-end", cursor: "pointer", margin: 5 }}>

                                      {showPassword === true ?  <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                
                        </i>
                    </Form.Group>
                
              </div>



              <div  className="px-5 mt-3 text-light  d-grid gap-2"  >


                <Button  className="p-3" style={{color:'white', backgroundColor:'#6FCAF6', }} onClick={ () => registerUser() } >
                  Concluir Cadastro
                </Button>

                <Button  className="p-3" style={{color:'white', backgroundColor:'#6FCAF6', }}  onClick={ () =>  navigate("/login")} >
                  Voltar
                </Button>

              </div>

          </Form>
          </Col>
         

         </Row>
  
  
          </Container>
  
    )
  }
  