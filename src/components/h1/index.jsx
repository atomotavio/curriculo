import styled from 'styled-components';

function Titleh1 (props) {

    const Title = styled.h1`
        font-size: 1.8em;
        color: #f1fa8c;
    `;

    return (
        <Title>{props.title}</Title>
    )
}

export default Titleh1;

