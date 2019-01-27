import { combineEpics } from 'redux-observable';
import { fetchUserEpic } from "./users";

export const rootEpic = combineEpics(
    fetchUserEpic
);
