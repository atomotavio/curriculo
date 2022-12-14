import About from '../../pages/about';
import Jobs from '../../pages/jobs';
import Education from '../../pages/education';
import Courses from '../../pages/courses';
import Projects from '../../pages/projects';
import styled from 'styled-components';

function Main ( ) {
    const Wrapper = styled.div`
            display: flex;
            flex-direction: column;

        `;

    return (
        <Wrapper>
        <About />
        <Jobs />
        <Education />
        <Courses />
        <Projects />
        </Wrapper>
    )
}

export default Main;