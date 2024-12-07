import { useState } from "react";
import Button from "../Button";
import classNames from "classnames";

export type OrderRowType = {
    id: number;
    date: string;
    status: 'completed' | 'canceled';
    price: number;
};

export const OrderRow: React.FC<OrderRowType> = ({ id, date, status, price }) => {
    const [detailOpen, setDetailOpen] = useState(false);

    return (<>
        <tr>
            <td colSpan={1} className="min-[744px]:w-[320px] min-[1000px]:max-w-[320px] max-w-[275px] p-4 font-lato text-input border border-slate-300">
                <div
                    className="flex items-center hover:cursor-pointer"
                    onClick={() => setDetailOpen(prev => !prev)}
                >
                    <div className={classNames("block size-6 bg-arrowDropDown bg-cover", { "rotate-180" : detailOpen })}></div>

                    <p className='font-lato min-[744px]:text-btn text-orderId px-2 py-1 select-none'>
                        #{id}
                    </p>
                </div>

                {detailOpen && <div className="flex flex-col gap-6 pt-3">
                    <div className="flex flex-col gap-2">
                        <h4 className="font-literata italic text-cardProp text-[#525A63]">
                            Шаурма класична
                        </h4>

                        <p className="flex gap-1 text-[#525A63] italic">
                            <span className="font-lato min-[744px]:text-cook text-orderComponentSmall">
                                Без додатків
                            </span>

                            <span className="font-lato min-[744px]:text-cook text-orderComponentSmall">
                                1 шт.
                            </span>

                            <span className="pl-1 font-literata min-[744px]:text-cardProp text-orderComponentSmallBolder">
                                100 грн
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-literata italic min-[744px]:text-cardProp text-orderComponentSmallBolder text-[#525A63]">
                            Шаурма “Мій рецепт”
                        </h4>

                        <p className="font-lato min-[744px]:text-required text-orderComponentSmall text-[#525A63]">
                            Капуста, огірок, помідор
                        </p>

                        <p className="font-lato min-[744px]:text-required text-orderComponentSmall text-[#525A63]">
                            Класичний лаваш
                        </p>

                        <p className="font-lato min-[744px]:text-required text-orderComponentSmall text-[#525A63]">
                            Курка
                        </p>

                        <p className="font-lato min-[744px]:text-required text-orderComponentSmall text-[#525A63]">
                            Капуста, огірок, помідор
                        </p>

                        <p className="font-lato min-[744px]:text-required text-orderComponentSmall text-[#525A63]">
                            Сир
                        </p>

                        <p className="flex gap-1 text-[#525A63] italic">
                            <span className="font-lato min-[744px]:text-cook text-orderComponentSmall">
                                Без додатків
                            </span>

                            <span className="font-lato min-[744px]:text-cook text-orderComponentSmall">
                                1 шт.
                            </span>

                            <span className="pl-1 font-literata min-[744px]:text-cardProp text-orderComponentSmallBolder">
                                100 грн
                            </span>
                        </p>
                    </div>

                    <div className="block">
                        <Button
                            title="Повторити замовлення"
                            background="white"
                            sizeBtn="huge"
                        />
                    </div>
                </div>}
            </td>

            <td colSpan={1} className="align-top p-4 font-lato text-input border border-slate-300">
                <p className='font-lato min-[744px]:text-tdText text-tdTextSmall'>
                    {date}
                </p>
            </td>

            <td colSpan={1} className="align-top p-4 border border-slate-300">
                {status === 'completed' ? 
                (<p className={`
                    inline
                    font-lato
                    min-[744px]:text-tdText
                    text-tdTextSmall
                    min-[744px]:px-3
                    py-1
                    px-2
                    rounded-3xl
                    bg-[#BBEE8580]
                `}>
                    Виконано
                </p>)
                :
                (<p className={`
                    inline
                    font-lato
                    min-[744px]:text-tdText
                    text-tdTextSmall
                    min-[744px]:px-3
                    py-1
                    px-2
                    rounded-3xl
                    bg-[#FF808080]
                `}>
                    Скасовано
                </p>)
                }
            </td>

            <td colSpan={1} className="align-top p-4 border border-slate-300">
                <p className='font-lato min-[744px]:text-tdText text-tdTextSmall'>
                    {price} грн
                </p>
            </td>
        </tr>
    </>)
}