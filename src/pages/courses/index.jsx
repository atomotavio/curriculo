import Content from "../../components/content";
import Titleh1 from '../../components/h1';
import { FaFileCode } from "react-icons/fa";

function Courses () {
    return (
        <div id="Cursos">
        <Titleh1><FaFileCode/> Cursos e formações extras</Titleh1>
        <Content title="INTRODUÇÃO  À  PROGRAMAÇÃO  ORIENTADA  A  OBJETOS  (POO)">Fundação Bradesco</Content>
        <Content title="Formação Completa em Scrum - Planejamento e Gestão Ágil de Projetos">Unieducar</Content>
        <Content title="Fundamentos de Javascript Funcional">Cod3r</Content>
        <Content title="Curso Intensivo de Next.JS & React">Cod3r</Content>
        </div>
    )
}

export default Courses;