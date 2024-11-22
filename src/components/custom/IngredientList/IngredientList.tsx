import { useState } from "react";
import { getRandomInt } from "../../../tools/randomFunc";
import CheckBox from "../CheckBox";
import { ReceiptProp } from "../ReceiptCreator/ReceiptCreator";
import React from "react";

export type IngredientListType = {
    title: string;
    options: ReceiptProp[];
    allowMultiple?: boolean;
    addToWish: (prop: ReceiptProp) => boolean;
};

export const IngredientList: React.FC<IngredientListType> = ({ title, options, allowMultiple = false, addToWish }) => {
    const [activeCheck, setActiveCheck] = useState<String>('');

    // useEffect(() =>  {
    //     if (allowMultiple) {
    //         setActiveCheck('');
    //     } else {
    //         if (options[0]) {
    //            setActiveCheck(options[0].id.toString());
    //         }
    //     }
    // }, [allowMultiple, options]);

    const setActiveCheckHandler = (id: number) => {
        const activeOption = options.find(el => el.id === id);
        const prevOption = options.find(el => el.id === parseInt(activeCheck.toString()));
        const idString = id.toString();

        if (activeOption?.disabled) {
            return;
        }

        if (allowMultiple) {
            let changed = true;

            if (activeOption) {
                changed = addToWish(activeOption);
            }

            if (changed) {
                if (activeCheck.includes(idString)) {
                    const ind = activeCheck.indexOf(`[${idString}]`);
    
                    setActiveCheck(prev => prev.slice(0, ind) + prev.slice(ind + 4));
                } else {
                    setActiveCheck(prev => prev + `[${idString}]`);
                }
            }
        } else {
            if (activeOption) {
                if (prevOption && idString !== prevOption.id.toString()) {
                    addToWish(prevOption);
                }
                
                addToWish(activeOption);
                setActiveCheck(prev => {
                    if (idString === prev) {
                        return '';
                    }

                    return idString;
                });
            }
        }
    };

    return (<div>
        {title && <h4 className="font-literata italic text-list">{title}</h4>}
        
        <ul className="flex flex-col gap-2 pt-2">
            {options.map(opt => (
                <li className="flex justify-between items-center" key={getRandomInt(1, 1000) + opt.price + opt.title}>
                    <div className="block py-2">
                        <p className={"font-lato text-paragraph " + (opt.disabled ? "text-[#525A63]" : "")}>{opt.title}</p>
                    </div>

                    <div className="flex gap-2">
                        <p className="block py-3 text-[#525A63] italic text-cardProp font-literata">
                            {opt.price > 0 ? `${opt.price} грн` : ''}
                        </p>

                        <CheckBox
                            disabled={opt.disabled}
                            active={(activeCheck.includes(opt.id.toString()) || opt.disabled === true)}
                            setActive={() => setActiveCheckHandler(opt.id)}
                        />
                    </div>
                </li>
            ))}
        </ul>
    </div>);
};