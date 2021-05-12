import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import '../styles.css'
import info from '../assets/info.png'


const Header = (props) => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          In this project, I explored how a user’s online presence allows data to be gathered that algorithms can then use to influence 
          that user’s future online behavior and the recommendations they receive. 
          <br/>
          <br/>
          I have created an interactive demonstration of a (very) simplified version of how media algorithms work.
          <br/>
          <br/>
          Follow the prompts below to get started.
        </Tooltip>
      );
      
    return (
        <Container className="header">
            <h3>Media Algorithms in Action</h3>
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 50, hide: 300 }}
                overlay={renderTooltip}
            >
            <Image src={info} width="2%"></Image>
            </OverlayTrigger>
        </Container>
    )
}

export default Header;