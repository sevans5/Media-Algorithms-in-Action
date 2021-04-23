import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


import { useState } from 'react';

import '../styles.css'
import photo from '../assets/placeholder.jpeg'


const Content = (props) => {

const info = [
    {
        content: "nature", 
        color: "green"
    }, 
    {
        content: "city", 
        color: "blue"
    }, 
    {
        content: "space", 
        color: "black"
    },
    {
        content: "space", 
        color: "green"
    }, 
    {
        content: "city", 
        color: "green"
    }, 
    {
        content: "nature", 
        color: "green"
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
    }

    console.log("here")
    var temp = selectedImgIndexes
    for(var i = 0; i < numbers.length; i++){
        if(temp.includes(numbers[i])){
            // Remove it!
            temp = temp.filter(function(item){
                return item != numbers[i]
            })
            
        }
    }

    // Add it!
    temp.push(number)
    setSelectedImgIndexes(temp)
    console.log(temp)  
    //console.log(selectedImgIndexes)

}

const formSubmitPressed = () => {
    setFormSubmitted(true)
}

const displayAnalysis = () => {
    var objToReturn = []
    var finalObjs = []
    for(var i = 0; i < selectedImgIndexes.length; i++) {
        var selectedImg = info[selectedImgIndexes[i]]
        finalObjs.push(selectedImg)
        console.log(`your color was ${selectedImg.color}`);
    }

    for(var i = 0; i < finalObjs.length; i++){

    }
    var s_content = finalObjs.reduce(function(sums, entry){
        sums[entry.content] = (sums[entry.content] || 0) + 1
        return sums
    }, {});
    var s_color = finalObjs.reduce(function(sums, entry){
        sums[entry.color] = (sums[entry.color] || 0) + 1
        return sums
    }, {});
    var final_content = Object.keys(s_content).reduce((a,b) => {return s_content[a] > s_content[b] ? a : b}) 
    console.log(final_content)

    var final_color = Object.keys(s_color).reduce((a,b) => {return s_color[a] > s_color[b] ? a : b})
    console.log(final_color)

    switch(final_content){
        case "nature":
            objToReturn.push(
            <Image key={0} src={photo} width="90%" height="50%"></Image>
            )
            break;
        case "space":
            objToReturn.push(<p key={1}>space return</p>)
            break;
        case "city":
            objToReturn.push(<p key={2}>city return</p>)
            break;
    }

    switch(final_color){
        case "green":
            objToReturn.push(
            <Image key={3} src={photo} width="90%" height="50%"></Image>
            )
            break;
        case "black":
            objToReturn.push(<p key={4}>black return</p>)
            break;
        case "blue":
            objToReturn.push(<p key={5}>blue return</p>)
            break;
    }

    return objToReturn
    //let max = Math.max(s.content)
    //console.log(max)
    
}
 

    return (
        <div>
        <Container>
            <p>You're scrolling through your instagram feed. Check the photos you would like.</p>
            <Row>
                <Col>
                <Image src={photo} width="90%" height="50%"></Image>
                <Form.Check
                type="radio"
                name="group1"
                label="this one"
                onChange={() => addImgs(0)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={photo} width="90%" height="50%"></Image>
                <Form.Check
                type="radio"
                name="group1"
                label="this one"
                onChange={() => addImgs(1)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={photo} width="90%" height="50%"></Image>
                <Form.Check
                type="radio"
                name="group1"
                label="this one"
                onChange={() => addImgs(2)}>
                </Form.Check>
                </Col>
                
            </Row>
        </Container>

        <Container>
            <p>You're scrolling through a news site. Check the articles you would read.</p>
            <Row>
                <Col>
                <Image src={photo} width="90%" height="50%"></Image>
                <Form.Check
                type="radio"
                name="group2"
                label="this one"
                onChange={() => addImgs(3)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={photo} width="90%" height="50%"></Image>
                <Form.Check
                type="radio"
                name="group2"
                label="this one"
                onChange={() => addImgs(4)}>
                </Form.Check>
                </Col>

                <Col>
                <Image src={photo} width="90%" height="50%"></Image>
                <Form.Check
                type="radio"
                name="group2"
                label="this one"
                onChange={() => addImgs(5)}>
                </Form.Check>
                </Col>
                
            </Row>
        </Container>

        <Button variant="primary" type="submit" onClick={() => formSubmitPressed()}>
            Submit
         </Button> 

       
        {formSubmitted &&
            
            <Container>
                <p>Based on your browsing history, here's what we a media algorithm may reccomend to you</p>
                {displayAnalysis()}        
            </Container>
        }


        </div>
    )
}



export default Content;