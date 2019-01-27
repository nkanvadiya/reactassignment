"use strict";

import KeyMirror from "keymirror";

const actionType = KeyMirror({
    FETCH_USER_FULFILLED : null,
    FETCH_USERS : null,
    FETCH_ACCEPTED_USER : null,
    FETCH_REJECTED_USER : null
});

export default actionType;