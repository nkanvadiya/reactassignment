import Immutable,{ push }  from 'immutable';
import ActionsTypes from '../../constants/actionsType';

const initialState = Immutable.fromJS({
  accepted: [],
  rejected: [],
  users: {},
  isFetching: false
});

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.FETCH_ACCEPTED_USER:
      return state.set('accepted', state.get('accepted').merge( Immutable.fromJS(action.payload) ) );
    case ActionsTypes.FETCH_REJECTED_USER:
      return state.set('rejected', state.get('rejected').merge( Immutable.fromJS(action.payload) ) );
    case ActionsTypes.FETCH_USERS:
      return state.set('isFetching', true );      
    case ActionsTypes.FETCH_USER_FULFILLED:      
      return state.set('users',Immutable.fromJS(action.payload)  ).set('isFetching', false);      
    default:
      return state;
  }
}