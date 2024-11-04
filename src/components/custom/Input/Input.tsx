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

    return (
    <div className='relative'>
        <input 
            type={isPassword && showPassword ? 'text' : type} 
            placeholder={placeholder} 
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
                "autofill:bg-yellow-200 autofill:text-[#525A63] ",
                "focus:border-2 focus:border-black ", 
                { 'border-2 border-[#E4E7EE]' : !isInvalid },
                { 'border-2 border-[#B20508]': isInvalid }
                )
            }
        />

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