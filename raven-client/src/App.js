import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextDisplayList from './containers/TextDisplayList';
import AddText from './components/AddText';

import { Card } from 'react-md';
import { ListItem, MenuButton } from 'react-md';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuButton
      id="menu-button-2"
      icon
      menuItems={[
        <ListItem key={1} primaryText="Email" />,
        <ListItem key={2} primaryText="Calendar" />,
        <ListItem key={2} primaryText="To Do" />,
        <ListItem key={2} primaryText="Settings" />,
      ]}
      listInline
      centered
      anchor={{
        x: MenuButton.HorizontalAnchors.CENTER,
        y: MenuButton.VerticalAnchors.CENTER,
      }}
    >
      Menu
    </MenuButton>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello!
          </p>
          <AddText />
          <TextDisplayList />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
        <Card>
          Raven Personal Assistant
        </Card>

        

      </div>
    );
  }
}

export default App;
