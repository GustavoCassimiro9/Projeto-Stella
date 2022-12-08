import { Card, CardGroup, Col, Container, Row } from "react-bootstrap"
import Sidebar from "../../../components/SideBar";
import Lottie from 'lottie-react';
import register_subject from '../../../assets/images/register_subject.json'
import edit_subject from '../../../assets/images/edit_subject.json'
import audiovisual from '../../../assets/images/audiovisual.json'
import games from '../../../assets/images/games.json'
import './index.css'
import { Link } from "react-router-dom";

export function Management() {

const body =  <> 

  <Row >

    <CardGroup className="p-2">
            


        <Col xs={12} xxl={3} md={6} sm={6} lg={6} xl={6}	>

                <Card className='m-4 border bg-light' style={{height:'90%'}}> 
                <Col xs={8} className="d-flex justify-content-center flex-column p-2" style={{width:'100%'}}>
                    <Lottie 
                            style={{height: "200px"}}
                            animationData={register_subject}
                            loop={true}
                    />
                </Col>

                    <Card.Body className="d-flex align-items-center flex-column">
                    <Card.Title > Cadastrar Cadeiras </Card.Title>
                    <Card.Text style={{textAlign:'justify', marginTop:2}}>
                        Cadastre as cadeiras do curso! 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Link to='/cadastrar_cadeira' className='text-decoration-none d-flex align-items-center flex-column' style={{width:'100%',color:'#2A2356'}}> Cadastrar agora </Link>
                    </Card.Footer>
                </Card>

        </Col>

        <Col xs={12} xxl={3} md={6} sm={6} lg={6} xl={6}>

                <Card className=' m-4 border bg-light' style={{height:'90%'}}>
                <Col xs={6} className="d-flex justify-content-center flex-column p-2" style={{ width:'100%' }}>
                    <Lottie 
                            style={{height: "200px"}}
                            animationData={edit_subject}
                            loop={true}
                    />
                </Col>

                    <Card.Body className="d-flex align-items-center flex-column">
                    <Card.Title > Editar Cadeiras </Card.Title>
                    <Card.Text style={{textAlign:'justify', marginTop:2}}>
                        Edite as cadeiras do curso!
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Link to='/edit_subject' className='text-decoration-none d-flex align-items-center flex-column' style={{width:'100%',color:'#2A2356'}}> Editar agora </Link>
                    </Card.Footer>
                </Card>

        </Col>

    </CardGroup>               

  </Row>





</>

            

    return (

        <>
    
        <Sidebar 
            sidebarTitle='GERENCIAMENTO' 
            content={body}
        />
        


                



        </>
  
  
    )
  }
  