/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from "react";
import { loginSchema } from "./validation/loginValidation";
import { LoginAction, RegisterAction } from "../../actions/AuthActions";
import { useAppDispatch, useAppSelector } from "../../redux/tools/hooks";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { registerSchema } from "./validation/registerValidation";
import Button from "../custom/Button";
import Input from "../custom/Input";
import AuthModal from "../custom/AuthModal";
import { ModalRefType } from "../custom/AuthModal/AuthModal";
import MaskedInput from "../custom/MaskedInput";
import * as Yup from 'yup';
import * as Styles from './styles';

export type ModeType = 'login' | 'register' | 'phone';

const AuthPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authErrors, setAuthErrors] = useState<{ [key: string]: string[] }>({});
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [phone, setPhone] = useState('');

    const modalRef = useRef<ModalRefType>();
    const maskRef = useRef(null);

    const navigate = useNavigate();

    const auth = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const { modeType } = useParams();

    const mode: ModeType =
        (modeType !== 'login'
            && modeType !== 'register'
            && modeType !== 'phone') ? 'login' : modeType as ModeType;

    const bottomLinkStyles = 'block font-medium font-lato text-xl';
    const bottomLinkStylesTablet = 'min-[375px]:block min-[375px]:font-lato';
    const link = {
        login: 'register',
        register: 'login',
    }

    const title = {
        login: {
            title: 'Увійдіть в аккаунт',
            description: 'Щоб отримати знижки, збереження історії замовлень, швидкий доступ до профілю та відстеження замовлень',
        },
        register: {
            title: 'Зареєструйтесь',
            description: 'Щоб отримати знижки, збереження історії замовлень, швидкий доступ до профілю та відстеження замовлень',
        },
        phone: {
            title: 'додайте номер телефону',
            description: 'Щоб завершити реєстрацію',
        }
    }

    const authHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            if (mode !== 'login' && mode !== 'register' && mode !== 'phone')
                return;

            if (mode === 'login') {
                const validatedData = await loginSchema.validate({
                    email,
                    password
                }, { abortEarly: false });

                if (modalRef.current) {
                    modalRef.current.showModal({
                        title: "З поверненням!",
                        leftBtnText: "Переглянути профіль",
                        rightBtnText: "Перейти до замовлення"
                    });
                }

                dispatch(LoginAction(validatedData));
            }
            else if (mode === 'register') {
                const validatedData = await registerSchema.validate({
                    email,
                    password,
                    firstName,
                    secondName
                }, { abortEarly: false });

                navigate('../phone');

                // dispatch(RegisterAction(validatedData));
            }
            else if (mode === 'phone') {
                const validatedData = await loginSchema.validate({
                    firstName,
                    secondName,
                    email,
                    password
                });

                const unmaskedValue = phone.replace(/\D/g, '').slice(2);

                if (unmaskedValue.length === 10 && modalRef.current) {
                    modalRef.current.showModal({
                        title: "Успіх! Картопля фрі в доступі",
                        description: "Ви успішно зареєструвались! Тепер ви можете користуватися усіма перевагами вашого акаунта.",
                        leftBtnText: "Переглянути профіль",
                        rightBtnText: "Перейти до замовлення"
                    });
                }
            }

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

    const discardErrors = (type: string) => {
        setAuthErrors(prev => ({
            ...prev,
            [type]: []
        }));
    }

    const goBack = () => {
        navigate(-1);
    }

    return (<main className={
        `
        absolute
        ${Styles.largeMainStyle} 
        ${Styles.mainStyle} 
        ${Styles.phoneMainStyle} 
        ${Styles.smallphoneMainStyle} 
        ${Styles.tabletMainStyle}
        bg-[#BBEE85] 
        min-h-height-w-h-t 
        min-[744px]:min-h-height-w-h
        pt-[72px]
        w-full
        `
    }
    >
        <section>
            <Button image="back" background="transparent" onClickHandler={goBack} hasGreenBack />
        </section>

        <section>
            <div className={`
                ${Styles.gridStyle} 
                ${Styles.largeGridStyle} 
                ${Styles.phoneGridStyle} 
                ${Styles.tabletGridStyle} 
                ${Styles.smallphoneGridStyle}`}
            >
                <div className={`
                    ${Styles.gridContainerStyle}
                    ${Styles.largeGridContainerStyle}
                    ${Styles.smallphoneGridContainerStyle}
                    ${Styles.phoneGridContainerStyle} 
                    ${Styles.tabletGridContainerStyle}`}
                >
                    <h1 className={`
                        ${Styles.titleStyle}
                        ${Styles.largeTitleStyle}
                        ${Styles.tabletTitleStyle}
                        ${Styles.phoneTitleStyle}
                        ${Styles.smallphoneTitleStyle}
                        `}>
                        {title[mode].title}
                    </h1>

                    <p className={`
                        ${Styles.descStyle}
                        ${Styles.largeDescStyle}
                        ${Styles.tabletDescStyle}
                        ${Styles.phoneDescStyle}
                        ${Styles.smallphoneDescStyle}
                        `}>
                        {title[mode].description}
                    </p>

                    <form onSubmit={authHandler}>
                        <div className={`
                            ${Styles.formStyle}
                            ${Styles.largeFormStyle}
                            ${Styles.tabletFormStyle}
                            ${Styles.phoneFormStyle}
                            ${Styles.smallphoneFormStyle}
                            `}>
                            {mode === 'register' && (<>
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
                                /></>)}

                            {mode !== 'phone' && <>
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
                                /></>}

                            {mode === 'phone' && (
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
                            )}
                        </div>

                        {mode === 'login' && <p
                            className={`
                                ${Styles.fpStyle}
                                ${Styles.largeFPStyle}
                                ${Styles.tabletFPStyle}
                                ${Styles.phoneFPStyle}
                                ${Styles.smallphoneFPStyle}
                                `}
                        >
                            Забули пароль?
                        </p>}

                        <div className={`
                            ${Styles.btnStyle}
                            ${Styles.largeBtnStyle}
                            ${Styles.tabletBtnStyle}
                            ${Styles.phoneBtnStyle}
                            ${Styles.smallphoneBtnStyle}
                            `}>
                            {(mode === 'login' || mode === 'register') && <>
                                <Button
                                    title="Продовжити"
                                    type="submit"
                                    sizeBtn="huge"
                                    background="black"
                                    widthFull
                                />

                                <Button
                                    title="Увійти з"
                                    sizeBtn="huge"
                                    background="white"
                                    additionalImage="google"
                                    widthFull
                                />
                            </>}

                            {mode === 'phone' && (
                                <Button
                                    title="Підтвердити"
                                    type="submit"
                                    sizeBtn="huge"
                                    background="black"
                                    disabled={!phone}
                                    widthFull
                                />
                            )}
                        </div>
                    </form>

                    {mode !== 'phone' && <div className={`
                        ${Styles.aaStyle}
                        ${Styles.largeAAStyle}
                        ${Styles.tabletAAStyle}
                        ${Styles.phoneAAStyle}
                        ${Styles.smallphoneAAStyle}
                        `}>
                        <p className={bottomLinkStyles + " " + bottomLinkStylesTablet + " min-[375px]:text-input"}>Немає аккаунта?</p>

                        <Link className={bottomLinkStyles + " " + bottomLinkStylesTablet + " min-[375px]:text-btn"} to={`/auth/${link[mode]}`}>
                            {mode === 'login' ? 'Зареєструватися' : 'Увійти'}
                        </Link>
                    </div>}
                </div>
            </div>

            <AuthModal
                ref={modalRef}
            />

            {(<div className={`
                ${Styles.dialogStyle}
                ${Styles.largeDialogStyle}
                ${Styles.tabletDialogStyle}
                ${Styles.phoneDialogStyle}
                ${Styles.smallphoneDialogStyle}
                pt-14
                `}>
                <div className={`
                    ${Styles.drStyle}
                    ${Styles.largeDRStyle}
                    ${Styles.tabletDRStyle}
                    ${Styles.phoneDRStyle}
                    ${Styles.smallphoneDRStyle}
                    `}>
                    <div className={`
                        ${Styles.dsStyle}
                        ${Styles.largeDSStyle}
                        ${Styles.tabletDSStyle}
                        ${Styles.phoneDSStyle}
                        ${Styles.smallphoneDSStyle}
                        `}>
                        <div className="relative block w-full pb-[169%]">
                            <div className="absolute size-full bg-[url('/src/images/Patato.svg')] bg-cover"></div>
                        </div>
                    </div>

                    <p className={`
                        ${Styles.dtStyle}
                        ${Styles.largeDTStyle}
                        ${Styles.tabletDTStyle}
                        ${Styles.phoneDTStyle}
                        ${Styles.smallphoneDTStyle}
                        `}>
                        Псс...Картопля фрі вже чекає!
                    </p>
                </div>
            </div>)}
        </section>
    </main>)
}

export default AuthPage;