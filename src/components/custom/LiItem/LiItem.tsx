export type LiItemType = {
    title: string;
    description: string;
    type: 'pie' | 'chat' | 'time';
};

export const LiItem: React.FC<LiItemType> = ({ title, description, type }) => {
    const img = {
        pie: "bg-[url('/src/images/TimeLi.svg')] ",
        chat: "bg-[url('/src/images/PieChartLi.svg')]",
        time: "bg-[url('/src/images/ChatLi.svg')]",
    }

    return (<div className="flex gap-2 min-[744px]:col-span-6 min-[375px]:col-span-4 min-[375px]:gap-y-6">
        <div className='block min-w-12 max-h-12 bg-[#BBEE85] border-2 border-black rounded-sm'>
            <div className={`
                relative 
                top-[50%] 
                left-[50%] 
                translate-x-[-50%]
                translate-y-[-50%]
                size-6
                `}>
                <div className={`
                    absolute 
                    size-full 
                    ${img[type]} 
                    bg-cover`}></div>
            </div>
        </div>

        <div>
            <h2 className='font-oswald text-li uppercase'>{title}</h2>

            <p className='text-descLi text-[#616E7C] font-lato min-[744px]:max-w-[315px] min-[375px]:max-w-[100%]'>
                {description}
            </p>
        </div>
    </div>);
}