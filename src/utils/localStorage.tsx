import { User } from "../types/user";
export const setLocalStorage = (user: User, next: () => void) => {
    localStorage.setItem("user", JSON.stringify(user));
    next();
};
export const getLocalStorage = () => {
    if (!localStorage.getItem("user")) return;
    return JSON.parse(localStorage.getItem("user") as string);
};
export const removeLocalStorage = () => {
    if (!localStorage.getItem("user")) return;
    return localStorage.removeItem("user");
};
