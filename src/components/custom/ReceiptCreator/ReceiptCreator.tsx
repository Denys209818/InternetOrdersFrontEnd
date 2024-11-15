import { useLayoutEffect, useState } from "react";
import { getRandomInt } from "../../../tools/randomFunc";
import Button from "../Button";

export type ReceiptProp = {
    id: number;
    title: string;
    price: number;
    disabled?: boolean;
    isSize?: boolean;
};

export type ReceiptType = {
    size: ReceiptProp;
    items: ReceiptProp[];
};

export const ReceiptCreator: React.FC<ReceiptType> = ({ size, items }) => {
    const [sum, setSum] = useState(0);

    useLayoutEffect(() => {
        setSum(items.reduce((prev, curr) => prev + curr.price, 0) + size.price);
    }, [items, size]);

    return (
    <div className="border-2 rounded-t-2xl">
        <div className="w-full py-3">
            <div className="mx-auto w-[206px]">
                <div className="relative size-full pb-[130%]">
                    <div className={`
                        absolute
                        top-0
                        left-0
                        size-full
                        bg-cover
                        bg-[url('/src/images/Cooker.svg')]
                        `}>

                    </div>
                </div>
            </div>
        </div>

        <div className="block border-t-2 bg-white p-4">
            <div className="flex flex-col gap-6">
                <h3 className="text-headerLessTablet font-literata italic">Мій рецепт</h3>

                <div className="flex gap-2 items-center">
                    <p className="block text-cardPrice font-literata italic text-[#1F2933]">Розмір:</p> 
                    <p className="flex justify-between items-center w-full">
                        <span className="block text-paragraph text-[#1F2933] font-lato">{size.title}</span>
                        <span className="block text-[#525A63] italic text-cardProp font-literata">{size.price} грн</span>
                    </p> 
                </div>

                <div className="block">
                    <p className="block text-cardPrice font-literata italic text-[#1F2933]">Обрані:</p> 

                    <p className="flex items-center justify-between pt-[14px]">
                        <span className="block text-paragraph text-[#525A63]">Капуста, огірок, помідор</span>
                        <span className="block text-input italic text-[#525A63]">Обов'язково</span>
                    </p>
                    
                    <ul className="list-none p-0 pl-2">
                        {items.map(item => (
                            <li className="pt-[14px]" key={getRandomInt(1, 100) + item.price + item.title}>
                                <p className="flex justify-between items-center w-full">
                                    <span className="block text-paragraph text-[#1F2933] font-lato">{item.title}</span>
                                    <span className="block text-[#525A63] italic text-cardProp font-literata">+{item.price}грн</span>
                                </p> 
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="block">
                    <p className={`
                        flex
                        items-center
                        gap-[2px]
                        px-3
                        py-1
                        text-[#525A63]
                        text-cook
                        font-lato
                        hover:cursor-pointer
                    `}>
                        <span className="block">КБЖУ всього продукту</span>

                        <span className="block p-1 size-8">
                            <span className="block size-full bg-[url('/src/images/Arrow_drop_down.svg')]"></span>
                        </span>
                    </p>
                </div>

                <div className="block">
                    <p className="flex justify-end items-end gap-2 w-full text-right">
                        <span className="block text-cook text-[#1F2933] font-lato">Разом: </span>
                        <span className="block text-cardPrice text-[#1F2933] font-literata italic">{sum}грн</span>
                    </p>
                </div>

                <div className="block">
                    <Button
                        title="Замовити"
                        type="button"
                        sizeBtn="huge"
                        background="black"
                    />

                    <p className="block pt-3 text-cook text-[#525A63] font-lato">
                        Максимальна кількість інгредієнтів  - 7
                    </p>
                </div>
            </div>
        </div>
    </div>);
}