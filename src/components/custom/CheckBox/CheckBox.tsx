type CheckBoxType = {
    active: boolean;
    setActive: () => void;
    disabled?: boolean; 
};

export const CheckBox: React.FC<CheckBoxType> = ({ active, setActive, disabled = false }) => {
    const disabledStyles = `
        border-[#9AA5B1]
        bg-transparent
    `;

    const usualStyles = `
        border-black
        duration-300
        hover:bg-[#BBEE85]
    `;

    return (<>
        <div className={`
                flex
                justify-center
                items-center
                size-11
                border-2
                ${!disabled && usualStyles}
                ${disabled && disabledStyles}
                hover:cursor-pointer
            `}
            onClick={setActive}
        >
            {active && !disabled && <div className="block size-6 bg-[url('/src/images/CheckPoint.svg')] bg-cover"></div>}
            {active && disabled && <div className="block size-6 bg-checkPointDisabled bg-cover"></div>}
        </div> 
    </>);
}