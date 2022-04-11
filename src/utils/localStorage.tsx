import { User } from "../types/user";
export const setLocalStorage = (user: User, next: () => void) => {
    localStorage.setItem("user", JSON.stringify(user));
    next();
};
export const getLocalStorage = () => {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user") || "");
    }
    return false;
};
export const removeLocalStorage = () => {
    if (localStorage.getItem("user")) {
        return localStorage.removeItem("user");
    }
};
