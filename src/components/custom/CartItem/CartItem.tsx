export type CartItemType = {
    id: number;
    imageUrl: string;
    title: string; 
    price: number;
    additionalsCount: number;
    count: number;
    increaseCount: () => void;
    decreaseCount: () => void;
};

export const CartItem: React.FC<CartItemType> = ({
    imageUrl,
    title,
    price,
    count,
    additionalsCount,
    increaseCount,
    decreaseCount 
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
                    <h3 className="text-cartTitle font-literata italic">{title}</h3>

                    <p className="text-cartText font-lato text-[#525A63]">
                        {additionalsCount === 0 ? 'Без додатків' : `${additionalsCount} додатків`}
                    </p>

                    <div className="absolute flex justify-center items-center top-0 left-[100%] translate-x-[-100%] size-8 p-[3px]">
                        <div className="block h-[20px] w-[16px] bg-trash bg-center bg-no-repeat"></div>
                    </div>
                </div>

                <div className="relative flex gap-4 justify-end">
                    <button
                        disabled={count === 1}
                        className="flex justify-center items-center border size-8 outline-none bg-white"
                        onClick={decreaseCount}
                    >
                        <div className="block bg-center size-6 bg-minus"></div>
                    </button>

                    <div className="flex justify-center items-center">
                        <p className="block h-8 text-cartCountText font-lato">{count}</p>
                    </div>

                    <button
                        className="flex justify-center items-center border size-8 outline-none bg-black"
                        onClick={increaseCount}
                    >
                        <div className="block bg-center size-6 bg-plus"></div>
                    </button>
                </div>

                <div className="flex justify-end">
                    <p className="font-literata text-cartPriceText text-[#525A63] italic">
                        {price * count} грн
                    </p>
                </div>
            </div>
        </div>
    );
}