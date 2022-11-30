import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import api from "../../../services/api";
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from "react";
import style from "./consultarCadeira.module.css"

export function ConsultarCadeiras(){
    
    const [rest, setRest] = useState()
    const [dataArray, setDataArray] = useState([])

    //Modal
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    //Upload de cadeiras

    const [nome, setNome] = useState('');
    const [trilha, setTrilha] = useState('');
    const [horario, setHorario] = useState([]);
    const [dia, setDia] = useState([]);
    const [professor, setProfessor] = useState('');
    const [sobre, setSobre] = useState('');

    const [id, setId] = useState()
    console.log(id)

    useEffect(()=>{
        console.log("Estou sendo executado!")
        
    })
    
    function updateCadeiras(e){
        e.preventDefault();
        api.patch('/cadeira/'+id,
          { 
              Name: nome,
              Trilha: trilha,
              Horario: [horario[0],horario[1]] ,
              Dia: [dia[0], dia[1]],
              Professor: professor,
              Sobre: sobre
  
           }).then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.error(error);
              
            });
    }
    function deletarCadeiras(e){
        e.preventDefault();
        api.delete('/deletarCadeira/'+id,
          { 
  
           }).then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.error(error);
              
            });
    }
    //Chamando todas as cadeiras do banco de dados
    const chamarCadeiras = (e) => {
        e.preventDefault();
        api.get("/cadeiras",
          { 
           }).then(function (response) {
           
              setRest(response.data)
              
            })
            .catch(function (error) {
              console.error(error);
              
            });
            setDataArray(rest.map(function(cadeiras){
                const allData = [cadeiras.Name, cadeiras.Trilha, cadeiras.Horario, cadeiras.Dia, cadeiras.Professor, cadeiras.Sobre, cadeiras._id]
                return allData;
             }))
          

    } 
    console.log(nome, trilha, horario, dia, professor, sobre)
    const pegandoId = (id, name, trilha, horario, dia, professor, sobre) => {
        setId(id)
        setNome(name)
        setTrilha(trilha)
        setHorario(horario)
        setDia(dia)
        setProfessor(professor)
        setSobre(sobre)
    }
    //console.log(rest)
    
    return (
            <>  <Container className='table-responsive'>
                    <Button className='mb-4' onClick={chamarCadeiras}>Consultar Cadeiras</Button>
                    <Table className='table' striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Trilha</th>
                            <th>Inicio</th>
                            <th>Final</th>
                            <th>Dias</th>
                            <th>Professor</th>
                        </tr>
                    </thead>
                    { dataArray.map(function(cadeiras){
                        return (
                            
                            <tbody>
                                <tr>
                                    
                                    <td>{cadeiras[0]}</td>
                                    <td>{cadeiras[1]}</td>
                                    <td>{cadeiras[2][0]}</td>
                                    <td>{cadeiras[2][1]}</td>
                                    <td>{cadeiras[3][0] + " " + cadeiras[3][1]  }</td>
                                    <td>{cadeiras[4]}</td>


                                    <td>
                                        <span onClick={()=> pegandoId(
                                        cadeiras[6],
                                        cadeiras[0],
                                        cadeiras[1],
                                        cadeiras[2],
                                        cadeiras[3],
                                        cadeiras[4],
                                        cadeiras[5]
                                        
                                        )}>
                                            <Button onClick={handleShow}>Editar</Button> <Button variant="danger" onClick={handleShowDelete}>Deletar</Button>
                                        </span>
                                    
                                        <Modal show={showDelete} onHide={handleCloseDelete}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Deletar Cadeiras</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <span onClick={deletarCadeiras}>
                                                    <Button variant="danger" onClick={handleCloseDelete}>
                                                        Confirmar Delete    
                                                    </Button>
                                                </span>
                                                <Button variant="secondary" onClick={handleCloseDelete}>
                                                    Cancelar
                                                </Button>

                                               
                                            </Modal.Body>
                                          </Modal>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Editar Cadeiras</Modal.Title>
                                        </Modal.Header>
                                        <Form onSubmit={updateCadeiras}>
                                            <Modal.Body>

                                                <Form.Group className='mb-3'>
                                                    <Form.Label className='h6'>Informe o nome da cadeira</Form.Label>
                                                    <Form.Control type='text' value={nome} onChange={(e) => setNome(e.target.value)}/>
                                                </Form.Group>

                                                <Form.Group className='mb-3'>
                                                <Form.Label className='h6'>Escolha a Trilha</Form.Label><br/>
                                                    <Form.Select className={style.selectTrilhas} >
                                                    <option value=""></option>
                                                    <option value="Sistemas Multimídia" onClick={(e) => setTrilha(e.target.value)}>Sistemas Multimídia</option>
                                                    <option value="Design interativo" onClick={(e) => setTrilha(e.target.value)}>Design interativo</option>
                                                    <option value="Animação e audiovisual" onClick={(e) => setTrilha(e.target.value)}>Animação e audiovisual</option>
                                                    <option value="Jogos Digitais" onClick={(e) => setTrilha(e.target.value)}>Jogos Digitais</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <Form.Group className='mb-3'>
                                                    <Form.Label className='h6'>Escolha o horário</Form.Label> <br/>
                                                    <Form.Label>Das</Form.Label>
                                                    
                                                    <Form.Control type='number' placeholder='00' className={style.inputHorario}  value={horario[0]} onChange={(e) => setHorario([e.target.value])} />
                                                    
                                                    <Form.Label>as</Form.Label>
                                                    
                                                    <Form.Control type='number' placeholder='00' className={style.inputHorario} value={horario[1]} onChange={(e) => setHorario([horario[0],e.target.value])}/>
                                                
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className='h6'>Escolha os dias</Form.Label><br/>

                                                    <Form.Label>Primeiro dia</Form.Label>
                                                    <Form.Select className={style.select}>
                                                    <option value=""></option> 
                                                    <option value="Segunda" onClick={(e) => setDia([e.target.value])}>Segunda</option>
                                                    <option value="Terça" onClick={(e) => setDia([e.target.value])}>Terça</option>
                                                    <option value="Quarta" onClick={(e) => setDia([e.target.value])}>Quarta</option>
                                                    <option value="Quinta" onClick={(e) => setDia([e.target.value])}>Quinta</option>
                                                    <option value="Sexta" onClick={(e) => setDia([e.target.value])}>Sexta</option>
                                                    </Form.Select>
                                                    <Form.Label>Segundo dia</Form.Label>
                                                    <Form.Select className={style.select} id="dia2" disabled>
                                                    <option value=""></option>
                                                    <option value="Segunda" onClick={(e) => setDia([...dia,e.target.value])}>Segunda</option>
                                                    <option value="Terça" onClick={(e) => setDia([...dia,e.target.value])}>Terça</option>
                                                    <option value="Quarta" onClick={(e) => setDia([...dia,e.target.value])}>Quarta</option>
                                                    <option value="Quinta" onClick={(e) => setDia([...dia,e.target.value])}>Quinta</option>
                                                    <option value="Sexta" onClick={(e) => setDia([...dia,e.target.value])}>Sexta</option>
                                                    </Form.Select>
                                    
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className='h6'>Informe o Professor</Form.Label>
                                                    <Form.Control className={style.input} type='text' value={professor} onChange={(e) => setProfessor(e.target.value)} />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className='h6'>Informe sobre a cadeira</Form.Label>
                                                    <Form.Control className={style.input} as="textarea" rows={3} value={sobre} onChange={(e) => setSobre(e.target.value)} />
                                                </Form.Group>

                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Fechar
                                                </Button>
                                                <Button variant="primary" type='submit' onClick={handleClose}>
                                                        Salvar
                                            
                                                    
                                                </Button>
                                            </Modal.Footer>
                                         </Form>
                                    </Modal>
                                    </td>
                                </tr>
                            </tbody>
                        
                                )
                         }) 
                     }
                    </Table>

                </Container>    
            </>
    )

}