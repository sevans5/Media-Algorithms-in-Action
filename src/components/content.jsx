import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { useState } from 'react';

import '../styles.css'
import one from '../assets/image 1.jpg'
import two from '../assets/image 2.jpg'
import three from '../assets/image 3.jpg'
import four from '../assets/image 4.png'
import five from '../assets/image 5.png'
import six from '../assets/image 6.png'
import seven from '../assets/image 7.png'
import eight from '../assets/image 8.png'
import nine from '../assets/image 9.png'
import ten from '../assets/image 10.png'
import eleven from '../assets/image 11.png'
import twelve from '../assets/image 12.png'

import rone from '../assets/result 1.jpg'
import rtwo from '../assets/result 2.jpg'
import rthree from '../assets/result 3.jpg'
import rfour from '../assets/result four.png'
import rfive from '../assets/result five.jpeg'
import rsix from '../assets/result six.jpeg'
import rseven from '../assets/result 7.png'
import reight from '../assets/result 8.jpeg'
import rnine from '../assets/result 9.jpg'
import rten from '../assets/result 10.jpg'
import releven from '../assets/result 11.jpg'



const Content = (props) => {

// The const info defined below is a 
// JSON array that holds the attributes for each media selection
// For example, the first photo is a dog outside the South Building at UNC.
// This photo is given the attributes of content = happy, interest = pets, 
// location = the south, and politics = liberal

const info = [
    {
        content: "happy", 
        interest: "pets",
        location: "south",
        politics: "liberal"
    }, 
    {
        content: "practical", 
        interest: "clothing",
        location: "west coast",
        politics: "liberal"
    }, 
    {
        content: "entertainment", 
        interest: "sports",
        location: "east coast",
        politics: "undetermined"
    },
    {
        content: "happy", 
        interest: "entertainment",
        location: "east coast",
        politics: "undetermined"
    }, 
    {
        content: "practical", 
        interest: "entertainment",
        location: "west coast",
        politics: "liberal"
    }, 
    {
        content: "entertainment", 
        interest: "clothing",
        location: "west coast",
        politics: "liberal"
    },{
        content: "practical", 
        interest: "clothing",
        location: "east coast",
        politics: "liberal"
    }, 
    {
        content: "entertainment", 
        interest: "sports",
        location: "west coast",
        politics: "undetermined"
    }, 
    {
        content: "practical", 
        interest: "pets",
        location: "south",
        politics: "undetermined"
    },
    {
        content: "entertainment", 
        interest: "clothing",
        location: "east coast",
        politics: "undetermined"
    }, 
    {
        content: "happy", 
        interest: "sports",
        location: "south",
        politics: "undetermined"
    }, 
    {
        content: "entertainment", 
        interest: "clothing",
        location: "east coast",
        politics: "liberal"
    },

]

const [selectedImgIndexes, setSelectedImgIndexes] = useState([])
const [formSubmitted, setFormSubmitted] = useState(false)

const addImgs = (number) => {
    setFormSubmitted(false)
        var numbers = []
    if(number >= 0 && number <= 2){
        numbers = [0,1,2]
    }else if (number >= 3 && number <= 5){
        numbers = [3,4,5]
    }else if(number >= 6 && number <=8) {
        numbers = [6,7,8]
    }else if(number >= 9 && number <= 10) {
        numbers = [9,10]
    }

    // ensures each photo is only in the selection array once 
    // for cases when a user reselects a different photo. 

    var temp = selectedImgIndexes
    for(var i = 0; i < numbers.length; i++){
        if(temp.includes(numbers[i])){
            temp = temp.filter(function(item){
                return item !== numbers[i]
            })
            
        }
    }

    temp.push(number)
    setSelectedImgIndexes(temp)
    console.log(temp)  
}

// displays the final analysis once the user has
// hit the submit button at the bottom of the page

const formSubmitPressed = () => {
    setFormSubmitted(true)
}

const displayAnalysis = () => {
    var objToReturn = []
    var finalObjs = []
    for(var i = 0; i < selectedImgIndexes.length; i++) {
        var selectedImg = info[selectedImgIndexes[i]]
        finalObjs.push(selectedImg)
    }

    // gathering each of the attributes that were present in 
    // the user's selections 

    var s_content = finalObjs.reduce(function(sums, entry){
        sums[entry.content] = (sums[entry.content] || 0) + 1
        return sums
    }, {});

    var s_interest = finalObjs.reduce(function(sums, entry){
        sums[entry.interest] = (sums[entry.interest] || 0) + 1
        return sums
    }, {});

    var s_location = finalObjs.reduce(function(sums, entry){
        sums[entry.location] = (sums[entry.location] || 0) + 1
        return sums
    }, {});

    var s_politics = finalObjs.reduce(function(sums, entry){
        sums[entry.politics] = (sums[entry.politics] || 0) + 1
        return sums
    }, {});

    // determining which category of each attribute was chosen the most 
    // so it can be passed below in switch statements

    var final_content = Object.keys(s_content).reduce((a,b) => {return s_content[a] > s_content[b] ? a : b}) 

    var final_interest = Object.keys(s_interest).reduce((a,b) => {return s_interest[a] > s_interest[b] ? a : b})

    var final_location = Object.keys(s_location).reduce((a,b) => {return s_location[a] > s_location[b] ? a : b}) 

    var final_politics = Object.keys(s_politics).reduce((a,b) => {return s_politics[a] > s_politics[b] ? a : b})

    // switch statement which displays the reccomended content
    // based on the most commonly selected one, as calculated above.

    switch(final_content){
        case "happy":
            objToReturn.push
            (
            <Row key={0} className="analysis container-1">
                <Col>
                <p>Based on your interactions, it seems that you are interested in happy content.
                    Here's an instagram post that may be recommended for you. 
                </p>
                </Col>
                <Col>
                <Image src={rone} width="50%"></Image>
                </Col>
            </Row>
            )
            break;
        case "practical":
            objToReturn.push
            (
            <Row key={1} className="analysis container-1">
                <Col>
                <p>Based on your interactions, it seems that you are interested in practical content.
                    Here's an instagram post that may be recommended for you. 
                </p>
                </Col>
                <Col>
                <Image src={rtwo} width="50%"></Image>
                </Col>
            </Row>
            )
            break;
        case "entertainment":
            objToReturn.push
            (
            <Row key={2} className="analysis container-1">
                <Col>
                <p>Based on your interactions, it seems that you are interested in entertainment content.
                    Here's an instagram post that may be recommended for you. 
                </p>
                </Col>
                <Col>
                <Image src={rthree} width="50%"></Image>
                </Col>
            </Row>
            )
            break;
        default:
            objToReturn.push
            (
            <Row key={0} className="analysis container-1">
                <Col>
                <p>Based on your interactions, it seems that you are interested in happy content.
                    Here's an instagram post that may be recommended for you. 
                </p>
                </Col>
                <Col>
                <Image src={rone} width="50%"></Image>
                </Col>
            </Row>
            )
            break;
    }

    // switch statement which displays the determined interest
    // based on the most commonly selected one, as calculated above.

    switch(final_interest){
        case "clothing":
            objToReturn.push
            (
            <Row key={3} className="analysis container-2">
                <Col>
                <Image src={rfour} width="90%"></Image>
                </Col>
                <Col>
                <p>Based on your interactions, it seems that you are interested in clothing.
                    Here's an ad that may be generated for you in attempt to get you to buy more clothes. 
                </p>
                </Col>
            </Row>
            )
            break;
        case "sports":
            objToReturn.push
            (
            <Row key={4} className="analysis container-2">
                <Col>
                <Image src={rfive} width="70%"></Image>
                </Col>
                <Col>
                <p>Based on your interactions, it seems that you are interested in sports.
                    Here's an ad that may be generated for you in attempt to get to 
                    purchase tickets for a sporting event. 
                </p>
                </Col>
            </Row>
            )
            break;
        case "pets":
            objToReturn.push
            (
            <Row key={5} className="analysis container-2">
                <Col>
                <Image src={rsix} width="70%"></Image>
                </Col>
                <Col>
                <p>Based on your interactions, it seems that you are interested in pets.
                    Here's an ad that may be generated for you in attempt to get you to buy more items
                    for your pet. You may see the ad and remember that your dog is out of food, provoking
                    you to buy the food from this particular seller.  
                </p>
                </Col>
            </Row>
            )
            break;
        default:
            objToReturn.push
            (
            <Row key={3} className="analysis container-2">
                <Col>
                <Image src={rfour} width="90%"></Image>
                </Col>
                <Col>
                <p>Based on your interactions, it seems that you are interested in clothing.
                    Here's an ad that may be generated for you in attempt to get you to buy more clothes. 
                </p>
                </Col>
            </Row>
            )
            break;
    }

    // switch statement which displays the determined location
    // based on the most commonly selected one, as calculated above.

    switch(final_location){
        case "east coast":
            objToReturn.push
            (
            <Row key={6} className="analysis container-3">
                <Col>
                <p>Based on your interactions, you may be interested in or located on the east coast.
                    Here's a travel destination ad that may be recommended for you because you may 
                    want to travel on the east coast. 
                </p>
                </Col>
                <Col>
                <Image src={rseven} width="70%"></Image>
                </Col>
            </Row>
            )
            break;
        case "west coast":
            objToReturn.push
            (
            <Row key={7} className="analysis container-3">
                <Col>
                <p>Based on your interactions, you may be interested in or located on the west coast.
                    Here's a travel destination ad that may be recommended for you because you may 
                    want to travel on the west coast. 
                </p>
                </Col>
                <Col>
                <Image src={reight} width="70%"></Image>
                </Col>
            </Row>
            )
            break;
        case "south":
            objToReturn.push(
            <Row key={8} className="analysis container-3">
                <Col>
                <p>Based on your interactions, you may be interested in or located in the south.
                    Here's a travel destination that may be recommended for you because you may 
                    want to travel to southern states like Florida. 
                </p>
                </Col>
                <Col>
                <Image src={rnine} width="70%"></Image>
                </Col>
            </Row>
            )
            break;
        default:
            objToReturn.push
            (
            <Row key={6} className="analysis container-3">
                <Col>
                <p>Based on your interactions, you may be interested in or located on the east coast.
                    Here's a travel destination ad that may be recommended for you because you may 
                    want to travel on the east coast. 
                </p>
                </Col>
                <Col>
                <Image src={rseven} width="70%"></Image>
                </Col>
            </Row>
            )
            break;
    }

    // switch statement which displays the determined political affliation
    // based on the most commonly selected one, as calculated above.

    switch(final_politics){
        case "liberal":
            objToReturn.push(
            <Row key={9} className="analysis container-4">
                <Col>
                <Image src={rten} width="60%"></Image>
                </Col>
                <Col>
                <p>Based on your interactions, you may have liberal political ideologies. A tweet from a
                    news source like CNN may be recommended for you on your timeline as you are most likely to read their articles.  
                </p>
                </Col>
            </Row>
            )
            break;
        case "undetermined":
            objToReturn.push(
            <Row key={10} className="analysis container-4">
                <Col>
                <Image src={releven} width="60%"></Image>
                </Col>
                <Col>
                <p>Based on your interactions, we are unable to determine your political ideologies. A tweet 
                    from a non-biased news source like the Associated Press may be recommended for you on your 
                    timeline as you are most likely to read their articles.  
                </p>
                </Col>
            </Row>
            )
            break;
        default:
            objToReturn.push(
            <Row key={9} className="analysis container-4">
                <Col>
                <Image src={rten} width="60%"></Image>
                </Col>
                <Col>
                <p>Based on your interactions, you may have liberal political ideologies. A tweet from a
                    news source like CNN may be recommended for you on your timeline as you are most likely to read their articles.  
                </p>
                </Col>
            </Row>
            )
            break;
    }

    return objToReturn
}
 
    // the main content of the page
    return (
        <div>
        <Container className="content container-1">
            <p>Imagine you're scrolling through your instagram feed one morning, <br/>select the photo 
                from the options below that you would like.</p>
            <Row>
                <Col>
                <Image src={one} width="65%"></Image>
                <Form.Check
                type="radio"
                name="group1"
                label=""
                onChange={() => addImgs(0)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={two} width="60%"></Image>
                <Form.Check
                type="radio"
                name="group1"
                label=""
                onChange={() => addImgs(1)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={three} width="75%"></Image>
                <Form.Check
                type="radio"
                name="group1"
                label=""
                onChange={() => addImgs(2)}>
                </Form.Check>
                </Col>
                
            </Row>
        </Container>

        <Container className="content container-2">
            <p>You're taking an afternoon break by browsing through a news site. <br/> Which of these articles would you read?</p>
            <Row>
                <Col>
                <Image src={four} width="80%"></Image>
                <Form.Check
                type="radio"
                name="group2"
                label=""
                onChange={() => addImgs(3)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={five} width="60%"></Image>
                <Form.Check
                type="radio"
                name="group2"
                label=""
                onChange={() => addImgs(4)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={six} width="80%"></Image>
                <Form.Check
                type="radio"
                name="group2"
                label=""
                onChange={() => addImgs(5)}>
                </Form.Check>
                </Col>
                
            </Row>
        </Container>

        <Container className="content container-3">
            <p>Its later in the day and you find youself doing some online shopping. <br/> Of these items, which could you see yourself potentially buying?</p>
            <Row>
                <Col>
                <Image src={seven} width="60%"></Image>
                <Form.Check
                type="radio"
                name="group3"
                label=""
                onChange={() => addImgs(6)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={eight} width="70%"></Image>
                <Form.Check
                type="radio"
                name="group3"
                label=""
                onChange={() => addImgs(7)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={nine} width="80%" ></Image>
                <Form.Check
                type="radio"
                name="group3"
                label=""
                onChange={() => addImgs(8)}>
                </Form.Check>
                </Col>
                
            </Row>
        </Container>

        <Container className="content container-4">
            <p>You end your night with some Netflix. <br/> Of these options, pick the one you would be most interested in watching.</p>
            <Row>
                <Col>
                <Image src={ten} width="80%"></Image>
                <p className="tv">Fiercely independent single mom Lorelai raises gifted, 
                    Ivy League-bound daughter Rory amid a continual stream of quick-witted repartee.</p>
                <Form.Check
                type="radio"
                name="group4"
                label=""
                onChange={() => addImgs(9)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={eleven} width="80%"></Image>
                <p className="tv">This docuseries chronicles the rise of superstar 
                Michael Jordan and the 1990s Chicago Bulls, with unaired footage 
                from an unforgettable 1997-98 season.</p>
                <Form.Check
                type="radio"
                name="group4"
                label=""
                onChange={() => addImgs(10)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={twelve} width="80%"></Image>
                <p className="tv">In 1987 New York, LGBTQ ball fixture Blanca 
                starts her own house, soon becoming mother to a gifted dancer 
                and a sex worker in love with a yuppie client.</p>
                <Form.Check
                type="radio"
                name="group4"
                label=""
                onChange={() => addImgs(11)}>
                </Form.Check>
                </Col>
                
            </Row>
        </Container>

        <Container className="bttn">
        <Button variant="primary" type="submit" onClick={() => formSubmitPressed()}>
                Submit
        </Button> 
        </Container>

        {formSubmitted &&
            
            <Container>
                <h5 className="btm-header">Based on your (simulated) browsing history, <br/>here's what the algorithm learned about you:</h5>
                <p className="btm-txt">These results are not based on any one specific action above, 
                    but a conglomeration of all your actions. This illustrates how 
                    media algorithms pick up data over many different instances and
                    use <em>all</em> of this data to influence your online activity. </p>
                {displayAnalysis()}        
            </Container>
        }

        </div>
    )
}



export default Content;