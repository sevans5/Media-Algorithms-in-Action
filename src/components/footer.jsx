import Container from 'react-bootstrap/Container';

import '../styles.css'


const Footer = (props) => {
    return (
        <Container>
            <p className="footer">Savannah Evans, 2021<br/>See the code for this project on <a href="https://github.com/sevans5/Media-Algorithms-in-Action" target="_blank">GitHub</a></p>
        </Container>
    )
}

export default Footer;