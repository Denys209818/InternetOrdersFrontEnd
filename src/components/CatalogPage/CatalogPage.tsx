import { useNavigate } from "react-router-dom";
import Button from "../custom/Button";
import * as Styles from '../MainPage/styles';
import { Card } from "../custom/Card/Card";
import ReceiptCreator from "../custom/ReceiptCreator";
import IngredientList from "../custom/IngredientList";

export const CatalogPage: React.FC = () => {
    const sectionStyles = `
        ${Styles.sectionLargeStyle}
        ${Styles.sectionPhoneStyle}
        ${Styles.sectionSmallphoneStyle}
        ${Styles.sectionStyle}
        ${Styles.sectionTabletStyle}
        `;


    const navigate = useNavigate();

    return (<main className="relative pt-[90px] bg-[#FFE9DE]">
        <section className={`max-w-[1440px] m-auto ${sectionStyles}`}>
            <Button image="Back.svg" background="transparent" onClickHandler={() => navigate(-1)} />
        </section>

        <section className={`max-w-[1440px] pt-3 m-auto ${sectionStyles}`}>
            <h1 className={`text-headerLess font-oswald`}>Шаурма</h1>
        </section>

        <section className={`max-w-[1440px] pb-[66px] pt-12 m-auto ${sectionStyles}`}>
            <h3 className="text-headerLessTablet font-oswald uppercase font-medium">Обирай наші смаки</h3>

            <div className="grid grid-cols-12 gap-x-4 pt-3">
                <Card 
                    title="Класична"
                    imageSrc="images/classicial.jpg"
                    options={[
                        {
                            optionTitle: 'Велика',
                            optionPrice: '100'
                        },
                        {
                            optionTitle: 'Маленька',
                            optionPrice: '75'
                        },
                    ]}
                />

                <Card 
                    title="З яловичиною"
                    imageSrc="images/beaf.jpg"
                    options={[
                        {
                            optionTitle: 'Велика',
                            optionPrice: '100'
                        },
                        {
                            optionTitle: 'Маленька',
                            optionPrice: '75'
                        },
                    ]}
                />

                <Card 
                    title="З ковбасками"
                    imageSrc="images/sausage.jpg"
                    options={[
                        {
                            optionTitle: 'Велика',
                            optionPrice: '100'
                        },
                        {
                            optionTitle: 'Маленька',
                            optionPrice: '75'
                        },
                    ]}
                />

                <Card 
                    title="З криветками"
                    imageSrc="images/shrimp.jpg"
                    options={[
                        {
                            optionTitle: 'Велика',
                            optionPrice: '100'
                        },
                        {
                            optionTitle: 'Маленька',
                            optionPrice: '75'
                        },
                    ]}
                />
            </div>
        </section>

        <section className="bg-[#9CC2FF] w-full pt-12 pb-[88px] px-10 border-t-2">
            <div className="grid grid-cols-12 gap-x-5 gap-y-[52px]">
                <h2 className="text-headerLessMain font-oswald uppercase col-span-12">
                    Або будь творцем – Складай свій власний рецепт!
                </h2>

                <div className="col-span-4">
                    <ReceiptCreator
                        size={{
                            title: 'Великий',
                            price: 50,
                        }}
                        items={[
                            {
                                title: 'Цільнозерновий',
                                price: 15,
                            },
                            {
                                title: 'Курка',
                                price: 15,
                            },
                            {
                                title: 'Часниковий',
                                price: 15,
                            },
                        ]}
                    />
                </div>

                <div className="col-span-4">
                    <div className="block border-2">
                        <div className="bg-[#FF8080] border-b-2 p-2">
                            <h4 className="font-literata text-black italic text-list">Обери інгредіенти</h4>
                        </div>

                        <div className="flex flex-col gap-6 px-5 py-6 bg-white">
                            <IngredientList
                                title=""
                                options={[
                                    {
                                        title: 'Велика',
                                        price: 50
                                    },
                                    {
                                        title: 'Маленька',
                                        price: 40
                                    },
                                ]}
                            />

                            <IngredientList
                                title="Лаваш"
                                options={[
                                    {
                                        title: 'Класичний',
                                        price: 10
                                    },
                                    {
                                        title: 'Цільнозерновий',
                                        price: 15
                                    },
                                ]}
                            />

                            <IngredientList
                                title="М'ясо"
                                options={[
                                    {
                                        title: 'Курка',
                                        price: 10
                                    },
                                    {
                                        title: 'Свинина',
                                        price: 15
                                    },
                                    {
                                        title: 'Мікс 50/50',
                                        price: 15
                                    },
                                ]}
                            />

                            <IngredientList
                                title="Соус"
                                options={[
                                    {
                                        title: 'Червоний',
                                        price: 10
                                    },
                                    {
                                        title: 'Часниковий',
                                        price: 15
                                    }
                                ]}
                            />

                            <IngredientList
                                title=""
                                options={[
                                    {
                                        title: 'Капуста, огірок, помідор',
                                        price: 0,
                                        disabled: true
                                    },
                                ]}
                            />

                            <IngredientList
                                title="Ще щось?"
                                options={[
                                    {
                                        title: 'Кукурудза',
                                        price: 10
                                    },
                                    {
                                        title: 'Сир',
                                        price: 15
                                    },
                                    {
                                        title: 'Картопля фрі',
                                        price: 15
                                    },
                                    {
                                        title: 'Червона цибуля',
                                        price: 15
                                    },
                                    {
                                        title: 'Авокадо',
                                        price: 15
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-4">
                    <div className="flex size-full justify-center items-center">
                        <div className="block w-[210px]">
                            <div className="block pb-[258%] bg-[url('/src/images/Vertel.svg')] bg-cover"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>);
}