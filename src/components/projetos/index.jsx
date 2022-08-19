import { useEffect, useState } from "react";
import axios from "axios";


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
                        <h3>{repository.name}</h3>
                        <h3>{repository.html_url}</h3>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

export default Projetos;