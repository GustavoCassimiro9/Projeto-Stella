import { Card, CardGroup, Col, Row } from "react-bootstrap"
import Sidebar from "../../components/SideBar"
import { ReactSVG } from "react-svg";
import Lottie from 'lottie-react';
import coding from '../../assets/images/coding.json'
import design from '../../assets/images/design.json'
import audiovisual from '../../assets/images/audiovisual.json'
import games from '../../assets/images/games.json'
import { Link } from "react-router-dom";

export function Trails() {

const body =  <> 
  <Row>

    <CardGroup className="p-2">
            

<Col xs={12} xxl={3} md={6} sm={6} lg={6} xl={6}	>

        <Card className='m-4 border bg-light' style={{height:'90%'}}> 
        <Col xs={8} className="d-flex justify-content-center flex-column" style={{width:'100%'}}>
              <Lottie 
                    style={{height: "200px"}}
                    animationData={coding}
                    loop={true}
              />
          </Col>

            <Card.Body className="d-flex align-items-center flex-column">
            <Card.Title > Sistemas </Card.Title>
            <Card.Text style={{textAlign:'justify', marginTop:2}}>
                Aprofundar conhecimentos em programação para se tornar um desenvolvedor full stack!
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link to='/sistemas_multimidia' className='text-decoration-none d-flex align-items-center flex-column' style={{width:'100%',color:'#2A2356'}}> Saiba mais </Link>
            </Card.Footer>
        </Card>

</Col>

<Col xs={12} xxl={3} md={6} sm={6} lg={6} xl={6}>

        <Card className=' m-4 border bg-light' style={{height:'90%'}}>
        <Col xs={6} className="d-flex justify-content-center flex-column" style={{ width:'100%' }}>
              <Lottie 
                    style={{height: "200px"}}
                    animationData={design}
                    loop={true}
              />
          </Col>

            <Card.Body className="d-flex align-items-center flex-column">
            <Card.Title > Design Digital Interativo </Card.Title>
            <Card.Text style={{textAlign:'justify', marginTop:2}}>
            Aprofundar os conhecimentos sobre as bases teóricas e práticas do Design e do desenvolvimento de tecnologias digitais interativas adquiridas na formação básica inicial do curso.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link to='/design_interativo' className='text-decoration-none d-flex align-items-center flex-column' style={{width:'100%',color:'#2A2356'}}> Saiba mais </Link>
            </Card.Footer>
        </Card>

</Col>

<Col xs={12} xxl={3} md={6} sm={6} lg={6} xl={6} >

        <Card className=' m-4 border bg-light' style={{height:'90%'}}>
            
        <Col xs={6} className="d-flex justify-content-center flex-column" style={{width:'100%'}}>
              <Lottie 
                    style={{height: "200px"}}
                    animationData={audiovisual}
                    loop={true}
                    size={15}
              />
          </Col>


            <Card.Body className="d-flex align-items-center flex-column">
            <Card.Title  > Audiovisual </Card.Title>
            <Card.Text style={{textAlign:'justify', marginTop:2}}>
                Aprofundar os conhecimentos na criação e produção de conteúdo audiovisual!
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link to='/audiovisual' className='text-decoration-none d-flex align-items-center flex-column' style={{width:'100%',color:'#2A2356'}}> Saiba mais </Link>
            </Card.Footer>
        </Card>

</Col>

<Col xs={12} xxl={3} md={6} sm={6} lg={6} xl={6}>

        <Card className=' m-4 border bg-light' style={{height:'90%'}}>
            {/* <Card.Img variant="top" src={image}/> */}
            
            <Col xs={6} className="d-flex justify-content-center flex-column" style={{width:'100%',color:'#2A2356'}}>
              <Lottie 
                    style={{height: "200px"}}
                    animationData={games}
                    loop={true}
              />
          </Col>

            <Card.Body className="d-flex align-items-center flex-column ">
            <Card.Title> Jogos </Card.Title>
            <Card.Text style={{textAlign:'justify', marginTop:2}}>
                Aprofundar os conhecimentos na criação e produção de jogos!      
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link to='/jogos' className='text-decoration-none d-flex align-items-center flex-column' style={{width:'100%',color:'#2A2356'}}> Saiba mais </Link>
            </Card.Footer>
        </Card>

</Col>


    </CardGroup>               

  </Row>


</>

            

    return (

        <>
    
        <Sidebar 
            sidebarTitle='TRILHAS' 
            content={body}
        />
        


                



        </>
  
  
    )
  }
  