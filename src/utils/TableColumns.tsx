import React from 'react';
import {EventModel, EventRateColumnsModel} from '../models';
import EventCell from '../components/EventCell/EventCell';

export const renderRates = (event: EventModel) => {
  const columns: Array<EventRateColumnsModel> = [
    {
      id: 1,
      label: (
        <>
          <span>
            <b>{event.C}</b> {event.T}
          </span>
          <span>{` ${event.N}`}</span>
        </>
      ),
      rateType: '',
      value: '',
    },
    {id: 2, label: 'Yorumlar'},
    {id: 3, label: event.OCG[1].MBS},
    {
      id: 4,
      label: event.OCG[1].OC[0].O,
      rateType: event.OCG[1].OC[0].N,
      value: event.OCG[1].OC[0].O,
    },
    {
      id: 5,
      label: event.OCG[1].OC[1].O,
      rateType: event.OCG[1].OC[1].N,
      value: event.OCG[1].OC[1].O,
    },
    {id: 6, label: ''},
    {
      id: 7,
      label: event.OCG[5].OC[25].O,
      rateType: event.OCG[5].OC[25].N,
      value: event.OCG[5].OC[25].O,
    },
    {
      id: 8,
      label: event.OCG[5].OC[26].O,
      rateType: event.OCG[5].OC[26].N,
      value: event.OCG[5].OC[26].O,
    },
    {id: 9, label: ''},
    {id: 10, label: ''},
    {id: 11, label: ''},
    {id: 12, label: ''},
    {id: 13, label: ''},
    {
      id: 14,
      label: event.OCG[2].OC[3].O,
      rateType: event.OCG[2].OC[3].N,
      value: event.OCG[2].OC[3].O,
    },
    {
      id: 15,
      label: event.OCG[2].OC[4].O,
      rateType: event.OCG[2].OC[4].N,
      value: event.OCG[2].OC[5].O,
    },
    {
      id: 16,
      label: event.OCG[2].OC[5].O,
      rateType: event.OCG[2].OC[5].N,
      value: event.OCG[2].OC[5].O,
    },
    {id: 17, label: ''},
    {id: 18, label: ''},
    {id: 19, label: '3'},
  ];

  return (
    <tbody>
      <tr>
        {columns.map((col: EventRateColumnsModel) => (
          <EventCell key={col.id} event={event} columnData={col} />
        ))}
      </tr>
    </tbody>
  );
};

export const renderHeaders = (event: EventModel) => {
  const headers: Array<EventRateColumnsModel> = [
    {
      id: 1,
      label: (
        <>
          <span>
            {event.D} {event.DAY}
          </span>
          <span>{` ${event.LN}`}</span>
        </>
      ),
    },
    {id: 2, label: 'Yorumlar'},
    {id: 3, label: 'MBS'},
    {
      id: 4,
      label: event.OCG[1].OC[0].N,
    },
    {
      id: 5,
      label: event.OCG[1].OC[1].N,
    },
    {id: 6, label: '2'},
    {
      id: 7,
      label: event.OCG[5].OC[25].N,
    },
    {
      id: 7,
      label: event.OCG[5].OC[26].N,
    },
    {id: 9, label: 'H1'},
    {id: 10, label: '1'},
    {id: 11, label: 'X'},
    {id: 12, label: '2'},
    {id: 13, label: 'H2'},
    {id: 14, label: '1-X'},
    {id: 15, label: '1-2'},
    {id: 16, label: 'X-2'},
    {id: 17, label: 'Var'},
    {id: 18, label: 'Yok'},
    {id: 19, label: '+99'},
  ];

  return (
    <thead>
      <tr>
        {headers.map((column, index) => (
          <EventCell key={index} event={event} columnData={column} />
        ))}
      </tr>
    </thead>
  );
};
