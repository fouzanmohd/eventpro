import React, { Component } from 'react';
import './App.css';
import EventDashboard from './../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import EventList from '../../features/event/EventList/EventList';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container className='main'>
          <EventList />
          <EventList />
          <EventList />
        </Container>
      </>
    );
  }
}

export default App;
