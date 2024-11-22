/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from 'react-router-dom';
import Button from '../custom/Button';
import * as Styles from '../MainPage/styles';
import Input from '../custom/Input';
import { ComponentType, useRef, useState } from 'react';
import MaskedInput from '../custom/MaskedInput';
import * as Yup from 'yup';
import { orderSchema } from './validation/orderValidation';
import OrderItem from '../custom/OrderItem';
import { OrderItemType } from '../custom/OrderItem/OrderItem';
import { getRandomInt } from '../../tools/randomFunc';

export const OrderPage = () => {
    const maskRef = useRef(null);

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [phone, setPhone] = useState('');
    const [authErrors, setAuthErrors] = useState<{[key: string]: string[]}>({});

    const discardErrors = (type: string) => {
        setAuthErrors(prev => ({
            ...prev,
            [type]: []
        }));
    }

    const orderItems: OrderItemType[] = [
        {
            title:'Шаурма класична',
            price:100,
            count: 1,
            additionals: 0
        },
        {
            title:'Шаурма “Мій рецепт”',
            price: 110,
            count: 1,
            additionals: 5
        },
    ];

    const totalPrice = orderItems.reduce((prev, curr) => prev + curr.count * curr.price, 0);

    const sectionStyles = `
    ${Styles.sectionLargeStyle}
    ${Styles.sectionPhoneStyle}
    ${Styles.sectionSmallphoneStyle}
    ${Styles.sectionStyle}
    ${Styles.sectionTabletStyle}
    `;

    const navigate = useNavigate();

    const formOrder = async () => {
        try {
            const validatedData = await orderSchema.validate({
                firstName,
                secondName,
                phone
            }, { abortEarly: false });
        } catch(err: any) {
            const errors: {[key: string]: string[]} = {};

            err.inner.forEach((item: Yup.ValidationError) => {
                if (item.path) {
                    errors[item.path] = item.errors;
                }
            });

            setAuthErrors(errors);
        }
    }

    return (<main className="relative pt-[90px] bg-[#FFE9DE]">
        <section className={`max-w-[1440px] m-auto ${sectionStyles}`}>
            <Button
                image="back"
                background="transparent"
                onClickHandler={() => navigate(-1)}
            />
        </section>

        <section className={`max-w-[1440px] pt-3 m-auto ${sectionStyles}`}>
            <h1 className={`
                    font-oswald
                    min-[744px]:text-orderTitle
                    text-orderTitlePhone
                    uppercase
                    `}>
                Оформлення замовлення
            </h1>
        </section>

        <section className={`max-w-[1440px] min-[1000px]:pt-[60px] min-[7440px]:pt-[40px] pt-[24px] pb-[80px] m-auto ${sectionStyles}`}>
            <div className='grid grid-cols-12 gap-x-5 gap-y-10'>
                <div className='flex flex-col gap-10 min-[1000px]:col-span-5 col-span-12'>
                    <div className="block p-6 border-2">
                        <h2 className='font-lato text-orderAuthLinePhone min-[744px]:text-orderAuthTitle'>Зареєструйтесь або увійдіть</h2>
                        <p className='block pt-2 font-lato text-[#525A63] min-[744px]:text-orderAuthDesc text-orderAuthDescPhone'>
                            Щоб отримати знижки, збереження історії замовлень, швидкий доступ до профілю та відстеження замовлень
                        </p>

                        <div className="block pt-6">
                            <Button
                                widthFull
                                background="black"
                                sizeBtn='huge'
                                title='Увійти'
                                onClickHandler={() => navigate('/auth/login')}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-y-10">
                        <div className='block min-[744px]:col-span-7 col-span-12 min-[1000px]:col-span-12'>
                            <p className='font-lato min-[744px]:text-orderAuthLine text-orderAuthLinePhone'>
                                Продовжити без реєстрації
                            </p>

                            <h1 className='block pt-4 uppercase font-oswald min-[744px]:text-orderAuthFormTitle text-orderAuthFormTitlePhone'>
                                Хто ви?
                            </h1>

                            <p className='block font-lato text-[#525A63] min-[744px]:text-orderAuthDesc text-orderAuthDescPhone'>
                                Вкажіть час, на який бажаєте отримати замовлення
                            </p>

                            <div className='flex flex-col gap-3 pt-3'>
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
                            </div>
                        </div>

                        <div className='block min-[744px]:col-span-7 col-span-12 min-[1000px]:col-span-12'>
                            <h1 className='block pt-4 uppercase font-oswald min-[744px]:text-orderAuthFormTitle text-orderAuthFormTitlePhone'>
                                На коли треба?
                            </h1>

                            <p className='block font-lato text-[#525A63] min-[744px]:text-orderAuthDesc text-orderAuthDescPhone'>
                                Вкажіть час, на який бажаєте отримати замовлення
                            </p>

                            <div className='flex flex-col pt-3 gap-3'>
                                <div>
                                    <Button title='По готовності' widthFull background='white' sizeBtn='huge' />

                                    <p className='block font-lato pt-2 min-[744px]:text-orderAuthDesc text-orderAuthDescPhone text-[#1F2933]'>
                                        Приблизно через 20-30 хвилин
                                    </p>
                                </div>

                                <div>
                                    <Button
                                        title='На конкретний час'
                                        widthFull
                                        background='white'
                                        sizeBtn='huge'
                                        additionalImage='clock'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="block min-[744px]:col-span-7 col-span-12 min-[1000px]:col-span-12">
                            <h1 className='block pt-4 uppercase font-oswald min-[744px]:text-orderAuthFormTitle text-orderAuthFormTitlePhone'>
                                Що по оплаті?
                            </h1>

                            <p className='block font-lato text-[#525A63] min-[744px]:text-orderAuthDesc text-orderAuthDescPhone'>
                                Як би ви хотіли оплатити замовлення?
                            </p>

                            <div className='flex flex-col pt-3 gap-3'>
                                <Button title='При отриманні' widthFull background='white' sizeBtn='huge' />
                                
                                <div>
                                    <Button
                                        title='Передоплата онлайн'
                                        widthFull
                                        background='white'
                                        sizeBtn='huge'
                                        disabled
                                        additionalImage='card'
                                    />

                                    <p className='block pt-2 font-lato text-[#525A63] min-[744px]:text-orderAuthDesc text-orderAuthDescPhone'>
                                        Вибачте, але оплата онлайн поки що недоступна. Ми працюємо над цим. Дякуємо за розуміння!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='min-[1000px]:col-span-7 col-span-12'>
                    <div className="block border-2">
                        <div className="block p-3 bg-[#9CC2FF] border-b-2">
                            <h1 className='block uppercase font-oswald min-[744px]:text-orderAuthFormTitle text-orderAuthFormTitlePhone'>
                                Замовлення
                            </h1>
                        </div>

                        <div className="block p-3 bg-white">
                            <div className="flex flex-col pb-3 gap-[45px]">
                                {orderItems.map(el => (
                                    <OrderItem
                                        key={getRandomInt(1, 1000) + el.title} 
                                        {...el}
                                    />
                                ))}

                                <Button sizeBtn='huge' widthFull disabled title='Підтвердити' background='black' />
                            </div>

                            <div className='flex justify-end items-center gap-2 border-t border-[#CBD2D9]'>
                                <p className='block text-[#1F2933] min-[744px]:text-orderAuthDesc text-orderAuthDescPhone font-lato'>До сплати:</p>
                                <p className='block text-[#1F2933] min-[744px]:text-orderListTitle text-orderListTitlePhone font-literata italic'>{totalPrice} грн</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>);
}