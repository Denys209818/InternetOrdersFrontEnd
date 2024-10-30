type FieldType = {
    name: string;
    type?: string;
    value: string;
    changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    placeholder: string;
};

export const Field: React.FC<FieldType> = ({ name, type = "text", value, label, placeholder, changeValue }) => {
    return (<div>
        <label htmlFor={name}>{label}</label>
        <br />
        <input
            className="border-2"
            name={name} 
            type={type} 
            value={value} 
            onChange={changeValue} 
            placeholder={placeholder}
        />
    </div>);
}