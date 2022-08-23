import Titleh2 from '../h2';
import Paragraph from '../paragraph';
import Link from '../link';

function Content (props) {

    return (
        <>
        <Titleh2 title={props.title}/>
        <Paragraph>{props.subtitle}</Paragraph>
        <Paragraph>{props.children}</Paragraph>
        <Link link={props.link}>{props.link_title}</Link>
        </>
    )
}

export default Content;