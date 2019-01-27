import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import ActionsTypes from '../../constants/actionsType';
import Immutable from 'immutable';

const domain = "https://randomuser.me/";
const baseURL = domain + '/api/?results=10&page=';

export const fetchUsers = pageNumber => ({ type: ActionsTypes.FETCH_USERS, payload: pageNumber });
export const fetchUserFulfilled = payload => ({ type: ActionsTypes.FETCH_USER_FULFILLED, payload });

// epic
export const fetchUserEpic = action$ => action$.pipe(
    ofType(ActionsTypes.FETCH_USERS),
    mergeMap(action =>
      ajax.getJSON( baseURL + action.payload ).pipe(
        map(response => fetchUserFulfilled(response))
      )
    )
  );

