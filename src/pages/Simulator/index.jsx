import { Col, Container, Row } from "react-bootstrap"
import Sidebar from "../../components/SideBar"
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import * as AiIcons from 'react-icons/ai';
import api from "../../../services/api";
import "./index.css"

export function Simulator() {

    //Variável que guarda os dados das cadeiras
    const [rest, setRest] = useState([])

    //Puxando as cadeiras do banco e passando os dados da resposta por meio de uma variável

    const buscarCadeiras = async () => await api.get("/cadeiras",
        {
        }).then(response => setRest(response.data.map(function (cadeiras) {
            const allData = [cadeiras.Name, cadeiras.Trilha, cadeiras.Horario, cadeiras.Dia, cadeiras.Professor, cadeiras.Sobre, cadeiras._id]
            return allData;
        }))
        ).catch(function (error) {
            console.error(error);

        });

    useEffect(() => {

        buscarCadeiras()

    }, [])

    const atualizandoDadosDaTabela = (h, n, d) => {

        var horario = h
        var nome = n
        var dia = d

        if (horario) {
            let razaoHorario = Math.abs(horario[0] - horario[1])
            let mesclar = dia[0] + horario[0]
            let mesclar2 = dia[1] + horario[0]
            let mesclar4H = dia[0] + (horario[1] - 2)
            let mesclandoDados = mesclar.toString()
            let mesclandoDados2 = mesclar2.toString()
            let menclandoDados3 = mesclar4H.toString()
            let doc1 = document.getElementById(mesclandoDados)
            let doc2 = document.getElementById(mesclandoDados2)
            let doc3 = document.getElementById(menclandoDados3)
            if (razaoHorario >= 4) {


                doc1.style = "background-color: #6FCAF6 !important", doc3.style = "background-color: #6FCAF6 !important"
            } else {


                doc1.style = "background-color: #6FCAF6 !important", doc2.style = "background-color: #6FCAF6 !important"
            }

            let btn = document.getElementsByClassName("btn")

            for (let i = 0; i <= btn.length; i++) {

                btn[i].addEventListener('mouseleave', function () {

                    if (razaoHorario >= 4) {
                        return doc1.style = "background-color: white !important", doc3.style = "background-color: white !important", setHorario(null), setDia(null)
                    } else if (razaoHorario <= 4) {
                        return doc1.style = "background-color: white !important", doc2.style = "background-color: white !important", setHorario(null), setDia(null)
                    }
                });
            }

        }




    }

    const preenchendoTabela = (h, n, d) => {
        var horario = h
        var nome = n
        var dia = d

        let razaoHorario = Math.abs(horario[0] - horario[1])
        let mesclar = dia[0] + horario[0]
        let mesclar2 = dia[1] + horario[0]
        let mesclar4H = dia[0] + (horario[1] - 2)
        let mesclandoDados = mesclar.toString()
        let mesclandoDados2 = mesclar2.toString()
        let menclandoDados3 = mesclar4H.toString()

        let doc1 = document.getElementById(mesclandoDados)
        let doc2 = document.getElementById(mesclandoDados2)
        let doc3 = document.getElementById(menclandoDados3)


        if (razaoHorario >= 4) {

            return doc1.innerHTML = nome, doc3.innerHTML = nome

        } else {

            return doc1.innerHTML = nome, doc2.innerHTML = nome

        }


    }
    const limpandoTabela = () => {
        const table = document.getElementsByClassName("Segunda")
        for (let i = 0; i <= table.length; i++) {
            table[i].innerHTML = ""
            table[i].style = "background-color: white"
        }

    }

    const body = <>
        <Container fluid>




            <Row >

                <Col lg={8}>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Segunda</th>
                                <th>Terça</th>
                                <th>Quarta</th>
                                <th>Quinta</th>
                                <th>Sexta</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="horas">14</th>
                            </tr>
                            <tr>
                                <th></th>
                                <td className="Segunda" id="Segunda14"></td>
                                <td className="Segunda" id="Terça14"></td>
                                <td className="Segunda" id="Quarta14"></td>
                                <td className="Segunda" id="Quinta14"></td>
                                <td className="Segunda" id="Sexta14"></td>
                            </tr>
                            <tr>
                                <th class="horas">16</th>
                            </tr>
                            <tr>
                                <th></th>
                                <td className="Segunda" id="Segunda16" ></td>
                                <td className="Segunda" id="Terça16" ></td>
                                <td className="Segunda" id="Quarta16" ></td>
                                <td className="Segunda" id="Quinta16" ></td>
                                <td className="Segunda" id="Sexta16"></td>
                            </tr>
                            <tr>
                                <th class="horas">18</th>
                            </tr>
                            <tr>
                                <th></th>
                                <td className="Segunda" id="Segunda18"></td>
                                <td className="Segunda" id="Terça18"></td>
                                <td className="Segunda" id="Quarta18"></td>
                                <td className="Segunda" id="Quinta18"></td>
                                <td className="Segunda" id="Sexta18"></td>
                            </tr>
                            <tr>
                                <th class="horas">20</th>
                            </tr>
                            <tr>
                                <th></th>
                                <td className="Segunda" id="Segunda20"></td>
                                <td className="Segunda" id="Terça20"></td>
                                <td className="Segunda" id="Quarta20"></td>
                                <td className="Segunda" id="Quinta20"></td>
                                <td className="Segunda" id="Sexta20"></td>
                            </tr>
                            <tr>
                                <th class="horas">22</th>
                            </tr>
                            <tr>
                                <th></th>
                                <td className="Segunda" id="Segunda22"></td>
                                <td className="Segunda" id="Terça22"></td>
                                <td className="Segunda" id="Quarta22"></td>
                                <td className="Segunda" id="Quinta22"></td>
                                <td className="Segunda" id="Sexta22"></td>
                            </tr>

                        </tbody>
                    </table>
                </Col>

                <Col lg={4}>
                    <div style={{ height: "500px", overflowY: "hidden", display:'flex', justifyContent:'center', }}>
                        <ul style={{ listStyle: 'none', flexWrap: 'wrap', width: '100%' }}>
                            {

                                rest && rest.map((item, index) => {
                                    console.log("aaa", item)
                                    return (
                                        <li style={{ paddingBottom: "5px", width: "initial" }}><Button style={{ backgroundColor: '#2A2356', width: "250px" }} onClick={() => preenchendoTabela(item[2], item[0], item[3])} onMouseOver={() => atualizandoDadosDaTabela(item[2], item[0], item[3])} className="btn p-3 m-2" > {item[0]}</Button></li>
                                    )
                                })

                            }
                        </ul>
                    </div>
                </Col>


            </Row>



            <Row>
                <Col md={8}>

                    <div className='d-flex  mb-4' style={{ width: '100%', marginTop: "30px"}}>
                        <Button onClick={limpandoTabela} style={{ width: "40%" , backgroundColor: '#2A2359', marginLeft: "100px"}}>Limpar</Button>
                        <Button onClick={() => window.print()} style={{ width: "40%", marginLeft: "10px", textAlign: "center", flexDirection: "row", backgroundColor: '#2A2356', borderColor: '#2A2356' }}>Salvar como   <AiIcons.AiOutlineFilePdf size={35} />  </Button>
                    </div>
                <Col md={4}></Col>
                </Col>

            </Row>

        </Container>
    </>



    return (

        <>

            <Sidebar
                sidebarTitle='SIMULADOR'
                content={body}
            />

        </>


    )
}