import React, {Component} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

class EventForm extends Component{
    render(){
        return(
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Event Title</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input type='date' placeholder='Event Date'/>
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input placeholder='City at which event is held' />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input placeholder='Venue of Event' />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted by</label>
                        <input placeholder='Name of the Event Host' />
                    </Form.Field>
                    <Button type='submit' positive>Submit</Button>
                    <Button type='button'>Cancel</Button>
                </Form>
            </Segment>
        )
    }
}

export default EventForm;