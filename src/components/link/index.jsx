import styled from 'styled-components';

function Link (props) {

    const Link = styled.a`
        font-size: 1em;
        color: #bd93f9;
        text-decoration: none;
        
        &:hover {
            color: #50fa7b;
        }
    `;
    
    return (
        <Link target="_blank" href={props.link}>{props.children}</Link>
    )
}

export default Link;

