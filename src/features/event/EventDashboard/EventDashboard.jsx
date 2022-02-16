import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import EventForm from '../EventForm/EventForm';
import EventList from './../EventList/EventList';
class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
        <EventList />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive>Add Event</Button>
           <EventForm />
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
