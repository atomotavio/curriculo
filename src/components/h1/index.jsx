import styled from 'styled-components';

function Titleh1 (props) {

    const Title = styled.h1`
        font-size: 1.8em;
        color: #f1fa8c;
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    return (
        <Title>{props.children}</Title>
    )
}

export default Titleh1;

