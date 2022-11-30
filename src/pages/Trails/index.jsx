import { Card, CardGroup, Col, Row } from "react-bootstrap"
import Sidebar from "../../components/SideBar"
import { ReactSVG } from "react-svg";
import coding from '../../assets/images/coding.svg'
import design from '../../assets/images/design.svg'
import audiovisual from '../../assets/images/audiovisual.svg'
import games from '../../assets/images/games.svg'
import './index.css'

export function Trails() {

const body =  <> 
    <CardGroup className="p-5">
            
        <Card className=' m-4 border bg-light'> 
            <ReactSVG src={coding} fontSize={5} />
            {/* <Card.Img variant="top" src={image}/> */}
            <Card.Body>
            <Card.Title> Sistemas </Card.Title>
            <Card.Text>
                Aprofundar conhecimentos em programação para se tornar um desenvolvedor full stack!
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Atualizado 5 min atrás </small>
            </Card.Footer>
        </Card>

        <Card className=' m-4 border bg-light'>
            {/* <Card.Img variant="top" src={image}/> */}
            <ReactSVG src={design} fontSize={15} />
            <Card.Body>
            <Card.Title> Design Digital Interativo </Card.Title>
            <Card.Text>
            Aprofundar os conhecimentos sobre as bases teóricas e práticas do Design e do desenvolvimento de tecnologias digitais interativas adquiridas na formação básica inicial do curso.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Atualizado 15 min atrás</small>
            </Card.Footer>
        </Card>

        <Card className=' m-4 border bg-light'>
            
            {/* <Card.Img variant="top" src={image}/> */}
            <ReactSVG src={audiovisual} fontSize={15} />

            <Card.Body>
            <Card.Title> Audiovisual </Card.Title>
            <Card.Text>
                Aprofundar os conhecimentos na criação e produção de conteúdo audiovisual!
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Atualizado 20 min atrás</small>
            </Card.Footer>
        </Card>

        <Card className=' m-4 border bg-light'>
            {/* <Card.Img variant="top" src={image}/> */}
            <ReactSVG src={games} fontSize={15} />
            <Card.Body>
            <Card.Title> Jogos </Card.Title>
            <Card.Text>
                Aprofundar os conhecimentos na criação e produção de jogos!      
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Atualizado 12 min atrás</small>
            </Card.Footer>
        </Card>

    </CardGroup>               


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
  