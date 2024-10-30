type InputType = {
    type: string;
    placeholder: string;
    name: string;
    value: string;
    setValue: (arg: string) => void;
};

export const Input: React.FC<InputType> = ({ type, placeholder, name, value, setValue }) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
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
}