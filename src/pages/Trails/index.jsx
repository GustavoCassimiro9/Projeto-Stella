import { Card, CardGroup, Col, Row } from "react-bootstrap"
import Sidebar from "../../components/SideBar"
import image from '../../assets/images/aw.jpg'
import './index.css'

export function Trails() {

const body =  <> 
    <CardGroup className="p-5">
            
        <Card>
            <Card.Img variant="top" src={image}/>
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

        <Card>
            <Card.Img variant="top" src={image}/>
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

        <Card>
            <Card.Img variant="top" src={image}/>
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

        <Card>
            <Card.Img variant="top" src={image}/>
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
  