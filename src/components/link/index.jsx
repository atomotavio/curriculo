import styled from 'styled-components';

function Link (props) {

    const Link = styled.a`
        font-size: 1em;
        color: #bd93f9;
    `;
    
    return (
        <Link target="_blank" href={props.link}>{props.link_title}</Link>
    )
}

export default Link;

