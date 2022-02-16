import React, {Component} from 'react';
import EventListItem from './EventListItem';

class EventList extends Component{
    render(){
        return(
            <>
            {this.props.events.map(evt=>(
                <EventListItem key={evt.id} event={evt}/>
            ))}
            
            </>
        )
    }
}

export default EventList;
