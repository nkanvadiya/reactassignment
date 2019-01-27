import ActionsTypes from '../../constants/actionsType';

export const fetchAcceptedUser = (payload) => {
    return {
        type: ActionsTypes.FETCH_ACCEPTED_USER,
        payload : [ payload ]
    }
};

export const fetchRejectedUser = (payload) => {
    return {
        type: ActionsTypes.FETCH_REJECTED_USER,
        payload : [ payload ]
    }
};