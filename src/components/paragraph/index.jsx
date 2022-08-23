import styled from 'styled-components';

function Paragraph (props) {

    const Paragraph = styled.p`
        font-size: 1em;
        color: #f8f8f2;
        margin: 0;
        margin-bottom: 10px;
    `;
    
    return (
        <Paragraph>{props.content}</Paragraph>
    )
}

export default Paragraph;

