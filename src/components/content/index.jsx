import Titleh2 from '../h2';
import Paragraph from '../paragraph';
import Link from '../link';

function Content (props) {

    return (
        <>
        <Titleh2 title={props.title}/>
        <Paragraph content={props.subtitle} />
        <Paragraph content={props.content} />
        <Link link={props.link} link_title={props.link_title} />
        </>
    )
}

export default Content;