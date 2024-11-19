type Option = {
    optionTitle: string;
    optionPrice: string;
};

export type CardType = {
    title: string;
    imageSrc: string;
    options: Option[];
};

export const Card: React.FC<CardType> = ({ title, options, imageSrc }) => {
    return (
    <div className={`
        block
        min-[1000px]:col-span-3
        min-[744px]:col-span-4
        col-span-2
        border-2
        overflow-hidden
        rounded-t-2xl
        `}>
        <div className="relative w-full pb-[105.6%] overflow-hidden">
            <img
                src={imageSrc}
                alt="Product"
                className={`
                    absolute
                    top-0 
                    left-0 
                    size-full 
                    object-cover 
                    duration-150 
                    hover:scale-125 
                    cursor-pointer
                `}
            />
        </div>

        <div className={`
            flex
            flex-col
            min-[1440px]:p-4
            p-3
            gap-4
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
                            {opt.optionPrice}грн
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>);
}