import Content from "../../components/content";
import Titleh1 from '../../components/h1';
import { FaCode } from "react-icons/fa";

function Jobs () {
    return (
        <div id="Experiencia">
        <Titleh1> <FaCode /> Experiencias anteriores</Titleh1>
        <Content
        title="Estágio em desenvolvimento web na Mosyle"
        subtitle="Fev 2022 - Atualmente"
        content="Utilizamos como linguagem principal o PHP e um framework próprio da empresa. 
        Além disso, também trabalhamos com banco de dados MySQL e HTML, CSS e Javascript no Frontend. 
        Faço parte do time de suporte nível 2 em que prestamos suporte a eventuais problemas encontrados no software 
        pelos clientes assim como realizamos a manutenção do software corrigindo eventuais bugs e melhorando a performance do produto."
        />
        </div>
    )
}

export default Jobs;