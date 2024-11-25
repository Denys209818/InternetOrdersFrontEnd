import { useEffect, useMemo, useState } from "react";
import CartItem from "../CartItem";
import { getRandomInt } from "../../../tools/randomFunc";
import CheckBox from "../CheckBox";
import { ReceiptProp } from "../ReceiptCreator/ReceiptCreator";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/tools/hooks";
import { ChangeCartItemAction, RemoveCartItemAction } from "../../../actions/CartActions";

export type CartModalType = {
    close: () => void;
    state: 'open' | 'close';
};

export const CartModal: React.FC<CartModalType> = ({ state, close }) => {
    const cartDishes = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    const [activeCheck, setActiveCheck] = useState<String>('');
    const [currentState, setCurrentState] = useState(state);
    const [additionsPrice, setAdditionsPrice] = useState(0);

    const isEmpty = cartDishes.length === 0;

    const navigate = useNavigate();

    const increaseCount = (id: string) => {
        dispatch(ChangeCartItemAction({ id, payload: 1}));
    }

    const decreaseCount = (id: string) => {
        dispatch(ChangeCartItemAction({ id, payload: -1}));
    }

    const removeItem = (id: string) => {
        dispatch(RemoveCartItemAction(id));
    }

    const totalPrice = useMemo(() => {
        const productPrice = cartDishes.reduce((prev, curr) => prev + curr.count * curr.price, 0);

        return productPrice + additionsPrice;
    }, [additionsPrice, cartDishes]);

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

    const emptyStyles = isEmpty ? 'justify-end pb-[10px]' : 'border-t border-[#CBD2D9]';

    return (
        <aside className="fixed z-50 top-0 left-0 size-full bg-[#0000008f]">
            <div className={`
                relative
                h-full
                left-[100%]
                duration-300
                ${animationStep[currentState]}
                translate-x-[-100%]
                min-[480px]:w-[480px]
                w-full
                min-[744px]:border-l-2
            `}>
                <div className="block h-[56px] w-full bg-[#FF8080] border-b">
                    <div className="flex h-full justify-between items-center pl-4">
                        <h3 className={`
                            block
                            uppercase
                            min-[744px]:text-cartMainTitle
                            text-cartMainTitlePhone
                            font-oswald
                        `}>Кошик</h3>

                        <div className="relative size-14 flex justify-center items-center p-4">
                            <div onClick={() => {
                                setCurrentState('close');
                                setTimeout(close, 450);
                            }} className="absoulute size-full bg-close_square bg-no-repeat hover:cursor-pointer"></div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-between w-full h-cart-height border-t bg-white">
                    {!isEmpty && <div className="flex flex-col max-h-cart-content-height overflow-y-auto gap-8 size-full py-6 px-4">
                        {cartDishes.map(item => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                imageUrl={item.imageSrc}
                                title={item.title}
                                price={item.price}
                                count={item.count}
                                additionalsCount={item.additionalCount}
                                increaseCount={() => increaseCount(item.id)}
                                decreaseCount={() => decreaseCount(item.id)}
                                removeItem={() => removeItem(item.id)}
                            />
                        ))}

                        <div className="flex flex-col gap-1 border-t border-[#CBD2D9]">
                            <p className="block pt-4 font-lato text-cartText">Ще щось? З цим часто замовляють:</p>

                            <ul className="flex flex-col gap-2 pt-2">
                                {options.map(opt => (
                                    <li className="flex justify-between items-center" key={getRandomInt(1, 1000) + opt.price + opt.title}>
                                        <div className="block py-2">
                                            <p className={`
                                                font-lato
                                                min-[744px]:text-paragraph
                                                text-paragraphPhone
                                            `}>{opt.title}</p>
                                        </div>
                                
                                        <div className="flex gap-2">
                                            <p className="block py-3 text-[#525A63] italic min-[744px]:text-cardProp text-cardPropPhone font-literata">
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
                    </div>}

                    {isEmpty && <div className="relative block size-full max-h-cart-content-height">
                        <div className={`
                            absolute
                            top-[50%]
                            left-[50%]
                            translate-x-[-50%]
                            translate-y-[-50%]
                            flex
                            flex-col
                            gap-2
                        `}>
                            <div className="block w-[160px] h-[100px] bg-plate mx-auto"></div>
                            <p className={`
                                block
                                text-[#CBD2D9]
                                font-lato
                                min-[744px]:text-paragraph
                                text-paragraphPhone
                                text-center
                            `}>Смаколиків немає</p>
                        </div>
                    </div>}

                    <div className={`flex flex-col h-[118px] px-4 pt-1 ${emptyStyles}`}>
                        {!isEmpty && <div className="flex justify-end items-center gap-2 w-full pb-3">
                            <p className="block font-lato text-[#1F2933] text-cartText">
                                До сплати:
                            </p>

                            <p className="block font-literata text-[#1F2933] text-cartSumText italic">
                                {totalPrice} грн
                            </p>
                        </div>}

                        <Button
                            sizeBtn="huge"
                            background="black"
                            title={isEmpty ? "Перейти до меню" : "Оформити замовлення"}
                            onClickHandler={() => {
                                setCurrentState('close');
                                setTimeout(close, 450);
                                
                                if (isEmpty) {
                                    navigate('/menu');
                                } else {
                                    navigate('/order');
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </aside>
    );
}