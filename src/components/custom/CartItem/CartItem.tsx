import Button from "../Button";

export type CartItemType = {
    id: string;
    imageUrl: string;
    title: string; 
    price: number;
    additionalsCount: number;
    count: number;
    increaseCount: () => void;
    decreaseCount: () => void;
    removeItem: () => void;
};

export const CartItem: React.FC<CartItemType> = ({
    imageUrl,
    title,
    price,
    count,
    additionalsCount,
    increaseCount,
    decreaseCount,
    removeItem
}) => {

    return (
        <div className="flex gap-2">
            <div className="block w-[100px]">
                <div className="relative pb-[100%]">
                    <img
                        className="absolute top-0 left-0 size-full border"
                        alt="cart img"
                        src={imageUrl}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
                <div className="relative">
                    <h3 className={`
                        min-[744px]:text-cartTitle
                        text-cartTitlePhone
                        font-literata
                        italic
                    `}>{title}</h3>

                    <p className={`
                        min-[744px]:text-cartText
                        text-cartTextPhone
                        font-lato
                        text-[#525A63]
                    `}>
                        {additionalsCount === 0 ? 'Без додатків' : `${additionalsCount} додатків`}
                    </p>

                    <div className="absolute flex justify-center items-center top-0 left-[100%] translate-x-[-100%] size-8 p-[3px]">
                        <div
                            className="block h-[20px] w-[16px] bg-trash bg-center bg-no-repeat hover:cursor-pointer"
                            onClick={removeItem}
                        ></div>
                    </div>
                </div>

                <div className="relative flex gap-4 justify-end">
                    <Button
                        sizeBtn="small"
                        background="white"
                        disabled={count === 1}
                        onClickHandler={decreaseCount}
                        image="minus"
                        hasSmallerSize
                    />

                    <div className="flex justify-center items-center">
                        <p className="block h-8 text-cartCountText font-lato">{count}</p>
                    </div>

                    <Button
                        sizeBtn="small"
                        background="black"
                        onClickHandler={increaseCount}
                        image="plus"
                        hasSmallerSize
                    />
                </div>

                <div className="flex justify-end">
                    <p className="font-literata min-[744px]:text-cartPriceText text-cartTextPhone text-[#525A63] italic">
                        {price * count} грн
                    </p>
                </div>
            </div>
        </div>
    );
}