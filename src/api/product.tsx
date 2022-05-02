import { ProductType } from "../types/product";
import instance from "./instance";
import { getLocalStorage } from "../utils/localStorage";
const userInfo = getLocalStorage();

export const list = () => {
    const url = "/products";
    return instance.get(url);
};
export const remove = (id: number) => {
    const url = `/products/${id}/${userInfo.user._id}`;
    return instance.delete(url, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    });
};
export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const add = (product: ProductType) => {
    const url = `/products/${userInfo.user._id}`;
    return instance.post(url, product, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    });
};
export const update = (product: ProductType, id: number) => {
    const url = `/products/${id}/${userInfo.user._id}`;
    return instance.put(url, product, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    });
};
