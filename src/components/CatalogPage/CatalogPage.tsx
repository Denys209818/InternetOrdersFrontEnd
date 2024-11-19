import { useNavigate } from "react-router-dom";
import Button from "../custom/Button";
import * as Styles from '../MainPage/styles';
import { Card } from "../custom/Card/Card";
import Receipt from "../custom/Receipt";

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
            <h1 className={`
                min-[1440px]:text-headerLess
                font-oswald
                text-headerLessMain
                `}>
                    Шаурма
            </h1>
        </section>

        <section className={`max-w-[1440px] pb-[66px] pt-12 m-auto ${sectionStyles}`}>
            <h3 className="text-headerLessTablet font-oswald uppercase font-medium">Обирай наші смаки</h3>

            <div className="grid min-[744px]:grid-cols-12 grid-cols-4 gap-x-4 gap-y-6 pt-3">
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

        <section className={`bg-[#9CC2FF] w-full pt-12 pb-[88px] ${sectionStyles} min-[375px]:px-[12px] border-t-2`}>
            <Receipt />
        </section>
    </main>);
}