import React from 'react';
import { Container, Header, Button, Icon } from "semantic-ui-react";

class Choice extends React.Component {

handleClick = (name) => {
    let i = rando()
    const compChoice = ["rock", "paper", "scissors"]
    let comp = compChoice(i)
    
}; 


render() {
    return (
<Container textAlign="center">
        <Button onClick={() => this.handleClick("rock")}
        animated="fade">
            <Button.Content visible>Rock</Button.Content>
            <Button.Content hidden>
            <Icon name="hand rock outline"/>
            </Button.Content>
        </Button>
        <Button 
        animated="fade">
            <Button.Content visible>Paper</Button.Content>
            <Button.Content hidden>
            <Icon name="hand paper outline"/>
            </Button.Content>
        </Button>
        <Button animated="fade">
            <Button.Content visible>Scissors</Button.Content>
            <Button.Content hidden>
            <Icon name="hand scissors outline"/>
            </Button.Content>
        </Button>
    </Container>
    
    );
}

};

export default Choice;