type CheckBoxType = {
    active: boolean;
    setActive: () => void;
};

export const CheckBox: React.FC<CheckBoxType> = ({ active, setActive }) => {
    return (<>
        <div className={`
                flex
                justify-center
                items-center
                size-11
                border-2
                border-black
                hover:cursor-pointer
            `}
            onClick={setActive}
        >
            {active && <div className="block size-6 bg-[url('/src/images/CheckPoint.svg')] bg-cover"></div>}
        </div> 
    </>);
}