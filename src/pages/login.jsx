import homeSplash from "../assets/images/student.json"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Lottie from 'lottie-react';
import { useNavigate } from "react-router-dom"
import api from "../../services/api";
import Swal from "sweetalert2";
import { login } from "../../services/auth"
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";
import { AxiosError } from "axios";



export function Login() {
 
  const [emailUser, setEmailUser] = useState('')
  const [passwordUser, setPasswordUser] = useState('')
  const [passwordInputEmpty, setPasswordInputEmpty] = useState('')
  const [emptyPasswordFeedback, setEmptyPasswordFeedback] = useState('')
  const [emailInputEmpty, setEmailInputEmpty] = useState('')
  const [emptyEmailFeedback, setEmptyEmailFeedback] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  


    let navigate = useNavigate();

    async function loginUser () {
   


      if (!emailUser || emailUser == "") {
        setEmptyEmailFeedback("Digite o email!")
        setEmailInputEmpty(true)
      } else {
        setEmailInputEmpty(false)
      }

      if (!passwordUser || passwordUser == "") {
        setEmptyPasswordFeedback("Digite a senha!")
        setPasswordInputEmpty(true)
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

    
        if(token){

          await login(token, user)
    
          navigate("/home")
      
        } 


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
                <Form.Control 
                    type="email" 
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
  
              <Form.Group className="mb-4" >

                  <Form.Label>Senha</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Digite sua senha" 
                    id="password"
                    isInvalid={passwordInputEmpty}
                    onChange={
                      (e) => setPasswordUser(e.target.value)
                    }
                   />
                
                   <Form.Control.Feedback type='invalid'>
                    {emptyPasswordFeedback}
                   </Form.Control.Feedback>

                 <div className="d-flex justify-content-end">

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

              <div style={{width:"100%", display:"flex", justifyContent: "space-between"}} >
           
                <Button variant="outline-primary" onClick={ () =>  navigate("/register") }  >
                  CADASTRO
                </Button>

                <Button variant="outline-primary" onClick={ () => loginUser()  }>
                  ENTRAR
                </Button>

              </div>
 
          </Form>
          
          </div>
  
  
        </div>
  
    )
  }
  