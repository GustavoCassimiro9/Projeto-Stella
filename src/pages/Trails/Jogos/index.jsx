import { Container, Row } from "react-bootstrap"
import Sidebar from "../../../components/SideBar"; 
import api from "../../../../services/api"; 
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useLayoutEffect } from "react";
import Modal from 'react-bootstrap/Modal';
export function Jogos() {
    const [rest, setRest] = useState([])
    const [show, setShow] = useState(false);
    const [sobre, setSobre] = useState('');
    const [nome, setNome] = useState('');
    console.log(rest)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {

        api.get("/cadeiras",
            {
            }).then(response => setRest(response.data.map(function (cadeiras) {
                const allData = [cadeiras.Name, cadeiras.Trilha, cadeiras.Horario, cadeiras.Dia, cadeiras.Professor, cadeiras.Sobre, cadeiras._id]
                return allData;
            })) + console.log(response)
            ).catch(function (error) {
                console.error(error);

            });


    }, [])
    const pegarDados = (n, descricao) => {
        setSobre(descricao)
        setNome(n)
    }
    const body = <>
        <Container fluid>
            <Row className="mt-5">
                <p>A trilha de Design Digital interativo é um itinerário formativo focado em estimular uma visão crítica do processo de design e se suas funções (prática, estética e simbólica). Abrange a interatividade no design digital e questões relativas à experiência do usuário.</p>
                <h3 className="mt-5">Objetivo da trilha </h3>
                <p>Aprofundar os conhecimentos sobre as bases teóricas e práticas do Design e do desenvolvimento de tecnologias digitais interativas adquiridas na formação básica inicial do curso.</p>

                <h3 className="mt-5">Professores</h3>
                {
                    rest.map(function (cadeira) {
                        if (cadeira[1] == "Jogos") {
                            return (
                                <>
                                    <span>{cadeira[4]}</span>


                                </>
                            )
                        }

                    })

                }
                <p></p>
                <h3 className="mt-5">Disciplinas núcleo da trilha</h3>
                <p>Estas disciplinas devem ter oferta regular para permitir a manutenção mínima da trilha. Essas são as disciplinas mais diretamente alinhadas com os objetivos e descrição da trilha de design digital interativo.</p>
                {
                    rest.map(function (cadeira) {
                        if (cadeira[1] == "Jogos") {
                            return (
                                <>
                                    <span onClick={() => pegarDados(cadeira[0], cadeira[5])}>
                                        <Button onClick={handleShow}>
                                            {cadeira[0]}
                                        </Button>
                                    </span>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{nome}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>

                                            <h6>Descrição</h6>
                                            <p>{sobre}</p>


                                        </Modal.Body>
                                    </Modal>
                                </>
                            )
                        }

                    })

                }
            </Row>
        </Container>


    </>
    return (

        <>

            <Sidebar
                sidebarTitle='Jogos'
                content={body}
            />

        </>





    )


}