import classNames from "classnames";

export type ReadyStateType = {
    title: string;
    text: string;
    background: 'order' | 'cooker' | 'bag';
    disabled?: boolean;
};

export const ReadyState: React.FC<ReadyStateType> = ({ title, text, background, disabled }) => {
    const backgroundStyle = {
        order: {
            bgImage: 'bg-profileorder',
            size: `w-[150px] h-[112px]`,
        },
        cooker: {
            bgImage: 'bg-profilecooker',
            size: `w-[100px] h-[130px]`,
        },
        bag: {
            bgImage: 'bg-profilebag',
            size: `w-[116px] h-[140px]`,
        },
    }

    return (
        <div className={classNames("flex flex-col justify-between col-span-3",
            {
                'opacity-35': disabled
            }
        )}>
            <div className='block'>
                <h3 className='font-literata min-[744px]:text-cardPrice text-menuTitle italic'>
                    {title}
                </h3>

                <p className="block pt-2 pb-4 font-lato text-[#525A63] min-[744px]:text-cardItemInner text-tdTextSmall">
                    {text}
                </p>
            </div>

            <div className={`
                relative
                m-auto
                block
                ${backgroundStyle[background].size}
                ${backgroundStyle[background].bgImage}
                bg-cover
                bg-center
            `}></div>
        </div>
    )
}