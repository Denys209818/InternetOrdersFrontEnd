import classNames from 'classnames';

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

    return (
    <div>
        <input 
            type={type} 
            placeholder={placeholder} 
            name={name} 
            id={name} 
            value={value} 
            onChange={e => setValue(e.target.value)}
            className={classNames(
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
                "focus:border-2 focus:border-black ", 
                { 'border-2 border-[#E4E7EE]' : !isInvalid },
                { 'border-2 border-[#B20508]': isInvalid }
                )
            }
        />
        
        {isInvalid && <p className="font-medium font-lato text-sm pl-4">{errors[0]}</p>}
    </div>)
}