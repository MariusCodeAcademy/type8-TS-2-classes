"use strict";
const readU = {
    name: 'Jill',
    id: 42,
    role: 'editor',
};
const user = {
    name: 'james',
    id: 15,
    role: 'admin',
};
user.name = 'Jill';
const adUsr = {
    name: 'Mike Admin',
    id: 55,
    role: 'admin',
    logName(prefix) {
        console.log(prefix);
    },
};
