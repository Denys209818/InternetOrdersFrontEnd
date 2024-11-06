export type CardMenuType = {
    title: string;
    type: 'shawarma' | 'pizza' | 'cakes' | 'free' | 'drinks';
    tabletHuge?: boolean;
    isLong?: boolean;
};

export const CardMenu:React.FC<CardMenuType> = ({ title, type, tabletHuge = false, isLong = false }) => {
    const img = {
        shawarma: {
            image: "bg-[url('/src/images/Shawarma.png')]",
            color: "bg-[#FFE9DE]",
            tabletSize: tabletHuge ? 'min-[744px]:col-span-4' : 'min-[744px]:col-span-3',
            pLeft: isLong ? 'pl-1' : 'pl-2',
        },
        pizza: {
            image: "bg-[url('/src/images/Pizza.png')]",
            color: "bg-[#FF8080]",
            tabletSize: tabletHuge ? 'min-[744px]:col-span-4' : 'min-[744px]:col-span-3',
            pLeft: isLong ? 'pl-1' : 'pl-2',
        },
        cakes: {
            image: "bg-[url('/src/images/Cakes.png')]",
            color: 'bg-[#9CC2FF]',
            tabletSize: tabletHuge ? 'min-[744px]:col-span-4' : 'min-[744px]:col-span-3',
            pLeft: isLong ? 'pl-1' : 'pl-2',
        },
        free: {
            image: "bg-[url('/src/images/Free.png')]",
            color: 'bg-custom_yellow',
            tabletSize: tabletHuge ? 'min-[744px]:col-span-4' : 'min-[744px]:col-span-3',
            pLeft: isLong ? 'pl-1' : 'pl-2',
        },
        drinks: {
            image: "bg-[url('/src/images/Drinks.png')]",
            color: "bg-[#FFFFFF]",
            tabletSize: tabletHuge ? 'min-[744px]:col-span-4' : 'min-[744px]:col-span-3',
            pLeft: isLong ? 'pl-1' : 'pl-2',
        },
    }

    return (
        <div className={`
            block 
            min-[1000px]:col-span-3
            ${img[type].tabletSize}
            min-[375px]:col-span-4 
            min-[480px]:col-span-2 
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

            <div className={`flex items-center py-4 ${img[type].pLeft} gap-x-2 border-t-2 border-black ` + img[type].color}>
                <h3 className='block font-literata font-bold min-[1440px]:text-3xl min-[375px]:text-cardTitle'>{title}</h3>

                <div className='relative block size-8'>
                    <div className="absolute top-0.5 size-full bg-[url('/src/images/Right.svg')] bg-cover"></div>
                </div>
            </div>
        </div>
    );
}