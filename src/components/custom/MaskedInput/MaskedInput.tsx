import classNames from 'classnames';
import { LegacyRef } from 'react';
import { IMaskMixin } from 'react-imask';

type InputType = {
    type: string;
    placeholder: string;
    name: string;
    isEmpty: boolean;
    errors: string[];
    onClickHandler: () => void;
};

export const MaskedInput = IMaskMixin(({ inputRef, ...props }) => {
    const { type, placeholder, isEmpty, name, errors, onClickHandler } = props as InputType;
    const isInvalid = errors.length > 0;

    const divStyles = !isEmpty ? 'text-inputPlaceholder top-2 left-6 translate-y-0' : `
            top-[50%]
            translate-y-[-50%]
            left-6
            group-focus-within:text-inputPlaceholder
            group-focus-within:top-2
            group-focus-within:translate-y-0
        `;
    const inputStyles = !isEmpty ? 'pb-2 pt-6' : 'py-4 group-focus-within:pb-2 group-focus-within:pt-6';

    return (
        <div className="relative">
            <div className='relative group' onClick={onClickHandler}>
                <p className={`
                    absolute
                    block
                    font-lato
                    text-input
                    text-[#525A63]
                    pointer-events-none
                    duration-75
                    ${divStyles}
                `}>
                    {placeholder}
                </p>

                <input
                    ref={inputRef as LegacyRef<HTMLInputElement>}
                    type={type}
                    autoComplete='off'
                    name={name}
                    id={name}
                    className={classNames(
                        "block " +
                        "size-full " +
                        "px-6 " +
                        `${inputStyles} ` +
                        "bg-white " +
                        "font-lato " +
                        "text-input " +
                        "text-[#525A63] " +
                        "outline-none " +
                        "duration-75 " +
                        "focus:border-2 focus:border-black ",
                        { 'border-2 border-[#E4E7EE]': !isInvalid },
                        { 'border-2 border-[#B20508]': isInvalid }
                    )
                    }
                />
            </div>
        </div>
    )
})