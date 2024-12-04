import React, {useEffect, useState} from 'react';
import {EventModel} from '../../models';
import StickyHeader from '../StickyHeader/StickyHeader';
import {EventsService} from '../../services';
import {FixedSizeList} from 'react-window';
import EventRow from '../EventRow/EventRow';

const EventList = () => {
  const [events, setEventsData] = useState<EventModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const getEvents = () => {
    setLoading(true);
    EventsService.getAllEvents()
      .then((bulletinEventList) => {
        if (bulletinEventList && bulletinEventList.length > 0) {
          setEventsData(bulletinEventList);
        }
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getEvents();

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const RenderRow = ({index, style}: {index: number; style: React.CSSProperties}) => {
    return (
      <div style={style}>
        <EventRow eventItem={events[index]} />
      </div>
    );
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <>
          <StickyHeader totalEventCount={events.length} />
          <FixedSizeList
            width="100%"
            height={viewportHeight - 58}
            itemCount={events.length}
            itemSize={90}
          >
            {RenderRow}
          </FixedSizeList>
        </>
      )}
    </div>
  );
};

export default EventList;
