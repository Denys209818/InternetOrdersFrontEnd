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
import { AdditionalDishIngredient, Dish, DishIngredient, DishSize } from "../../redux/types/dishTypes";

type LoaderData = {
    data: Promise<ReceiptType[]>;
}

export const CatalogPage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [currentDish, setCurrentDish] = useState<Dish|null>(null);

    const sectionStyles = `
        ${Styles.sectionLargeStyle}
        ${Styles.sectionPhoneStyle}
        ${Styles.sectionSmallphoneStyle}
        ${Styles.sectionStyle}
        ${Styles.sectionTabletStyle}
    `;

    const { data } = useLoaderData() as LoaderData;
    const cardItems = cardData;

    const navigate = useNavigate();

    const onCardClickHandler = (el: CardType) => {
        setOpen(true);
        const dishSizes: DishSize[] = el.options.map(el => ({
            id: el.id,
            title: el.optionTitle,
            price: el.optionPrice
        } as unknown as DishSize));

        const additionalItems = el.ingredOptions.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price
        } as unknown as AdditionalDishIngredient));

        const ingreds: DishIngredient[] = el.defaultOptions.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price
        }));

        setCurrentDish({
            id: 1,
            title: el.title,
            sizePriceOptions: dishSizes,
            ingredientPriceOptions: ingreds,
            addIngredientPriceOptions: additionalItems,
            imageSrc: el.imageSrc,
        })
    };

    return (
        <main className="relative pt-[90px] bg-[#FFE9DE]">
            {open && currentDish && <CardModal dish={currentDish} close={() => setOpen(false)} />}

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
                    {(cardItems as unknown as CardType[]).map(el => (
                        <Card
                            key={el.imageSrc}
                            {...(el as CardType)}
                            onClickHandler={() => onCardClickHandler(el)}
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