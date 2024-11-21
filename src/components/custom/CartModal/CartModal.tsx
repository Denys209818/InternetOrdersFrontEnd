import { useEffect, useMemo, useState } from "react";
import CartItem from "../CartItem";
import { getRandomInt } from "../../../tools/randomFunc";
import CheckBox from "../CheckBox";
import { ReceiptProp } from "../ReceiptCreator/ReceiptCreator";
import Button from "../Button";
import { CartItemType } from "../CartItem/CartItem";

export type CartModalType = {
    close: () => void;
    state: 'open' | 'close';
};

export const CartModal: React.FC<CartModalType> = ({ state, close }) => {
    const [activeCheck, setActiveCheck] = useState<String>('');
    const [currentState, setCurrentState] = useState(state);

    const increaseCount = (id: number) => {
        setCartItems(prev => {
            return prev.map(el => {
                if (el.id === id) {
                    return {
                        ...el,
                        count: el.count + 1
                    };
                }

                return el;
            });
        });
    }

    const decreaseCount = (id: number) => {
        setCartItems(prev => {
            return prev.map(el => {
                if (el.id === id) {
                    return {
                        ...el,
                        count: el.count - 1
                    };
                }

                return el;
            });
        });
    }

    const [cartItems, setCartItems] = useState<CartItemType[]>(
        [
            {
                id: 1,
                imageUrl:"images/classicial.jpg",
                price: 100,
                title:"Шаурма класична",
                count: 1,
                additionalsCount: 0,
                increaseCount: () => increaseCount(1),
                decreaseCount: () => decreaseCount(1),
            },
            {
                id: 2,
                imageUrl:"images/self-receipt.png",
                price: 100,
                title:"Мій рецепт",
                count: 1,
                additionalsCount: 5,
                increaseCount: () => increaseCount(2),
                decreaseCount: () => decreaseCount(2),
            },
        ]
    );

    const [additionsPrice, setAdditionsPrice] = useState(0);

    const totalPrice = useMemo(() => {
        const productPrice = cartItems.reduce((prev, curr) => prev + curr.count * curr.price, 0);

        return productPrice + additionsPrice;
    }, [cartItems, additionsPrice]);

    const options: Omit<Omit<ReceiptProp, "disabled">, "isSize">[] = [
        {
            id: 1,
            title: 'Pepsi 0.5 л.',
            price: 20,
        },
        {
            id: 2,
            title: 'Картопля фрі маленька',
            price: 35,
        },
    ];

    const setActiveCheckHandler = (id: number, price: number) => {
        const idString = id.toString();

        if (activeCheck.includes(idString)) {
            const ind = activeCheck.indexOf(`[${idString}]`);

            setAdditionsPrice(prev => prev - price);

            setActiveCheck(prev => prev.slice(0, ind) + prev.slice(ind + 4));
        } else {
            setAdditionsPrice(prev => prev + price);

            setActiveCheck(prev => prev + `[${idString}]`);
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        }
    }, []);

    const animationStep = {
        open: 'animate-moving',
        close: 'animate-closing',
    };

    return (
        <aside className="fixed z-50 top-0 left-0 size-full bg-[#0000008f]">
            <div className={`relative h-full left-[100%] duration-300 ${animationStep[currentState]} translate-x-[-100%] w-[480px] border-l-2`}>
                <div className="block h-[56px] w-full bg-[#FF8080] border-b">
                    <div className="flex h-full justify-between items-center pl-4">
                        <h3 className="block uppercase text-cartMainTitle font-oswald">Кошик</h3>

                        <div className="relative size-14 flex justify-center items-center p-4">
                            <div onClick={() => {
                                setCurrentState('close');
                                setTimeout(close, 450);
                            }} className="absoulute size-full bg-close_square bg-no-repeat hover:cursor-pointer"></div>
                        </div>
                    </div>
                </div>
                
                <div className="block w-full h-cart-height border-t bg-white">
                    <div className="flex flex-col max-h-cart-content-height overflow-y-auto gap-8 size-full py-6 px-4">
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                {...item}
                            />
                        ))}

                        <div className="flex flex-col gap-1 border-t border-[#CBD2D9]">
                            <p className="block pt-1 font-lato text-cartText">Ще щось? З цим часто замовляють:</p>

                            <ul className="flex flex-col gap-2 pt-2">
                                {options.map(opt => (
                                    <li className="flex justify-between items-center" key={getRandomInt(1, 1000) + opt.price + opt.title}>
                                        <div className="block py-2">
                                            <p className={"font-lato text-paragraph "}>{opt.title}</p>
                                        </div>
                                
                                        <div className="flex gap-2">
                                            <p className="block py-3 text-[#525A63] italic text-cardProp font-literata">
                                                {opt.price > 0 ? `${opt.price} грн` : ''}
                                            </p>
                                
                                            <CheckBox
                                                active={activeCheck.includes(opt.id.toString())}
                                                setActive={() => setActiveCheckHandler(opt.id, opt.price)}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="block h-[118px] px-4 pt-1 border-t">
                        <div className="flex justify-end items-center gap-2 w-full pb-3">
                            <p className="block font-lato text-[#1F2933] text-cartText">
                                До сплати:
                            </p>

                            <p className="block font-literata text-[#1F2933] text-cartSumText italic">
                                {totalPrice} грн
                            </p>
                        </div>

                        <Button sizeBtn="huge" background="black" title="Оформити замовлення" />
                    </div>
                </div>
            </div>
        </aside>
    );
}