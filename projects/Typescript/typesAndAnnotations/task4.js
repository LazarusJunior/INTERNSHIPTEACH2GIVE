"use strict";
//Exercise 4: Function Types
const modifyUser = (users, id, makeChange) => {
    return users.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }
        return u;
    });
};
