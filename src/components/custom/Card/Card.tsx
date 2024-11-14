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
    <div className="block col-span-3 border-2 overflow-hidden rounded-t-2xl">
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

        <div className="flex flex-col p-4 gap-4">
            <h3 className="text-headerLessTablet font-literata italic">{title}</h3>

            <div className="flex flex-col gap-2">
                {options.map(opt => (
                    <div className="flex justify-between" key={opt.optionTitle + opt.optionPrice}>
                        <p className="block font-lato text-cardProp text-[#525A63]">{opt.optionTitle}</p>
                        <p className="block text-cardPrice font-literata">{opt.optionPrice}грн</p>
                    </div>
                ))}
            </div>
        </div>
    </div>);
}