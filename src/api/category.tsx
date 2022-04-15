import { CategoryType } from "../types/category";
import instance from "./instance";
import { getLocalStorage } from "../utils/localStorage";
const { token, user } = getLocalStorage();

export const list = () => {
    const url = "/categories";
    return instance.get(url);
};
export const remove = (slug: string) => {
    const url = `/categories/${slug}/${user._id}`;
    return instance.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
export const get = (slug: string | undefined) => {
    const url = `/categories/${slug}`;
    return instance.get(url);
};
export const add = (category: CategoryType) => {
    const url = `/categories/${user._id}`;
    return instance.post(url, category, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
export const update = (product: CategoryType, id: number) => {
    const url = `/categories/${id}/${user._id}`;
    return instance.put(url, product, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
