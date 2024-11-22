import classNames from 'classnames';
import { useState } from 'react';

type InputType = {
    type: string;
    placeholder: string;
    name: string;
    value: string;
    setValue: (arg: string) => void;
    errors: string[];
};

export const Input: React.FC<InputType> = ({ type, placeholder, name, value, setValue, errors }) => {
    const isInvalid = errors.length > 0;

    const isPassword = type === 'password';

    const [showPassword, setShowPassword] = useState(false);

    const isEmpty = value.length === 0;

    const divStyles = !isEmpty ? 'text-inputPlaceholder top-2 translate-y-0' : `group-focus-within:text-inputPlaceholder
            group-focus-within:top-2
            group-focus-within:translate-y-0`;
    const inputStyles = !isEmpty ? 'pb-2 pt-6' : 'group-focus-within:pb-2 group-focus-within:pt-6';

    return (
    <div className='relative'>
        <div className='relative group'>
            <p className={`
                absolute
                top-[50%]
                translate-y-[-50%]
                left-6
                block
                font-lato
                text-input
                text-[#525A63]
                pointer-events-none
                duration-300
                ${divStyles}
            `}>
                {placeholder}
            </p>

            <input 
                type={isPassword && showPassword ? 'text' : type} 
                name={name} 
                id={name} 
                value={value} 
                onChange={e => setValue(e.target.value)}
                className={classNames(
                    "block " +
                    "size-full " + 
                    "px-6 " +
                    `py-4 ${inputStyles} ` +
                    "bg-white " +
                    "hover:bg-[#F5F7FA] hover:cursor-pointer " +
                    "font-lato " +
                    "text-input " +
                    "text-[#525A63] " +
                    "outline-none " +
                    "duration-300 " +
                    "autofill:bg-yellow-200 autofill:text-[#525A63] ",
                    "focus:border-2 focus:border-black ", 
                    { 'border-2 border-[#E4E7EE]' : !isInvalid },
                    { 'border-2 border-[#B20508]': isInvalid }
                    )
                }
            />
        </div>

        {isPassword && 
        <div 
            className='absolute left-[100%] top-0 translate-x-negative-x-eye translate-y-positive-y-eye hover:cursor-pointer'
            onClick={() => setShowPassword(prev => !prev)}

        >
            <div className="relative block size-6">
                <div className={`absolute block size-full bg-[url('/src/images/Eye.svg')] bg-cover`}></div>
            </div>
        </div>}
        
        {isInvalid && <p className="font-medium font-lato text-sm pl-4">{errors[0]}</p>}
    </div>)
}