import styled from 'styled-components';

function Titleh2 (props) {

    const Title = styled.h2`
        font-size: 1.3em;
        color: #ff79c6;
    `;
    return (
        <Title>{props.title}</Title>
    )
}

export default Titleh2;

