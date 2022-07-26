import {userCredential} from "../model/userCredential";

const adminUserCredential = userCredential('admin@gmail.com', '123456');

export function loginService() {
    const authenticate = function (userCredential) {
        return userCredential.username === adminUserCredential.username && userCredential.password === adminUserCredential.password;
    }

    return {
        authenticate
    }
}
