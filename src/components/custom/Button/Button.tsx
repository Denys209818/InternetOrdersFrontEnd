type ButtonType = {
    title?: string;
    background?: 'transparent' | 'white' | 'black';
    image?: 'back' | 'plus' | 'minus' | 'cake' | '';
    sizeBtn?: 'huge' | 'small';
    additionalImage?: 'google' | 'instagram' | 'clock' | 'card' | '';
    type?: "button" | "submit" | "reset" | undefined;
    onClickHandler?: () => void;
    disabled?: boolean;
    isBackWhite?: boolean; 
    widthFull?: boolean; 
    hasGreenBack?:boolean;
    hasMaxWidth?: boolean;
    hasSmallerSize?:boolean;
}

export const Button:React.FC<ButtonType> = ({ 
    title = '', 
    background = 'transparent', 
    image = '', 
    sizeBtn = 'small',
    additionalImage = '',
    type = 'button',
    disabled = false,
    widthFull = false,
    hasGreenBack = false,
    hasSmallerSize = false,
    hasMaxWidth = false,
    onClickHandler,
}) => {

    const btnStyles = {
        transparent: {
            background: 'transparent',
            color: 'black'
        },
        black: {
            background: 'bg-black border-black',
            color: 'text-white hover:text-black',
        },
        white: {
            background: 'bg-white',
            color: 'text-black',
        },
        huge: `px-6 ${additionalImage ? 'py-3.5': 'py-4'} w-full hover:bg-[#BBEE85]`,
        small: `
            ${hasSmallerSize ? 'size-8' : (hasMaxWidth ? 'size-[56px] min-w-[56px]' : 'size-10')}
            hover:bg-[#BBEE85]
            ${hasGreenBack ? 'hover:border-white' : ''}
        `,
        google: {
            additionalImage: "bg-[url('/src/images/EnterIcon.svg')]",
            additionalImageBlack: "bg-[url('/src/images/EnterIcon.svg')]",
            additionalImageDisabled: "bg-[url('/src/images/EnterIcon.svg')]",
        },
        instagram: {
            additionalImage: "bg-[url('/src/images/InstagramWhite.svg')]",
            additionalImageBlack: "bg-[url('/src/images/Instagram.svg')]",
            additionalImageDisabled: "bg-[url('/src/images/Instagram.svg')]",
        },
        clock: {
            additionalImage: "bg-clock_fill",
            additionalImageBlack: "bg-clock_fill",
            additionalImageDisabled: "bg-clock_fill",
        },
        card: {
            additionalImage: 'bg-creditCard',
            additionalImageBlack: 'bg-creditCard',
            additionalImageDisabled: "bg-creditCardSilver",
        },
        plus: {
            additionalImage: 'bg-plus',
            additionalImageBlack: 'bg-plusBlack',
            additionalImageDisabled: "bg-plus",
        },
        back: {
            additionalImage: "bg-[url('/src/images/Back.svg')]",
            additionalImageBlack: hasGreenBack ? "bg-[url('/src/images/Back-hover.svg')]" : "bg-[url('/src/images/Back.svg')]",
            additionalImageDisabled: "bg-[url('/src/images/Back.svg')]",
        },
        minus: {
            additionalImage: 'bg-minus',
            additionalImageBlack: 'bg-minus',
            additionalImageDisabled: "bg-minusDisabled",
        },
        cake: {
            additionalImage: 'bg-basket',
            additionalImageBlack: 'bg-basketblack',
            additionalImageDisabled: "bg-basket",
        },
    };

    const widthStyles = widthFull ? 'w-full' : 'max-w-[464px]';

    const disabledStyles = background === 'black' ?
        `
            disabled:bg-[#9AA5B1]
            disabled:border-0
            disabled:hover:text-white
        ` :
        `
            disabled:bg-transparent
            disabled:border-2
            disabled:border-[#9AA5B1]
            disabled:hover:text-[#9AA5B1]
            disabled:text-[#9AA5B1]
        `;

    const btnStyle = `
        relative 
        block 
        border
        border-black
        outline-black
        min-[744px]:col-span-1 
        min-[375px]:col-span-2 
        transition 
        duration-300 
        ease-in-out 
        group
        ${widthStyles}
        ${disabledStyles} 
        ${btnStyles[sizeBtn]}
        ${btnStyles[background].background} 
        ${btnStyles[background].color}
    `;

    return (<button
        type={type}
        className={btnStyle}
        onClick={onClickHandler}
        disabled={disabled}
        >
        {title && (
            <div className="flex justify-center items-center gap-2">
                <p className={`block text-btn text-nowrap font-lato`}>
                    {title}
                </p>

                {additionalImage && !disabled && <div className="relative block size-6">
                    <div className={`
                        absolute
                        top-[1px]
                        block
                        size-full
                        opacity-1
                        ${btnStyles[additionalImage].additionalImage}
                        bg-cover
                        duration-300
                        group-hover:opacity-0
                    `}></div>
                    
                    <div className={`
                        absolute
                        top-[1px]
                        block
                        size-full
                        opacity-0
                        ${btnStyles[additionalImage].additionalImageBlack}
                        bg-cover
                        duration-300
                        group-hover:opacity-100
                    `}></div>
                </div>}

                {additionalImage && disabled && (
                    <div className="relative block size-6"> 
                        <div className={`
                           absolute
                           top-[1px]
                           block
                           size-full
                           ${btnStyles[additionalImage].additionalImageDisabled}
                           bg-cover
                        `}></div>
                    </div>
                )}
            </div>
        )}

        {image && !disabled && (<>
            <div className={`
                absolute 
                top-[50%]
                left-[50%]
                transform 
                -translate-x-1/2 
                -translate-y-1/2
                block 
                size-6 
                ${btnStyles[image].additionalImage}
                bg-cover
                transition duration-300 ease-in-out
                opacity-100
                group-hover:opacity-0
                `}>
            </div>

            <div className={`
                absolute 
                top-[50%]
                left-[50%]
                transform 
                -translate-x-1/2 
                -translate-y-1/2
                block
                size-6 
                ${btnStyles[image].additionalImageBlack}
                bg-cover
                transition duration-300 ease-in-out
                opacity-0
                group-hover:opacity-100
                `}>
            </div>
        </>)}

        {image && disabled && (
            <div className={`
                absolute 
                top-[50%]
                left-[50%]
                transform 
                -translate-x-1/2 
                -translate-y-1/2
                block 
                size-6 
                ${btnStyles[image].additionalImageDisabled}
                bg-cover
                `}>
            </div>
        )}
    </button>);
}