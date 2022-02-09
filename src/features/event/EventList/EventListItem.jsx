import React, { Component } from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';

class EventListItem extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src='' />
              <Item.Content>
                <Item.Header as='a'>Event Title</Item.Header>
                <Item.Description>
                    Hosted By <a>hosted by</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>

        <Segment>
            <span>
                <Icon name='clock' />Date |
                <Icon name='marker' />time
            </span>
        </Segment>
        <Segment secondary>
            <List horizontal>{/*attendees go here*/}</List>
        </Segment>
        <Segment clearing>
            <Button as='a' color='teal' floated='right' content='View' />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
