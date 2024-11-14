import { getRandomInt } from "../../../tools/randomFunc";
import { ReceiptProp } from "../ReceiptCreator/ReceiptCreator";

export type IngredientListType = {
    title: string;
    options: ReceiptProp[];
};

export const IngredientList: React.FC<IngredientListType> = ({ title, options }) => {
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

                        <div className="block size-11 border-2"></div>
                    </div>
                </li>
            ))}
        </ul>
    </div>);
}