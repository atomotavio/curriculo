import { useEffect, useState } from "react";
import axios from "axios";
import Content from "../../components/content";
import Titleh1 from '../../components/h1';
import styled from "styled-components";
import Paragraph from "../../components/paragraph";
import { FaProjectDiagram } from "react-icons/fa";


function Projects () {
    
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/atomotavio/repos')
        .then(function (response) {
            setRepositories(response.data);
          });
          
    }, [])

    const Wrapper = styled.ul`
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            padding: 20px;
            margin: 0;
            column-gap: 20px;
            justify-content: space-between;
            background-color: #44475a;

        `;

    const Item = styled.li`
        display: flex;
        flex-direction: column;
        width: 25%;
        `;

    return (
        <div id="Projetos">
        <Titleh1><FaProjectDiagram /> Projetos</Titleh1>
        <Paragraph>Nessa sessão voce pode conferir meus principais projetos/repositórios do github.</Paragraph>
        <Wrapper>
            {repositories.filter(function(repositories) {return repositories.description !== null;})
                    .filter(function(repositories) {return !repositories.fork;})
                    .map(repository => {
                    return (
                        <Item>
                            <Content title={repository.name} subtitle={repository.language} link_title="Repositório" link={repository.html_url}>
                            {repository.description}
                            </Content>
                        </Item>
                    )

            })}
        </Wrapper>
        </div>
    )
}

export default Projects;