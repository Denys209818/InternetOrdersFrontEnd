export interface DishSize {
    id: number;
    sizeId: number;
    title: string;
    price: number;
}

export interface DishIngredient {
    id: number;
    title: string;
    price: number;
}

export interface AdditionalDishIngredient extends DishIngredient {
}

export interface Dish {
    id: number;
    title: string;
    sizePriceOptions: DishSize[];
    ingredientPriceOptions: DishIngredient[];
    addIngredientPriceOptions: AdditionalDishIngredient[];
    imageSrc: string;
}

export interface DishCart {
    id: string;
    hashId: number;
    title: string;
    price: number;
    count: number;
    additionalCount: number;
    imageSrc: string;
    components?: DishIngredient[];
}

export interface ChangeItemType {
    id: string;
    payload: number;
}