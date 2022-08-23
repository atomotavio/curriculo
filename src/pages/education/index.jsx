import Content from "../../components/content";
import Titleh1 from '../../components/h1';
import { FaBook } from "react-icons/fa";

function Education () {
    return (
        <div id="Formacao">
        <Titleh1><FaBook/> Formação</Titleh1>
        <Content
        title="Curso Superior de Tecnologia (CST) de Análise e desenvolvimento de sistemas"
        subtitle="Jan 2021 - Dez 2022"> Tem como especialidade o desenvolvimento de sistemas informatizados para diversos setores,
        visando um melhor aproveitamento das máquinas com uma maior capacidade de armazenamento e velocidade no processamento dos dados.</Content>
        </div>
    )
}

export default Education;