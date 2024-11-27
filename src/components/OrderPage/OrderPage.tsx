/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Button from '../custom/Button';
import * as Styles from '../MainPage/styles';
import OrderItem from '../custom/OrderItem';
import { OrderItemType } from '../custom/OrderItem/OrderItem';
import { getRandomInt } from '../../tools/randomFunc';
import { useAppDispatch, useAppSelector } from '../../redux/tools/hooks';
import ButtonGroup from '../custom/ButtonGroup';
import TimeModal from '../custom/TimeModal';
import { orderSchema } from "./validation/orderValidation";
import Input from "../custom/Input";
import MaskedInput from "../custom/MaskedInput";
import { changeExpectationTime, clearOrder, setPaymentType } from "../../actions/OrderActions";
import OrderModal from "../custom/OrderModal";
import { ModalRefType } from "../custom/AuthModal/AuthModal";

export const OrderPage = () => {
    const modalRef = useRef<ModalRefType>();
    const maskRef = useRef(null);
    const dispatch = useAppDispatch();

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [phone, setPhone] = useState('');
    const [authErrors, setAuthErrors] = useState<{ [key: string]: string[] }>({});

    const discardErrors = (type: string) => {
        setAuthErrors(prev => ({
            ...prev,
            [type]: []
        }));
    }

    const formOrder = async () => {
        try {
            const validatedData = await orderSchema.validate({
                firstName,
                secondName,
                phone
            }, { abortEarly: false });
        } catch (err: any) {
            const errors: { [key: string]: string[] } = {};

            err.inner.forEach((item: Yup.ValidationError) => {
                if (item.path) {
                    errors[item.path] = item.errors;
                }
            });

            setAuthErrors(errors);
        }
    }

    const cartItems = useAppSelector(state => state.cart);
    const order = useAppSelector(state => state.order);

    const getValidExpectationTime = useCallback((timeType: string) => {
        if (timeType === 'clear') {
            return order.day && order.expectMinute && order.expectHour;
        }

        return true;
    }, [order]);

    const orderItems: OrderItemType[] = cartItems.map(item => ({
        title: item.title,
        price: item.price,
        count: item.count,
        additionals: item.additionalCount
    }));

    const additionalItems: OrderItemType[] = order.additionalsList.map(item => ({
        title: item.title,
        price: item.price,
        count: 1,
        additionals: 0
    }));

    const totalPrice = orderItems.reduce((prev, curr) => prev + curr.count * curr.price, 0)
        + additionalItems.reduce((prev, curr) => prev + curr.price, 0);

    const isValid = useMemo(() => {
        return (firstName &&
        secondName &&
        phone.length === 17 &&
        totalPrice > 0 && 
        order.paymentType && 
        order.expectationTimeType &&
        getValidExpectationTime(order.expectationTimeType));
    }, [firstName, secondName, phone.length, totalPrice, order.paymentType, order.expectationTimeType, getValidExpectationTime]);    

    const sectionStyles = `
    ${Styles.sectionLargeStyle}
    ${Styles.sectionPhoneStyle}
    ${Styles.sectionSmallphoneStyle}
    ${Styles.sectionStyle}
    ${Styles.sectionTabletStyle}
    `;

    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            dispatch(clearOrder());
        }
    }, [dispatch]);

    return (<main className="relative pt-[90px] bg-[#FFE9DE]">
        <OrderModal ref={modalRef} />

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

                            <ButtonGroup
                                buttons={[
                                    {
                                        title: 'По готовності',
                                        btnGroupName: 'free',
                                        additionalText: 'Приблизно через 20-30 хвилин',
                                        onClickHandler(arg: string) {
                                            dispatch(changeExpectationTime(arg))
                                        },
                                    },
                                    {
                                        title: 'На конкретний час',
                                        btnGroupName: 'clear',
                                        additionalImage: 'clock',
                                        hasModal: TimeModal,
                                        onClickHandler(arg: string) {
                                            dispatch(changeExpectationTime(arg))
                                        },
                                    },
                                ]}
                            />
                        </div>

                        <div className="block min-[744px]:col-span-7 col-span-12 min-[1000px]:col-span-12">
                            <h1 className='block pt-4 uppercase font-oswald min-[744px]:text-orderAuthFormTitle text-orderAuthFormTitlePhone'>
                                Що по оплаті?
                            </h1>

                            <p className='block font-lato text-[#525A63] min-[744px]:text-orderAuthDesc text-orderAuthDescPhone'>
                                Як би ви хотіли оплатити замовлення?
                            </p>

                            <div className='flex flex-col pt-3 gap-3'>
                                <ButtonGroup
                                    buttons={[
                                        {
                                            title: 'При отриманні',
                                            btnGroupName: 'giving',
                                            onClickHandler(arg) {
                                                dispatch(setPaymentType(arg))
                                            }
                                        },
                                        {
                                            title: 'Передоплата онлайн',
                                            btnGroupName: 'online',
                                            disabled: true,
                                            additionalImage: 'card',
                                            additionalText: 'Вибачте, але оплата онлайн поки що недоступна. Ми працюємо над цим. Дякуємо за розуміння!'
                                        },
                                    ]}
                                />
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

                                {additionalItems.map(el => (
                                    <OrderItem
                                        key={getRandomInt(1, 1000) + el.title}
                                        {...el}
                                    />
                                ))}

                                <Button
                                    sizeBtn='huge'
                                    widthFull
                                    disabled={!isValid}
                                    title='Підтвердити'
                                    background='black'
                                    onClickHandler={() => {
                                        if (modalRef.current) {
                                            modalRef.current.showModal({
                                                title: `прийнято!\nЗамовлення #1024`,
                                                leftBtnText: 'Повернутись до меню',
                                                description: 'Готуйтеся до смачного перекусу о [вказаний час]',
                                                rightBtnText: '',
                                            });
                                        }
                                    }}
                                />
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