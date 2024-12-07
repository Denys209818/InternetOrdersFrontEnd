export type FetchCategory = {
    id: number;
    signal: AbortSignal | null | undefined;
}

export type FetchAdditional = {
    id: number,
    title: string,
    measure: string,
    price: number,
    itSize: boolean,
    disabled: boolean
};

export type FetchSizePriceOptions = {
    id: number,
    sizeId: number,
    title: string,
    price: number,
};

export type FetchDefaultOptions = {
    id: number,
    title: string,
    measure: string|null,
    price: number,
    itSize: boolean,
    disabled: boolean,
}

export type FetchIngredOptions = {
    title: string,
    allowMultiple: boolean,
    options: FetchDefaultOptions[],
}

export type FetchDish = {
    id: number,
    title: string,
    timecook: number,
    description: string,
    imageSrc: string,
    sizePriceOptions: FetchSizePriceOptions[],
    defaultOptions: FetchDefaultOptions[],
    ingredOptions: FetchIngredOptions[],
};

export type FetchCategoryResult = {
    name: string;
    additionalOptions: FetchAdditional[];
    dishesList: FetchDish[];
}
