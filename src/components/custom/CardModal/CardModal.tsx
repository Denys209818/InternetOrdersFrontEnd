/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import * as Styles from '../../MainPage/styles';
import IngredientList from "../IngredientList";
import { getRandomInt } from "../../../tools/randomFunc";
import { IngredientListType } from "../IngredientList/IngredientList";
import { ReceiptProp } from "../ReceiptCreator/ReceiptCreator";
import Button from "../Button";

export type CardModalType = {
    close: () => void;
};

export const CardModal: React.FC<CardModalType> = ({ close }) => {
    const data: Omit<IngredientListType, 'addToWish'>[] = useMemo(() => [
        {
            title: "",
            allowMultiple: false,
            options: [
            {
                id: 1,
                title: "Велика",
                price: 50,
                isSize: true,
                disabled: false
            },
            {
                id: 2,
                title: "Маленька",
                price: 40,
                isSize: true,
                disabled: false
            }
            ]
        },
        {
            title: "Ще щось?",
            allowMultiple: true,
            options: [
                {
                    id: 11,
                    title: "Кукурудза",
                    price: 10,
                    isSize: false,
                    disabled: false
                },
                {
                    id: 12,
                    title: "Сир",
                    price: 15,
                    isSize: false,
                    disabled: false
                },
                {
                    id: 13,
                    title: "Картопля фрі",
                    price: 15,
                    isSize: false,
                    disabled: false
                }]
        }
    ], []);

    const [choosenProps, setChoosenProps] = useState<ReceiptProp[]>([]);
    const [size, setSize] = useState<ReceiptProp>({
        id: -1,
        title: 'Не визначено',
        price: 0,
    });

    const sectionStyles = `
        ${Styles.sectionLargeStyle}
    `;

    const addShawermaComponent = useCallback((prop: ReceiptProp) => {
        let isEdited = true;

        if (prop.isSize) {
            setSize(prev => {
                if  (prev.id === prop.id) {
                    return {
                        id: -1,
                        title: 'Не визначено',
                        price: 0,
                    };
                } else {
                    return prop;
                }
            });

            return isEdited;
        }

        setChoosenProps(prev => {
            const item = prev.find(el => el.id === prop.id);

            if (prev.length === 7 && !item) {
                isEdited = false;
                return prev;
            }
            
            if (item) {
                return prev.filter(el => el.id !== prop.id);
            } else {
                return [...prev, prop];
            }
        });

        return isEdited;
    }, []);

    const catalogCreator: IngredientListType[] = useMemo(() => {
        const catalogData:IngredientListType[] = [];

        for (const dataItem of data) {
            catalogData.push({
                ...dataItem,
                addToWish: addShawermaComponent
            });
        }

        return  catalogData;
    }, [addShawermaComponent, data]);

    const catalogItems = useMemo(() => catalogCreator.map(catItem => (
        <IngredientList
            key={catItem.title + getRandomInt(1, 1000)}
            {...catItem}
        />
    )), [catalogCreator])

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        }
    }, []);

    const topQuality = `${window.scrollY}px`;

    return createPortal(
        <dialog 
        style={{ top: topQuality }}
        className={`
            absolute
            z-50
            left-0
            grid
            grid-cols-12
            size-full
            bg-[#0000004D]
            ${sectionStyles}
        `}>
            <div className={`
                relative
                w-full
                col-span-12
                min-[1000px]:col-start-3
                min-[1000px]:col-end-13
                min-[1440px]:col-end-12
                min-[1440px]:col-start-2
            `}>
                <div className={`
                    absolute
                    grid
                    grid-cols-12
                    top-[50%]
                    left-[50%]
                    translate-x-[-50%]
                    translate-y-[-50%]
                    min-[1440px]:w-full
                    size-full
                    min-[1440px]:h-[580px]
                    min-[1440px]:px-8
                `}>
                    <div className={`
                        hidden
                        min-[744px]:block
                        col-span-12
                        min-[744px]:col-span-5
                        min-[1440px]:col-span-6
                    `}>
                        <div className="relative size-full">
                            <img
                                src="images/beaf.jpg"
                                alt="beaf"
                                className="absolute top-0 left-0 size-full object-cover"
                            />
                        </div>
                    </div>

                    <div className={`
                        block
                        col-span-12
                        min-[744px]:col-span-7
                        min-[1440px]:col-span-6
                        border-y-2
                        border-l-0
                        min-[1440px]:border-r-2
                        border-r-0
                        overflow-hidden
                    `}>
                        <div className="block size-full bg-white max-[743px]:overflow-auto max-[743px]:max-h-[100%]">
                            <div className="block h-[56px] w-full bg-[#FFB040] border-b-2">
                                <div className="flex h-full justify-between items-center pl-4">
                                    <h3 className={`
                                        block
                                        min-[744px]:text-cardModalMainTitle
                                        text-cardModalMainTitlePhone
                                        font-literata
                                    `}>Класична</h3>

                                    <div className="relative size-14 flex justify-center items-center p-4">
                                        <div
                                            className="absoulute size-full bg-close_square bg-no-repeat hover:cursor-pointer"
                                            onClick={() => close()}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <div className={`
                                relative
                                block
                                min-[744px]:hidden
                            `}>
                                <div className="relative w-full h-[351px]">
                                    <img
                                        src="images/beaf.jpg"
                                        alt="beaf"
                                        className="absolute top-0 left-0 size-full object-cover"
                                    />
                                </div> 
                            </div>

                            <div className={`
                                flex
                                flex-col
                                gap-6
                                py-6
                                px-5
                                min-[744px]:h-cardModal-height
                                min-[1440px]:max-h-[524px]
                                min-[744px]:overflow-auto
                            `}>
                                <div>
                                    <h4
                                        className={`
                                    font-literata
                                    italic
                                    text-cardPrice  
                                    text-[#525A63]  
                                    `}
                                    >
                                        Склад
                                    </h4>

                                    <ul className="flex flex-col pt-3 gap-2 list-none p-0">
                                        <li>
                                            <p className="font-lato text-[#525A63] text-cardItemInner">
                                                Капуста, огірок, помідор
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-lato text-[#525A63] text-cardItemInner">
                                                Класичний лаваш
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-lato text-[#525A63] text-cardItemInner">
                                                Курка
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-lato text-[#525A63] text-cardItemInner">
                                                Часниковий соус
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-lato text-[#525A63] text-cardItemInner">
                                                Сир
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex items-center gap-2">
                                    <p className="font-lato text-[#525A63] text-cardItemInner">
                                        КБЖУ всього продукту
                                    </p>

                                    <div className="relative block size-8">
                                        <div className="absolute block size-full bg-arrowDropDown bg-cover"></div>
                                    </div>
                                </div>

                                {catalogItems}

                                <div>
                                    <p className="flex gap-2 justify-end items-center">
                                        <span className="font-lato text-cardItemInner text-[#1F2933]">Ціна</span>
                                        <span className="font-literata text-cardPrice text-[#1F2933]">100 грн</span>
                                    </p>

                                    <div className="flex gap-2 pt-3">
                                        <Button
                                            widthFull
                                            title="Замовити"
                                            sizeBtn="huge"
                                            background="white"
                                        />
                                        
                                        <Button
                                            hasMaxWidth
                                            hasSmallerSize={false}
                                            image="cake"
                                            sizeBtn="small"
                                            background="black"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>,
        document.body
    );
};

