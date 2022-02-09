import React, {Component} from 'react';
import EventListAttendee from './EventListAttendee';
import EventListItem from './EventListItem';

class EventList extends Component{
    render(){
        return(
            <>
            <EventListAttendee/>
            <EventListItem />
            </>
        )
    }
}

export default EventList;
