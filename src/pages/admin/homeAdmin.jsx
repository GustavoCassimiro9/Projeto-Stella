import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import api from "../../../services/api";
import { Container } from 'react-bootstrap';
import { useState } from "react";
import style from "./homeAdmin.module.css"
import { Link, Navigate } from "react-router-dom";

export function HomeAdmin(){


    return (
        <>
            <Container className={style.Container}>
            <Link to="/cadastroCadeira" className={style.Link}> <Button className={style.Button}><span className={style.Span}>Cadastrar Cadeiras </span> </Button></Link> 
                
            <Link to="/consultarCadeira" className={style.Link}>  <Button className={style.Button}><span className={style.Span}> Consultar/Atualizar Cadeiras</span></Button></Link> 
            </Container>
        
        </>
    )
}
