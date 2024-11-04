export type CardMenuType = {
    title: string;
    type: 'shawarma' | 'pizza' | 'cakes';
};

export const CardMenu:React.FC<CardMenuType> = ({ title, type }) => {
    const img = {
        shawarma: {
            image: "bg-[url('/src/images/Shawarma.png')]",
            color: "bg-[#FFE9DE]",
        },
        pizza: {
            image: "bg-[url('/src/images/Pizza.png')]",
            color: "bg-[#FF8080]",
        },
        cakes: {
            image: "bg-[url('/src/images/Cakes.png')]",
            color: '',
        },
    }

    return (
        <div className={`
            block 
            col-span-3 
            size-full 
            border 
            border-2 
            border-black 
            overflow-hidden 
            hover:cursor-pointer
            rounded-ss-3xl 
            rounded-se-3xl`}>
            <div className='relative w-full pb-[102.4%] overflow-hidden'>
                <div className={`
                    absolute 
                    top-0 
                    left-0 
                    size-full 
                    ${img[type].image}
                    bg-cover
                    transition
                    duration-300
                    hover:scale-125
                    `}></div>
            </div>

            <div className={'flex items-center p-4 gap-x-3 border-t-2 border-black ' + img[type].color}>
                <h3 className='block font-literata font-bold text-3xl'>{title}</h3>

                <div className='relative block size-8'>
                    <div className="absolute top-0.5 size-full bg-[url('/src/images/Right.svg')] bg-cover"></div>
                </div>
            </div>
        </div>
    );
}