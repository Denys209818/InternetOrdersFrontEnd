import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/tools/hooks";
import { changeDay, setExpectHour, setExpectMinute } from "../../../actions/OrderActions";

export const TimeModal: React.FC = () => {
    const dispatch = useAppDispatch();
    const [day, setDay] = useState<'today'|'tomorrow'|''>('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');

    useEffect(() => {
        if (day) {
            dispatch(changeDay(day));
        }
    }, [day, dispatch]);

    const todayMenuStyles = day === 'today' ? `
        border-b
    ` : '';

    const tomorrowMenuStyles = day === 'tomorrow' ? `
        border-b
    ` : '';

    return (
    <div className="flex flex-col gap-4 bg-white p-4 border-b-2 border-x-2">
        <div className="flex gap-4">
            <p
                className={`block p-2 font-lato text-btn hover:cursor-pointer ${todayMenuStyles}`}
                onClick={() => setDay('today')}
            >
                Сьогодні
            </p>

            <p
                className={`block p-2 font-lato text-btn hover:cursor-pointer ${tomorrowMenuStyles}`}
                onClick={() => setDay('tomorrow')}
            >
                Завтра
            </p>
        </div>

        <div className="flex flex-col gap-3">
            <p className="font-lato text-cook">Вкажіть годину</p>

            <div className="flex gap-1 justify-start items-center">
                <select
                    value={hour ? hour : '-'}
                    onChange={(e) => {
                        const value = e.target.value;
                        setHour(value);

                        dispatch(setExpectHour(value));
                    }}
                    className={`
                        border
                        border-[#E4E7EE]
                        size-[44px]
                        appearance-none
                        text-center
                        focus:outline-[#E4E7EE]
                        hover:cursor-pointer
                    `}
                >
                    <option value="-">-</option>
                    {Array.from({ length: 14 }, (_, i) => i + 8)
                    .map(item => {
                        const itemStr = item.toString().length === 1 ? '0' + item : item;

                        return (<option value={item} key={item}>{itemStr}</option>)
                    })}
                </select>

                <p>:</p>

                <select
                    value={minute ? minute : '-'}
                    onChange={(e) => {
                        const value = e.target.value;
                        setMinute(value);

                        dispatch(setExpectMinute(value));
                    }}
                    className={`
                        border
                        border-[#E4E7EE]
                        size-[44px]
                        appearance-none
                        text-center
                        focus:outline-[#E4E7EE]
                        hover:cursor-pointer
                    `}
                >
                    <option value="-">-</option>
                    {Array.from({ length: 60 }, (_, i) => i)
                    .map(item => {
                        const itemStr = item.toString().length === 1 ? '0' + item : item;

                        return (<option value={item} key={item}>{itemStr}</option>)
                    })}
                </select>
            </div>
        </div>
    </div>
    );
}