import { useEffect, useState } from "react";
import axios from "axios";
import Content from "../content";


function Projetos () {
    
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/atomotavio/repos')
        .then(function (response) {
            setRepositories(response.data);
          });
          
    }, [])

    return (
        <div>
        <h1>Projetos</h1>
        <ul>
            {repositories.map(repository => {
                return (
                    <li>
                        <Content
                        title={repository.name}
                        link_title="Github"
                        link={repository.html_url}
                        />
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

export default Projetos;