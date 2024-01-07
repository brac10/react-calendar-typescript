import React from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

interface Item {
  id: number;
  group: number;
  title: string;
  start_time: moment.Moment;
  end_time: moment.Moment;
}

interface Group {
  id: number;
  title: string;
}

const MyTimeline: React.FC = () => {
  const items: Item[] = [
    {
      id: 1, 
      group: 1, 
      title: 'Galaxy 5', 
      start_time: moment(), 
      end_time: moment().add(1, 'hour')
    },
    {
      id: 2, 
      group: 2, 
      title: 'ISS-03', 
      start_time: moment().add(-0.5, 'hour'), 
      end_time: moment().add(0.5, 'hour')
    },
     {
      id: 3, 
      group: 3, 
      title: 'ISS-04', 
      start_time: moment().add(-0.5, 'hour'), 
      end_time: moment().add(0.5, 'hour')
    },
    {
      id: 4, 
      group: 4, 
      title: 'ISS-06', 
      start_time: moment().add(-0.5, 'hour'), 
      end_time: moment().add(0.5, 'hour')
    }
  ];
  const groups: Group[]= [
    { 
      id: 1, 
      title: 'PDS-RME01' 
    },
    {
      id: 2, 
      title: 'PDS-RME02' 
    },
    {
      id: 3, 
      title: 'PDS-RME03' 
    },
    {
      id: 4, 
      title: 'PDS-RME04' 
    }
  ]; 


  return (
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    />
  );
};

export default MyTimeline;
