import Content from "../../components/content";
import Titleh1 from '../../components/h1';

function Courses () {
    return (
        <div id="Cursos">
        <Titleh1 title="Cursos e formações extras"/>
        <Content
        title="INTRODUÇÃO  À  PROGRAMAÇÃO  ORIENTADA  A  OBJETOS  (POO)"
        content="Fundação Bradesco"
        />
        <Content
        title="Formação Completa em Scrum - Planejamento e Gestão Ágil de Projetos"
        content="Unieducar"
        />
        <Content
        title="Fundamentos de Javascript Funcional"
        content="Cod3r"
        />
        <Content
        title="Curso Intensivo de Next.JS & React"
        content="Cod3r"
        />
        </div>
    )
}

export default Courses;