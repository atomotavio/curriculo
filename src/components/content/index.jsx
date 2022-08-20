import styled from 'styled-components';

function Content (props) {

    const Title = styled.h2`
        font-size: 1.3em;
        color: #ff79c6;
    `;

    const Paragraph = styled.p`
        font-size: 1em;
        color: #f8f8f2;
    `;
    
    const Link = styled.a`
        font-size: 1em;
        color: #bd93f9;
    `;


    return (
        <>
        <Title>{props.title}</Title>
        <Paragraph>{props.subtitle}</Paragraph>
        <Paragraph>{props.content}</Paragraph>
        <Link target="_blank" href={props.link}>{props.link_title}</Link>
        </>
    )
}

export default Content;