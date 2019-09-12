import React from 'react';
import { Container, Header, Button, } from "semantic-ui-react";
import Choice from './components/Choice.js'

class App extends React.Component {
  state = {
    choices: [
      {id: 1, name: "Rock"},
      {id: 2, name: "Paper"},
      {id: 3, name: "Scissors"},
    ]
  };


  render() {
    return (
      <>
      <Container>
      <Header 
      as="h1" 
      style={{ marginTop: "25px"}} 
      textAlign="center">
        Rock Paper Scissors
        <hr/>
      </Header>
      </Container>
      <Choice choices={this.state.choices} />
      <br/>
      <Container 
      as="h3"
      textAlign="center">
        Your Choice:<p></p>
      </Container>
      <Container 
      as="h3"
      textAlign="center">
        Computer Choice:<p></p>
      </Container>
      <br/>
      <br/>
      <br/>
      <Container textAlign="center">
        <Button>
        Play
        </Button>
      </Container>
      </>
    );
  }
}

export default App;
