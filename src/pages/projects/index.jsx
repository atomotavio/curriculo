import { useEffect, useState } from "react";
import axios from "axios";
import Content from "../../components/content";
import Titleh1 from '../../components/h1';
import styled from "styled-components";


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

        `;

    return (
        <div id="Projetos">
        <Titleh1 title="Projetos" />
        <Wrapper>
            {repositories.map(repository => {
                if (repository.fork === false) {
                    if (repository.description !== null) {
                    return (
                        <li>
                            <Content
                            title={repository.name}
                            subtitle={repository.language}
                            content={repository.description}
                            link_title="Repositório"
                            link={repository.html_url}
                            
                            />
                        </li>
                    )
                }}
            })}
        </Wrapper>
        </div>
    )
}

export default Projects;