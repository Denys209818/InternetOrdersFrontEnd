import { DishCart } from "../redux/types/dishTypes"

export const addCartItem = (dish: DishCart) => {
    const cart = (JSON.parse(localStorage.getItem('cart') || '') || []) as DishCart[];

    cart.push(dish);

    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeCartItem = (id: string) => {
    let cart = (JSON.parse(localStorage.getItem('cart') || '') || []) as DishCart[];

    cart = cart.filter(item => item.id !== id);

    localStorage.setItem('cart', JSON.stringify(cart));
}

export const editCartItem = (id: string, payload: number) => {
    let cart = (JSON.parse(localStorage.getItem('cart') || '') || []) as DishCart[];
    const index = cart.findIndex(item => item.id === id);
    const found = { ...cart[index], count: cart[index].count + payload };

    cart = [
        ...cart.slice(0, index),
        found,
        ...cart.slice(index + 1)
    ];

    localStorage.setItem('cart', JSON.stringify(cart));
}

export const getAllCartItems = () => {
    return (JSON.parse(localStorage.getItem('cart') || '') || []) as DishCart[]
}