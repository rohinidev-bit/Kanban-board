import React , {useState, useEffect  } from "react";
import EditableElement from "../Edit.js/EditableElement";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Picker from 'emoji-picker-react';
const Home = () =>{
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };
    
        return(
            <div>
                <div className="App">
                <div>
                <EditableElement>
                <h1>

                       
                        {chosenEmoji ? (
                            <span>  {chosenEmoji.emoji}</span>
                        ) : (
                            <span>✋ Untitled</span>
                        )}
                        <Picker onEmojiClick={onEmojiClick} shouldCloseOnOverlayClick={true} />
                        </h1>     
                </EditableElement>
                </div>
                <Container>
                <Row md={12}>
                    <Col xs={ 3 }>To Do</Col>
                    <Col xs={ 3 }>Doing</Col>
                    <Col xs={ 3 }>Done</Col>
                    <Col xs={ 3 }>No Status</Col>    
                </Row>
            </Container>
            </div>
        </div>
        )
        
}

export default Home;