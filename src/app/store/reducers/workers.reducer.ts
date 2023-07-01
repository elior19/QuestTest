import {EActionTypes} from '../action-types.enum';
import {SetWorkers} from '../actions';
import {Worker} from '../../models/worker';

export function workersReducer(state = [], action: SetWorkers): Worker[] {
  switch (action.type) {
    case EActionTypes.SET_WORKERS: {
      return [].concat(action.payload.workers);
    }

    default: {
      return state;
    }
  }
}

