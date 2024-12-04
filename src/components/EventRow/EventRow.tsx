import React from 'react';
import {EventModel} from '../../models';
import {renderHeaders, renderRates} from '../../utils/TableColumns';

interface Props {
  eventItem: EventModel;
}

const EventRow: React.FC<Props> = ({eventItem}: Props) => {
  return (
    <table>
      <colgroup>
        <col className="col-first" />
        <col className="col-second" />
        <col className="col-other" />
      </colgroup>
      {renderHeaders(eventItem)}
      {renderRates(eventItem)}
    </table>
  );
};

export default EventRow;
