import { Card, Col, Container, Row } from "react-bootstrap"
import Sidebar from "../../components/SideBar"


export function Information() {

const body = <Container fluid>
            <Row>
              <Col className='flex  m-4'>
                  <h2>O que são as trilhas?</h2>    
                  <p  style={{textAlign:'justify'}} > 
                    As trilhas ou itinerários formativos são um conjunto de disciplinas optativas que compõem a 
                    organização da sua formação em uma área específica.
                  </p>            
              </Col>



            </Row>

            <Row>
              <Col className='m-4 '>
                  <h2>Como funcionam as trilhas?</h2>    
                  <p style={{textAlign:'justify'}} >  Até o terceiro semestre, o programa de estudos abrange um único conjunto de disciplinas obrigatórias,
                       que garantem uma base de conhecimentos generalista para todos os estudantes. 
                       Graças a essa estruturação, o aluno se torna apto a percorrer por essas duas áreas, e caso queira,
                       pode escolher um segmento para se especializar.
                  </p>            
              </Col>

            </Row>

            <Row className='m-1'>


             <Col xs={12} xxl={3} md={6} sm={6} lg={6} xl={6}>
                    <Card className='m-2 border bg-secondary text-white' style={{ width: '100%', height:'90%' }}  >
                        <Card.Header> Dúvidas </Card.Header>
                        <Card.Body>
                            <Card.Title> Posso seguir mais de uma trilha? </Card.Title>
                            <Card.Text>
                                Você pode fazer um misto das disciplinas!  
                            </Card.Text>
                        </Card.Body>
                    </Card>
             </Col>

             <Col xs={12} xxl={3} md={6} sm={6} lg={6} xl={6}>
                    <Card className='m-2 border bg-warning text-white' style={{ width: '100%', height:'90%' }}>
                        <Card.Header> Dúvidas </Card.Header>
                        <Card.Body>
                            <Card.Title> O que são disciplinas eletivas? </Card.Title>
                            <Card.Text>
                                São as disciplinas disponíveis nas trilhas!  
                            </Card.Text>
                        </Card.Body>
                    </Card>
             </Col>

             <Col xs={12} xxl={3} md={6} sm={6} lg={6} xl={6}>
                    <Card className='m-2 border  bg-light text-dark' style={{ width: '100%', height:'90%' }}>
                        <Card.Header> Dúvidas </Card.Header>
                        <Card.Body>
                            <Card.Title> Qual trilha eu devo seguir? </Card.Title>
                            <Card.Text>
                                Podemos te ajudar nisso!  
                            </Card.Text>
                        </Card.Body>
                    </Card>
             </Col>

             <Col xs={12} xxl={3} md={6} sm={6} lg={6} xl={6}>
                    <Card className='m-2 border bg-danger text-white' style={{ width: '100%', height:'90%' }}>
                        <Card.Header> Dúvidas </Card.Header>
                        <Card.Body>
                            <Card.Title> Quais disciplinas são da minha trilha? </Card.Title>
                            <Card.Text>
                                Clique e descubra!  
                            </Card.Text>
                        </Card.Body>
                    </Card>
             </Col>

           


            </Row>

        </Container>
    
            

    return (

        <>
    
        <Sidebar 
            sidebarTitle='INFORMAÇÕES' 
            content={body}
        />
        


                



        </>
  
  
    )
  }
  