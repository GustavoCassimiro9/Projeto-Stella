import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import api from "../../../services/api";
import { Container } from 'react-bootstrap';
import { useState } from "react";
import style from "./cadastroCadeira.module.css"

export function CadastroCadeira(){

    const [nome, setNome] = useState('');
    const [trilha, setTrilha] = useState('');
    const [horario, setHorario] = useState([]);
    const [dia, setDia] = useState([]);
    const [professor, setProfessor] = useState('');
    const [sobre, setSobre] = useState('');
    const [res, setRes] = useState([{}]);


    const [nomeInputEmpty, setNomeInputEmpty] = useState('');
    const [trilhaInputEmpty, setTrilhaInputEmpty] = useState('');
    const [horarioInputEmpty, setHorarioInputEmpty] = useState('');
    const [diaInputEmpty, setDiaInputEmpty] = useState('');
    const [professorInputEmpty, setProfessorInputEmpty] = useState('');
    const [sobreInputEmpty, setSobreInputEmpty] = useState('');
    
    const [emptyNameFeedback, setEmptyNameFeedback] = useState('');
    const [emptyTrilhaFeedback, setEmptyTrilhaFeedback] = useState('');
    const [emptyHorarioFeedback, setEmptyHorarioFeedback] = useState('');
    const [emptyDiaFeedback, setEmptyDiaFeedback] = useState('');
    const [emptyProfessorFeedback, setEmptyProfessorFeedback] = useState('');
    const [emptySobreFeedback, setEmptySobreFeedback] = useState('');
    
    let horarioCont = Math.abs( horario[0] - horario[1]) 
    function submit(e){
      e.preventDefault();
      api.post("/registroCadeira",
        { 
            Name: nome,
            Trilha: trilha,
            Horario: [horario[0],horario[1]] ,
            Dia: [dia[0], dia[1]],
            Professor: professor,
            Sobre: sobre

         }).then(function (response) {
            console.log(response);
            setRes(response)
          })
          .catch(function (error) {
            console.error(error);
            
          });

      //Feedbacks    
      if(!nome || nome == ''){
        setEmptyNameFeedback('Digite o nome')
        setNomeInputEmpty(true)
      }else{
        setNomeInputEmpty(false)
      }
      if(!trilha || trilha == ''){
        setEmptyTrilhaFeedback('Informe a trilha da cadeira')
        setTrilhaInputEmpty(true)
      }else{
        setTrilhaInputEmpty(false)
      }
      
      if(!dia || dia == ''){
        setEmptyDiaFeedback('Informe o(s) dia(s)')
        setDiaInputEmpty(true)
      }else{
        setDiaInputEmpty(false)
      }

      if(!professor || professor == ''){
        setEmptyProfessorFeedback('Digite o nome')
        setProfessorInputEmpty(true)
      }else{
        setProfessorInputEmpty(false)
      }

      if(!sobre || sobre == ''){
        setEmptySobreFeedback('Digite o nome')
        setSobreInputEmpty(true)
      }else{
        setSobreInputEmpty(false)
      }



    }
    
    //Eventos da pagina
    function eventsPag(){
      const dia = document.getElementById("dia2")
      if(horarioCont<4 && horarioCont>1){
        dia.removeAttribute('disabled')
        
      }else{
        dia.setAttribute('disabled', "")
      }

      if(!horario[0] || horario[0] == ''){
        setEmptyHorarioFeedback('Informe o horário inicial')
        setHorarioInputEmpty(true)
      }else if(!horario[1] || horario[1] == ''){
        setEmptyHorarioFeedback('Informe o horário final')
        setHorarioInputEmpty(true)
      }else if(!horario[0]){
        setHorario([horario[0], horario[1] == null ])
      }

      else if(horario[0]>22 || horario[0] <6 || horario[1]>22 || horario[1] <6 ){
        setEmptyHorarioFeedback('O horário está fora do tempo permitido')
        setHorarioInputEmpty(true)
      }else{
        setHorarioInputEmpty(false)
      }
      
    }
    console.log(nome)
    console.log(trilha)
    console.log(professor)
    console.log(sobre)
    console.log(dia[0], dia[1])
    console.log(horario[0], horario[1])
    console.log(horarioCont)

    return (
            <Container onKeyUp={eventsPag}>
              <Form onSubmit={submit} className={style.form} >

                <Form.Group className='mb-3'>
                  <Form.Label className='h6'>Informe o nome da cadeira</Form.Label>
                  <Form.Control className={style.input} type='text' isInvalid={nomeInputEmpty} value={nome} onChange={(e) => setNome(e.target.value)}/>
                  <Form.Control.Feedback type='invalid'>
                    {emptyNameFeedback}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label className='h6'>Escolha a Trilha</Form.Label><br/>
                    <Form.Select className={style.selectTrilhas} isInvalid={trilhaInputEmpty}>
                      <option value=""></option>
                      <option value="Sistemas Multimídia" onClick={(e) => setTrilha(e.target.value)}>Sistemas Multimídia</option>
                      <option value="Design interativo" onClick={(e) => setTrilha(e.target.value)}>Design interativo</option>
                      <option value="Animação e audiovisual" onClick={(e) => setTrilha(e.target.value)}>Animação e audiovisual</option>
                      <option value="Jogos Digitais" onClick={(e) => setTrilha(e.target.value)}>Jogos Digitais</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>
                       {emptyTrilhaFeedback}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label className='h6'>Escolha o horário</Form.Label> <br/>
                  <Form.Label>Das</Form.Label>
                  
                  <Form.Control type='number' placeholder='00' className={style.inputHorario} isInvalid={horarioInputEmpty} value={horario[0]} onChange={(e) => setHorario([e.target.value])} />
                  
                  <Form.Label>as</Form.Label>
                  
                  <Form.Control type='number' placeholder='00' className={style.inputHorario} isInvalid={horarioInputEmpty} value={horario[1]} onChange={(e) => setHorario([horario[0],e.target.value])}/>
                  
                  <Form.Control.Feedback type='invalid'>
                       {emptyHorarioFeedback}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label className='h6'>Escolha os dias</Form.Label><br/>

                    <Form.Label>Primeiro dia</Form.Label>
                    <Form.Select className={style.select} isInvalid={diaInputEmpty}>
                      <option value=""></option>
                      <option value="Segunda" onClick={(e) => setDia([e.target.value])}>Segunda</option>
                      <option value="Terça" onClick={(e) => setDia([e.target.value])}>Terça</option>
                      <option value="Quarta" onClick={(e) => setDia([e.target.value])}>Quarta</option>
                      <option value="Quinta" onClick={(e) => setDia([e.target.value])}>Quinta</option>
                      <option value="Sexta" onClick={(e) => setDia([e.target.value])}>Sexta</option>
                    </Form.Select>
                    <Form.Label>Segundo dia</Form.Label>
                    <Form.Select className={style.select} id="dia2" isInvalid={diaInputEmpty} disabled>
                      <option value=""></option>
                      <option value="Segunda" onClick={(e) => setDia([...dia,e.target.value])}>Segunda</option>
                      <option value="Terça" onClick={(e) => setDia([...dia,e.target.value])}>Terça</option>
                      <option value="Quarta" onClick={(e) => setDia([...dia,e.target.value])}>Quarta</option>
                      <option value="Quinta" onClick={(e) => setDia([...dia,e.target.value])}>Quinta</option>
                      <option value="Sexta" onClick={(e) => setDia([...dia,e.target.value])}>Sexta</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>
                       {emptyDiaFeedback}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label className='h6'>Informe o Professor</Form.Label>
                  <Form.Control className={style.input} isInvalid={professorInputEmpty} type='text' value={professor} onChange={(e) => setProfessor(e.target.value)} />
                  <Form.Control.Feedback type='invalid'>
                       {emptyProfessorFeedback}
                  </Form.Control.Feedback>
                </Form.Group>
                  
                <Form.Group className='mb-3'>
                <Form.Label className='h6'>Informe sobre a cadeira</Form.Label>
                  <Form.Control className={style.input} isInvalid={sobreInputEmpty} as="textarea" rows={3} value={sobre} onChange={(e) => setSobre(e.target.value)} />
                  <Form.Control.Feedback type='invalid'>
                       {emptySobreFeedback}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Cadastrar</Button>
              </Form>
                
            </Container>
    )
}