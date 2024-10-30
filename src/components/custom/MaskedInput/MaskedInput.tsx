import { LegacyRef } from 'react';
import { IMaskMixin } from 'react-imask';

type InputType = {
    type: string;
    placeholder: string;
    name: string;
    value: string;
    setValue: (arg: string) => void;
};

export const MaskedInput = IMaskMixin(({ inputRef, ...props }) => {
    const { type, placeholder, name, value, setValue } = props as InputType;

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
            className={
                "block " +
                "size-full " + 
                "px-6 " +
                "py-5 " +
                "bg-white " +
                "font-lato " +
                "font-medium " +
                "font-base " +
                "text-[#525A63] " +
                "outline-none " +
                "border border-[#E4E7EE]"
            }
        />
    )
})