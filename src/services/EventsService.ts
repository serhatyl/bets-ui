import {EventModel} from '../models';
import fetchHelper from '../utils/fetchHelper';

const getAllEvents = async (): Promise<Array<EventModel> | undefined> => {
  try {
    const data = await fetchHelper<Array<EventModel>>('/bets');
    return data;
  } catch (error) {
    console.error('Error when fetching:', error);
    alert(error);
  }
};

export {getAllEvents};
