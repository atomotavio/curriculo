import { useEffect, useState } from 'react';
import Titleh1 from '../../components/h1';
import axios from 'axios';
import Paragraph from '../../components/paragraph';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaBlogger } from "react-icons/fa";

function About() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/atomotavio')
        .then(function (response) {
            setProfile(response.data);
          });
          
    }, [])

    const Wrapper = styled.div`
        display: flex;
        gap: 30px;
        `;
    
    const Image = styled.img`
        width: 250px;
        border-radius: 50%;
        `;
    const Link = styled.a`
        margin-right: 10px;
    `;

    return (
        <div id="Sobre">
        <Titleh1 title="Sobre" />
        <Wrapper>
        <div>
        <Image src={profile.avatar_url} />
        </div>
        <div>
        <Paragraph content="Nasci em Itu-SP, tenho 25 anos, estou cursando o último semestre de Análise e desenvolvimento de sistemas pela Wyden." />
        <Paragraph content="Gosto de contribuir em projetos open-source, atualmente estou contribuindo para o 4Noobs que tem o intuito de levar conhecimento
            de programação gratuito para quem quer ingressar na área."/>
        <Paragraph content="Atualmente estou estagiando na Mosyle com desenvolvimento web. 
            Utilizamos como linguagem principal o PHP e um framework próprio da empresa. 
            Além disso também trabalhamos com banco de dados MySQL e HTML, CSS e Javascript no Frontend. 
            Faço parte do time de suporte nível 2 em que prestamos suporte a eventuais problemas encontrados no 
            software pelos clientes assim como realizamos a manutenção do software corrigindo eventuais bugs e melhorando a performance do produto." />
        <Paragraph content="Estudo programação desde 2016, quando ingressei na faculdade de gestão de TI e me apaixonei pela área, 
            desde então foquei meus estudos em Frontend com HTML, CSS, Javascript. Porém durante a faculdade passei por C# e Python. Meu foco atual de estudos é em desenvolvimento web, como frontend. 
            Estou estudando ReactJS/NextJS, além de HTML, CSS e Javascript. Além de bibliotecas como styled-components." />
        <Paragraph content="Também possuo um projeto que teve inicio em 2016 como um blog para falar sobre jogos independentes brasileiros e estou trabalhando 
            para transformá-lo em uma plataforma para fomentar e divulgar projetos independentes de desenvolvedores brasileiros, 
            sejam eles jogos, softwares ou aplicativos" />
        <Link href='https://github.com/atomotavio' target="_blank" ><FaGithub/> Github</Link>
        <Link href='https://www.linkedin.com/in/atomotavio/' ttarget="_blank"><FaLinkedin/> Linkedin</Link>
        <Link href='https://www.areaindie.tech'target="_blank"><FaBlogger /> Area Indie</Link>
        </div>
        </Wrapper>
        </div>
    )
    }
    
    export default About;
