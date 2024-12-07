import { Link } from 'react-router-dom';
import * as Styles from '../MainPage/styles';
import ReadyState from '../custom/ReadyState';
import RangeSlider from '../custom/RangeSlider';
import OrderRow from '../custom/OrderRow';
import Input from '../custom/Input';
import MaskedInput from '../custom/MaskedInput';
import { useLayoutEffect, useRef, useState } from 'react';
import Button from '../custom/Button';
import { DishIngredient } from '../../redux/types/dishTypes';

export interface ProfileDish {
    id: number;
    title: string;
    price: number;
    count: number;
    additionalCount: number;
    components?: DishIngredient[];
}

export type OrderProfileType = {
    id: number;
    date: string;
    status: 'completed' | 'canceled';
    price: number;
    dishes: ProfileDish[];
};

export const ProfilePage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authErrors, setAuthErrors] = useState<{ [key: string]: string[] }>({});
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [phone, setPhone] = useState('');

    const [heightStage, setHeightStage] = useState(0);

    const stageRef = useRef<HTMLDivElement>(null);
    const maskRef = useRef(null);

    useLayoutEffect(() => {
        if (stageRef.current) {
            setHeightStage(stageRef.current.clientHeight);
        }
    }, []);

    const sectionStyles = `
        ${Styles.sectionLargeStyle}
        ${Styles.sectionPhoneStyle}
        ${Styles.sectionSmallphoneStyle}
        ${Styles.sectionStyle}
        ${Styles.sectionTabletStyle}
    `;

    const orders: OrderProfileType[] = [
        {
            id: 1044,
            status: 'canceled',
            date: '03.10.2024',
            price: 400,
            dishes: [
                {
                    id: 1,
                    title: 'Шаурма класична',
                    price: 100,
                    count: 1,
                    additionalCount: 0,
                },
                {
                    id: 2,
                    title: 'Шаурма “Мій рецепт”',
                    price: 100,
                    count: 1,
                    additionalCount: 5,
                    components: [
                        {
                            id: 1, 
                            title: 'Капуста, огірок, помідор',
                            price: 0,
                        },
                        {
                            id: 2, 
                            title: 'Класичний лаваш',
                            price: 0,
                        },
                        {
                            id: 3, 
                            title: 'Курка',
                            price: 0,
                        },
                        {
                            id: 4, 
                            title: 'Сир',
                            price: 0,
                        }
                    ],
                },
            ],
        },
        {
            id: 1043,
            status: 'completed',
            date: '03.10.2024',
            price: 325,
            dishes: [
                {
                    id: 2,
                    title: 'Шаурма “Мій рецепт”',
                    price: 100,
                    count: 1,
                    additionalCount: 5,
                    components: [
                        {
                            id: 1, 
                            title: 'Капуста, огірок, помідор',
                            price: 0,
                        },
                        {
                            id: 2, 
                            title: 'Класичний лаваш',
                            price: 0,
                        },
                        {
                            id: 3, 
                            title: 'Курка',
                            price: 0,
                        },
                        {
                            id: 4, 
                            title: 'Сир',
                            price: 0,
                        }
                    ],
                },
            ],
        },
        {
            id: 1042,
            status: 'canceled',
            date: '03.10.2024',
            price: 250,
            dishes: [
                {
                    id: 1,
                    title: 'Шаурма класична',
                    price: 100,
                    count: 1,
                    additionalCount: 0,
                },
            ],
        },
        {
            id: 1041,
            status: 'canceled',
            date: '03.10.2024',
            price: 250,
            dishes: [
                {
                    id: 1,
                    title: 'Шаурма класична',
                    price: 100,
                    count: 1,
                    additionalCount: 0,
                },
                {
                    id: 2,
                    title: 'Шаурма “Мій рецепт”',
                    price: 100,
                    count: 1,
                    additionalCount: 5,
                    components: [
                        {
                            id: 1, 
                            title: 'Капуста, огірок, помідор',
                            price: 0,
                        },
                        {
                            id: 2, 
                            title: 'Класичний лаваш',
                            price: 0,
                        },
                        {
                            id: 3, 
                            title: 'Курка',
                            price: 0,
                        },
                        {
                            id: 4, 
                            title: 'Сир',
                            price: 0,
                        }
                    ],
                },
            ],
        },
    ];

    const discardErrors = (type: string) => {
        setAuthErrors(prev => ({
            ...prev,
            [type]: []
        }));
    }

    return (
        <main className={`
            relative
            grid
            min-[744px]:grid-cols-12
            grid-cols-4
            min-[1440px]:gap-y-[60px]
            min-[744px]:gap-y-[48px]
            gap-y-[24px]
            pt-[90px]
            pb-[44px]
            bg-[#9CC2FF]
            ${sectionStyles}
        `}>
            <section className={`max-w-[1440px] min-[744px]:col-span-12 col-span-4`}>
                <h1 className={`
                        min-[1440px]:text-headerLessMain
                        min-[744px]:text-headerLessTablet
                        text-orderTitlePhone
                        font-oswald
                        uppercase
                        `}>
                    Профіль
                </h1>
            </section>

            <section className={`max-w-[1440px] min-[1440px]:col-span-8 min-[744px]:col-span-12 col-span-4`}>
                <div className="relative grid grid-cols-1 w-full border-2 bg-white">
                    <div className='block row-span-1 p-2 bg-[#BBEE85] border-b-2'>
                        <p className={`
                            block
                            min-[744px]:text-cardModalMainTitle
                            min-[480px]:text-profileTitleSmall
                            text-cartPriceText
                            font-literata    
                        `}>
                            <span>Поточне замовлення</span>
                            <span>#1024</span>
                        </p>
                    </div>

                    <div className='flex min-[744px]:row-span-1 row-start-3 flex-col w-full gap-2 p-6'>
                        <h4 className='font-literata italic text-[#525A63] text-orderListPrice'>
                            Зміна замовлення?
                        </h4>

                        <p className='font-lato text-[#525A63] min-[744px]:max-w-[50%] min-[744px]:text-cardItemInner text-tdTextSmall'>
                            Якщо у вас виникли питання або ви хочете внести зміни у своє замовлення, зателефонуйте нам! Ми завжди готові допомогти.
                        </p>

                        <p className='flex min-[480px]:justify-start justify-between gap-2 font-lato text-[#525A63] min-[744px]:text-cardItemInner text-tdTextSmall'>
                            <Link to={'tel:380638886262'} className='p-2'>+380 63 888 62 62</Link>
                            <Link to={'tel:380998886262'} className='p-2'>+380 99 888 62 62</Link>
                        </p>
                    </div>

                    <div
                        className={`
                            flex
                            gap-6
                            min-[744px]:row-span-1
                            row-start-2
                            p-6
                            min-[744px]:pt-6
                            pt-12
                    `}>
                        <div className='relative block min-[744px]:hidden row-span-3 col-span-1'>
                            <div
                                style={{ width: `${heightStage}px` }}
                                className={`
                                    absolute
                                    flex
                                    h-0.5
                                    origin-top-left
                                    rotate-90
                                `}>
                                <RangeSlider value={14} />
                            </div>
                        </div>

                        <div
                            ref={stageRef}
                            className={`
                                grid
                                min-[744px]:grid-cols-9
                                min-[744px]:grid-rows-1
                                grid-cols-3
                                grid-rows-3
                                gap-8
                            `}>
                            <ReadyState
                                title='Обробка'
                                text='Зараз перевіряємо всі деталі – тримайтеся!'
                                background='order'
                            />

                            <ReadyState
                                title='Готуємо'
                                text='Ваше замовлення в руках наших шеф-кухарів'
                                background='cooker'
                                disabled
                            />

                            <ReadyState
                                title='Готово'
                                text='Завітайте за своїми смаколиками'
                                background='bag'
                                disabled
                            />
                        </div>
                    </div>

                    <div className='hidden min-[744px]:block row-span-1 p-6'>
                        <RangeSlider value={14} />
                    </div>
                </div>
            </section>

            <section className={`max-w-[1440px] min-[1440px]:col-span-8 min-[744px]:col-span-12 col-span-4`}>
                <div className="relative w-full border-2 bg-white">
                    <div className='block p-2 bg-[#FF8080] border-b-2'>
                        <p className={`
                            block
                            min-[744px]:text-cardModalMainTitle
                            min-[480px]:text-profileTitleSmall
                            text-cartPriceText
                            font-literata    
                        `}>
                            Історія замовлень
                        </p>
                    </div>

                    <div className='flex flex-col w-full gap-2 min-[744px]:p-6 p-2 overflow-x-auto'>
                        <table className="border-collapse border border-slate-400 ...">
                            <thead>
                                <tr>
                                    <th colSpan={1} className={`
                                        p-4
                                        font-literata
                                        text-[#1F2933]
                                        text-orderListPrice
                                        italic border
                                        border-slate-300
                                    `}>Номер</th>

                                    <th className={`
                                        p-4
                                        font-literata
                                        text-[#1F2933]
                                        text-orderListPrice
                                        italic border
                                        border-slate-300
                                    `}>Дата</th>

                                    <th className={`
                                        p-4
                                        font-literata
                                        text-[#1F2933]
                                        text-orderListPrice
                                        italic border
                                        border-slate-300
                                    `}>Стан</th>

                                    <th className={`
                                        p-4
                                        font-literata
                                        text-[#1F2933]
                                        text-orderListPrice
                                        italic border
                                        border-slate-300
                                    `}>Разом</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(el => (
                                    <OrderRow
                                        key={el.id}
                                        {...el}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className='min-[1440px]:block hidden col-span-4'></section>

            <section className={`
                flex
                flex-col
                gap-6
                max-w-[1440px]
                min-[1440px]:col-span-4
                min-[744px]:col-span-6
                col-span-4
            `}>
                <h2 className={`
                    min-[1440px]:text-headerLessMain
                    min-[744px]:text-headerLessTablet
                    text-orderTitlePhone
                    font-oswald
                    uppercase   
                `}>
                    Персональні дані
                </h2>

                <div className="flex flex-col gap-3">
                    <Input
                        value={firstName}
                        placeholder="Ім'я"
                        type="text"
                        name="firstName"
                        setValue={(arg) => { setFirstName(arg); discardErrors('firstName'); }}
                        errors={authErrors.firstName || []}
                    />

                    <Input
                        value={secondName}
                        placeholder="Прізвище"
                        type="text"
                        name="secondName"
                        setValue={(arg) => { setSecondName(arg); discardErrors('secondName'); }}
                        errors={authErrors.secondName || []}
                    />

                    <MaskedInput
                        ref={maskRef}
                        placeholder="Телефон"
                        type="text"
                        name="phone"
                        mask={"+38 000 000 00 00"}
                        onAccept={(value: string, mask: any) => {
                            setPhone(value);
                            discardErrors('phone');

                            mask.updateValue();
                        }}
                        onClickHandler={() => {
                            if (maskRef.current && !phone) {
                                const maskElement = maskRef.current as any;
                                maskElement.maskRef.value = '+38 ';
                                maskElement.maskRef.updateValue();
                            }
                        }}
                        isEmpty={phone.length === 0}
                        errors={authErrors.phone || []}
                    />

                    <Input
                        value={email}
                        placeholder="Електронна пошта"
                        type="text"
                        name="email"
                        setValue={(arg) => { setEmail(arg); discardErrors('email'); }}
                        errors={authErrors.email || []}
                    />

                    <Input
                        value={password}
                        placeholder="Пароль"
                        type="password"
                        name="password"
                        setValue={(arg) => { setPassword(arg); discardErrors('password'); }}
                        errors={authErrors.password || []}
                    />

                    <Input
                        value={password}
                        placeholder="Змінити пароль"
                        type="password"
                        name="changepassword"
                        setValue={(arg) => { setPassword(arg); discardErrors('password'); }}
                        errors={authErrors.password || []}
                    />
                </div>

                <Button
                    title='Зберегти'
                    sizeBtn='huge'
                    background='black'
                    disabled
                    widthFull
                />

                <Link to={''} className='block p-2 font-lato text-btn text-[#B20508]'>
                    Вийти
                </Link>
            </section>
        </main>
    );
}