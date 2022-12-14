import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons  from 'react-icons/ai';
import { SidebarData } from '../SidebarData';
import './index.css'
import { IconContext } from 'react-icons';
import { ReactSVG } from 'react-svg'
import logo from '../../assets/images/LogoStella.svg'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { logout, userType } from '../../../services/auth';

export default function Sidebar ( { sidebarTitle, content } ) {

    const [sidebar,setSidebar] = useState(false)
    const [userTypeControl,setUserTypeControl] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    useEffect(()=> {
        setUserTypeControl (userType())
    })

    return (
        <>  
            <IconContext.Provider value={{color: '#fff'}}>

                <Container >
                    <Row >
                        <Col >
                
                          { sidebar ? <Nav className='nav-menu active'>
                               <ul className='nav-menu-items'> 
                                    <li className='navbar-toggle'>
                                        <ReactSVG src={logo} className='svg-stella' />
                                    </li>

                                    { SidebarData && SidebarData.map( (item,index) => {
                                        return(
                                            <li key={index}  className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        )
                                    }) }

                            {userTypeControl === 1?
                            <li className='nav-text'>
                                <Link to='/management'>
                                    <AiIcons.AiOutlineSetting/>
                                    <span>Gerenciar </span>
                                </Link>
                            </li>:''}

                             <li className='nav-text'>
                                             <Link to='/login' onClick={() => logout()}>
                                                <FaIcons.FaSignOutAlt/>
                                                <span> Sair </span>
                                             </Link>
                                </li>
                         

                               </ul>
                            </Nav> : 
                            
                            <Nav className='nav-menu'>
                            <ul className='nav-menu-items'> 
                                 <li className='navbar-toggle'>
                                     <ReactSVG src={logo} className='svg-stella' />
                                 </li>
                                 { SidebarData && SidebarData.map( (item,index) => {
                                     return(
                                         <li key={index}  className={item.cName}>
                                             <Link to={item.path}>
                                                 {item.icon}
                                             </Link>
                                         </li>
                                     )
                                 }) }

                                
                            </ul>

                             
                         </Nav>
                         }

                        </Col>


                    </Row>

                   

                </Container>

                     
                    <Col className="navbar-button">
                    
                        <Nav className={sidebar ? 'navbar-button active' : 'navbar-button'} >
                            <FaIcons.FaBars onClick={showSidebar} size={25} color='#2A2356'/>
                        </Nav>
                    
                        <h1 className='sidebar-title'> { sidebarTitle ? sidebarTitle : 'HOME'} </h1>
                    </Col> 

                    <Col className="navbar-content">

                        <Row className={sidebar ? 'navbar-content active' : 'navbar-content'}>
                            <Col > 
                                {content} 
                            </Col>  
                        </Row>    

                    </Col>

            </IconContext.Provider>
        </>
    )

}