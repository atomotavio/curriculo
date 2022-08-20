import { useEffect, useState } from "react";
import axios from "axios";
import Titleh1 from '../../components/h1';
import Titleh2 from "../../components/h2";


function Profile () {
    
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/atomotavio')
        .then(function (response) {
            setProfile(response.data);
          });
          
    }, [])

    return (
        <div id="Perfil">
        <Titleh1 title="Quem sou eu" />
            <Titleh2 title={profile.name} />
            <img src={profile.avatar_url}></img>
            <p>{profile.bio}</p>
        </div>
    )
}

export default Profile;