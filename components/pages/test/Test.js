import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default  class TestScreen extends  React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button transparent light>
            <Text>Light</Text>
          </Button>
          <Button transparent>
            <Text>Primary</Text>
          </Button>
          <Button transparent success>
            <Text>Success</Text>
          </Button>
          <Button transparent info>
            <Text>Info</Text>
          </Button>
          <Button transparent warning>
            <Text>Warning</Text>
          </Button>
          <Button transparent danger>
            <Text>Danger</Text>
          </Button>
          <Button transparent dark>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}