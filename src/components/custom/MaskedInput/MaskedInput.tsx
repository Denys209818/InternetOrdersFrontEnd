import classNames from 'classnames';
import { LegacyRef } from 'react';
import { IMaskMixin } from 'react-imask';

type InputType = {
    type: string;
    placeholder: string;
    name: string;
    value: string;
    setValue: (arg: string) => void;
    errors: string[];
};

export const MaskedInput = IMaskMixin(({ inputRef, ...props }) => {
    const { type, placeholder, name, value, setValue, errors } = props as InputType;

    const isInvalid = errors.length > 0;

    return (
        <input
            ref={inputRef as LegacyRef<HTMLInputElement>}
            type={type} 
            placeholder={placeholder}
            autoComplete='off'
            name={name} 
            id={name} 
            value={value} 
            onChange={e => setValue(e.target.value)}
            className={classNames(
                "block " +
                "size-full " + 
                "px-6 " +
                "py-4 " +
                "bg-white " +
                "font-lato " +
                "text-input " +
                "text-[#525A63] " +
                "outline-none " +
                "focus:border-2 focus:border-black ", 
                { 'border-2 border-[#E4E7EE]' : !isInvalid },
                { 'border-2 border-[#B20508]': isInvalid }
                )
            }
        />
    )
})