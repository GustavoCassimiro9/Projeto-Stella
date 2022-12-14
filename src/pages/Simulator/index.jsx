import { Col, Container, Row } from "react-bootstrap"
import Sidebar from "../../components/SideBar"
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import api from "../../../services/api";
import "./index.css"


export function Simulator() {

    //Variável que guarda os dados das cadeiras
    const [rest, setRest] = useState([])
    const [horario, setHorario] = useState([])
    const [nome, setNome] = useState('')
    const [dia, setDia] = useState([])

    //Puxando as cadeiras do banco e passando os dados da resposta por meio de uma variável
    useEffect(() => {

        api.get("/cadeiras",
            {
            }).then(response => setRest(response.data.map(function (cadeiras) {
                const allData = [cadeiras.Name, cadeiras.Trilha, cadeiras.Horario, cadeiras.Dia, cadeiras.Professor, cadeiras.Sobre, cadeiras._id]
                return allData;
            }))
            ).catch(function (error) {
                console.error(error);

            });


    })

    const atualizandoDadosDaTabela = (h, n, d) => {
        setHorario(h)
        setNome(n)
        setDia(d)

        let razaoHorario = Math.abs(horario[0] - horario[1])
        let mesclar = dia[0] + horario[0]
        let mesclar4 = dia[1] + horario[0]
        let t = mesclar.toString()
        let t4 = mesclar4.toString()
        let tds = document.getElementById(t)
        let tds2 = document.getElementById(t4)
        if (razaoHorario >= 4) {

            console.log(t)
             tds.style = "background-color: blue", tds2.style = "background-color: blue"
        } else {
            let mesclar = dia[0] + horario[0]
            let mesclar4 = dia[1] + horario[0]
            let t = mesclar.toString()
            let t4 = mesclar4.toString()
            console.log(t)
             tds.style = "background-color: blue", tds2.style = "background-color: blue"
        }

        let btn = document.getElementsByClassName("btn")
        console.log(btn.length)
        for(let i = 0; i <= btn.length; i++){
    
            btn[i].addEventListener('mouseleave', function () {
               
                 tds.style = "background-color: white", tds2.style = "background-color: white"
            });
        }
        


    }

    const TestandoTabela = () => {
        let razaoHorario = Math.abs(horario[0] - horario[1])
        if (razaoHorario >= 4) {
            let mesclar = dia[0] + horario[0]
            let mesclar4 = dia[0] + horario[1]
            let t = mesclar.toString()
            let t4 = mesclar4.toString()
            console.log(t)
            return document.getElementById(t).innerHTML = nome, document.getElementById(t4).innerHTML = nome
        } else {
            let mesclar = dia[0] + horario[0]
            let mesclar4 = dia[1] + horario[0]
            let t = mesclar.toString()
            let t4 = mesclar4.toString()
            console.log(t)
            return document.getElementById(t).innerHTML = nome, document.getElementById(t4).innerHTML = nome
        }

        
    

    }

    const body = <>
        <Container>

      
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
                <th>14</th>
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
                <th>16</th>
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
                <th>18</th>
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
                <th>20</th>
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
                <th>22</th>
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

        {
            rest.map(function (cadeiras) {
                //{console.log(cadeiras[1])}

                return (
                    <>
                        <span onClick={TestandoTabela}><Button className="btn" onMouseMove={() => atualizandoDadosDaTabela(cadeiras[2], cadeiras[0], cadeiras[3])}> {cadeiras[0]}</Button></span>
                        <br></br>

                    </>




                )
            })
        }
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
