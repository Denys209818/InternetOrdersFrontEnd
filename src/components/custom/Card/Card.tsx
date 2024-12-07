import { DishIngredient } from "../../../redux/types/dishTypes";

export type Option = {
    id: number;
    sizeId: number;
    optionTitle: string;
    optionPrice: string;
};

export type CardType = {
    id: number;
    title: string;
    imageSrc: string;
    options: Option[];
    defaultOptions: DishIngredient[];
    ingredOptions: DishIngredient[];
    onClickHandler?: () => void;
};

export const Card: React.FC<CardType> = ({ title, options, imageSrc, onClickHandler }) => {
    return (
    <div className={`
        flex
        flex-col
        min-[1000px]:col-span-3
        min-[744px]:col-span-4
        col-span-2
        border-2
        overflow-hidden
        rounded-t-2xl
        hover:cursor-pointer
        group
        `}
        onClick={onClickHandler}
        >
        <div className="relative w-full pb-[105.6%] overflow-hidden">
            <img
                src={imageSrc || 'images/no-image.jpg'}
                alt="Product"
                className={`
                    absolute
                    top-0 
                    left-0 
                    size-full 
                    object-cover 
                    duration-150 
                    group-hover:scale-125 
                `}
            />
        </div>

        <div className={`
            flex
            flex-col
            h-full
            justify-between
            min-[1440px]:p-4
            p-3
            gap-4
            bg-white
            `}>
            <h3 className={`
                min-[1440px]:text-headerLessTablet
                text-cardTitlePC
                font-literata
                italic
            `}>{title}</h3>

            <div className="flex flex-col gap-2">
                {options.map(opt => (
                    <div className="flex justify-between" key={opt.optionTitle + opt.optionPrice}>
                        <p className={`
                            block
                            font-lato
                            min-[1440px]:text-cardProp
                            text-cardPropPC
                            text-[#525A63]
                        `}>
                            {opt.optionTitle}
                        </p>

                        <p className={`
                            block
                            min-[1440px]:text-cardPrice
                            text-cardPricePC
                            font-literata
                        `}>
                            {opt.optionPrice} грн
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>);
}