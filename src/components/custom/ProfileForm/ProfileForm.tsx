/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import MaskedInput from "../MaskedInput";
import { useAppSelector } from "../../../redux/tools/hooks";
import { editSchema } from "../../ProfilePage/validation/editValidation";
import * as Yup from 'yup';

export const PorfileForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [authErrors, setAuthErrors] = useState<{ [key: string]: string[] }>({});
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [phone, setPhone] = useState('');
    const [hasChanged, setHasChanged] = useState(false);

    const maskRef = useRef(null);

    const auth = useAppSelector(state => state.auth);

    useEffect(() => {
        if (maskRef.current) {
            (maskRef.current as { maskValue: string }).maskValue = auth.phone;
        }

        setEmail(auth.email);
        setFirstName(auth.firstName);
        setSecondName(auth.secondName);
        setPassword(auth.password);
        setConfirmPassword(auth.password);
        setHasChanged(() => false);
    }, [auth]);

    const discardErrors = (type: string) => {
        setAuthErrors(prev => ({
            ...prev,
            [type]: []
        }));
    }

    async function editData() {
        try {
            const validated = await editSchema.validate({
                firstName,
                secondName,
                email,
                phone,
                password,
                confirmPassword
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

    const submitForm = (e?: React.FormEvent<HTMLFormElement>
    ) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        editData();
    }

    return (
        <div>
            <h2 className={`
                    min-[1440px]:text-headerLessMain
                    min-[744px]:text-headerLessTablet
                    text-orderTitlePhone
                    font-oswald
                    uppercase   
                `}>
                Персональні дані
            </h2>

            <form onSubmit={submitForm} className="flex flex-col pt-6 gap-6">
                <div className="flex flex-col gap-3">
                    <Input
                        value={firstName}
                        placeholder="Ім'я"
                        type="text"
                        name="firstName"
                        setValue={(arg) => {
                            setFirstName(arg);
                            discardErrors('firstName');
                            if (!hasChanged)
                                setHasChanged(true);
                        }}
                        errors={authErrors.firstName || []}
                    />

                    <Input
                        value={secondName}
                        placeholder="Прізвище"
                        type="text"
                        name="secondName"
                        setValue={(arg) => {
                            setSecondName(arg);
                            discardErrors('secondName');
                            if (!hasChanged)
                                setHasChanged(true);
                        }}
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

                            if (!hasChanged)
                                setHasChanged(true);

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
                        setValue={(arg) => {
                            setEmail(arg);
                            discardErrors('email');
                            if (!hasChanged)
                                setHasChanged(true);
                        }}
                        errors={authErrors.email || []}
                    />

                    <Input
                        value={password}
                        placeholder="Пароль"
                        type="password"
                        name="password"
                        setValue={(arg) => {
                            setPassword(arg);
                            discardErrors('password');
                            if (!hasChanged)
                                setHasChanged(true);
                        }}
                        errors={authErrors.password || []}
                    />

                    <Input
                        value={confirmPassword}
                        placeholder="Змінити пароль"
                        type="password"
                        name="confirmpassword"
                        setValue={(arg) => {
                            setConfirmPassword(arg);
                            discardErrors('confirmpassword');
                            if (!hasChanged)
                                setHasChanged(true);
                        }}
                        errors={authErrors.confirmPassword || []}
                    />
                </div>

                <Button
                    type="submit"
                    title='Зберегти'
                    sizeBtn='huge'
                    background='black'
                    disabled={!hasChanged}
                    widthFull
                />
            </form>
        </div>
    );
}