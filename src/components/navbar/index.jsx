import styled from 'styled-components';

    const Link = styled.a`
            font-size: 1em;
            color: #f1fa8c;
            text-decoration: none;

        &:hover {
            color: #50fa7b;
            font-size: 1.2em; // <Thing> when hovered
  }
        `;
    
    const Wrapper = styled.div`
            font-size: 1em;
            color: #f1fa8c;
            text-decoration: none;
            display: flex;
            gap: 10px;
            justify-content: center;
        `;

function Navbar () {
    return (
        <Wrapper>
        <Link href="/">Home</Link>
        <Link href="#Perfil">Quem sou eu</Link>
        <Link href="#Sobre">Sobre</Link>
        <Link href="#Experiencia">Experiencias anteriores</Link>
        <Link href="#Formacao">Formação</Link>
        <Link href="#Cursos">Cursos e formações extras</Link>
        <Link href="#Projetos">Projetos</Link>
        </Wrapper>
    )
}

export default Navbar;