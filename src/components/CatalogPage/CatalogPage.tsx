import { Await, useLoaderData, useNavigate } from "react-router-dom";
import Button from "../custom/Button";
import * as Styles from '../MainPage/styles';
import { Card, CardType } from "../custom/Card/Card";
import Receipt from "../custom/Receipt";
import { ReceiptType } from "../custom/Receipt/Receipt";
import { Suspense, useState } from "react";
import Loader from "../custom/Loader/Loader";
import cardData from './data/cardData.json';
import CardModal from "../custom/CardModal";

type LoaderData = {
    data: Promise<ReceiptType[]>;
}

export const CatalogPage: React.FC = () => {
    const [open, setOpen] = useState(false);

    const sectionStyles = `
        ${Styles.sectionLargeStyle}
        ${Styles.sectionPhoneStyle}
        ${Styles.sectionSmallphoneStyle}
        ${Styles.sectionStyle}
        ${Styles.sectionTabletStyle}
    `;

    const { data } = useLoaderData() as LoaderData;

    const navigate = useNavigate();

    return (
        <main className="relative pt-[90px] bg-[#FFE9DE]">
            {open && <CardModal close={() => setOpen(false)} />}

            <section className={`max-w-[1440px] m-auto ${sectionStyles}`}>
                <Button image="back" background="transparent" onClickHandler={() => navigate(-1)} />
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
                    {(cardData as unknown as CardType[]).map(el => (
                        <Card
                            key={el.imageSrc}
                            {...(el as CardType)}
                            onClickHandler={() => {
                                window.scrollTo(0, 0);
                                setOpen(true);
                            }}
                        />
                    ))}
                </div>
            </section>

            <section className={`bg-[#9CC2FF] w-full pt-12 pb-[88px] ${sectionStyles} min-[375px]:px-[12px] border-t-2`}>
                <Suspense fallback={<Loader />}>
                    <Await resolve={data}>
                        {(resolvedData) => (
                            <Receipt data={resolvedData.data} />
                        )}
                    </Await>
                </Suspense>
            </section>
        </main>
    );
}