/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from "react";
import { loginSchema } from "./validation/loginValidation";
import { LoginAction, RegisterAction } from "../../actions/AuthActions";
import { useAppDispatch, useAppSelector } from "../../redux/tools/hooks";
import { Link, URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { registerSchema } from "./validation/registerValidation";
import Button from "../custom/Button";
import Input from "../custom/Input";
import AuthModal from "../custom/AuthModal";
import { ModalRefType } from "../custom/AuthModal/AuthModal";
import { createPortal } from "react-dom";
import MaskedInput from "../custom/MaskedInput";

export type ModeType = 'login' | 'register' | 'phone';

const AuthPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authErrors, setAuthErrors] = useState<string[]>([]);
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [phone, setPhone] = useState('');

    const modalRef = useRef<ModalRefType>();
    
    const auth = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const [search, setSearchParams] = useSearchParams();
    
    const mode: ModeType = search.get('mode') as ModeType;
    const bottomLinkStyles = 'block font-normal font-lato text-xl';
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
                });
                
                if (modalRef.current) {
                    modalRef.current.showModal({
                        title: "З поверненням!",
                        leftBtnText: "Переглянути профіль", 
                        rightBtnText: "Перейти до замовлення"
                    });
                }
    
                // dispatch(LoginAction(validatedData));
            } 
            else if (mode === 'register') {
                const urlSearch = new URLSearchParams(search.toString());

                urlSearch.set('mode', 'phone')

                setSearchParams(urlSearch.toString());

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

        } catch(err: any) {
            const errors = err.errors as string[];

            setAuthErrors(errors);
        }
    }

    return (<main className="block pt-6 px-10 pb-20">
        <section>
            <Button image="Back.svg" background="transparent" />
        </section>

        <section>
            <div className="grid grid-cols-12 gap-x-5 size-full">
                <div className="col-start-5 col-end-9">
                    <h1 className="uppercase font-medium tracking-tight font-oswald text-3xl">
                        {title[mode].title}
                    </h1>

                    <p className="block pt-2 font-semibold text-base font-lato text-[#525A63]">
                        {title[mode].description}
                    </p>

                    <form onSubmit={authHandler}>
                        <div className="flex flex-col gap-3 pt-6">
                            {mode === 'register' && (<><Input
                                value={firstName}
                                placeholder="Ім'я"
                                type="text"
                                name="firstName"
                                setValue={(arg) => setFirstName(arg)}
                            />

                            <Input
                                value={secondName}
                                placeholder="Прізвище"
                                type="text"
                                name="secondName"
                                setValue={(arg) => setSecondName(arg)}
                            /></>)}

                            {mode !== 'phone' && <><Input
                                value={email}
                                placeholder="Електронна пошта"
                                type="text"
                                name="password"
                                setValue={(arg) => setEmail(arg)}
                            />

                            <Input
                                value={password}
                                placeholder="Пароль"
                                type="password"
                                name="email"
                                setValue={(arg) => setPassword(arg)}
                            /></>}

                            {mode === 'phone' && (
                                <MaskedInput
                                    value={phone}
                                    placeholder="Телефон"
                                    type="text"
                                    name="phone"
                                    mask={"+38 000 000 00 00"}
                                    setValue={(arg: string) => setPhone(arg)}
                                />
                            )}
                        </div>

                        {mode === 'login' && <p
                            className="block pt-1 text-right font-medium text-base font-lato"
                        >
                            Забули пароль?
                        </p>}

                        <div className="flex flex-col gap-3 pt-6">
                            {(mode === 'login' || mode === 'register') && <>
                            <Button
                                title="Продовжити"
                                type="submit"
                                sizeBtn="huge"
                                background="black"
                            />

                            <Button
                                title="Увійти з"
                                sizeBtn="huge"
                                background="white"
                                additionalImage="google"
                            />
                            </>}

                            {mode === 'phone' && (
                                <Button
                                    title="Підтвердити"
                                    type="submit"
                                    sizeBtn="huge"
                                    background="black"
                                    disabled={!phone}
                                />
                            )}
                        </div>
                    </form>

                    {mode !== 'phone' && <div className="flex pt-6 gap-2 justify-center">
                        <p className={bottomLinkStyles}>Немає аккаунта?</p>

                        <Link className={bottomLinkStyles} to={`/auth?mode=${link[mode]}`}>
                            {mode === 'login' ? 'Зареєеструватися' : 'Увійти'}
                        </Link>
                    </div>}
                </div>
            </div>

            <AuthModal
                ref={modalRef}
            />

            {createPortal(<div className="fixed left-[100%] top-negative-top translate-x-negative translate-y-[-100%]  w-52">
                <div className="relative flex flex-col gap-2 w-full">
                    <div className="block px-10 w-full">
                        <div className="relative block w-full pb-[169%]">
                            <div className="absolute size-full bg-[url('/src/images/Patato.svg')] bg-cover"></div>
                        </div>
                    </div>

                    <p className="block font-normal font-base font-oswald text-center">
                        Псс...Картопля фрі вже чекає!
                    </p>
                </div>
            </div>, document.body)}
        </section>
    </main>)
}

export default AuthPage;