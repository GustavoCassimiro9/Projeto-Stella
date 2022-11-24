import * as AiIcons  from 'react-icons/ai';
import * as BiIcons  from 'react-icons/bi';
import * as IoIcons  from 'react-icons/io5';

export const SidebarData = [
    {
        title:'Home',
        path:'/home',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Trilhas',
        path:'/trilhas',
        icon: <BiIcons.BiPlanet/>,
        cName:'nav-text'
    },
    {
        title:'Simulador',
        path:'/simulator',
        icon: <BiIcons.BiCalendar />,
        cName:'nav-text'
    },
    {
        title:'Disciplinas',
        path:'/subjects',
        icon: <AiIcons.AiOutlinePieChart/>,
        cName:'nav-text'
    },
    {
        title:'Informações',
        path:'/info',
        icon: <IoIcons.IoDocumentTextOutline/>,
        cName:'nav-text'
    },

]